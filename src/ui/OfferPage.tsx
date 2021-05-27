import { UIView } from '@uirouter/react'
import { PanelTransitionState } from 'components/Panel/PanelTypes'
import { updateBodyForOpening } from 'components/Panel/panelHelper'
import * as React from 'react'
import { ApolloConsumer } from 'react-apollo'

const DrawerButton = () => {
  return (
    <ApolloConsumer>
      {client => {
        const onClick = () => {
          // This will be triggered by sdk code
          const windowTop = window.scrollY
          updateBodyForOpening(windowTop)

          // this belongs to our fuc app
          client.writeData({
            data: {
              panelState: {
                panelTransitionState: PanelTransitionState.OPENING,
                primaryPaneState: PanelTransitionState.OPENING,
                secondaryPaneState: PanelTransitionState.CLOSED,
                scrollTop: windowTop,
                __typename: 'PanelState'
              }
            }
          })
        }

        return (
          <div
            style={{
              // @ts-ignore
              background: `url(${window.clientBg}) no-repeat top center`,
              backgroundSize: 'cover',
              // @ts-ignore
              height: `${window.clientBgIsScrollable === 'true' && '250vh'}`
            }}
            className={`fuc-demo-container`}
            onClick={onClick}
          />
        )
      }}
    </ApolloConsumer>
  )
}

const OfferPage = () => {
  return (
    <>
      <DrawerButton />
      <UIView />
    </>
  )
}

export default OfferPage
