import * as React from 'react'
import { graphql, Query } from 'react-apollo'
import { Panel } from '../ui/components/Panel/Panel'
import {
  MerchCartData,
  MerchOffer as IMerchOffer
} from 'custom-typings/offerTypes'
import MerchOffer from '../ui/components/Offer/MerchOffer'
import UserSelectionsStore, { PriceRange } from 'data/UserSelectionsStore'
import { AnyOfferItem } from 'custom-typings/offerTypes'

export interface MerchUserSelections {
  priceRange: PriceRange
  selectedOfferItem: AnyOfferItem
}
export type UpdateMerchUserSelections = {
  price: (range: number[]) => void
  selectedOfferItem: (offerItem: AnyOfferItem) => void
}

interface MerchUserSelectionsProvided {
  userSelections: MerchUserSelections
  updateUserSelections: UpdateMerchUserSelections
}

interface Props {
  children: (providedData: MerchUserSelectionsProvided) => React.ReactNode
}

type QueryResult = {
  merchUserSelections: {
    priceRange: PriceRange
    selectedOfferItem: AnyOfferItem
  }
}

class MerchQuery extends Query<QueryResult> {}

export default class MerchUserSelectionsProvider extends React.Component<
  Props
> {
  render() {
    const { children } = this.props
    return (
      <MerchQuery
        query={UserSelectionsStore.merchUserSelections.query}
        displayName="merchUserSelections"
      >
        {({ loading, error, data, client }) => {
          const userSelections = data!.merchUserSelections

          const setUserSelectionsState = newState => {
            const newUserSelections = {
              ...userSelections,
              ...newState,
              __typename: 'MerchUserSelections'
            }

            client.writeData({
              data: {
                merchUserSelections: newUserSelections
              }
            })
          }

          const updateUserSelections = {
            price: ([lowerBound, upperBound]: [number, number]) =>
              setUserSelectionsState({
                priceRange: {
                  lowerBound,
                  upperBound,
                  __typename: 'PriceRange'
                }
              }),
            selectedOfferItem: (offerItem: AnyOfferItem) =>
              setUserSelectionsState({
                selectedOfferItem: {
                  ...offerItem,
                  __typename: 'OfferItem'
                }
              })
          }

          const providedProps = { updateUserSelections, userSelections }

          return children(providedProps)
        }}
      </MerchQuery>
    )
  }
}
