import Confetti from '../Confetti'
import { handleTransitionEnd, onClose } from '../Panel/panelHelper'
import { mediaQueries } from '../../css/variables'
import * as React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { css } from 'react-emotion'
import MediaQuery from 'react-responsive'
import IconClose from '../../svg-icons/close.svg'
import { PanelPane } from './PanelPane'
import { PanelPropsType, PanelTransitionState } from './PanelTypes'
import { panelCss } from './styles'
export const Panel: React.SFC<PanelPropsType> = ({
  panelState,
  Primary,
  Secondary,
  Slim,
  showConfetti
}) => {
  const {
    panelTransitionState,
    scrollTop,
    primaryPaneState,
    secondaryPaneState
  } = panelState

  return (
    <ApolloConsumer>
      {client => {
        const setPanelState = newState => {
          client.writeData({
            data: {
              panelState: { ...panelState, ...newState }
            }
          })
        }

        const fevoPanelClasses = `fevo-panel ${
          panelTransitionState === PanelTransitionState.CLOSED
            ? panelCss.fevoPanelClosedClass
            : panelCss.fevoPanelClass
        }`

        const fevoPanelBgClasses = `fevo-panel-bg ${panelCss.panelBgClass} ${
          panelTransitionState === PanelTransitionState.CLOSED
            ? css`
                opacity: 0;
              `
            : ''
        } `

        const panelStyles = { top: scrollTop, bottom: -1 * scrollTop }

        return (
          <div className={fevoPanelClasses} style={panelStyles} id="fevo-panel">
            <MediaQuery query={mediaQueries.bpUptoSlimWidth}>
              <header className={panelCss.fevoPanelHeaderClass}>
                <IconClose
                  className={panelCss.closeBtnClass}
                  onClick={() =>
                    onClose('single', panelTransitionState, setPanelState)
                  }
                />
              </header>
              <div className={panelCss.paneContainer}>
                <PanelPane
                  paneTransitionState={primaryPaneState}
                  paneType="slim"
                  handlePaneTransitionEnd={() =>
                    handleTransitionEnd(
                      'primary',
                      'single',
                      panelTransitionState,
                      setPanelState,
                      scrollTop
                    )
                  }
                >
                  {Slim ? (
                    Slim()
                  ) : (
                    <>
                      {Primary()} {Secondary()}
                    </>
                  )}
                </PanelPane>
              </div>
              <div
                className={fevoPanelBgClasses}
                onClick={() =>
                  onClose('single', panelTransitionState, setPanelState)
                }
              />
            </MediaQuery>
            <MediaQuery query={mediaQueries.bpAboveSlimWidth}>
              <header className={panelCss.fevoPanelHeaderClass}>
                <IconClose
                  className={panelCss.closeBtnClass}
                  onClick={() =>
                    onClose('double', panelTransitionState, setPanelState)
                  }
                />
              </header>

              <div className={panelCss.paneContainer}>
                <PanelPane
                  paneTransitionState={secondaryPaneState}
                  handlePaneTransitionEnd={() =>
                    handleTransitionEnd(
                      'secondary',
                      'double',
                      panelTransitionState,
                      setPanelState,
                      scrollTop
                    )
                  }
                  paneType="secondary"
                >
                  {Secondary()}
                </PanelPane>

                <PanelPane
                  paneTransitionState={primaryPaneState}
                  paneType="primary"
                  handlePaneTransitionEnd={() =>
                    handleTransitionEnd(
                      'primary',
                      'double',
                      panelTransitionState,
                      setPanelState,
                      scrollTop
                    )
                  }
                >
                  {Primary()}
                </PanelPane>
              </div>
              <div
                className={fevoPanelBgClasses}
                onClick={() =>
                  onClose('double', panelTransitionState, setPanelState)
                }
              />
            </MediaQuery>
            {showConfetti &&
              showConfetti() && <Confetti className={panelCss.confetti} />}
          </div>
        )
      }}
    </ApolloConsumer>
  )
}
