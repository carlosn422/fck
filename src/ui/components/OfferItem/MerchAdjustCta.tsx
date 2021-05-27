import * as React from 'react'
import {
  MerchCartData,
  MerchOfferItem as IMerchOfferItem,
  MerchProduct
} from 'custom-typings/offerTypes'
import { offerItemStyles } from './styles'
import { Dropdown } from '../Shared/Dropdown'
import { OfferItemQuantityAdjust } from '../OfferItem/OfferItemQuantityAdjust'
import { CartItemFields } from '../../../cart'
import { addToCartType } from '../../../cart/CartProvider'

interface AdjustCtaProps {
  offerItem: IMerchOfferItem
  setOfferItemData: (data: MerchCartData) => any
  offerItemCartData?: MerchCartData
}

const MerchAdjustCta: React.SFC<any> = props => {
  const { offerItem, setOfferItemData, offerItemCartData, addToCart } = props

  const { productDetails } = offerItem
  return (
    <section className={offerItemStyles.adjustCtaContainerCss}>
      <article className="adjust-container">
        <OfferItemQuantityAdjust
          offerItem={offerItem}
          offerItemData={offerItemCartData}
          setOfferItemData={setOfferItemData}
        />

        {productDetails.sizes &&
          !!productDetails.sizes.length && (
            <div
              className={`size-container ${offerItemStyles.skuContainerCss}`}
            >
              <div className={offerItemStyles.skuTitleCss}>Size</div>
              <Dropdown
                collection={productDetails.sizes}
                selectedItem={
                  offerItemCartData ? offerItemCartData.size : undefined
                }
                onSelect={item =>
                  setOfferItemData({
                    offerItemId: offerItem.id,
                    size: item,
                    quantity: offerItemCartData ? offerItemCartData.quantity : 0
                  })
                }
                className={offerItemStyles.dropdownCss}
              />
            </div>
          )}
        {productDetails.colors &&
          !!productDetails.colors.length && (
            <div
              className={`color-container ${offerItemStyles.skuContainerCss}`}
            >
              <div className={offerItemStyles.skuTitleCss}>Color</div>
              <Dropdown
                collection={productDetails.colors}
                selectedItem={
                  offerItemCartData ? offerItemCartData.color : undefined
                }
                onSelect={item =>
                  setOfferItemData({
                    offerItemId: offerItem.id,
                    color: item,
                    quantity: offerItemCartData ? offerItemCartData.quantity : 0
                  })
                }
                className={offerItemStyles.dropdownCss}
              />
            </div>
          )}
      </article>
      <button
        className={offerItemStyles.ctaCss}
        disabled={!offerItemCartData || !offerItemCartData.quantity}
        onClick={() => {
          if (offerItemCartData && offerItemCartData.quantity > 0) {
            const { quantity, ...selectionData } = offerItemCartData
            addToCart({
              offerItemId: offerItem.id,
              quantity: offerItemCartData.quantity,
              selectionData: JSON.stringify(selectionData)
            })
            console.log('adding to cart... ', offerItem.id, offerItemCartData)
          }
        }}
      >
        Add to cart
      </button>
    </section>
  )
}

export default MerchAdjustCta
