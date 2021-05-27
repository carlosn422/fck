import CartButton from 'components/CartButton//CartButton'
import Breadcrumbs from 'components/Offer/Breadcrumbs'
import * as React from 'react'
import { findParents } from '../../../cart/utils'
import { Offer, OfferPage } from 'custom-typings/offerTypes'
import MediaQuery from 'react-responsive'
import { mediaQueries } from 'css/variables'

interface Props {
  offer: Offer
  offerPage: OfferPage
  numItemsInCart: number
  selectOffer: (offerUri?: string) => void
}
const OfferPreHeader: React.SFC<Props> = ({
  offer,
  numItemsInCart,
  selectOffer,
  offerPage
}) => {
  const offerToEntry = (offer?: Offer) => ({
    title: offer ? offer.title : '',
    onClick: () => offer && selectOffer(offer.uri)
  })
  const parentEntries = findParents(offerPage.offer, offer, []).map(
    offerToEntry
  )

  return (
    <>
      <MediaQuery query={mediaQueries.bpAboveSlimWidth}>
        <CartButton numberOfItems={numItemsInCart} />
      </MediaQuery>
      <Breadcrumbs current={offerToEntry(offer)} parents={parentEntries} />
    </>
  )
}
export default OfferPreHeader
