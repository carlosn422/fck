"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_emotion_1 = require("react-emotion");
const styles_1 = require("./styles");
const helpers_1 = require("components/Offer/helpers");
const variables_1 = require("css/variables");
const PriceContainer_1 = require("components/OfferItem/PriceContainer");
const cellDetails = react_emotion_1.css `
  ${variables_1.fonts.subText};
  display: flex;
  margin-bottom: 0.5rem;
  line-height: 1.2rem;
  :last-of-type: {
    margin-bottom: 0;
  }
`;
/** @component */
const EventOfferItem = ({ offerItem, className, onSelectOffer, eventAdjustCta, onAdditionalMediaSelect }) => {
    const startingPrice = helpers_1.calcStartingPrice(offerItem);
    const rewardCopy = offerItem.rewardCopy;
    const additionalMedia = offerItem.additionalMedia;
    return (React.createElement("article", { className: `${styles_1.offerItemStyles.offerItemContainerCss} ${offerItem.type} ${className ? className : ''}`, onClick: () => onSelectOffer() },
        React.createElement("section", { className: styles_1.offerItemStyles.offerItemCss },
            additionalMedia && eventAdjustCta ? (React.createElement("section", { className: styles_1.offerItemStyles.offerImageCss },
                React.createElement("div", { className: styles_1.offerItemStyles.offerImageCss, style: { backgroundImage: `url(${offerItem.thumbnailImage})` } }),
                React.createElement("a", { className: styles_1.offerItemStyles.seatmapCss, onClick: () => onAdditionalMediaSelect() }, "Seatmap"))) : (React.createElement("div", { className: styles_1.offerItemStyles.offerImageCss, style: { backgroundImage: `url(${offerItem.thumbnailImage})` } })),
            React.createElement("section", { className: styles_1.offerItemStyles.offerContentCss },
                React.createElement("header", { className: styles_1.offerItemStyles.offerItemTitleCss }, offerItem.title),
                React.createElement("div", { className: cellDetails }, offerItem.description),
                rewardCopy ? (React.createElement("div", { className: styles_1.offerItemStyles.offerItemRewardCss }, rewardCopy)) : (undefined)),
            PriceContainer_1.default(helpers_1.isOffer(offerItem), startingPrice, offerItem.title)),
        eventAdjustCta));
};
exports.default = EventOfferItem;
