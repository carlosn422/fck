import * as React from 'react'
import {
  EventOfferListItem,
  EventOfferItem as IEventOfferItem,
  EventOffer
} from 'custom-typings/offerTypes'
import { offerItemStyles } from './styles'

import PriceContainer from 'components/OfferItem/PriceContainer'
import { calcStartingPrice, isOffer } from 'components/Offer/helpers'


interface MultiTicketsItemProps {
  offerItem: EventOfferListItem
  className?: string
  onSelectOffer: () => any
  onAdditionalMediaSelect: () => any
  eventAdjustCta?: JSX.Element
}

/** @component */

const EventOfferItem: React.SFC<MultiTicketsItemProps> = ({
  offerItem,
  className,
  onSelectOffer,
  eventAdjustCta,
  onAdditionalMediaSelect
}) => {
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
          <div className="offer-item-description">{offerItem.description}</div>
          {rewardCopy ? (
            <div className={offerItemStyles.offerItemRewardCss}>
              {rewardCopy}
            </div>
          ) : (
            undefined
          )}
        </section>
      </section>
      {eventAdjustCta}
    </article>
  )
}

export default EventOfferItem
