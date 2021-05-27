"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Confetti_1 = require("components/Confetti");
const panelHelper_1 = require("components/Panel/panelHelper");
const variables_1 = require("css/variables");
const React = require("react");
const react_apollo_1 = require("react-apollo");
const react_emotion_1 = require("react-emotion");
const react_responsive_1 = require("react-responsive");
const close_svg_1 = require("../../svg-icons/close.svg");
const PanelPane_1 = require("./PanelPane");
const PanelTypes_1 = require("./PanelTypes");
const styles_1 = require("./styles");
exports.Panel = ({ panelState, Primary, Secondary, Slim, showConfetti }) => {
    const { panelTransitionState, scrollTop, primaryPaneState, secondaryPaneState } = panelState;
    return (React.createElement(react_apollo_1.ApolloConsumer, null, client => {
        const setPanelState = newState => {
            client.writeData({
                data: {
                    panelState: Object.assign({}, panelState, newState)
                }
            });
        };
        const fevoPanelClasses = `fevo-panel ${panelTransitionState === PanelTypes_1.PanelTransitionState.CLOSED
            ? styles_1.panelCss.fevoPanelClosedClass
            : styles_1.panelCss.fevoPanelClass}`;
        const fevoPanelBgClasses = `fevo-panel-bg ${styles_1.panelCss.panelBgClass} ${panelTransitionState === PanelTypes_1.PanelTransitionState.CLOSED
            ? react_emotion_1.css `
                opacity: 0;
              `
            : ''} `;
        const panelStyles = { top: scrollTop, bottom: -1 * scrollTop };
        return (React.createElement("div", { className: fevoPanelClasses, style: panelStyles, id: "fevo-panel" },
            React.createElement(react_responsive_1.default, { query: variables_1.mediaQueries.bpUptoSlimWidth },
                React.createElement("header", { className: styles_1.panelCss.fevoPanelHeaderClass },
                    React.createElement(close_svg_1.default, { className: styles_1.panelCss.closeBtnClass, onClick: () => panelHelper_1.onClose('single', panelTransitionState, setPanelState) })),
                React.createElement("div", { className: styles_1.panelCss.paneContainer },
                    React.createElement(PanelPane_1.PanelPane, { paneTransitionState: primaryPaneState, paneType: "slim", handlePaneTransitionEnd: () => panelHelper_1.handleTransitionEnd('primary', 'single', panelTransitionState, setPanelState, scrollTop) }, Slim ? (Slim()) : (React.createElement(React.Fragment, null,
                        Primary(),
                        " ",
                        Secondary())))),
                React.createElement("div", { className: fevoPanelBgClasses, onClick: () => panelHelper_1.onClose('single', panelTransitionState, setPanelState) })),
            React.createElement(react_responsive_1.default, { query: variables_1.mediaQueries.bpAboveSlimWidth },
                React.createElement("header", { className: styles_1.panelCss.fevoPanelHeaderClass },
                    React.createElement(close_svg_1.default, { className: styles_1.panelCss.closeBtnClass, onClick: () => panelHelper_1.onClose('double', panelTransitionState, setPanelState) })),
                React.createElement("div", { className: styles_1.panelCss.paneContainer },
                    React.createElement(PanelPane_1.PanelPane, { paneTransitionState: secondaryPaneState, handlePaneTransitionEnd: () => panelHelper_1.handleTransitionEnd('secondary', 'double', panelTransitionState, setPanelState, scrollTop), paneType: "secondary" }, Secondary()),
                    React.createElement(PanelPane_1.PanelPane, { paneTransitionState: primaryPaneState, paneType: "primary", handlePaneTransitionEnd: () => panelHelper_1.handleTransitionEnd('primary', 'double', panelTransitionState, setPanelState, scrollTop) }, Primary())),
                React.createElement("div", { className: fevoPanelBgClasses, onClick: () => panelHelper_1.onClose('double', panelTransitionState, setPanelState) })),
            showConfetti &&
                showConfetti() && React.createElement(Confetti_1.default, { className: styles_1.panelCss.confetti })));
    }));
};
