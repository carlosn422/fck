"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_emotion_1 = require("react-emotion");
const CartButton_1 = require("components/CartButton/CartButton");
const offerMediaContainerCss = react_emotion_1.css `
  position: absolute;
  width: 100%;
`;
const offerMediaCss = 'media ' +
    react_emotion_1.css `
    width: 100%;
    height: 12rem;
    border-top-left-radius: 0.75rem;
  `;
const overlayCss = react_emotion_1.css `
  width: 100%;
  height: 12rem;
  position: absolute;
  background: rgba(0, 0, 0, 0.25);
`;
const cartIconCss = react_emotion_1.css `
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`;
const SlimHeader = ({ offer, numItemsInCart }) => {
    return (React.createElement("article", { className: offerMediaContainerCss },
        React.createElement("div", { className: overlayCss }),
        React.createElement("div", { className: offerMediaCss, style: {
                background: `url(${offer.media[0]}) no-repeat center`,
                backgroundSize: 'cover'
            } }),
        React.createElement(CartButton_1.default, { numberOfItems: numItemsInCart, fill: 'white', className: cartIconCss })));
};
exports.default = SlimHeader;
