import {
  AnyOfferListItem,
  AnyOffer,
  AnyOfferItem
} from 'custom-typings/offerTypes'
import { min, max } from 'lodash'
import { PriceRange } from 'data/UserSelectionsStore'

export const isOffer = (item: AnyOfferListItem) => !!(item as AnyOffer).items

export const calcMinPrice = (items: AnyOfferListItem[]) => {
  return min(
    items.map(item => {
      if (isOffer(item)) {
        return calcMinPrice((item as AnyOffer).items)
      } else {
        return (item as AnyOfferItem).startingPrice
      }
    })
  )
}

export const calcMaxPrice = (items: AnyOfferListItem[]) => {
  return max(
    items.map(item => {
      if (isOffer(item)) {
        return calcMaxPrice((item as AnyOffer).items)
      } else {
        return (item as AnyOfferItem).startingPrice
      }
    })
  )
}

export const calcStartingPrice = (offerItem: AnyOfferListItem) =>
  isOffer(offerItem)
    ? calcMinPrice((offerItem as AnyOffer).items)
    : (offerItem as AnyOfferItem).startingPrice

export const doesItemFallWithinPriceRange = (
  item: AnyOfferListItem,
  priceRange: PriceRange
) => {
  const startingPrice = calcStartingPrice(item)
  const { lowerBound, upperBound } = priceRange
  if (lowerBound && upperBound) {
    return startingPrice >= lowerBound && startingPrice <= upperBound
  } else {
    return true
  }
}
