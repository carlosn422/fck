import * as React from 'react'
import Query from 'react-apollo/Query'

import currentOrderQuery from './clientQueries/currentOrderQuery.gql'
import paymentQuery from './clientQueries/paymentQuery.gql'
import { Payment, CurrentOrder } from 'custom-typings/orderTypes'
import * as cuid from 'cuid'
interface Defaults {
  defaults: {
    payment: Payment
    currentOrder: CurrentOrder
  }
}
export const CheckoutDefaults: Defaults = {
  defaults: {
    payment: {
      purchaserName: '',
      amountOwed: 0,
      stripeToken: '',
      splitPay: {
        isSplitPay: false,
        splitType: 'even',
        friends: [
          {
            id: cuid(),
            name: '',
            phone: '',
            email: '',
            splitAmount: 0,
            __typename: 'SplitFriend'
          }
        ],
        __typename: 'SplitPay'
      },
      __typename: 'Payment'
    },
    currentOrder: {
      address: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      groupName: '',
      __typename: 'CurrentOrder'
    }
  }
}
