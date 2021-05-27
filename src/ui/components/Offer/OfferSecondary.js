"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
const Rewards_1 = require("components/Rewards/Rewards");
const crown_svg_1 = require("../../svg-icons/crown.svg");
const offerTypes_1 = require("custom-typings/offerTypes");
const offerSecondaryCss = react_emotion_1.css `
  height: 100%;
`;
const offerDetailsCss = withRewards => 'offer-details ' +
    react_emotion_1.css `
    height: ${withRewards ? 'calc(100% - 5.6rem)' : '100%'};
    overflow: auto;
    overflow: overlay;
    border-top-left-radius: 0.75rem;
  `;
const offerMedia = 'media ' +
    react_emotion_1.css `
    width: 100%;
    height: 20rem;
    border-top-left-radius: 0.75rem;
    background-size: cover;
    background-position: center;
  `;
const htmlDetailsCss = react_emotion_1.css `
  padding: 2rem;
`;
const imageDetailCss = react_emotion_1.css `
  height: 35rem;
  margin: 0 3rem;
`;
const titleContainer = react_emotion_1.css `
  padding: 2rem 2rem 0 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`;
const crown = react_emotion_1.css `
  width: 1.5rem;
  height: 1.5rem;
  fill: ${variables_1.colors.brandColor};
  margin: 0 0.7rem 0.5rem 0;
`;
const leadeboardTitle = react_emotion_1.css `
  ${variables_1.fonts.mainHeading};
  font-size: 1.35rem;
  color: ${variables_1.colors.brandColor};
`;
let hackCheck = {};
const OfferSecondary = ({ offer, offerPage, selectedOfferItem, selectedAdditionalOfferItem }) => {
    let media = selectedOfferItem !== undefined && selectedOfferItem.media
        ? selectedOfferItem.media
        : offer.media[0];
    const description = selectedOfferItem !== undefined &&
        selectedOfferItem.htmlDescription !== null &&
        selectedOfferItem.htmlDescription !== ''
        ? selectedOfferItem.htmlDescription
        : offer.details;
    if (selectedAdditionalOfferItem &&
        selectedOfferItem &&
        selectedAdditionalOfferItem.additionalMedia &&
        selectedAdditionalOfferItem.id === selectedOfferItem.id) {
        media = selectedAdditionalOfferItem.additionalMedia;
    }
    if (hackCheck !== offer) {
        hackCheck = offer;
        media = offer.media[0];
    }
    const fnaticsChecks = offerPage.uri === 'fanatics-sfgiants-merch' ||
        offerPage.uri === 'fanatics-sfgiants-games' ||
        offerPage.uri === 'fanatics-bleach-merch';
    const thompsonCheck = offerPage.uri === 'thompson' ||
        offerPage.uri === 'thompson-hotels' ||
        offerPage.uri === 'mgm-hotels';
    return (React.createElement("article", { className: offerSecondaryCss },
        React.createElement("section", { className: offerDetailsCss(offer.rewards) },
            React.createElement("div", { className: offerMedia, style: { backgroundImage: `url(${media})` } }),
            offer.type === offerTypes_1.OfferItemType.Mixed ||
                offer.uri === 'thompson-hotels' ||
                offer.uri === 'mgm-hotels' ? (React.createElement(React.Fragment, null,
                React.createElement("section", { className: titleContainer },
                    React.createElement(crown_svg_1.default, { className: crown }),
                    React.createElement("div", { className: leadeboardTitle }, offerPage.groupvizTitle
                        ? offerPage.groupvizTitle
                        : fnaticsChecks
                            ? `Who's buying`
                            : thompsonCheck
                                ? `Who's staying`
                                : `Who's going`)),
                React.createElement("div", { className: imageDetailCss, style: {
                        background: `url(${offerPage.leaderboardImage})
              no-repeat center`,
                        backgroundSize: 'contain'
                    } }))) : (React.createElement("div", { className: htmlDetailsCss, dangerouslySetInnerHTML: { __html: description } }))),
        offer.rewards && React.createElement(Rewards_1.default, { rewards: offer.rewards })));
};
exports.default = OfferSecondary;
