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
const TimedAdjustCta = ({ offerItem, userSelection, offerItemCartData, setOfferItemData, addToCart }) => {
    return (React.createElement("section", { className: styles_1.offerItemStyles.adjustCtaContainerCss },
        React.createElement("article", { className: "adjust-container" },
            React.createElement(OfferItemQuantityAdjust_1.OfferItemQuantityAdjust, { offerItem: offerItem, offerItemData: offerItemCartData, setOfferItemData: setOfferItemData })),
        React.createElement("button", { className: styles_1.offerItemStyles.ctaCss, disabled: !offerItemCartData ||
                !offerItemCartData.quantity ||
                !userSelection.chosenTime.selectedTimeSlot, onClick: () => {
                if (offerItemCartData &&
                    offerItemCartData.quantity &&
                    userSelection.chosenTime.selectedTimeSlot) {
                    const { quantity, offerItemId } = offerItemCartData, selectionData = __rest(offerItemCartData, ["quantity", "offerItemId"]);
                    addToCart({
                        offerItemId,
                        quantity,
                        selectionData: JSON.stringify(selectionData)
                    });
                }
            } }, "Add to cart")));
};
exports.default = TimedAdjustCta;
