import * as React from 'react'
import { ApolloConsumer, Query } from 'react-apollo'
import UserSelectionsStore, {
  PriceRange,
  DateRange,
  RoomPreferences,
  TimeSlot
} from 'data/UserSelectionsStore'
import { addMonths } from 'date-fns/esm'

export interface HotelUserSelections {
  priceRange: PriceRange
  travelDates: DateRange
  timeslot: TimeSlot
  roomPreferences: RoomPreferences
  __typename: string
}
interface InjectedProps {
  hotelUserSelections: HotelUserSelections
}
class HotelQuery extends Query<InjectedProps> {}

interface HotelUserSelectionsProvided {
  hotelUserSelections: HotelUserSelections
  updateUserSelections: UpdateHotelUserSelections
}

export interface UpdateHotelUserSelections {
  nextMonth: () => void
  previousMonth: () => void
  endDate: (date: Date) => void
  startDate: (date: Date) => void
  price: (range: number[]) => void
  timeslot: (slot: TimeSlot) => void
  roomPreferences: (data: Partial<RoomPreferences>) => void
}

interface Props {
  children: (providedData: HotelUserSelectionsProvided) => React.ReactNode
}

export default class HotelUserSelectionsProvider extends React.Component<
  Props
> {
  render() {
    const { children } = this.props

    return (
      <HotelQuery query={UserSelectionsStore.hotelUserSelections.query}>
        {({ loading, error, data, client }) => {
          const hotelUserSelections = data!.hotelUserSelections

          const setUserSelectionsState = newState => {
            const newHotelUserSelections = {
              ...hotelUserSelections,
              ...newState,
              __typename: 'HotelUserSelections'
            }

            client.writeData({
              data: {
                hotelUserSelections: newHotelUserSelections
              }
            })
          }

          const updateUserSelections = {
            roomPreferences: (data: Partial<RoomPreferences>) =>
              setUserSelectionsState({
                roomPreferences: {
                  ...hotelUserSelections.roomPreferences,
                  ...data,
                  __typename: 'RoomPreferences'
                }
              }),
            timeslot: (slot: TimeSlot) => {
              setUserSelectionsState({
                timeslot: {
                  ...slot,
                  __typename: 'Timeslot'
                }
              })
            },
            startDate: (date: Date) =>
              setUserSelectionsState({
                travelDates: {
                  ...hotelUserSelections.travelDates,
                  startDate: date.toJSON(),
                  endDate: null,
                  __typename: 'TravelDates'
                }
              }),
            endDate: (date: Date) =>
              setUserSelectionsState({
                travelDates: {
                  ...hotelUserSelections.travelDates,
                  startDate: hotelUserSelections.travelDates.startDate,
                  endDate: date.toJSON(),
                  __typename: 'TravelDates'
                }
              }),
            previousMonth: () =>
              setUserSelectionsState({
                travelDates: {
                  ...hotelUserSelections.travelDates,
                  selectedMonthsDate: addMonths(
                    hotelUserSelections.travelDates.selectedMonthsDate,
                    -1
                  ).toJSON(),
                  __typename: 'TravelDates'
                }
              }),
            nextMonth: () =>
              setUserSelectionsState({
                travelDates: {
                  ...hotelUserSelections.travelDates,
                  selectedMonthsDate: addMonths(
                    hotelUserSelections.travelDates.selectedMonthsDate,
                    1
                  ).toJSON(),
                  __typename: 'TravelDates'
                }
              }),
            price: (range: number[]) =>
              setUserSelectionsState({
                priceRange: {
                  lowerBound: range[0],
                  upperBound: range[1],
                  __typename: 'PriceRange'
                }
              })
          }

          const providedProps = {
            hotelUserSelections,
            updateUserSelections
          }

          return children(providedProps)
        }}
      </HotelQuery>
    )
  }
}
