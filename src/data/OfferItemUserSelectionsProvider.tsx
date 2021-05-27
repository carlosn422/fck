import * as React from 'react'
import { ApolloConsumer, Query } from 'react-apollo'
import UserSelectionsStore from 'data/UserSelectionsStore'
import { AnyOfferItem } from 'custom-typings/offerTypes'

export interface OfferItemUserSelections {
  selectedOfferItem: AnyOfferItem
  selectedAdditionalOfferItem: AnyOfferItem
  __typename: string
}
interface InjectedProps {
  offerItemUserSelections: OfferItemUserSelections
}
class OfferItemQuery extends Query<InjectedProps> {}

interface OfferItemUserSelectionsProvided {
  offerItemUserSelections: OfferItemUserSelections
  offerItemUpdateUserSelections: OfferItemUpdateUserSelections
}

export interface OfferItemUpdateUserSelections {
  selectedOfferItem: (offerItem: AnyOfferItem) => void
  seelctAdditionalMediaFor: (offerItem?: AnyOfferItem) => void
}

interface Props {
  children: (providedData: OfferItemUserSelectionsProvided) => React.ReactNode
}

export default class OfferItemUserSelectionsProvider extends React.Component<
  Props
> {
  render() {
    const { children } = this.props

    return (
      <OfferItemQuery query={UserSelectionsStore.offerItemUserSelections.query}>
        {({ loading, error, data, client }) => {
          const offerItemUserSelections = data!.offerItemUserSelections

          const setUserSelectionsState = newState => {
            const newUserSelections = {
              ...offerItemUserSelections,
              ...newState,
              __typename: 'OfferItemUserSelections'
            }

            client.writeData({
              data: {
                offerItemUserSelections: newUserSelections
              }
            })
          }

          const offerItemUpdateUserSelections = {
            selectedOfferItem: (offerItem: AnyOfferItem) =>
              setUserSelectionsState({
                selectedOfferItem: {
                  ...offerItemUserSelections.selectedOfferItem,
                  ...offerItem,
                  __typename: 'OfferItem'
                }
              }),
            seelctAdditionalMediaFor: (offerItem?: AnyOfferItem) =>
              setUserSelectionsState({
                selectedAdditionalOfferItem: {
                  ...offerItemUserSelections.selectedAdditionalOfferItem,
                  ...offerItem,
                  __typename: 'AdditionalOfferItem'
                }
              })
          }

          const providedProps = {
            offerItemUserSelections,
            offerItemUpdateUserSelections
          }

          return children(providedProps)
        }}
      </OfferItemQuery>
    )
  }
}
