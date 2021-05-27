import * as React from 'react'
import {
  EventCartData,
  MultiTicketsOfferItem,
  EventOfferItem
} from 'custom-typings/offerTypes'
import { offerItemStyles } from './styles'
import { OfferItemQuantityAdjust } from './OfferItemQuantityAdjust'
import { addToCartType } from '../../../cart/CartProvider'

interface AdjustCtaProps {
  offerItem: MultiTicketsOfferItem
  setOfferItemData: (item: EventOfferItem, data?: EventCartData) => any
  offerItemCartData?: EventCartData[]
}

const MultiTicketAdjustCta: React.SFC<AdjustCtaProps & addToCartType> = ({
  offerItem,
  offerItemCartData,
  setOfferItemData,
  addToCart
}) => {
  return (
    <section className={offerItemStyles.adjustCtaContainerCss}>
      <article className="adjust-container">
        {offerItem.offerItems.map((item, index) => {
          return (
            <article key={item.id}>
              <div className={offerItemStyles.adjustContianer}>
                <div className={offerItemStyles.adjustTitle}>{`${
                  item.title
                } - $${item.startingPrice}`}</div>
                <OfferItemQuantityAdjust
                  key={item.id}
                  offerItem={item}
                  offerItemData={offerItemCartData && offerItemCartData[index]}
                  setOfferItemData={d => {
                    setOfferItemData(item, d)
                  }}
                />
              </div>
            </article>
          )
        })}
      </article>
      <button
        className={offerItemStyles.ctaCss}
        disabled={!offerItemCartData}
        onClick={() =>
          offerItemCartData &&
          offerItemCartData.map((cd, i) => {
            const { quantity, offerItemId, ...selectionData } = cd

            if (cd.quantity > 0) {
              setTimeout(function() {
                addToCart({
                  offerItemId,
                  quantity,
                  selectionData: JSON.stringify(selectionData)
                })
              }, 500 * i)
            }
          })
        }
      >
        Add to cart
      </button>
    </section>
  )
}

// var delay = (function() {
//   var timer = 0
//   return function(callback: any, ms: number) {
//     clearTimeout(timer)
//     timer = setTimeout(callback, ms)
//   }
// })()

export default MultiTicketAdjustCta
