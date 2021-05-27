"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_emotion_1 = require("react-emotion");
const CheckoutSummaryEmptyState = ({}) => {
    return (React.createElement("article", { className: react_emotion_1.css `
        padding: 2rem;
      ` },
        React.createElement("h1", null, "Whoops!"),
        React.createElement("div", null, "Looks like your cart is empty"),
        React.createElement("button", { onClick: () => {
                console.log('yo');
            } }, "GO TO OFFERS")));
};
exports.default = CheckoutSummaryEmptyState;
