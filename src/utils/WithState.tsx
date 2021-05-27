import * as React from 'react'
import { AnyComponent } from 'utils/types'
export interface MutateStateProps<S> {
  setState: (state: Partial<S>) => void
}

const WithState = <P, S>(initial: S) => (
  Component: any
) =>
  class WithStateClass extends React.Component<P, S> {
    state = initial

    render() {
      const setState = newState => this.setState(newState)
      const props = Object.assign({ setState }, this.props, this.state)
      return <Component {...props} />
    }
  }

export default WithState
