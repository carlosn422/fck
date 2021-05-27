import * as React from 'react'
import SlimHeader from 'components/Offer/SlimHeader'
import { panelCss } from 'components/Panel/styles'
import { styles } from 'components/Offer/styles'

interface Props {
  header: JSX.Element
  body: JSX.Element
}
const ConfirmationSlimLayout: React.SFC<Props> = ({ body, header }) => (
  <>
    <section className={`${panelCss.panelScrollableContainer}`}>
      <div className={styles.slimBackgroundTransparentCover} />
      <section className={styles.slimOfferContentContainer}>
        {header}
        {body}
      </section>
    </section>
  </>
)

export default ConfirmationSlimLayout
