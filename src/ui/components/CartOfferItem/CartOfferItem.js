"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const trashcan_svg_1 = require("../../svg-icons/trashcan.svg");
const utils_1 = require("cart/utils");
const variables_1 = require("css/variables");
const react_emotion_1 = require("react-emotion");
const cartItemDetails = react_emotion_1.css `
  font-family: ${variables_1.typography.fontSecondary};
  font-size: ${12 / 16}rem;
  color: #908f8f;
`;
exports.CartOfferItem = ({ cartItem, offerItem, shouldHideBorder, onRemoveItem }) => {
    const onRemove = () => onRemoveItem && onRemoveItem(offerItem.id);
    return (React.createElement("article", { className: styles_1.cartItemStyles.cartItemCss, style: { borderBottom: shouldHideBorder ? `none` : `` } },
        React.createElement("section", { className: styles_1.cartItemStyles.cartImageCss, style: { backgroundImage: `url(${offerItem.thumbnailImage})` } }),
        React.createElement("section", { className: styles_1.cartItemStyles.offerContentCss },
            React.createElement("header", { className: styles_1.cartItemStyles.cartOfferTitleCss }, offerItem.title),
            React.createElement("div", { className: cartItemDetails }, offerItem.detailCopy &&
                `${offerItem &&
                    offerItem.detailCopy}`)),
        React.createElement("section", { className: styles_1.cartItemStyles.priceCtaContainerCss },
            React.createElement("div", { className: styles_1.cartItemStyles.cartOfferQuantityPrice }, cartItem.quantity)),
        React.createElement("section", { className: styles_1.cartItemStyles.quantityContainerCss },
            React.createElement("div", { className: styles_1.cartItemStyles.cartOfferQuantityPrice }, utils_1.formatPrice(offerItem.startingPrice * cartItem.quantity))),
        React.createElement("section", null, onRemoveItem && (React.createElement("div", { className: styles_1.cartItemStyles.remove },
            React.createElement(trashcan_svg_1.default, { className: styles_1.cartItemStyles.removeIcon, onClick: onRemove }))))));
};
