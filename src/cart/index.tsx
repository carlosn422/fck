import { OfferItem } from 'custom-typings/offerTypes'

export interface CartItemFields {
  id: string
  offerItem: { cId: string; startingPrice: number }
  quantity: number
  selectionData: any
}

export interface CartItem extends CartItemFields {
  lineItems: LineItem[]
  __typename: 'CartItem'
}

export enum LineItemType {
  Base = 'Base',
  Tax = 'Tax',
  Fee = 'Fee'
}

export interface LineItem {
  __typename: 'LineItem'
  type: LineItemType
  value: number
}

export interface CartItemPrice {
  lineItems: LineItem[]
}

export interface Cart {
  __typename: 'Cart'
  cId: string
  items: CartItem[]
}

export { default as CartProvider } from './CartProvider'
