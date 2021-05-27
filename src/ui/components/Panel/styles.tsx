import { css } from 'react-emotion'
import { mediaQueries, spacers } from 'css/variables'

const fevoPanelClass = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  -webkit-overflow-scrolling: touch;
  /* transform: translate3d(0, 0, 0); */
`
export const panelCss = {
  fevoPanelClass,
  fevoPanelClosedClass: css`
    ${fevoPanelClass} position: initial;
    z-index: -1;
    /* transform: translate3d(-72rem, 0, 0); */
    overflow: hidden;
    visibility: hidden;
    height: 0;
  `,
  panelBgClass: css`
    background-color: rgba(20, 20, 20, 0.75);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    transition: all 0.5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
  `,
  panelContent: css`
    border-radius: 0;
    padding: 0;
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    @media ${mediaQueries.bpAboveSlimWidth} {
      overflow: initial;
    }
  `,
  panelContainer: css`
    height: calc(100% - 4rem);
    position: relative;
    margin-top: 4rem;
    @media ${mediaQueries.bpAboveSlimWidth} {
      margin-top: 0;

      padding: ${spacers.twoPanelLayoutPadding}rem;
      height: calc(100% - 5.625rem);
    }
  `,
  panelScrollableContainer: css`
    overflow: auto;
    overflow: overlay;
    height: calc(100% - 4rem);
    position: relative;
    margin-top: 4rem;
    @media ${mediaQueries.bpAboveSlimWidth} {
      margin-top: 0;

      padding: ${spacers.twoPanelLayoutPadding}rem;
      height: calc(100% - 5.625rem);
    }
  `,
  panelNoFooterScrollableContainer: css`
    padding: ${spacers.singlePanelPadding}rem;
    @media ${mediaQueries.bpAboveSlimWidth} {
      overflow: auto;
      padding: ${spacers.twoPanelLayoutPadding}rem;
      overflow: overlay;
      height: 100%;
    }
  `,
  defaultPanel: css`
    padding: ${spacers.singlePanelPadding}rem;
  `,
  paneContainer: css`
    display: flex;
    align-items: center;
    height: 100%;
  `,
  closeBtnClass:
    'icon-close ' +
    css`
      stroke: white;
      width: 1rem;
      height: 1rem;
      left: 0.25rem;
      top: 0.25rem;
      position: absolute;
      cursor: pointer;
      z-index: 10001;
      @media ${mediaQueries.bpAboveSlimWidth} {
        top: 0.625rem;
        left: initial;
        right: 0.625rem;
        width: 1.125rem;
        height: 1.125rem;
      }
    `,
  fevoPanelHeaderClass: css`
    width: 100%;
    position: relative;
    z-index: inherit;
    background: transparent;
    z-index: 10003;
    height: 0;
  `,
  confetti: css`
    position: absolute;
    z-index: 10001;
    right: 0;
    top: 0;
    pointer-events: none;
  `
}
