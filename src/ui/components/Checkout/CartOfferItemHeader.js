"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("../CartOfferItem/styles");
const CartOfferItemHeader = ({ showingRemove }) => {
    return (React.createElement("article", { className: styles_1.cartItemHeaderStyles.headerItemCss },
        React.createElement("section", { className: styles_1.cartItemHeaderStyles.image },
            React.createElement("div", { className: styles_1.cartItemHeaderStyles.offerItemTitle }, "ITEMS")),
        React.createElement("section", { className: styles_1.cartItemStyles.offerContentCss }),
        React.createElement("section", { className: styles_1.cartItemStyles.priceCtaContainerCss },
            React.createElement("div", { className: styles_1.cartItemHeaderStyles.offerItemTitle }, "QTY")),
        React.createElement("section", { className: styles_1.cartItemStyles.quantityContainerCss },
            React.createElement("div", { className: styles_1.cartItemHeaderStyles.offerItemTitle }, "AMOUNT")),
        React.createElement("section", null, showingRemove && React.createElement("div", { className: styles_1.cartItemHeaderStyles.removeIcon }))));
};
exports.default = CartOfferItemHeader;
