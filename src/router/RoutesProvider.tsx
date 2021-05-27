import * as React from 'react'
import { ContextSubscriber } from 'router/context'
import { Dictionary, transform } from 'lodash'
import { AddedProps } from 'router/withRoutes'

export type Action = (params?: Params) => void
export type Params = Dictionary<string | undefined>

export interface Props {
  children: (routesProvided: AddedProps) => React.ReactNode
}

export default class RoutesProvider extends React.Component<Props> {
  render() {
    const { children } = this.props
    return (
      <ContextSubscriber>
        {({ router, states }) => {
          const name = router.stateService.current.name!
          const state = states.find(s => s.name === name)!
          const currentParams = router.stateService.params
          const go = (transitionName: string, params?: Params) => {
            router.stateService.go(
              transitionName,
              params ? params : currentParams
            )
          }

          const addedProps: AddedProps = {
            routes: {
              params: currentParams,
              state: name,
              go
            }
          }
          return children(addedProps)
        }}
      </ContextSubscriber>
    )
  }
}
