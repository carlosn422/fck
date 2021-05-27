import * as React from 'react'

import { confirmationStyles } from './styles'
import { panelCss } from 'components/Panel/styles'

import Share from 'components/Share/Share'

import OfferProvider from 'data/OfferProvider'

import {
  clickOutsideWrapper,
  InjectedProps
} from 'components/Shared/ClickOutsideWrapper'
import withRoutes, { AddedProps } from 'router/withRoutes'
import { css } from 'react-emotion'
import { fonts, colors } from 'css/variables'
interface Props {
  orderId: string
  offerPageUri: string
  goToRootOffer: () => void
}

const continueShoppingCss = css`
  ${fonts.nav};
  margin: 0 0 2rem -0.75rem;
  display: inline-block;
  color: ${colors.brandColor};
`

const ConfirmationShare: React.SFC<Props> = ({
  orderId,
  goToRootOffer,
  offerPageUri
}) => {
  const { host, protocol } = window.location
  const shareUrl = `${protocol}//${host}/offer/${offerPageUri}/share/${orderId}`

  return (
    <OfferProvider>
      {({ offerPage }) => (
        <article className={panelCss.panelNoFooterScrollableContainer}>
          <div className={continueShoppingCss} onClick={goToRootOffer}>
            <div className={'backicon'} />
            Continue Shopping
          </div>
          <section
            className={confirmationStyles.sonyLuggageIcon}
            style={{
              background: `url(${
                offerPage.confirmationDetailsImage
              }) no-repeat center`,
              backgroundSize: 'contain'
            }}
          />
          <div className={confirmationStyles.grid}>
            <div className={confirmationStyles.title}>
              {offerPage.shareTitle}
            </div>
            <div className={confirmationStyles.description}>
              {offerPage.shareDetailsCopy}
            </div>

            <Share url={shareUrl} />

            <section
              className={confirmationStyles.progress}
              style={{
                background: `url(${offerPage.progressImage}) no-repeat center`,
                backgroundSize: 'contain'
              }}
            />
          </div>
        </article>
      )}
    </OfferProvider>
  )
}

export default ConfirmationShare
