export enum OfferItemType {
  Event = 'event',
  MultipleEvent = 'multiple_event',
  ManyOptions = 'many_options',
  Hotel = 'hotel',
  Merch = 'merch',
  Timed = 'timed',
  Mixed = 'mixed'
}

export interface OfferPage {
  id: string
  isScrollable?: boolean
  brandColor: string
  location?: string
  startDate?: string
  endDate?: string
  offer: AnyOffer
  currency?: string
  uri: string
  groupvizTitle?: string
  isNeedToShowTax: boolean
  backgroundImage: string
  leaderboardImage: string
  progressImage: string
  confirmationDetailsImage: string
  orderSummaryTitle: string
  shareDetailsCopy: string
  confirmationTitleCopy: string
  shareOrderTitle: string
  shareTitle: string
  treeTitle: string
  emptyCheckoutTitle: string
  emptyCheckoutDescription: string
  showBirthday?: boolean
  isSony?: boolean
  shareCopy?: string
}

export interface Offer {
  id: string
  title: string
  uri?: string
  description: string
  items: OfferListItem[]
  media: string[] // make it different media types later
  details: string // html details
  thumbnailImage: string
  rewards?: Reward[]
  type: OfferItemType
  addonOffer?: AnyOffer
  rewardCopy?: string
  additionalDescription?: string
}

export interface OfferItem {
  id: string
  parentId: string
  title: string
  thumbnailImage: string
  media?: string
  additionalMedia?: string
  description: string
  type: OfferItemType
  startingPrice: number
  htmlDescription?: string
  additionalDescription?: string
}

export type OfferListItem = OfferItem | Offer

export interface HotelOffer extends Offer {
  type: OfferItemType.Hotel
  address: string // temporary
  startingPrice?: number
  items: HotelOfferListItem[]
}
export type HotelOfferListItem = HotelOfferItem | HotelOffer

export interface EventOffer extends Offer {
  type: OfferItemType.Event
  venue: string // temporary
  startDate: string
  endDate: string
  items: EventOfferListItem[]
}
export type EventOfferListItem =
  | EventOfferItem
  | EventOffer
  | MultiTicketsOfferItem
  | ManyTicketsOfferItem

export interface MerchOffer extends Offer {
  type: OfferItemType.Merch
  items: MerchOfferListItem[]
}

export interface TimedOffer extends Offer {
  type: OfferItemType.Timed
  items: TimedOfferListItem[]
}

export type TimedOfferListItem = TimedOfferItem | TimedOffer
export type MerchOfferListItem = MerchOfferItem | MerchOffer
export interface MixedOffer extends Offer {
  type: OfferItemType.Mixed
  items: AnyOfferListItem[]
}
export type AnyOfferListItem =
  | MerchOfferListItem
  | HotelOfferListItem
  | TimedOfferListItem
  | EventOfferListItem
  | MixedOffer

export type AnyOffer =
  | MerchOffer
  | HotelOffer
  | EventOffer
  | MixedOffer
  | TimedOffer
export interface MerchProduct {
  value: string
  label: string
}
export interface MerchDetails {
  colors?: MerchProduct[]
  sizes?: MerchProduct[]
}

export interface HotelOfferItem extends OfferItem {
  type: OfferItemType.Hotel
}

export interface MultiTicketsOfferItem extends OfferItem {
  offerItems: EventOfferItem[]
  type: OfferItemType.MultipleEvent
}
export interface ManyTicketsOfferItem extends OfferItem {
  offerItems: EventOfferItem[]
  type: OfferItemType.ManyOptions
}

export interface MerchOfferItem extends OfferItem {
  type: OfferItemType.Merch
  productDetails: MerchDetails
}

export interface EventOfferItem extends OfferItem {
  type: OfferItemType.Event
}

export interface MovieOfferItem extends EventOfferItem {
  detailCopy: string
  detailTitleCopy: string
}

export interface TimedOfferItem extends OfferItem {
  type: OfferItemType.Timed
}

export interface CartData {
  offerItemId: string
  quantity: number
}
export interface MerchCartData extends CartData {
  size?: MerchProduct
  color?: MerchProduct
}

export interface HotelCartData extends CartData {
  adults: number
  children: number
}

export interface EventCartData extends CartData {}
export interface TimedCartData extends CartData {}

export type AvailableCartData =
  | MerchCartData
  | HotelCartData
  | EventCartData
  | TimedCartData
export type AnyOfferItem =
  | MerchOfferItem
  | HotelOfferItem
  | EventOfferItem
  | TimedOfferItem
  | MultiTicketsOfferItem

export interface Reward {
  icon?: string
  id: string
  threshold: number
  thresholdCopy: string
  name: string
  description: string
}
