import * as React from 'react'
import { cartItemStyles } from './styles'

import { CartItem } from '../../../cart'
import { OfferItem, MovieOfferItem } from 'custom-typings/offerTypes'

import TrashCan from '../../svg-icons/trashcan.svg'
import { formatPrice } from '../../../cart/utils'

import { typography } from 'css/variables'
import { css } from 'react-emotion'
interface Props {
  cartItem: CartItem
  offerItem: OfferItem
  shouldHideBorder?: boolean
  onRemoveItem?: (offerItemId: string) => any
}

const cartItemDetails = css`
  font-family: ${typography.fontSecondary};
  font-size: ${12 / 16}rem;
  color: #908f8f;
`

export const CartOfferItem: React.SFC<Props> = ({
  cartItem,
  offerItem,
  shouldHideBorder,
  onRemoveItem
}) => {
  const onRemove = () => onRemoveItem && onRemoveItem(offerItem.id)

  return (
    <article
      className={cartItemStyles.cartItemCss}
      style={{ borderBottom: shouldHideBorder ? `none` : `` }}
    >
      <section
        className={cartItemStyles.cartImageCss}
        style={{ backgroundImage: `url(${offerItem.thumbnailImage})` }}
      />

      <section className={cartItemStyles.offerContentCss}>
        <header className={cartItemStyles.cartOfferTitleCss}>
          {offerItem.title}
        </header>

        <div className={cartItemDetails}>
          {(offerItem as MovieOfferItem).detailCopy &&
            `${(offerItem as MovieOfferItem) &&
              (offerItem as MovieOfferItem).detailCopy}`}
        </div>
      </section>

      <section className={cartItemStyles.priceCtaContainerCss}>
        <div className={cartItemStyles.cartOfferQuantityPrice}>
          {cartItem.quantity}
        </div>
      </section>

      <section className={cartItemStyles.quantityContainerCss}>
        <div className={cartItemStyles.cartOfferQuantityPrice}>
          {formatPrice(offerItem.startingPrice * cartItem.quantity)}
        </div>
      </section>

      <section>
        {onRemoveItem && (
          <div className={cartItemStyles.remove}>
            <TrashCan
              className={cartItemStyles.removeIcon}
              onClick={onRemove}
            />
          </div>
        )}
      </section>
    </article>
  )
}
