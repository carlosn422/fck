import * as React from 'react'
import { css } from 'react-emotion'
import {
  OfferItemType,
  EventOfferListItem,
  EventCartData,
  EventOfferItem as IEventOfferItem,
  EventOffer
} from 'custom-typings/offerTypes'
import { offerItemStyles } from './styles'

import EventAdjustCta from 'components/OfferItem/EventAdjustCta'
import { calcStartingPrice, isOffer } from 'components/Offer/helpers'
import { CartItemFields } from '../../../cart'
import { fonts } from 'css/variables'
import PriceContainer from 'components/OfferItem/PriceContainer'
import { addToCartType } from '../../../cart/CartProvider'

const cellDetails = css`
  ${fonts.subText};
  display: flex;
  margin-bottom: 0.5rem;
  line-height: 1.2rem;
  :last-of-type: {
    margin-bottom: 0;
  }
`

interface EventOfferItemProps {
  offerItem: EventOfferListItem
  className?: string
  onSelectOffer: () => any
  onAdditionalMediaSelect: () => any
  eventAdjustCta?: JSX.Element
}

/** @component */

const EventOfferItem: React.SFC<EventOfferItemProps> = ({
  offerItem,
  className,
  onSelectOffer,
  eventAdjustCta,
  onAdditionalMediaSelect
}) => {
  const startingPrice = calcStartingPrice(offerItem)

  const rewardCopy = (offerItem as EventOffer).rewardCopy
  const additionalMedia = (offerItem as IEventOfferItem).additionalMedia

  return (
    <article
      className={`${offerItemStyles.offerItemContainerCss} ${offerItem.type} ${
        className ? className : ''
      }`}
      onClick={() => onSelectOffer()}
    >
      <section className={offerItemStyles.offerItemCss}>
        {additionalMedia && eventAdjustCta ? (
          <section className={offerItemStyles.offerImageCss}>
            <div
              className={offerItemStyles.offerImageCss}
              style={{ backgroundImage: `url(${offerItem.thumbnailImage})` }}
            />
            <a
              className={offerItemStyles.seatmapCss}
              onClick={() => onAdditionalMediaSelect()}
            >
              Seatmap
            </a>
          </section>
        ) : (
          <div
            className={offerItemStyles.offerImageCss}
            style={{ backgroundImage: `url(${offerItem.thumbnailImage})` }}
          />
        )}
        <section className={offerItemStyles.offerContentCss}>
          <header className={offerItemStyles.offerItemTitleCss}>
            {offerItem.title}
          </header>
          <div className={cellDetails}>{offerItem.description}</div>
          {rewardCopy ? (
            <div className={offerItemStyles.offerItemRewardCss}>
              {rewardCopy}
            </div>
          ) : (
            undefined
          )}
        </section>
        {PriceContainer(isOffer(offerItem), startingPrice, offerItem.title)}
      </section>
      {eventAdjustCta}
    </article>
  )
}

export default EventOfferItem
