import * as React from 'react'
import SlimHeader from 'components/Offer/SlimHeader'
import { panelCss } from 'components/Panel/styles'
import { styles } from 'components/Offer/styles'

interface Props {
  header: JSX.Element
  body: JSX.Element
  checkoutCTA: JSX.Element
}
const CheckoutSlimLayout: React.SFC<Props> = ({
  body,
  header,
  checkoutCTA
}) => (
  <>
    <section className={`${panelCss.panelScrollableContainer}`}>
      <div className={styles.slimBackgroundTransparentCover} />
      <section className={styles.slimOfferContentContainer}>
        {header}
        {body}
      </section>
    </section>
    {checkoutCTA}
  </>
)

export default CheckoutSlimLayout
