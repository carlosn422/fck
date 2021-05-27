"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const helpers_1 = require("components/Offer/helpers");
const Facepile_1 = require("../Facepile/Facepile");
const sampleData_1 = require("../Facepile/sampleData");
const PriceContainer_1 = require("components/OfferItem/PriceContainer");
/** @component */
const TimedOfferItem = ({ offerItem, className, showDemoData, onSelectOffer, timedAdjustCta }) => {
    const startingPrice = helpers_1.calcStartingPrice(offerItem);
    const rewardCopy = offerItem.rewardCopy;
    const description = offerItem.description;
    // add location stuff, or stars, or something else ?? How do I know UI requirements of different levels in heirarchy?
    return (React.createElement("article", { className: `${styles_1.offerItemStyles.offerItemContainerCss} ${offerItem.type} ${className ? className : ''}`, onClick: () => onSelectOffer() },
        React.createElement("section", { className: styles_1.offerItemStyles.offerItemCss },
            React.createElement("section", { className: styles_1.offerItemStyles.offerImageCss, style: { backgroundImage: `url(${offerItem.thumbnailImage})` } }),
            React.createElement("section", { className: styles_1.offerItemStyles.offerContentCss },
                React.createElement("header", { className: `offer-title ${styles_1.offerItemStyles.offerItemTitleCss}` }, offerItem.title),
                React.createElement("div", { className: "offer-description" }, description),
                rewardCopy ? (React.createElement("div", { className: styles_1.offerItemStyles.offerItemRewardCss }, rewardCopy)) : (undefined),
                showDemoData ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: styles_1.offerItemStyles.inventoryLeft }, "Only 5 left"),
                    React.createElement(Facepile_1.default, { images: sampleData_1.images }))) : (undefined)),
            PriceContainer_1.default(helpers_1.isOffer(offerItem), startingPrice)),
        timedAdjustCta));
};
exports.default = TimedOfferItem;
