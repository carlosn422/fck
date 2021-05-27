import {
  findOffer,
  partionOfferListItems,
  doCartTotal,
  doCartSubTotal,
  doCartFees,
  itemsCount,
  doCartTaxes,
  calcAmountForReward
} from './utils'
import { CartItem, LineItemType } from '.'
import { Offer } from 'custom-typings/offerTypes'
import { sum, memoize } from 'lodash'

export function createSelectors(rootOffer: Offer, cartItems: CartItem[]) {
  const getCartAmountForReward = memoize((rewardId: string) =>
    calcAmountForReward(rewardId, cartItems, rootOffer)
  )

  const getCartSubtotal = memoize(() => doCartSubTotal(cartItems))

  const getCartTotal = memoize(() => doCartTotal(cartItems))

  const getCartTaxes = memoize(() => doCartTaxes(cartItems))

  const getCartFees = memoize(() => doCartFees(cartItems))

  const getNumberOfItems = memoize(() => itemsCount(cartItems))

  return {
    getCartAmountForReward,
    getCartSubtotal,
    getCartTotal,
    getCartTaxes,
    getCartFees,
    getNumberOfItems
  }
}
