"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const Dropdown_1 = require("components/Shared/Dropdown");
const OfferItemQuantityAdjust_1 = require("components/OfferItem/OfferItemQuantityAdjust");
const MerchAdjustCta = props => {
    const { offerItem, setOfferItemData, offerItemCartData, addToCart } = props;
    const { productDetails } = offerItem;
    return (React.createElement("section", { className: styles_1.offerItemStyles.adjustCtaContainerCss },
        React.createElement("article", { className: "adjust-container" },
            React.createElement(OfferItemQuantityAdjust_1.OfferItemQuantityAdjust, { offerItem: offerItem, offerItemData: offerItemCartData, setOfferItemData: setOfferItemData }),
            productDetails.sizes &&
                !!productDetails.sizes.length && (React.createElement("div", { className: `size-container ${styles_1.offerItemStyles.skuContainerCss}` },
                React.createElement("div", { className: styles_1.offerItemStyles.skuTitleCss }, "Size"),
                React.createElement(Dropdown_1.Dropdown, { collection: productDetails.sizes, selectedItem: offerItemCartData ? offerItemCartData.size : undefined, onSelect: item => setOfferItemData({
                        offerItemId: offerItem.id,
                        size: item,
                        quantity: offerItemCartData ? offerItemCartData.quantity : 0
                    }), className: styles_1.offerItemStyles.dropdownCss }))),
            productDetails.colors &&
                !!productDetails.colors.length && (React.createElement("div", { className: `color-container ${styles_1.offerItemStyles.skuContainerCss}` },
                React.createElement("div", { className: styles_1.offerItemStyles.skuTitleCss }, "Color"),
                React.createElement(Dropdown_1.Dropdown, { collection: productDetails.colors, selectedItem: offerItemCartData ? offerItemCartData.color : undefined, onSelect: item => setOfferItemData({
                        offerItemId: offerItem.id,
                        color: item,
                        quantity: offerItemCartData ? offerItemCartData.quantity : 0
                    }), className: styles_1.offerItemStyles.dropdownCss })))),
        React.createElement("button", { className: styles_1.offerItemStyles.ctaCss, disabled: !offerItemCartData || !offerItemCartData.quantity, onClick: () => {
                if (offerItemCartData && offerItemCartData.quantity > 0) {
                    const { quantity } = offerItemCartData, selectionData = __rest(offerItemCartData, ["quantity"]);
                    addToCart({
                        offerItemId: offerItem.id,
                        quantity: offerItemCartData.quantity,
                        selectionData: JSON.stringify(selectionData)
                    });
                    console.log('adding to cart... ', offerItem.id, offerItemCartData);
                }
            } }, "Add to cart")));
};
exports.default = MerchAdjustCta;
