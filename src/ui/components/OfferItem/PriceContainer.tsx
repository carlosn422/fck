import * as React from 'react'
import { offerItemStyles } from 'components/OfferItem/styles'
import { fonts, mediaQueries } from 'css/variables'
import { css } from 'react-emotion'
import { formatPrice } from '../../../cart/utils'

const priceCss = css`
  ${fonts.priceText};
  @media ${mediaQueries.bpAboveSinglePanelWidth} {
    margin-left: 0.375rem;
  }
`

const PriceContainer = (
  isOffer: boolean,
  startingPrice: number,
  title?: string
) => {
  return (
    <section className={offerItemStyles.priceCtaContainerCss}>
      {isOffer && startingPrice !== 0 ? (
        <span className={fonts.subText}>From </span>
      ) : (
        undefined
      )}
      {startingPrice === 0 ? (
        title && title.includes('Free Trial') ? (
          <span style={{ whiteSpace: 'nowrap' }}>Free</span>
        ) : (
          <>Complimentary</>
        )
      ) : (
        <div className={priceCss}>{formatPrice(startingPrice)}</div>
      )}
    </section>
  )
}

export default PriceContainer
