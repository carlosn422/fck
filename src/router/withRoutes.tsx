import * as React from 'react'
import { ContextSubscriber } from './context'
import { transform } from 'lodash'
import { AnyComponent } from 'utils/types'
import { Dictionary } from 'lodash'
import RoutesProvider, { Params, Action }  from  'router/RoutesProvider'

export interface AddedProps {
  routes: {
    params: Params
    state: string
    go: (state: string, params?: Params) => void
  }
}

export default function withRoutes<Props extends {} = {}>(): (
  Component: any
) => React.SFC<Props> {
  return Component => props => (
    <RoutesProvider>
      {provided => <Component {...props} {...provided} />}
    </RoutesProvider>
  )
}
