import * as React from 'react'
import { cartItemStyles } from './styles'

export interface Props {
  amount: string
  orderSummaryTitle: string
}

export const CartOfferUserInfo: React.SFC<Props> = ({
  amount,
  orderSummaryTitle
}) => {
  return (
    <article className={cartItemStyles.avatarItemCss}>
      <section
        className={cartItemStyles.avatarCss}
        style={{
          background: `url(https://s3.amazonaws.com/fevo-fuc/assets-demo/images/avatar/profile1.png) no-repeat center`,
          backgroundSize: 'cover'
        }}
      />

      <section className={cartItemStyles.offerContentCss}>
        <header className={cartItemStyles.avatarTitleCss}>
          {orderSummaryTitle}
        </header>
        <div className={cartItemStyles.avatarDetailsCss}>
          {`Your order summary`}
        </div>
        <div className={cartItemStyles.avatarAmountCss}>
          {`You'll pay ` + amount}
        </div>
      </section>
    </article>
  )
}
