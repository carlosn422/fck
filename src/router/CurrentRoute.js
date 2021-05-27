"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("@uirouter/react");
const core_1 = require("@uirouter/core");
const context_1 = require("./context");
/**
 * Given a set of states and components, uses ui router to render the correct component.
 * This also sets up context for withRoutes to function correctly.
 * Check state and component definitions to see how urls map to specific react components
 */
const CurrentRoute = ({ routes }) => {
    const router = new react_1.UIRouterReact();
    window['router'] = router;
    const plugins = [core_1.servicesPlugin, react_1.pushStateLocationPlugin];
    plugins.forEach(plugin => router.plugin(plugin));
    routes.forEach(state => router.stateRegistry.register(state));
    const context = { router, states: routes };
    return (React.createElement(context_1.ContextBroadcast, { value: context },
        React.createElement(react_1.UIRouter, { router: router },
            React.createElement(React.Fragment, null,
                React.createElement(react_1.UIView, null)))));
};
exports.default = CurrentRoute;
