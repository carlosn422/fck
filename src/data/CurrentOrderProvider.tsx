import * as React from 'react'
import Query from 'react-apollo/Query'

import currentOrderQuery from './clientQueries/currentOrderQuery.gql'
import { CurrentOrder } from 'custom-typings/orderTypes'
interface Response {
  currentOrder: CurrentOrder
}
class CurrentOrderQuery extends Query<Response, {}> {}
interface CurrentOrderProvidedData {
  currentOrder: CurrentOrder
  updateCurrentOrder: (currentOrder: Partial<CurrentOrder>) => void
}
interface Props {
  children: (providedData: CurrentOrderProvidedData) => React.ReactNode
}

export default class CurrentOrderProvider extends React.Component<Props> {
  render() {
    const { children } = this.props
    return (
      <CurrentOrderQuery query={currentOrderQuery}>
        {({ client, data, loading }) => {
          const currentOrder = data!.currentOrder
          const updateCurrentOrder = (
            currentOrderData: Partial<CurrentOrder>
          ) => {
            client.writeData({
              data: {
                currentOrder: {
                  ...data,
                  ...currentOrderData,
                  __typename: 'CurrentOrder'
                }
              }
            })
          }
          const providedData = {
            currentOrder,
            updateCurrentOrder
          }

          return children(providedData)
        }}
      </CurrentOrderQuery>
    )
  }
}
