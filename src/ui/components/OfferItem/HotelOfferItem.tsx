import * as React from 'react'
import { colors, fonts } from 'css/variables'
import { css } from 'react-emotion'
import {
  OfferItemType,
  HotelOfferItem as IHotelOfferItem,
  HotelOfferListItem,
  HotelOffer
} from 'custom-typings/offerTypes'
import { QuantityAdjust } from 'components/Shared/QuantityAdjust'
import { offerItemStyles } from './styles'
import { calcStartingPrice, isOffer } from 'components/Offer/helpers'

import PriceContainer from 'components/OfferItem/PriceContainer'
import { addToCartType } from '../../../cart/CartProvider'
import { HotelUserSelections } from 'data/HotelUserSelectionsProvider'
import MediaQuery from 'react-responsive'

import Facepile from '../Facepile/Facepile'
import { images } from '../Facepile/sampleData'
import { offer } from 'data/exampleData/thompson'

interface HotelOfferItemProps {
  offerItem: HotelOfferListItem
  className?: string
  showDemoData: boolean
  onSelectOffer: () => any
  ctaContainer?: JSX.Element
}

interface AdjustCtaProps {
  offerItem: IHotelOfferItem
  userSelections: HotelUserSelections
}

export const CtaContainer: React.SFC<AdjustCtaProps & addToCartType> = ({
  offerItem,
  userSelections,
  addToCart
}) => {
  return (
    <section className={offerItemStyles.adjustCtaContainerCss}>
      <button
        className={offerItemStyles.ctaCss}
        disabled={
          !userSelections.travelDates.startDate ||
          !userSelections.travelDates.endDate ||
          !userSelections.roomPreferences.numRooms
        }
        onClick={() => {
          if (userSelections.roomPreferences.numRooms > 0) {
            addToCart({
              quantity: 1,
              offerItemId: offerItem.id,
              selectionData: JSON.stringify(userSelections)
            })
          }
        }}
      >
        Add to cart
      </button>
    </section>
  )
}

/** @component */

const HotelOfferItem: React.SFC<HotelOfferItemProps> = ({
  offerItem,
  onSelectOffer,
  showDemoData,
  ctaContainer,
  ...props
}) => {
  const rewardCopy = (offerItem as HotelOffer).rewardCopy
  const description = isOffer(offerItem)
    ? (offerItem as HotelOffer).address
    : offerItem.description

  const startingPrice = (offerItem as HotelOfferListItem).startingPrice
    ? (offerItem as HotelOfferListItem).startingPrice : calcStartingPrice(offerItem)

  // add location stuff, or stars, or something else ?? How do I know UI requirements of different levels in heirarchy?
  return (
    <article
      className={`${offerItemStyles.offerItemContainerCss} ${offerItem.type} ${
        props.className ? props.className : ''
        }`}
      onClick={onSelectOffer}
    >
      <section className={offerItemStyles.offerItemCss}>
        <section
          className={offerItemStyles.offerImageCss}
          style={{ backgroundImage: `url(${offerItem.thumbnailImage})` }}
        />

        <section className={offerItemStyles.offerContentCss}>
          <header
            className={`offer-title ${offerItemStyles.offerItemTitleCss}`}
          >
            {offerItem.title}
          </header>
          <div className="offer-description">
            {description.length > 1 ? description : offerItem.description}
          </div>

          {rewardCopy && (
            <div className={offerItemStyles.offerItemRewardCss}>
              {rewardCopy}
            </div>
          )}

          {showDemoData && (
            <>
              <div className={offerItemStyles.inventoryLeft}>
                In High Demand
              </div>
              <Facepile images={images} />
            </>
          )}
        </section>

        {PriceContainer(isOffer(offerItem), startingPrice)}
      </section>
      {ctaContainer}
    </article>
  )
}

export default HotelOfferItem
