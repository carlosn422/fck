//import Calendar from 'components/Calendar/Calendar'
import OfferItemList from './OfferItemList'
import OfferPriceSlider from './OfferPriceSlider'
import PrimaryLayout from './PrimaryLayout'
import SlimLayout from './SlimLayout'
import { styles } from './styles'
import PanelLayout from '../Panel/PanelLayout'
import { fonts } from '../../css/variables'
import TimedUserSelectionsProvider from 'data/TimedUserSelectionsProvider'
import { AddCartItem } from 'data/queries'
//import { isAfter, isEqual } from 'date-fns'
import * as React from 'react'
import { TimedOffer } from 'custom-typings/offerTypes'
import { OfferProps } from '../../OfferPresenter'

interface TimedOfferProps extends OfferProps {
  offer: TimedOffer
}
const Header = (offer: TimedOffer, dateLocation: JSX.Element) => {
  return (
    <header className={styles.titleContainer}>
      <div className={`${fonts.mainHeading} ${styles.offerTitle} `}>
        {offer.title}
      </div>
      {dateLocation}
    </header>
  )
}

const Body = (offer: TimedOffer, addToCart: (data: AddCartItem) => void) => {
  const now = new Date()
  return (
    <TimedUserSelectionsProvider>
      {({ userSelections, updateUserSelections }) => (
        <>
          <OfferPriceSlider
            offer={offer}
            userSelectedLowerBound={userSelections.priceRange.lowerBound}
            userSelectedUpperBound={userSelections.priceRange.upperBound}
            onChange={updateUserSelections.price}
            className={styles.priceSliderContainer}
          />

          <OfferItemList
            addToCart={addToCart}
            offer={offer}
            userSelections={userSelections}
          />
        </>
      )}
    </TimedUserSelectionsProvider>
  )
}

const EventOfferPrimary: React.SFC<any> = props => {
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

const TimedOffer: React.SFC<TimedOfferProps> = props => (
  <PanelLayout
    Primary={() => <EventOfferPrimary {...props} />}
    Secondary={props.offerSecondary}
    Slim={() => <Slim {...props} />}
  />
)

export default TimedOffer
