import DateRangePicker from '../Calendar/DateRangePicker'
import { HotelRoomFilter } from './HotelRoomFilter'
import OfferItemList from './OfferItemList'
import OfferPriceSlider from './OfferPriceSlider'
import PrimaryLayout from './PrimaryLayout'
import SlimLayout from './SlimLayout'
import { styles } from './styles'
import PanelLayout from '../Panel/PanelLayout'
import { fonts } from '../../css/variables'
import HotelUserSelectionsProvider from 'data/HotelUserSelectionsProvider'
import { AddCartItem } from 'data/queries'
import { isAfter, isEqual } from 'date-fns/esm'
import * as React from 'react'
import { HotelOffer } from 'custom-typings/offerTypes'
import { OfferProps } from '../../OfferPresenter'

import OfferItemUserSelectionsProvider from 'data/OfferItemUserSelectionsProvider'
interface HotelOfferProps extends OfferProps {
  offer: HotelOffer
}

const Header = (offer: HotelOffer, dateLocation: JSX.Element) => {
  return (
    <header className={styles.titleContainer}>
      <div className={`${fonts.mainHeading} ${styles.offerTitle} `}>
        {offer.title}
      </div>
      {dateLocation}
    </header>
  )
}

const Body = (offer: HotelOffer, addToCart: (data: AddCartItem) => void) => {
  const now = new Date()

  return (
    <OfferItemUserSelectionsProvider>
      {({ offerItemUpdateUserSelections, offerItemUserSelections }) => {
        return (
          <HotelUserSelectionsProvider>
            {({ hotelUserSelections, updateUserSelections }) => (
              <>
                <section className={styles.selectionContainer}>
                  <DateRangePicker
                    isRangeEnabled={true}
                    chooseStart={updateUserSelections.startDate}
                    chooseEnd={updateUserSelections.endDate}
                    gotoPreviousMonth={updateUserSelections.previousMonth}
                    gotoNextMonth={updateUserSelections.nextMonth}
                    canGotoNextMonth={true}
                    startDate={hotelUserSelections.travelDates.startDate}
                    endDate={hotelUserSelections.travelDates.endDate}
                    selectedMonthsDate={
                      hotelUserSelections.travelDates.selectedMonthsDate
                    }
                    canGotoPreviousMonth={
                      isEqual(
                        hotelUserSelections.travelDates.selectedMonthsDate,
                        now
                      ) ||
                      isAfter(
                        hotelUserSelections.travelDates.selectedMonthsDate,
                        now
                      )
                    }
                  />

                  <HotelRoomFilter
                    numAdults={hotelUserSelections.roomPreferences.numAdults}
                    numChildren={
                      hotelUserSelections.roomPreferences.numChildren
                    }
                    numRooms={hotelUserSelections.roomPreferences.numRooms}
                    onChange={updateUserSelections.roomPreferences}
                  />
                </section>

                <OfferPriceSlider
                  offer={offer}
                  userSelectedLowerBound={
                    hotelUserSelections.priceRange.lowerBound
                  }
                  userSelectedUpperBound={
                    hotelUserSelections.priceRange.upperBound
                  }
                  onChange={updateUserSelections.price}
                  className={styles.priceSliderContainer}
                />
                <OfferItemList
                  addToCart={addToCart}
                  offer={offer}
                  updateUserSelections={offerItemUpdateUserSelections}
                  userSelections={hotelUserSelections}
                />
              </>
            )}
          </HotelUserSelectionsProvider>
        )
      }}
    </OfferItemUserSelectionsProvider>
  )
}

const HotelOfferPrimary: React.SFC<any> = props => {
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

const HotelOffer: React.SFC<HotelOfferProps> = props => {
  return (
    <PanelLayout
      Primary={() => <HotelOfferPrimary {...props} />}
      Secondary={props.offerSecondary}
      Slim={() => <Slim {...props} />}
    />
  )
}

export default HotelOffer
