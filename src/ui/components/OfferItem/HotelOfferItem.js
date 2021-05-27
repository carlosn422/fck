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
const helpers_1 = require("components/Offer/helpers");
const PriceContainer_1 = require("components/OfferItem/PriceContainer");
const Facepile_1 = require("../Facepile/Facepile");
const sampleData_1 = require("../Facepile/sampleData");
exports.CtaContainer = ({ offerItem, userSelections, addToCart }) => {
    return (React.createElement("section", { className: styles_1.offerItemStyles.adjustCtaContainerCss },
        React.createElement("button", { className: styles_1.offerItemStyles.ctaCss, disabled: !userSelections.travelDates.startDate ||
                !userSelections.travelDates.endDate ||
                !userSelections.roomPreferences.numRooms, onClick: () => {
                if (userSelections.roomPreferences.numRooms > 0) {
                    addToCart({
                        quantity: 1,
                        offerItemId: offerItem.id,
                        selectionData: JSON.stringify(userSelections)
                    });
                }
            } }, "Add to cart")));
};
/** @component */
const HotelOfferItem = (_a) => {
    var { offerItem, onSelectOffer, showDemoData, ctaContainer } = _a, props = __rest(_a, ["offerItem", "onSelectOffer", "showDemoData", "ctaContainer"]);
    const rewardCopy = offerItem.rewardCopy;
    const description = helpers_1.isOffer(offerItem)
        ? offerItem.address
        : offerItem.description;
    const startingPrice = offerItem.startingPrice
        ? offerItem.startingPrice : helpers_1.calcStartingPrice(offerItem);
    // add location stuff, or stars, or something else ?? How do I know UI requirements of different levels in heirarchy?
    return (React.createElement("article", { className: `${styles_1.offerItemStyles.offerItemContainerCss} ${offerItem.type} ${props.className ? props.className : ''}`, onClick: onSelectOffer },
        React.createElement("section", { className: styles_1.offerItemStyles.offerItemCss },
            React.createElement("section", { className: styles_1.offerItemStyles.offerImageCss, style: { backgroundImage: `url(${offerItem.thumbnailImage})` } }),
            React.createElement("section", { className: styles_1.offerItemStyles.offerContentCss },
                React.createElement("header", { className: `offer-title ${styles_1.offerItemStyles.offerItemTitleCss}` }, offerItem.title),
                React.createElement("div", { className: "offer-description" }, description.length > 1 ? description : offerItem.description),
                rewardCopy && (React.createElement("div", { className: styles_1.offerItemStyles.offerItemRewardCss }, rewardCopy)),
                showDemoData && (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: styles_1.offerItemStyles.inventoryLeft }, "In High Demand"),
                    React.createElement(Facepile_1.default, { images: sampleData_1.images })))),
            PriceContainer_1.default(helpers_1.isOffer(offerItem), startingPrice)),
        ctaContainer));
};
exports.default = HotelOfferItem;
