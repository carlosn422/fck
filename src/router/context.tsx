import * as React from 'react'
import { Broadcast, Subscriber } from 'react-broadcast'
import { UIRouterReact } from '@uirouter/react'
import { State } from './State'

// export interface RoutingContext {
//   router: UIRouterReact
//   states: State<any>[]
// }

const ROUTING_CONTEXT = 'routingContext'

interface BroadcastProps {
  children: React.ReactNode
  value: any
}

interface SubscriberProps {
  children?: ((state: any) => React.ReactNode)
}
export const ContextBroadcast: React.SFC<BroadcastProps> = props => (
  <Broadcast {...props} channel={ROUTING_CONTEXT} />
)

export const ContextSubscriber: React.SFC<SubscriberProps> = props => (
  <Subscriber {...props} channel={ROUTING_CONTEXT} />
)
