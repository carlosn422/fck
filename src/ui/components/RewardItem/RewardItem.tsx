import * as React from 'react'

import { css } from 'react-emotion'
import { Reward } from 'custom-typings/offerTypes'
import { offerItemStyles } from './styles'
import { typography } from 'css/variables'

interface RewardItemProps {
  reward: Reward
  quantity: number
  hideRemove?: boolean
}

const cartItemDetails = css`
  font-family: ${typography.fontSecondary};
  font-size: ${12 / 16}rem;
  color: #908f8f;
`

const RewardItem: React.SFC<RewardItemProps> = ({
  reward,
  quantity,
  hideRemove
}) => {

  const icon = reward.icon ? reward.icon : `https://s3.amazonaws.com/fevo-fuc/assets-demo-sony/reward_unlock.png`

  return (
    <article className={offerItemStyles.cartItemCss}>
      <section
        className={offerItemStyles.cartImageCss}
        style={{
          background: `url(${icon}) no-repeat center`,
          backgroundSize: 'contain'
        }}
      />

      <section className={offerItemStyles.offerContentCss}>
        <header className={offerItemStyles.cartOfferTitleCss}>
          {reward.name}
        </header>
        <div className={cartItemDetails}>Reward Unlocked</div>
      </section>

      <section className={offerItemStyles.priceCtaContainerCss}>
        <div className={offerItemStyles.cartOfferQuantityPrice}>{quantity}</div>
      </section>

      <section className={offerItemStyles.quantityContainerCss}>
        <div className={offerItemStyles.cartOfferQuantityPrice}>FREE</div>
      </section>

      {!hideRemove && (
        <section>
          <div className={offerItemStyles.remove} />
        </section>
      )}
    </article>
  )
}
export default RewardItem
