"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Apollo_1 = require("./Apollo");
const states_1 = require("./states");
const React = require("react");
const ApolloProvider_1 = require("react-apollo/ApolloProvider");
const CurrentRoute_1 = require("router/CurrentRoute");
class RenderForcer extends React.Component {
    componentWillMount() {
        this.forceUpdate();
    }
    render() {
        return this.props.children;
    }
}
const App = () => {
    const apolloProvider = () => {
        return (
        // @ts-ignore
        React.createElement(ApolloProvider_1.default, { client: Apollo_1.default },
            React.createElement(CurrentRoute_1.default, { routes: states_1.states })));
    };
    return React.createElement(RenderForcer, null, apolloProvider());
};
exports.default = App;
