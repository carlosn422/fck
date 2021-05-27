"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const panelQuery_gql_1 = require("data/clientQueries/panelQuery.gql");
const PanelTypes_1 = require("./PanelTypes");
const Panel_1 = require("./Panel");
class PanelQuery extends react_apollo_1.Query {
}
const PanelLayout = layoutProps => {
    return (React.createElement(PanelQuery, { query: panelQuery_gql_1.default }, result => {
        const panelState = result.data.panelState;
        return React.createElement(Panel_1.Panel, Object.assign({}, layoutProps, { panelState: panelState }));
    }));
};
exports.PanelResolverAndDefaults = {
    defaults: {
        panelState: {
            panelTransitionState: PanelTypes_1.PanelTransitionState.CLOSED,
            scrollTop: 0,
            primaryPaneState: PanelTypes_1.PanelTransitionState.CLOSED,
            secondaryPaneState: PanelTypes_1.PanelTransitionState.CLOSED,
            __typename: 'PanelState'
        }
    }
};
exports.default = PanelLayout;
