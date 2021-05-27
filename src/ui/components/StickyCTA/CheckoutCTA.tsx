import * as React from 'react'
import { primaryButton } from 'css/buttons'
import { styles } from 'components/StickyCTA/styles'
import { fonts } from 'css/variables'
import { formatPrice } from '../../../cart/utils'
import withRoutes, { AddedProps } from 'router/withRoutes'
import { offer, Fuc } from '../../states'
import { omit } from 'lodash'

interface Props {
  numItems: number
  isRootOffer: boolean
  cartSubtotal: number
  title: string
  description: string
  containsAddons?: boolean
  goToAddons?: () => any
  goToCheckout: () => any
  gotoRootOffer: () => any
}

const CheckoutCTA: React.SFC<Props> = ({
  goToCheckout,
  cartSubtotal,
  numItems,
  containsAddons,
  goToAddons,
  title,
  description,
  isRootOffer,
  gotoRootOffer
}) => {
  const disabled = numItems === 0
  const itemText = numItems > 1 ? 'items' : 'item'
  const checkoutBtnStyle = disabled
    ? styles.checkoutButtonDisabled
    : styles.checkoutButtonEnabled

  const content = numItems ? (
    <>
      <section className="">
        <div className={'checkout-info'}>
          Total ({numItems} {itemText})
        </div>
        <div className={fonts.priceText}>{formatPrice(cartSubtotal)}</div>
      </section>

      <div className={styles.keepShopping}>
        {isRootOffer && <a onClick={gotoRootOffer}>Keep Shopping</a>}
      </div>
    </>
  ) : (
    <div className={'checkout-info'}>
      <div className={styles.checkoutInfoHeader}>{title}</div>
      <div className="">{description}</div>
    </div>
  )
  return (
    <article className={styles.ctaContainerCss}>
      {content}

      <button
        disabled={disabled}
        onClick={containsAddons ? goToAddons : goToCheckout}
        className={`${primaryButton} ${checkoutBtnStyle}`}
      >
        {containsAddons ? 'Next' : 'Checkout'}
      </button>
    </article>
  )
}

export default CheckoutCTA
