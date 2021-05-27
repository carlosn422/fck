import * as React from 'react'
import { css } from 'react-emotion'
import { mediaQueries, panel } from 'css/variables'
import { PanelTransitionState, PaneProps, PaneType } from './PanelTypes'
import { panelCss } from './styles'

const getPaneStyles = (paneType: PaneType) => {
  switch (paneType) {
    case 'primary':
      return {
        marginTop: '3.25rem',
        marginLeft: '',
        translateAmount: `${panel.primaryRemWidth}rem`,
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.22)',
        maxWidth: `${panel.primaryRemWidth}rem`,
        width: `${panel.primaryRemWidth}rem`,
        flex: '1 0 auto'
      }
    case 'secondary':
      return {
        marginTop: '6rem',
        marginLeft: 'auto',
        translateAmount: `${panel.primaryRemWidth +
          panel.secondaryRemWidth}rem`,
        boxShadow: '',
        width: 'auto',
        flex: '1 1 auto',
        maxWidth: `${panel.secondaryRemWidth}rem`
      }
    case 'slim':
      return {
        marginTop: '0rem',
        marginLeft: '',
        translateAmount: `${panel.primaryRemWidth}rem`,
        boxShadow: '',
        maxWidth: `${panel.primaryRemWidth}rem`,
        width: `100%`
      }
    default:
      return {}
  }
}

export const PanelPane: React.SFC<PaneProps> = ({
  paneTransitionState,
  paneType,
  children,
  handlePaneTransitionEnd,
  ...props
}) => {
  const customStyles = getPaneStyles(paneType)

  const panelPaneCss = css`
    z-index: 10001;
    width: ${customStyles.width};
    max-width: ${customStyles.maxWidth};
    position: relative;
    transition: all 0.5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    height: calc(100% - ${customStyles.marginTop});
    border-top-left-radius: 0.75rem;
    box-shadow: ${customStyles.boxShadow};
    opacity: 1;
    margin: ${customStyles.marginTop} 0 0 auto;
    flex: ${customStyles.flex};
    @media ${mediaQueries.bpAboveSlimWidth} {
      background: white;
      margin: ${customStyles.marginTop} 0 0 ${customStyles.marginLeft};
    }
    @media ${mediaQueries.bpAboveTwoPanelFullWidth} {
      width: ${customStyles.maxWidth};
    }
  `

  const panelClosedCss = css`
    transform: translate3d(${customStyles.translateAmount}, 0, 0);
    opacity: 0;
  `

  const fevoPanelPaneClasses = `${paneType}-panel-pane ${panelPaneCss} ${
    paneTransitionState === PanelTransitionState.OPENED ||
    paneTransitionState === PanelTransitionState.OPENING
      ? ''
      : panelClosedCss
  }`

  return (
    <article
      className={fevoPanelPaneClasses}
      onTransitionEnd={handlePaneTransitionEnd}
    >
      <section className={panelCss.panelContent}>{children}</section>
    </article>
  )
}
