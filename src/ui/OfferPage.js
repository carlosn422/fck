"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@uirouter/react");
const PanelTypes_1 = require("components/Panel/PanelTypes");
const panelHelper_1 = require("components/Panel/panelHelper");
const React = require("react");
const react_apollo_1 = require("react-apollo");
const DrawerButton = () => {
    return (React.createElement(react_apollo_1.ApolloConsumer, null, client => {
        const onClick = () => {
            // This will be triggered by sdk code
            const windowTop = window.scrollY;
            panelHelper_1.updateBodyForOpening(windowTop);
            // this belongs to our fuc app
            client.writeData({
                data: {
                    panelState: {
                        panelTransitionState: PanelTypes_1.PanelTransitionState.OPENING,
                        primaryPaneState: PanelTypes_1.PanelTransitionState.OPENING,
                        secondaryPaneState: PanelTypes_1.PanelTransitionState.CLOSED,
                        scrollTop: windowTop,
                        __typename: 'PanelState'
                    }
                }
            });
        };
        return (React.createElement("div", { style: {
                // @ts-ignore
                background: `url(${window.clientBg}) no-repeat top center`,
                backgroundSize: 'cover',
                // @ts-ignore
                height: `${window.clientBgIsScrollable === 'true' && '250vh'}`
            }, className: `fuc-demo-container`, onClick: onClick }));
    }));
};
const OfferPage = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(DrawerButton, null),
        React.createElement(react_1.UIView, null)));
};
exports.default = OfferPage;
