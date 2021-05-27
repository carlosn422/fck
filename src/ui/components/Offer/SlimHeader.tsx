import * as React from 'react'

import { css } from 'react-emotion'
import { mediaQueries, fonts, colors, panel } from 'css/variables'
import { AnyOffer } from 'custom-typings/offerTypes'
import CartButton from 'components/CartButton/CartButton'

interface SlimHeaderProps {
  offer: AnyOffer
  numItemsInCart: number
}
const offerMediaContainerCss = css`
  position: absolute;
  width: 100%;
`

const offerMediaCss =
  'media ' +
  css`
    width: 100%;
    height: 12rem;
    border-top-left-radius: 0.75rem;
  `
const overlayCss = css`
  width: 100%;
  height: 12rem;
  position: absolute;
  background: rgba(0, 0, 0, 0.25);
`

const cartIconCss = css`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`
const SlimHeader: React.SFC<SlimHeaderProps> = ({ offer, numItemsInCart }) => {
  return (
    <article className={offerMediaContainerCss}>
      <div className={overlayCss} />
      <div
        className={offerMediaCss}
        style={{
          background: `url(${offer.media[0]}) no-repeat center`,
          backgroundSize: 'cover'
        }}
      />
      <CartButton
        numberOfItems={numItemsInCart}
        fill={'white'}
        className={cartIconCss}
      />
    </article>
  )
}

export default SlimHeader
