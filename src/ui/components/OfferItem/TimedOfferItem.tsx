import * as React from 'react'
import {
  TimedOfferItem as ITimedOfferItem,
  TimedOfferListItem,
  TimedOffer
} from 'custom-typings/offerTypes'
import { offerItemStyles } from './styles'
import { calcStartingPrice, isOffer } from 'components/Offer/helpers'

import Facepile from '../Facepile/Facepile'
import { images } from '../Facepile/sampleData'
import PriceContainer from 'components/OfferItem/PriceContainer'

interface TimedOfferItemProps {
  offerItem: TimedOfferListItem
  className?: string
  onSelectOffer: () => any
  showDemoData: boolean
  timedAdjustCta?: JSX.Element
}

/** @component */

const TimedOfferItem: React.SFC<TimedOfferItemProps> = ({
  offerItem,
  className,
  showDemoData,
  onSelectOffer,
  timedAdjustCta
}) => {
  const startingPrice = calcStartingPrice(offerItem)
  const rewardCopy = (offerItem as TimedOffer).rewardCopy
  const description = offerItem.description
  // add location stuff, or stars, or something else ?? How do I know UI requirements of different levels in heirarchy?
  return (
    <article
      className={`${offerItemStyles.offerItemContainerCss} ${offerItem.type} ${
        className ? className : ''
      }`}
      onClick={() => onSelectOffer()}
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
          <div className="offer-description">{description}</div>

          {rewardCopy ? (
            <div className={offerItemStyles.offerItemRewardCss}>
              {rewardCopy}
            </div>
          ) : (
            undefined
          )}
          {showDemoData ? (
            <>
              <div className={offerItemStyles.inventoryLeft}>Only 5 left</div>
              <Facepile images={images} />
            </>
          ) : (
            undefined
          )}
        </section>

        {PriceContainer(isOffer(offerItem), startingPrice)}
      </section>
      {timedAdjustCta}
    </article>
  )
}

export default TimedOfferItem
