import OfferItemList from './OfferItemList'
import PrimaryLayout from './PrimaryLayout'
import SlimLayout from './SlimLayout'
import { styles } from './styles'
import PanelLayout from '../Panel/PanelLayout'
import { fonts } from '../../css/variables'
import * as React from 'react'
import { OfferProps } from '../../OfferPresenter'
import { MixedOffer } from 'custom-typings/offerTypes'
import { AddCartItem } from 'data/queries'

import OfferItemUserSelectionsProvider from 'data/OfferItemUserSelectionsProvider'

interface MixedOfferProps extends OfferProps {
  offer: MixedOffer
}

const Header = (offer: MixedOffer, dateLocation: JSX.Element) => {
  return (
    <header className={styles.titleContainer}>
      <div className={`${fonts.mainHeading} ${styles.offerTitle} `}>
        {offer.title}
      </div>
      {dateLocation}
      <div className={styles.description}>{offer.description}</div>
    </header>
  )
}

const Body = (offer: MixedOffer, addToCart: (data: AddCartItem) => void) => {
  return (
    <OfferItemUserSelectionsProvider>
      {({ offerItemUpdateUserSelections }) => {
        return (
          <OfferItemList
            offer={offer}
            addToCart={addToCart}
            updateUserSelections={offerItemUpdateUserSelections}
          />
        )
      }}
    </OfferItemUserSelectionsProvider>
  )
}

const MixedOfferPrimary: React.SFC<any> = props => {
  const { offer, addToCart, offerPreHeader, dateLocation, checkoutCTA } = props
  const header = Header(offer, dateLocation)
  const body = Body(offer, addToCart)
  return <PrimaryLayout {...props} header={header} body={body} />
}

const Slim: React.SFC<any> = props => {
  const { offer, addToCart, offerPreHeader, dateLocation, checkoutCTA } = props
  const header = Header(offer, dateLocation)
  const body = Body(offer, addToCart)
  return <SlimLayout {...props} header={header} body={body} />
}

const MixedOffer: React.SFC<MixedOfferProps> = props => (
  <PanelLayout
    Primary={() => <MixedOfferPrimary {...props} />}
    Secondary={props.offerSecondary}
    Slim={() => <Slim {...props} />}
  />
)

export default MixedOffer
