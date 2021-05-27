import * as React from 'react'
import {
  TimedCartData,
  TimedOfferItem as ITimedOfferItem
} from 'custom-typings/offerTypes'
import { offerItemStyles } from './styles'
import { OfferItemQuantityAdjust } from 'components/OfferItem/OfferItemQuantityAdjust'
import { CartItemFields } from '../../../cart'
import { addToCartType } from '../../../cart/CartProvider'
import { TimedUserSelections } from 'data/TimedUserSelectionsProvider'

interface AdjustCtaProps {
  offerItem: ITimedOfferItem

  userSelection: TimedUserSelections
  setOfferItemData: (data: TimedCartData) => any
  offerItemCartData?: TimedCartData
}

const TimedAdjustCta: React.SFC<any> = ({
  offerItem,
  userSelection,
  offerItemCartData,
  setOfferItemData,
  addToCart
}) => {
  return (
    <section className={offerItemStyles.adjustCtaContainerCss}>
      <article className="adjust-container">
        <OfferItemQuantityAdjust
          offerItem={offerItem}
          offerItemData={offerItemCartData}
          setOfferItemData={setOfferItemData}
        />
      </article>
      <button
        className={offerItemStyles.ctaCss}
        disabled={
          !offerItemCartData ||
          !offerItemCartData.quantity ||
          !userSelection.chosenTime.selectedTimeSlot
        }
        onClick={() => {
          if (
            offerItemCartData &&
            offerItemCartData.quantity &&
            userSelection.chosenTime.selectedTimeSlot
          ) {
            const {
              quantity,
              offerItemId,
              ...selectionData
            } = offerItemCartData
            addToCart({
              offerItemId,
              quantity,
              selectionData: JSON.stringify(selectionData)
            })
          }
        }}
      >
        Add to cart
      </button>
    </section>
  )
}

export default TimedAdjustCta
