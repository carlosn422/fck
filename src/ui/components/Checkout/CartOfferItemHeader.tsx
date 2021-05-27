import * as React from 'react'

import { cartItemHeaderStyles, cartItemStyles } from '../CartOfferItem/styles'

interface Props {
  showingRemove: boolean
}

const CartOfferItemHeader: React.SFC<Props> = ({ showingRemove }) => {
  return (
    <article className={cartItemHeaderStyles.headerItemCss}>
      <section className={cartItemHeaderStyles.image}>
        <div className={cartItemHeaderStyles.offerItemTitle}>ITEMS</div>
      </section>

      <section className={cartItemStyles.offerContentCss} />

      <section className={cartItemStyles.priceCtaContainerCss}>
        <div className={cartItemHeaderStyles.offerItemTitle}>QTY</div>
      </section>

      <section className={cartItemStyles.quantityContainerCss}>
        <div className={cartItemHeaderStyles.offerItemTitle}>AMOUNT</div>
      </section>

      <section>
        {showingRemove && <div className={cartItemHeaderStyles.removeIcon} />}
      </section>
    </article>
  )
}

export default CartOfferItemHeader
