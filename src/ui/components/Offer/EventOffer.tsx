import OfferItemList from './OfferItemList'
import OfferPriceSlider from './OfferPriceSlider'
import PrimaryLayout from './PrimaryLayout'
import SlimLayout from './SlimLayout'
import { styles } from './styles'
import PanelLayout from '../Panel/PanelLayout'
import { fonts, colors } from '../../css/variables'
import EventUserSelectionsProvider from 'data/EventUserSelectionsProvider'
import { AddCartItem } from 'data/queries'
import * as React from 'react'
import { EventOffer, OfferItemType } from 'custom-typings/offerTypes'
import { OfferProps } from '../../OfferPresenter'
import { css } from 'react-emotion'

import HotelUserSelectionsProvider from 'data/HotelUserSelectionsProvider'

import OfferItemUserSelectionsProvider from 'data/OfferItemUserSelectionsProvider'
import DateRangePicker from '../Calendar/DateRangePicker'
import { isAfter, isEqual, parse } from 'date-fns/esm'
import Timeslots from '../Timeslots/Timeslots'

const descriptionCss = css`
  color: ${colors.secondaryGray};
  padding-bottom: 2rem;
`

interface EventOfferProps extends OfferProps {
  offer: EventOffer
}

const Header = (offer: EventOffer, dateLocation: JSX.Element) => {
  return (
    <header className={styles.titleContainer}>
      <div className={`${fonts.mainHeading} ${styles.offerTitle} `}>
        {offer.title}
      </div>
      <div className={descriptionCss}>{dateLocation}</div>
    </header>
  )
}

const Body = (offer: EventOffer, addToCart: (data: AddCartItem) => void) => {
  const now = new Date()

  const timeslots = [
    { date: '11:35 AM', __typename: 'Timeslot' },
    { date: '2:55 PM', __typename: 'Timeslot' },
    { date: '6:15 PM', __typename: 'Timeslot' },
    { date: '9:40 PM', __typename: 'Timeslot' }
  ]

  return (
    <OfferItemUserSelectionsProvider>
      {({ offerItemUpdateUserSelections }) => {
        return (
          <EventUserSelectionsProvider>
            {({ userSelections, updateUserSelections }) => {
              return (
                <HotelUserSelectionsProvider>
                  {({ hotelUserSelections, updateUserSelections }) => (
                    <>
                      {offer.items[0].type === OfferItemType.MultipleEvent ? (
                        <>
                          <section className={styles.selectionContainer}>
                            <DateRangePicker
                              isRangeEnabled={false}
                              chooseStart={updateUserSelections.startDate}
                              chooseEnd={updateUserSelections.startDate}
                              gotoPreviousMonth={
                                updateUserSelections.previousMonth
                              }
                              gotoNextMonth={updateUserSelections.nextMonth}
                              canGotoNextMonth={true}
                              startDate={
                                hotelUserSelections.travelDates.startDate
                              }
                              endDate={
                                hotelUserSelections.travelDates.startDate
                              }
                              selectedMonthsDate={
                                hotelUserSelections.travelDates
                                  .selectedMonthsDate
                              }
                              canGotoPreviousMonth={
                                isEqual(
                                  hotelUserSelections.travelDates
                                    .selectedMonthsDate,
                                  now
                                ) ||
                                isAfter(
                                  hotelUserSelections.travelDates
                                    .selectedMonthsDate,
                                  now
                                )
                              }
                            />

                            <Timeslots
                              timeSlots={timeslots}
                              onTimeSelect={v => {
                                updateUserSelections.timeslot(v)
                                console.log(hotelUserSelections.timeslot)
                              }}
                              selectedTimeSlot={hotelUserSelections.timeslot}
                            />
                          </section>
                          <OfferItemList
                            offer={offer}
                            timeSelection={hotelUserSelections}
                            addToCart={addToCart}
                            userSelections={hotelUserSelections}
                            updateUserSelections={offerItemUpdateUserSelections}
                          />
                        </>
                      ) : (
                        <>
                          {offer.uri !== 'tickets-giants' && (
                            <OfferPriceSlider
                              offer={offer}
                              onChange={updateUserSelections.price}
                              className={styles.priceSliderContainer}
                              userSelectedLowerBound={
                                hotelUserSelections.priceRange.lowerBound
                              }
                              userSelectedUpperBound={
                                hotelUserSelections.priceRange.upperBound
                              }
                            />
                          )}

                          <OfferItemList
                            offer={offer}
                            addToCart={addToCart}
                            userSelections={hotelUserSelections}
                            updateUserSelections={offerItemUpdateUserSelections}
                          />
                        </>
                      )}
                    </>
                  )}
                </HotelUserSelectionsProvider>
              )
            }}
          </EventUserSelectionsProvider>
        )
      }}
    </OfferItemUserSelectionsProvider>
  )
}

const EventOfferPrimary: React.SFC<any> = props => {
  const { offer, addToCart, offerPreHeader, dateLocation, checkoutCTA } = props

  const body = Body(offer, addToCart)
  const header = Header(offer, dateLocation)

  return <PrimaryLayout {...props} header={header} body={body} />
}

const Slim: React.SFC<any> = props => {
  const { offer, addToCart, offerPreHeader, dateLocation, checkoutCTA } = props

  const body = Body(offer, addToCart)
  const header = Header(offer, dateLocation)

  return <SlimLayout {...props} header={header} body={body} />
}

const EventOffer: React.SFC<EventOfferProps> = props => (
  <PanelLayout
    Primary={() => <EventOfferPrimary {...props} />}
    Secondary={props.offerSecondary}
    Slim={() => <Slim {...props} />}
  />
)

export default EventOffer
