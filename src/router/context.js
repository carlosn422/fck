"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_broadcast_1 = require("react-broadcast");
const ROUTING_CONTEXT = 'routingContext';
exports.ContextBroadcast = props => (React.createElement(react_broadcast_1.Broadcast, Object.assign({}, props, { channel: ROUTING_CONTEXT })));
exports.ContextSubscriber = props => (React.createElement(react_broadcast_1.Subscriber, Object.assign({}, props, { channel: ROUTING_CONTEXT })));
