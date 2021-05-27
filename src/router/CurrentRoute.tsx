import * as React from 'react'

import {
  UIRouter,
  pushStateLocationPlugin,
  UIView,
  UIRouterReact
} from '@uirouter/react'

import { servicesPlugin } from '@uirouter/core'

import { State } from './State'
import { ContextBroadcast } from './context'


// interface CurrentRouteProps<N extends string = string> {
//   routes: State<N>[]
// }

/**
 * Given a set of states and components, uses ui router to render the correct component.
 * This also sets up context for withRoutes to function correctly.
 * Check state and component definitions to see how urls map to specific react components
 */
const CurrentRoute: React.SFC<any> = ({ routes }) => {
  const router = new UIRouterReact()
  window['router'] = router

  const plugins = [servicesPlugin, pushStateLocationPlugin]
  plugins.forEach(plugin => router.plugin(plugin))

  routes.forEach(state => router.stateRegistry.register(state))

  const context: any = { router, states: routes }

  return (
    <ContextBroadcast value={context}>
      <UIRouter router={router}>
        <>
          <UIView />
        </>
      </UIRouter>
    </ContextBroadcast>
  )
}

export default CurrentRoute
