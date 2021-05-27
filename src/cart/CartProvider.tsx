import { Cart, CartItem } from '.'
import * as React from 'react'
import Query from 'react-apollo/Query'
import cartQuery from 'data/serverQueries/getCart.graphql'
import addItemToCartMutation from 'data/serverQueries/addItemToCart.graphql'
import removeCartItemMutation from 'data/serverQueries/removeItemFromCart.graphql'
import checkoutCart from 'data/serverQueries/checkoutCart.graphql'
import { createSelectors } from './selectors';
import * as Cookies2 from 'js-cookie';
import Mutation from 'react-apollo/Mutation';
import  {
  AddCartItem,
  addItemToCartMutationVariables,
  removeItemFromCartMutationVariables,
  getCartQueryVariables,
  checkoutCartMutationVariables
} from 'data/clientQueries'
import { Order } from 'custom-typings/orderTypes';
import { FetchResult } from 'apollo-link/lib/types';

import OfferProvider from 'data/OfferProvider'


type Selectors = ReturnType<typeof createSelectors>
type QueryResult = {
  cart: Cart
}

type OrderQueryResult = {
  checkoutCart: Order
}

export type addToCartType = {
  addToCart: (data: AddCartItem) => void
}

export type removeFromCartType = {
  removeFromCart: (cartItemId: string) => void
}

export type checkoutCartType = {
  checkoutCart: () => Promise<void | FetchResult<
    Record<string, OrderQueryResult>,
    Record<string, any>
  >>
}

export interface CartState
  extends QueryResult,
    addToCartType,
    removeFromCartType,
    checkoutCartType {
  loading: boolean
  cartItems: CartItem[]
}

export type CartProvided = CartState & Selectors

export interface Props {
  children: (cartData: CartProvided) => React.ReactNode
}

class CartQuery extends Query<QueryResult, getCartQueryVariables> {}
class AddItemToCartMutation extends Mutation<
  QueryResult,
  addItemToCartMutationVariables
> {}

class RemoveCartItemMutation extends Mutation<
  QueryResult,
  removeItemFromCartMutationVariables
> {}

class CheckoutCartMutation extends Mutation<
  OrderQueryResult,
  checkoutCartMutationVariables
> {}

export default class CartProvider extends React.Component<Props> {
  render() {
    const { children } = this.props
    const cartId = Cookies2.get('cartId')!

    return (
      <OfferProvider>
        {({ offerPage }) => (
          <CartQuery query={cartQuery} variables={{ cId: cartId! }}>
            {({ loading, error, data }) => {
              const cart = data!.cart
              const cartItems = !loading && cart ? cart.items : []
              const selectors = createSelectors(offerPage.offer, cartItems)
              const providedData = { cart, ...selectors, loading, cartItems }

              return (
                <RemoveCartItemMutation mutation={removeCartItemMutation}>
                  {(removeCartAction, { loading, error }) => {
                    const removeFromCart = (cartItemId: string) =>
                      removeCartAction({
                        variables: { cartId, cartItemId }
                      })

                    return (
                      <CheckoutCartMutation mutation={checkoutCart}>
                        {(checkoutCartAction, { loading, error }) => {
                          const checkoutCart = () =>
                            checkoutCartAction({
                              variables: { cartId }
                            })

                          return (
                            <AddItemToCartMutation
                              mutation={addItemToCartMutation}
                            >
                              {(addToCartAction, { loading, error }) => {
                                const addToCart = (data: AddCartItem) =>
                                  addToCartAction({
                                    variables: { cartId, cartItem: data }
                                  })

                                const addItemProvidedData: any = {
                                  ...providedData,
                                  addToCart,
                                  removeFromCart,
                                  checkoutCart
                                }

                                return children(addItemProvidedData)
                              }}
                            </AddItemToCartMutation>
                          )
                        }}
                      </CheckoutCartMutation>
                    )
                  }}
                </RemoveCartItemMutation>
              )
            }}
          </CartQuery>
        )}
      </OfferProvider>
    )
  }
}
