import * as React from 'react'
import Query from 'react-apollo/Query'
import orderQuery from 'data/serverQueries/getOrder.graphql'
import payForOrder from 'data/serverQueries/payForOrder.graphql'
import checkoutCart from 'data/serverQueries/checkoutCart.graphql'
import { Order } from 'custom-typings/orderTypes'
import {
  getOrderQueryVariables,
  UserCreateInput,
  GroupCreateInput,
  checkoutCartMutationVariables,
  payForOrderMutationVariables
} from 'data/queries'
import Mutation from 'react-apollo/Mutation'
import { FetchResult } from 'apollo-link/lib/types'

type QueryResult = {
  order: Order
}

export type payForOrderType = {
  payForOrder: (
    amount: number,
    user: UserCreateInput,
    group?: GroupCreateInput
  ) => Promise<void | FetchResult<
    Record<string, QueryResult>,
    Record<string, any>
  >>
}
export interface OrderProvided extends QueryResult, payForOrderType {
  loading: boolean
  isInvitedFlow: boolean
}

export interface Props {
  children: (orderData: OrderProvided) => React.ReactNode
  orderId: string
}

class OrderQuery extends Query<QueryResult, getOrderQueryVariables> {}

class PayForOrderMutation extends Mutation<
  QueryResult,
  payForOrderMutationVariables
> {}

export default class OrderProvider extends React.Component<Props> {
  render() {
    const { children, orderId } = this.props

    return (
      <OrderQuery query={orderQuery} variables={{ id: orderId! }}>
        {({ loading, error, data, client }) => {
          const order = data!.order

          const providedData = { order, loading }
          const orderGroup = order ? order.group : undefined
          const isInvitedFlow = !!orderGroup && orderGroup["users"].length > 0

          return (
            <PayForOrderMutation mutation={payForOrder}>
              {(payForOrderAction, { loading, error }) => {
                const payForOrder = (
                  amount: number,
                  user: UserCreateInput,
                  group?: GroupCreateInput
                ) =>
                  payForOrderAction({
                    variables: { amount, user, group, orderId }
                  })

                const addItemProvidedData: any = {
                  ...providedData,
                  payForOrder,
                  checkoutCart,
                  isInvitedFlow
                }

                return children(addItemProvidedData)
              }}
            </PayForOrderMutation>
          )
        }}
      </OrderQuery>
    )
  }
}
