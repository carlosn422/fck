"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
const PanelTypes_1 = require("./PanelTypes");
const styles_1 = require("./styles");
const getPaneStyles = (paneType) => {
    switch (paneType) {
        case 'primary':
            return {
                marginTop: '3.25rem',
                marginLeft: '',
                translateAmount: `${variables_1.panel.primaryRemWidth}rem`,
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.22)',
                maxWidth: `${variables_1.panel.primaryRemWidth}rem`,
                width: `${variables_1.panel.primaryRemWidth}rem`,
                flex: '1 0 auto'
            };
        case 'secondary':
            return {
                marginTop: '6rem',
                marginLeft: 'auto',
                translateAmount: `${variables_1.panel.primaryRemWidth +
                    variables_1.panel.secondaryRemWidth}rem`,
                boxShadow: '',
                width: 'auto',
                flex: '1 1 auto',
                maxWidth: `${variables_1.panel.secondaryRemWidth}rem`
            };
        case 'slim':
            return {
                marginTop: '0rem',
                marginLeft: '',
                translateAmount: `${variables_1.panel.primaryRemWidth}rem`,
                boxShadow: '',
                maxWidth: `${variables_1.panel.primaryRemWidth}rem`,
                width: `100%`
            };
        default:
            return {};
    }
};
exports.PanelPane = (_a) => {
    var { paneTransitionState, paneType, children, handlePaneTransitionEnd } = _a, props = __rest(_a, ["paneTransitionState", "paneType", "children", "handlePaneTransitionEnd"]);
    const customStyles = getPaneStyles(paneType);
    const panelPaneCss = react_emotion_1.css `
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
    @media ${variables_1.mediaQueries.bpAboveSlimWidth} {
      background: white;
      margin: ${customStyles.marginTop} 0 0 ${customStyles.marginLeft};
    }
    @media ${variables_1.mediaQueries.bpAboveTwoPanelFullWidth} {
      width: ${customStyles.maxWidth};
    }
  `;
    const panelClosedCss = react_emotion_1.css `
    transform: translate3d(${customStyles.translateAmount}, 0, 0);
    opacity: 0;
  `;
    const fevoPanelPaneClasses = `${paneType}-panel-pane ${panelPaneCss} ${paneTransitionState === PanelTypes_1.PanelTransitionState.OPENED ||
        paneTransitionState === PanelTypes_1.PanelTransitionState.OPENING
        ? ''
        : panelClosedCss}`;
    return (React.createElement("article", { className: fevoPanelPaneClasses, onTransitionEnd: handlePaneTransitionEnd },
        React.createElement("section", { className: styles_1.panelCss.panelContent }, children)));
};
