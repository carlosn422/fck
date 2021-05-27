import * as cuid from 'cuid'
import { CheckoutDefaults } from 'data/CheckoutStore'
import * as React from 'react'
import Query from 'react-apollo/Query'
import {
  Payment,
  SplitPay,
  SplitPayFriend
} from 'custom-typings/orderTypes'
import { replaceIn } from 'utils/array'
import paymentQuery from './clientQueries/paymentQuery.gql'

interface Response {
  payment: Payment
}
class PaymentQuery extends Query<Response, {}> {}
export interface PaymentProvidedData {
  payment: Payment
  updateSplitPay: (data: Partial<SplitPay>) => void
  removeFriend: (id: string) => void
  addFriend: () => void
  updateFriendData: (data: Partial<SplitPayFriend>) => void
  updatePayment: (paymentData: Partial<Payment>) => void
  amountOwed: number
  resetToDefault: () => void
}
interface Props {
  children: (providedData: PaymentProvidedData) => React.ReactNode
  cartTotal: number
}

const getFriendsWithEvenSplit = (
  data: Partial<SplitPay>,
  cartTotal: number,
  splitPay: SplitPay
) => {
  const friends = data.friends ? data.friends : splitPay.friends
  const splitAmount = cartTotal / (friends.length + 1)
  return friends.map(friend => {
    const newFriend = {
      ...friend,
      splitAmount
    }
    return newFriend
  })
}

const addFriend = (splitPay: SplitPay) => {
  const defaultFriend = CheckoutDefaults.defaults.payment.splitPay.friends[0]

  const newFriend = { ...defaultFriend, id: cuid() } as SplitPayFriend
  const newFriends = splitPay.friends.concat([newFriend])
  
  return { friends: newFriends }
}

const removeFriend = (id: string, splitPay: SplitPay) => {
  const newFriends = splitPay.friends.filter(friend => friend.id !== id)
  return { friends: newFriends }
}

const updateFriendData = (
  data: Partial<SplitPayFriend>,
  splitPay: SplitPay
) => {
  const newFriends = replaceIn(
    splitPay.friends,
    friend => friend.id === data.id,
    friendToUpdate => {
      const splitAmount =
        data.splitAmount !== undefined
          ? data.splitAmount
          : friendToUpdate.splitAmount

      return {
        ...friendToUpdate,
        ...data,
        splitAmount,
        __typename: 'SplitFriend'
      }
    }
  )
  return { friends: newFriends }
}

const updateSplitPay = (
  splitPay: SplitPay,
  cartTotal: number,
  data: Partial<SplitPay>,
  updatePayment
) => {
  const newFriends =
    (data.splitType && data.splitType === 'even') ||
    splitPay.splitType === 'even'
      ? getFriendsWithEvenSplit(data, cartTotal, splitPay)
      : data.friends
        ? data.friends
        : splitPay.friends
  const friendsAmount = newFriends.reduce(
    (amt, friend) => (friend.splitAmount ? friend.splitAmount : 0) + amt,
    0
  )
  const amountOwed = cartTotal - friendsAmount
  updatePayment({
    amountOwed,
    splitPay: {
      ...splitPay,
      ...data,
      friends: newFriends
    }
  })
}

export default class PaymentProvider extends React.Component<Props> {
  render() {
    const { children, cartTotal } = this.props
    return (
      <PaymentQuery query={paymentQuery}>
        {({ client, data, loading }) => {
          const payment = data!.payment
          const splitPay = payment.splitPay
          const amountOwed =
            payment &&
            payment.splitPay &&
            payment.splitPay.isSplitPay &&
            payment.amountOwed
              ? payment.amountOwed
              : cartTotal

          const updatePayment = (paymentData: Partial<Payment>) => {
            client.writeData({
              data: {
                payment: { ...data, ...paymentData, __typename: 'Payment' }
              }
            })
          }
          const resetToDefault = () => {
            client.writeData({
              data: {
                payment: CheckoutDefaults.defaults.payment
              }
            })
          }

          const updateSplitPayHelper = (data: Partial<SplitPay>) =>
            updateSplitPay(splitPay, cartTotal, data, updatePayment)

          const providedData = {
            payment,
            amountOwed,
            updatePayment,
            updateSplitPay: (data: Partial<SplitPay>) =>
              updateSplitPayHelper(data),
            removeFriend: (id: string) =>
              updateSplitPayHelper(removeFriend(id, splitPay)),
            addFriend: () => updateSplitPayHelper(addFriend(splitPay)),
            updateFriendData: (data: Partial<SplitPayFriend>) =>
              updateSplitPayHelper(updateFriendData(data, splitPay)),
            resetToDefault
          }
          return children(providedData)
        }}
      </PaymentQuery>
    )
  }
}
