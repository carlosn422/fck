import { panelCss } from 'components/Panel/styles'
import * as React from 'react'
import { AnyOffer } from 'custom-typings/offerTypes'
import { OfferProps } from '../../OfferPresenter'

interface Props extends OfferProps {
  offer: AnyOffer
  header: JSX.Element
  body: JSX.Element
}
const PrimaryLayout: React.SFC<Props> = ({
  offer,
  offerPreHeader,
  addToCart,
  checkoutCTA,
  dateLocation,
  header,
  body
}) => (
  <>
    <article className={panelCss.panelScrollableContainer}>
      {offerPreHeader}
      {header}
      {body}
    </article>
    {checkoutCTA}
  </>
)

export default PrimaryLayout
