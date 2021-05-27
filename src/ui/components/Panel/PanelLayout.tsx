import * as React from 'react'
import { Query } from 'react-apollo'
import panelQuery from 'data/clientQueries/panelQuery.gql'

import {
  PanelLayoutProps,
  PanelStateType,
  PanelPropsType,
  PanelTransitionState
} from './PanelTypes'
import { Panel } from './Panel'

class PanelQuery extends Query<{ panelState: PanelStateType }> {}

const PanelLayout: React.SFC<PanelLayoutProps> = layoutProps => {
  return (
    <PanelQuery query={panelQuery}>
      {result => {
        const panelState = result.data!.panelState
        return <Panel {...layoutProps} panelState={panelState} />
      }}
    </PanelQuery>
  )
}
export const PanelResolverAndDefaults = {
  defaults: {
    panelState: {
      panelTransitionState: PanelTransitionState.CLOSED,
      scrollTop: 0,
      primaryPaneState: PanelTransitionState.CLOSED,
      secondaryPaneState: PanelTransitionState.CLOSED,
      __typename: 'PanelState'
    }
  }
}

export default PanelLayout
