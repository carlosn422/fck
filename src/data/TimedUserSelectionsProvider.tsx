import * as React from 'react'
import { ApolloConsumer, Query } from 'react-apollo'
import UserSelectionsStore, {
  PriceRange,
  DateRange,
  RoomPreferences
} from 'data/UserSelectionsStore'
import { addMonths } from 'date-fns/esm'
import { AnyOfferItem } from 'custom-typings/offerTypes'

export interface TimedUserSelections {
  priceRange: PriceRange
  chosenTime: {
    selectedMonthsDate: Date
    selectedTimeSlot: Date
    __typename: 'ChosenTime'
  }
}

interface TimedUserSelectionsProvided {
  userSelections: TimedUserSelections
  updateUserSelections: UpdateTimedUserSelections
}

export interface UpdateTimedUserSelections {
  nextMonth: () => void
  previousMonth: () => void
  chooseDate: (date: Date) => void
  price: (range: number[]) => void
}
interface Props {
  children: (providedData: TimedUserSelectionsProvided) => React.ReactNode
}

interface QueryProps {
  timedUserSelections: TimedUserSelections
}
class TimedSelectionsQuery extends Query<QueryProps> {}

export default class TimedUserSelectionsProvider extends React.Component<
  Props
> {
  render() {
    const { children } = this.props

    return (
      <TimedSelectionsQuery
        query={UserSelectionsStore.timedUserSelections.query}
      >
        {({ loading, error, data, client }) => {
          const userSelections = data!.timedUserSelections

          const setUserSelectionsState = newState => {
            const newTimedUserSelections = {
              ...userSelections,
              ...newState,
              __typename: 'TimedUserSelections'
            }

            client.writeData({
              data: {
                timedUserSelections: newTimedUserSelections
              }
            })
          }

          const updateUserSelections = {
            chooseDate: (date: Date) =>
              setUserSelectionsState({
                chosenTime: {
                  ...userSelections.chosenTime,
                  selectedTimeSlot: date.toJSON(),
                  __typename: 'ChosenTime'
                }
              }),
            previousMonth: () =>
              setUserSelectionsState({
                chosenTime: {
                  ...userSelections.chosenTime,
                  selectedMonthsDate: addMonths(
                    userSelections.chosenTime.selectedMonthsDate,
                    -1
                  ).toJSON(),
                  __typename: 'ChosenTime'
                }
              }),
            nextMonth: () =>
              setUserSelectionsState({
                chosenTime: {
                  ...userSelections.chosenTime,
                  selectedMonthsDate: addMonths(
                    userSelections.chosenTime.selectedMonthsDate,
                    1
                  ).toJSON(),
                  __typename: 'ChosenTime'
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

          return children({
            userSelections,
            updateUserSelections
          })
        }}
      </TimedSelectionsQuery>
    )
  }
}
