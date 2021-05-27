import * as React from 'react'
import { colors, fonts } from 'css/variables'
import { css } from 'react-emotion'
import {
  OfferItemType,
  MerchDetails,
  MerchCartData,
  MerchOfferItem as IMerchOfferItem,
  MerchOffer,
  MerchOfferListItem,
  Offer
} from 'custom-typings/offerTypes'
import { secondaryButton } from 'css/buttons'
import { offerItemStyles } from './styles'
import MerchAdjustCta from 'components/OfferItem/MerchAdjustCta'
import { calcStartingPrice, isOffer } from 'components/Offer/helpers'
import { CartItemFields } from '../../../cart'
import PriceContainer from 'components/OfferItem/PriceContainer'
import { addToCartType } from '../../../cart/CartProvider'

import Facepile from '../Facepile/Facepile'
import { images } from '../Facepile/sampleData'

interface MerchOfferItemProps {
  offerItem: MerchOfferListItem
  className?: string
  onSelectOffer: () => any
  merchAdjustCta?: JSX.Element
  showDemoData: boolean
}

interface MerchOfferItemState {}

/** @component */

const MerchOfferItem: React.SFC<MerchOfferItemProps> = ({
  offerItem,
  className,
  showDemoData,
  onSelectOffer,
  merchAdjustCta
}) => {
  const startingPrice = calcStartingPrice(offerItem)
  const rewardCopy = (offerItem as MerchOffer).rewardCopy

  return (
    <article
      className={`${offerItemStyles.offerItemContainerCss} ${offerItem.type} ${
        className ? className : ''
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
          <div className="offer-description">{offerItem.description}</div>
          {rewardCopy ? (
            <div className="offer-reward-description">{rewardCopy}</div>
          ) : (
            undefined
          )}
          {showDemoData && (
            <>
              <Facepile images={images} />
              <div className={offerItemStyles.facepileText}>Most popular</div>
            </>
          )}
          <div className={offerItemStyles.inventoryLeft}>
            {offerItem.additionalDescription || ``}
          </div>
        </section>

        {PriceContainer(isOffer(offerItem), startingPrice)}
      </section>
      {merchAdjustCta}
    </article>
  )
}
export default MerchOfferItem
