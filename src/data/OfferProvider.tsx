import * as React from 'react'
import { offerPages } from 'data/exampleData'
import { OfferPage } from 'custom-typings/offerTypes'
import RoutesProvider from 'router/RoutesProvider'

interface Provided {
  offerPage: OfferPage
}

interface Props {
  children: (providedData: Provided) => React.ReactNode
}

export default class OfferProvider extends React.Component<Props> {
  render() {
    const { children } = this.props

    return (
      <RoutesProvider>
        {({ routes }) => {
          const offerPage = offerPages[routes.params.offerPageUri!]

          if (!offerPage) {
            throw new Error(
              `no offerPage found at: ${routes.params.offerPageUri}`
            )
          }
          return children({ offerPage })
        }}
      </RoutesProvider>
    )
  }
}
