"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RoutesProvider_1 = require("router/RoutesProvider");
function withRoutes() {
    return Component => props => (React.createElement(RoutesProvider_1.default, null, provided => React.createElement(Component, Object.assign({}, props, provided))));
}
exports.default = withRoutes;
