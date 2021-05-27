import { LineItem, CartItem, LineItemType } from '.'
import { partition, sum } from 'lodash'
import { OfferListItem, Offer, OfferItem } from 'custom-typings/offerTypes'
import { currencySymbols } from './currency'

export const formatPrice = (price: number | string | undefined) => {
  const currency: string =
    window['currencyHack'] === 'GBP'
      ? window['currencyHack']
      : currencySymbols.USD
  const numPrice = typeof price === 'string' ? parseFloat(price) : price

  const language = window.navigator.language || 'en-US'

  try {
    const result =
      numPrice !== undefined
        ? new Intl.NumberFormat(language, {
            style: 'currency',
            currency: currency.toUpperCase()
          }).format(numPrice)
        : ''

    return result
  } catch (e) {
    const currencySymbol = currencySymbols[currency.toUpperCase()] || '$'
    return numPrice !== undefined
      ? currencySymbol + numPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      : ''
  }
}

function isOffer(listItem: OfferListItem) {
  return !!(listItem as Offer).items
}

export function partionOfferListItems(items: OfferListItem[]) {
  return partition(items, isOffer) as [Offer[], OfferItem[]]
}

export function* getOfferItems(offer: Offer): Iterable<OfferItem> {
  const [offers, offerItems] = partionOfferListItems(offer.items)
  yield* offerItems
  for (const o of offers) {
    yield* getOfferItems(o)
  }
}

export function* getOffers(offer: Offer): Iterable<Offer> {
  yield offer
  const [offers, offerItems] = partionOfferListItems(offer.items)
  for (const o of offers) {
    yield* getOffers(o)
  }
}

export function find<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean
) {
  for (const value of iterable) {
    if (predicate(value)) {
      return value
    }
  }
  return undefined
}

export function findOffer(root: Offer, predicate: (offer: Offer) => boolean) {
  return find(getOffers(root), predicate)
}

export function findOfferItem(
  root: Offer,
  predicate: (offerItem: OfferItem) => boolean
) {
  return find(getOfferItems(root), predicate)
}

export function findOfferPath(root: Offer, uri: string) {
  const offerWithUri = findOffer(root, o =>
    o.items.some(item => {
      const offer = isOffer(item) ? (item as Offer) : undefined
      return offer ? offer.uri === uri : false
    })
  )

  if (offerWithUri === undefined) {
    throw new Error(`Offer does not exist with uri: ${uri}`)
  } else {
    const parents = findParents(root, offerWithUri, [])
    return [offerWithUri].concat(parents)
  }
}

export function findParents(
  root: Offer,
  current: Offer,
  parents: Offer[]
): Offer[] {
  if (
    root === current ||
    root.addonOffer === current ||
    (root.items[0] as Offer).addonOffer === current
  ) {
    return parents
  } else {
    const findParent = items => {
      return items.some(i => i === current)
    }

    const parent = findOffer(
      root,
      o =>
        (o.addonOffer && findParent(o.addonOffer.items)) || findParent(o.items)
    )!

    return findParents(root, parent, parents.concat(parent))
  }
}
const calculateLineItemsFor = (type: LineItemType, cartItems: CartItem[]) => {
  const result = cartItems.length
    ? cartItems
        .map(item => {
          const feeItems = item.lineItems.filter(li => li.type === type)
          return feeItems.length > 0 ? feeItems[0].value : 0
        })
        .reduce((s, v) => v + s, 0)
    : 0

  return result
}

export const doCartFees = (cartItems: CartItem[]) =>
  calculateLineItemsFor(LineItemType.Fee, cartItems)

export const doCartTaxes = (cartItems: CartItem[]) =>
  calculateLineItemsFor(LineItemType.Tax, cartItems)

export const doCartTotal = (cartItems: CartItem[]) =>
  calculateLineItemsFor(LineItemType.Tax, cartItems) +
  calculateLineItemsFor(LineItemType.Fee, cartItems) +
  calculateLineItemsFor(LineItemType.Base, cartItems)

export const itemsCount = (cartItems: CartItem[]) =>
  cartItems.length
    ? cartItems.map(item => item.quantity).reduce((s, v) => v + s)
    : 0

export const doCartSubTotal = (cartItems: CartItem[]) =>
  cartItems.length
    ? cartItems
        .filter(item =>
          item.lineItems.filter(li => li.type === LineItemType.Base)
        )
        .map(item => item.lineItems[0].value)
        .reduce((s, v) => v + s, 0)
    : 0
export const calcAmountForReward = (
  rewardId: string,
  cartItems: CartItem[],
  rootOffer: Offer
) => {
  const offerWithReward = findOffer(rootOffer, offer =>
    offer.rewards ? offer.rewards.some(reward => reward.id === rewardId) : false
  )!

  const reward = offerWithReward.rewards!.find(
    reward => reward.id === rewardId
  )!

  const [_, offerItemsWithReward] = partionOfferListItems(offerWithReward.items)

  const rewardedCartItems = cartItems.filter(cartItem =>
    offerItemsWithReward.some(
      offerItem => cartItem.offerItem.cId === offerItem.id
    )
  )

  const rewardCount = sum(rewardedCartItems.map(cartItem => cartItem.quantity))

  return rewardCount
}
