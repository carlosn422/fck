"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("components/Panel/styles");
const React = require("react");
const PrimaryLayout = ({ offer, offerPreHeader, addToCart, checkoutCTA, dateLocation, header, body }) => (React.createElement(React.Fragment, null,
    React.createElement("article", { className: styles_1.panelCss.panelScrollableContainer },
        offerPreHeader,
        header,
        body),
    checkoutCTA));
exports.default = PrimaryLayout;
