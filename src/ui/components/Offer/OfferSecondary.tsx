import * as React from 'react'

import { css } from 'react-emotion'
import { mediaQueries, fonts, colors, panel } from 'css/variables'
import {
  AnyOffer,
  OfferPage,
  AnyOfferItem
} from 'custom-typings/offerTypes'
import Rewards from 'components/Rewards/Rewards'

import Crown from '../../svg-icons/crown.svg'

import OfferProvider from 'data/OfferProvider'

import { OfferItemType } from 'custom-typings/offerTypes'

interface SecondaryProps {
  offer: AnyOffer
  offerPage: OfferPage
  selectedOfferItem?: AnyOfferItem
  selectedAdditionalOfferItem?: AnyOfferItem
}

const offerSecondaryCss = css`
  height: 100%;
`

const offerDetailsCss = withRewards =>
  'offer-details ' +
  css`
    height: ${withRewards ? 'calc(100% - 5.6rem)' : '100%'};
    overflow: auto;
    overflow: overlay;
    border-top-left-radius: 0.75rem;
  `
const offerMedia =
  'media ' +
  css`
    width: 100%;
    height: 20rem;
    border-top-left-radius: 0.75rem;
    background-size: cover;
    background-position: center;
  `

const htmlDetailsCss = css`
  padding: 2rem;
`

const imageDetailCss = css`
  height: 35rem;
  margin: 0 3rem;
`

const titleContainer = css`
  padding: 2rem 2rem 0 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`

const crown = css`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${colors.brandColor};
  margin: 0 0.7rem 0.5rem 0;
`

const leadeboardTitle = css`
  ${fonts.mainHeading};
  font-size: 1.35rem;
  color: ${colors.brandColor};
`

let hackCheck = {}

const OfferSecondary: React.SFC<SecondaryProps> = ({
  offer,
  offerPage,
  selectedOfferItem,
  selectedAdditionalOfferItem
}) => {
  let media =
    selectedOfferItem !== undefined && selectedOfferItem.media
      ? selectedOfferItem.media
      : offer.media[0]
  const description =
    selectedOfferItem !== undefined &&
    selectedOfferItem.htmlDescription !== null &&
    selectedOfferItem.htmlDescription !== ''
      ? selectedOfferItem.htmlDescription!
      : offer.details

  if (
    selectedAdditionalOfferItem &&
    selectedOfferItem &&
    selectedAdditionalOfferItem.additionalMedia &&
    selectedAdditionalOfferItem.id === selectedOfferItem.id
  ) {
    media = selectedAdditionalOfferItem.additionalMedia
  }

  if (hackCheck !== offer) {
    hackCheck = offer
    media = offer.media[0]
  }

  const fnaticsChecks =
    offerPage.uri === 'fanatics-sfgiants-merch' ||
    offerPage.uri === 'fanatics-sfgiants-games' ||
    offerPage.uri === 'fanatics-bleach-merch'

  const thompsonCheck =
    offerPage.uri === 'thompson' ||
    offerPage.uri === 'thompson-hotels' ||
    offerPage.uri === 'mgm-hotels'

  return (
    <article className={offerSecondaryCss}>
      <section className={offerDetailsCss(offer.rewards)}>
        <div
          className={offerMedia}
          style={{ backgroundImage: `url(${media})` }}
        />
        {offer.type === OfferItemType.Mixed ||
        offer.uri === 'thompson-hotels' ||
        offer.uri === 'mgm-hotels' ? (
          <>
            <section className={titleContainer}>
              <Crown className={crown} />
              <div className={leadeboardTitle}>
                {offerPage.groupvizTitle
                  ? offerPage.groupvizTitle
                  : fnaticsChecks
                  ? `Who's buying`
                  : thompsonCheck
                  ? `Who's staying`
                  : `Who's going`}
              </div>
            </section>
            <div
              className={imageDetailCss}
              style={{
                background: `url(${offerPage.leaderboardImage})
              no-repeat center`,
                backgroundSize: 'contain'
              }}
            />
          </>
        ) : (
          <div
            className={htmlDetailsCss}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </section>
      {offer.rewards && <Rewards rewards={offer.rewards} />}
    </article>
  )
}

export default OfferSecondary
