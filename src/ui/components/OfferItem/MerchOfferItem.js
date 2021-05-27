"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const helpers_1 = require("components/Offer/helpers");
const PriceContainer_1 = require("components/OfferItem/PriceContainer");
const Facepile_1 = require("../Facepile/Facepile");
const sampleData_1 = require("../Facepile/sampleData");
/** @component */
const MerchOfferItem = ({ offerItem, className, showDemoData, onSelectOffer, merchAdjustCta }) => {
    const startingPrice = helpers_1.calcStartingPrice(offerItem);
    const rewardCopy = offerItem.rewardCopy;
    return (React.createElement("article", { className: `${styles_1.offerItemStyles.offerItemContainerCss} ${offerItem.type} ${className ? className : ''}`, onClick: onSelectOffer },
        React.createElement("section", { className: styles_1.offerItemStyles.offerItemCss },
            React.createElement("section", { className: styles_1.offerItemStyles.offerImageCss, style: { backgroundImage: `url(${offerItem.thumbnailImage})` } }),
            React.createElement("section", { className: styles_1.offerItemStyles.offerContentCss },
                React.createElement("header", { className: `offer-title ${styles_1.offerItemStyles.offerItemTitleCss}` }, offerItem.title),
                React.createElement("div", { className: "offer-description" }, offerItem.description),
                rewardCopy ? (React.createElement("div", { className: "offer-reward-description" }, rewardCopy)) : (undefined),
                showDemoData && (React.createElement(React.Fragment, null,
                    React.createElement(Facepile_1.default, { images: sampleData_1.images }),
                    React.createElement("div", { className: styles_1.offerItemStyles.facepileText }, "Most popular"))),
                React.createElement("div", { className: styles_1.offerItemStyles.inventoryLeft }, offerItem.additionalDescription || ``)),
            PriceContainer_1.default(helpers_1.isOffer(offerItem), startingPrice)),
        merchAdjustCta));
};
exports.default = MerchOfferItem;
