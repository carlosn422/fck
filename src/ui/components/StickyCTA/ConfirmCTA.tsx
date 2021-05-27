import * as React from 'react'
import { primaryButton } from 'css/buttons'
import { styles } from 'components/StickyCTA/styles'
import { Cart } from '../../../cart'
import { fonts, colors } from 'css/variables'
import { formatPrice } from '../../../cart/utils'
import { css } from 'react-emotion'

interface Props {
  disabled?: boolean
  amountOwed: number
  numItems: number
  onClick?: () => void
}

const ConfirmCTA: React.SFC<Props> = ({
  disabled = false,
  amountOwed,
  numItems,
  onClick
}) => {
  const itemText = numItems > 1 ? 'items' : 'item'
  return (
    <article className={`confirm-cta ${styles.ctaContainerCss}`}>
      <section className="">
        <div className={'checkout-info'}>
          Checkout with {numItems} {itemText}
        </div>
        <div
          className={css`
            ${fonts.priceText};
            color: ${colors.brandColor};
          `}
        >
          You'll pay {formatPrice(amountOwed)}
        </div>
      </section>
      <button
        disabled={disabled}
        type="submit"
        className={`${primaryButton} ${styles.confirmBtn}`}
        onClick={onClick}
      >
        Confirm
      </button>
    </article>
  )
}

export default ConfirmCTA
