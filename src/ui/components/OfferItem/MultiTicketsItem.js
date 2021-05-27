"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
/** @component */
const EventOfferItem = ({ offerItem, className, onSelectOffer, eventAdjustCta, onAdditionalMediaSelect }) => {
    const rewardCopy = offerItem.rewardCopy;
    const additionalMedia = offerItem.additionalMedia;
    return (React.createElement("article", { className: `${styles_1.offerItemStyles.offerItemContainerCss} ${offerItem.type} ${className ? className : ''}`, onClick: () => onSelectOffer() },
        React.createElement("section", { className: styles_1.offerItemStyles.offerItemCss },
            additionalMedia && eventAdjustCta ? (React.createElement("section", { className: styles_1.offerItemStyles.offerImageCss },
                React.createElement("div", { className: styles_1.offerItemStyles.offerImageCss, style: { backgroundImage: `url(${offerItem.thumbnailImage})` } }),
                React.createElement("a", { className: styles_1.offerItemStyles.seatmapCss, onClick: () => onAdditionalMediaSelect() }, "Seatmap"))) : (React.createElement("div", { className: styles_1.offerItemStyles.offerImageCss, style: { backgroundImage: `url(${offerItem.thumbnailImage})` } })),
            React.createElement("section", { className: styles_1.offerItemStyles.offerContentCss },
                React.createElement("header", { className: styles_1.offerItemStyles.offerItemTitleCss }, offerItem.title),
                React.createElement("div", { className: "offer-item-description" }, offerItem.description),
                rewardCopy ? (React.createElement("div", { className: styles_1.offerItemStyles.offerItemRewardCss }, rewardCopy)) : (undefined))),
        eventAdjustCta));
};
exports.default = EventOfferItem;
