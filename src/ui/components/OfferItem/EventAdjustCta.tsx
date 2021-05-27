import * as React from 'react'
import {
  EventCartData,
  EventOfferItem as IEventOfferItem
} from 'custom-typings/offerTypes'
import { offerItemStyles } from './styles'
import { OfferItemQuantityAdjust } from 'components/OfferItem/OfferItemQuantityAdjust'
import { CartItemFields } from '../../../cart'
import { addToCartType } from '../../../cart/CartProvider'

interface AdjustCtaProps {
  offerItem: IEventOfferItem
  setOfferItemData: (data: EventCartData) => any
  offerItemCartData?: EventCartData
}

const EventAdjustCta: React.SFC<any> = ({
  offerItem,
  offerItemCartData,
  setOfferItemData,
  addToCart
}) => {
  return (
    <section className={offerItemStyles.adjustCtaContainerCss}>
      {offerItem && !offerItem.title.includes('Free Trial') && (
        <article className="adjust-container">
          <OfferItemQuantityAdjust
            offerItem={offerItem}
            offerItemData={offerItemCartData}
            setOfferItemData={setOfferItemData}
          />
        </article>
      )}
      <button
        className={offerItemStyles.ctaCss}
        disabled={!offerItemCartData || !offerItemCartData.quantity}
        onClick={() => {
          if (offerItemCartData && offerItemCartData.quantity) {
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

export default EventAdjustCta
