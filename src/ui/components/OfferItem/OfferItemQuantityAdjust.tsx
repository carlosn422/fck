import { QuantityAdjust } from 'components/Shared/QuantityAdjust'
import * as React from 'react'
import { colors } from 'css/variables'
import { css } from 'react-emotion'
import {
  OfferItemType,
  AnyOfferItem,
  AvailableCartData
} from 'custom-typings/offerTypes'
interface OfferItemQuantityAdjustProps<T> {
  offerItem: AnyOfferItem
  setOfferItemData: (data: AvailableCartData) => any
  offerItemData?: AvailableCartData
  className?: string
}

export const OfferItemQuantityAdjust: React.SFC<
  OfferItemQuantityAdjustProps<AvailableCartData>
> = ({ offerItem, setOfferItemData, offerItemData }) => {
  return (
    <QuantityAdjust
      onAdd={() => {
        setOfferItemData({
          offerItemId: offerItem.id,
          quantity: offerItemData ? offerItemData.quantity + 1 : 1
        })
      }}
      onRemove={() => {
        if (
          offerItemData &&
          offerItemData.quantity &&
          offerItemData.quantity > 0
        ) {
          setOfferItemData({
            offerItemId: offerItem.id,
            quantity: offerItemData.quantity - 1
          })
        }
      }}
      removeButtonDisabled={!offerItemData || !offerItemData.quantity}
      addButtonDisabled={false}
      quantity={offerItemData ? offerItemData.quantity : 0}
    />
  )
}
