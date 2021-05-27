"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WithState = (initial) => (Component) => class WithStateClass extends React.Component {
    constructor() {
        super(...arguments);
        this.state = initial;
    }
    render() {
        const setState = newState => this.setState(newState);
        const props = Object.assign({ setState }, this.props, this.state);
        return React.createElement(Component, Object.assign({}, props));
    }
};
exports.default = WithState;
