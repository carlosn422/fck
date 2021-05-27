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
const OfferItemQuantityAdjust_1 = require("components/OfferItem/OfferItemQuantityAdjust");
const MultiTicketAdjustCta = ({ offerItem, offerItemCartData, setOfferItemData, addToCart }) => {
    return (React.createElement("section", { className: styles_1.offerItemStyles.adjustCtaContainerCss },
        React.createElement("article", { className: "adjust-container" }, offerItem.offerItems.map((item, index) => {
            return (React.createElement("article", { key: item.id },
                React.createElement("div", { className: styles_1.offerItemStyles.adjustContianer },
                    React.createElement("div", { className: styles_1.offerItemStyles.adjustTitle }, `${item.title} - $${item.startingPrice}`),
                    React.createElement(OfferItemQuantityAdjust_1.OfferItemQuantityAdjust, { key: item.id, offerItem: item, offerItemData: offerItemCartData && offerItemCartData[index], setOfferItemData: d => {
                            setOfferItemData(item, d);
                        } }))));
        })),
        React.createElement("button", { className: styles_1.offerItemStyles.ctaCss, disabled: !offerItemCartData, onClick: () => offerItemCartData &&
                offerItemCartData.map((cd, i) => {
                    const { quantity, offerItemId } = cd, selectionData = __rest(cd, ["quantity", "offerItemId"]);
                    if (cd.quantity > 0) {
                        setTimeout(function () {
                            addToCart({
                                offerItemId,
                                quantity,
                                selectionData: JSON.stringify(selectionData)
                            });
                        }, 500 * i);
                    }
                }) }, "Add to cart")));
};
var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
exports.default = MultiTicketAdjustCta;
