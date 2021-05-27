import * as React from 'react'
import { ApolloConsumer, Query } from 'react-apollo'
import UserSelectionsStore, {
  PriceRange,
  DateRange,
  RoomPreferences
} from 'data/UserSelectionsStore'
import { addMonths } from 'date-fns/esm'
import { AnyOfferItem } from 'custom-typings/offerTypes'

export interface EventUserSelections {
  priceRange: PriceRange
  __typename: string
}
interface InjectedProps {
  eventUserSelections: EventUserSelections
}
class EventQuery extends Query<InjectedProps> {}

interface EventUserSelectionsProvided {
  userSelections: EventUserSelections
  updateUserSelections: EventUpdateUserSelections
}

export interface EventUpdateUserSelections {
  price: (range: number[]) => void
}

interface Props {
  children: (providedData: EventUserSelectionsProvided) => React.ReactNode
}

export default class EventUserSelectionsProvider extends React.Component<
  Props
> {
  render() {
    const { children } = this.props

    return (
      <EventQuery query={UserSelectionsStore.eventUserSelections.query}>
        {({ loading, error, data, client }) => {
          const userSelections = data!.eventUserSelections

          const setUserSelectionsState = newState => {
            const newEventUserSelections = {
              ...userSelections,
              ...newState,
              __typename: 'EventUserSelections'
            }

            client.writeData({
              data: {
                eventUserSelections: newEventUserSelections
              }
            })
          }

          const updateUserSelections = {
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
            userSelections,
            updateUserSelections
          }

          return children(providedProps)
        }}
      </EventQuery>
    )
  }
}
