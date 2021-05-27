"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const context_1 = require("router/context");
class RoutesProvider extends React.Component {
    render() {
        const { children } = this.props;
        return (React.createElement(context_1.ContextSubscriber, null, ({ router, states }) => {
            const name = router.stateService.current.name;
            const state = states.find(s => s.name === name);
            const currentParams = router.stateService.params;
            const go = (transitionName, params) => {
                router.stateService.go(transitionName, params ? params : currentParams);
            };
            const addedProps = {
                routes: {
                    params: currentParams,
                    state: name,
                    go
                }
            };
            return children(addedProps);
        }));
    }
}
exports.default = RoutesProvider;
