"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
const fevoPanelClass = react_emotion_1.css `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  -webkit-overflow-scrolling: touch;
  /* transform: translate3d(0, 0, 0); */
`;
exports.panelCss = {
    fevoPanelClass,
    fevoPanelClosedClass: react_emotion_1.css `
    ${fevoPanelClass} position: initial;
    z-index: -1;
    /* transform: translate3d(-72rem, 0, 0); */
    overflow: hidden;
    visibility: hidden;
    height: 0;
  `,
    panelBgClass: react_emotion_1.css `
    background-color: rgba(20, 20, 20, 0.75);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    transition: all 0.5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
  `,
    panelContent: react_emotion_1.css `
    border-radius: 0;
    padding: 0;
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    @media ${variables_1.mediaQueries.bpAboveSlimWidth} {
      overflow: initial;
    }
  `,
    panelContainer: react_emotion_1.css `
    height: calc(100% - 4rem);
    position: relative;
    margin-top: 4rem;
    @media ${variables_1.mediaQueries.bpAboveSlimWidth} {
      margin-top: 0;

      padding: ${variables_1.spacers.twoPanelLayoutPadding}rem;
      height: calc(100% - 5.625rem);
    }
  `,
    panelScrollableContainer: react_emotion_1.css `
    overflow: auto;
    overflow: overlay;
    height: calc(100% - 4rem);
    position: relative;
    margin-top: 4rem;
    @media ${variables_1.mediaQueries.bpAboveSlimWidth} {
      margin-top: 0;

      padding: ${variables_1.spacers.twoPanelLayoutPadding}rem;
      height: calc(100% - 5.625rem);
    }
  `,
    panelNoFooterScrollableContainer: react_emotion_1.css `
    padding: ${variables_1.spacers.singlePanelPadding}rem;
    @media ${variables_1.mediaQueries.bpAboveSlimWidth} {
      overflow: auto;
      padding: ${variables_1.spacers.twoPanelLayoutPadding}rem;
      overflow: overlay;
      height: 100%;
    }
  `,
    defaultPanel: react_emotion_1.css `
    padding: ${variables_1.spacers.singlePanelPadding}rem;
  `,
    paneContainer: react_emotion_1.css `
    display: flex;
    align-items: center;
    height: 100%;
  `,
    closeBtnClass: 'icon-close ' +
        react_emotion_1.css `
      stroke: white;
      width: 1rem;
      height: 1rem;
      left: 0.25rem;
      top: 0.25rem;
      position: absolute;
      cursor: pointer;
      z-index: 10001;
      @media ${variables_1.mediaQueries.bpAboveSlimWidth} {
        top: 0.625rem;
        left: initial;
        right: 0.625rem;
        width: 1.125rem;
        height: 1.125rem;
      }
    `,
    fevoPanelHeaderClass: react_emotion_1.css `
    width: 100%;
    position: relative;
    z-index: inherit;
    background: transparent;
    z-index: 10003;
    height: 0;
  `,
    confetti: react_emotion_1.css `
    position: absolute;
    z-index: 10001;
    right: 0;
    top: 0;
    pointer-events: none;
  `
};
