"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const cart_svg_1 = require("../../svg-icons/cart.svg");
const CartButton = ({ numberOfItems = 0, fill, className }) => {
    return (React.createElement("article", { className: `${styles_1.cartStyles.article} ${className}` },
        React.createElement("div", { className: styles_1.cartStyles.container },
            fill ? (React.createElement(cart_svg_1.default, { className: styles_1.cartStyles.icon, fill: fill })) : (React.createElement(cart_svg_1.default, { className: styles_1.cartStyles.icon })),
            numberOfItems > 0 ? (React.createElement("div", { className: styles_1.cartStyles.bubble },
                " ",
                numberOfItems,
                " ")) : (undefined))));
};
exports.default = CartButton;
