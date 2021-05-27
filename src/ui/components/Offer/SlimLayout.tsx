import * as React from 'react'
import SlimHeader from 'components/Offer/SlimHeader'
import { AnyOffer } from 'custom-typings/offerTypes'
import { panelCss } from 'components/Panel/styles'
import { styles } from 'components/Offer/styles'
import { OfferProps } from '../../OfferPresenter'
import Rewards, { rewardsStyles } from 'components/Rewards/Rewards'

interface Props extends OfferProps {
  offer: AnyOffer
  header: JSX.Element
  body: JSX.Element
  slimHeader: JSX.Element
}
const SlimLayout: React.SFC<Props> = ({
  offer,
  offerPreHeader,
  checkoutCTA,
  header,
  body,
  slimHeader
}) => (
  <>
    {slimHeader}
    <section className={`${panelCss.panelScrollableContainer}`}>
      <div className={styles.slimBackgroundTransparentCover} />
      <section className={styles.slimOfferContentContainer}>
        {offerPreHeader}
        {header}
        {offer.rewards && (
          <Rewards
            rewards={offer.rewards}
            className={rewardsStyles.singlePanelLayout}
          />
        )}

        {body}
      </section>
    </section>
    {checkoutCTA}
  </>
)

export default SlimLayout
