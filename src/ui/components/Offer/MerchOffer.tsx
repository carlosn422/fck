import OfferItemList from 'components/Offer/OfferItemList'
import OfferPriceSlider from 'components/Offer/OfferPriceSlider'
import PrimaryLayout from 'components/Offer/PrimaryLayout'
import SlimLayout from 'components/Offer/SlimLayout'
import { styles } from 'components/Offer/styles'
import PanelLayout from 'components/Panel/PanelLayout'
import { fonts } from 'css/variables'
import MerchUserSelectionsProvider from 'data/MerchUserSelectionsProvider'
import { AddCartItem } from 'data/queries'
import * as React from 'react'
import { MerchOffer as IMerchOffer } from 'custom-typings/offerTypes'
import { OfferProps } from '../../OfferPresenter'

import OfferItemUserSelectionsProvider from 'data/OfferItemUserSelectionsProvider'

interface MerchOfferProps extends OfferProps {
  offer: IMerchOffer
}

const Header = (offer: IMerchOffer) => {
  return (
    <header className={styles.titleContainer}>
      <div className={`${fonts.mainHeading} ${styles.offerTitle} `}>
        {offer.title}
      </div>
      <div className="description">{offer.description}</div>
    </header>
  )
}

const Body = (offer: IMerchOffer, addToCart: (data: AddCartItem) => void) => (
  <OfferItemUserSelectionsProvider>
    {({ offerItemUpdateUserSelections }) => {
      return (
        <MerchUserSelectionsProvider>
          {({ userSelections, updateUserSelections }) => {
            return (
              <>
                <OfferPriceSlider
                  offer={offer}
                  userSelectedLowerBound={userSelections.priceRange.lowerBound}
                  userSelectedUpperBound={userSelections.priceRange.upperBound}
                  onChange={updateUserSelections.price}
                  className={styles.priceSliderContainer}
                />

                <OfferItemList
                  offer={offer}
                  userSelections={userSelections}
                  addToCart={addToCart}
                  updateUserSelections={offerItemUpdateUserSelections}
                />
              </>
            )
          }}
        </MerchUserSelectionsProvider>
      )
    }}
  </OfferItemUserSelectionsProvider>
)

const MerchOfferPrimary: React.SFC<MerchOfferProps> = props => {
  const { offer, addToCart } = props
  const header = Header(offer)
  const body = Body(offer, addToCart)
  return <PrimaryLayout {...props} header={header} body={body} />
}

const Slim: React.SFC<MerchOfferProps> = props => {
  const { offer, addToCart } = props
  const header = Header(offer)
  const body = Body(offer, addToCart)
  return <SlimLayout {...props} header={header} body={body} />
}

const MerchOffer: React.SFC<MerchOfferProps> = props => (
  <PanelLayout
    Primary={() => <MerchOfferPrimary {...props} />}
    Secondary={props.offerSecondary}
    Slim={() => <Slim {...props} />}
  />
)

export default MerchOffer
