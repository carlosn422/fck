"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const styles_2 = require("components/Panel/styles");
const Share_1 = require("components/Share/Share");
const OfferProvider_1 = require("data/OfferProvider");
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
const continueShoppingCss = react_emotion_1.css `
  ${variables_1.fonts.nav};
  margin: 0 0 2rem -0.75rem;
  display: inline-block;
  color: ${variables_1.colors.brandColor};
`;
const ConfirmationShare = ({ orderId, goToRootOffer, offerPageUri }) => {
    const { host, protocol } = window.location;
    const shareUrl = `${protocol}//${host}/offer/${offerPageUri}/share/${orderId}`;
    return (React.createElement(OfferProvider_1.default, null, ({ offerPage }) => (React.createElement("article", { className: styles_2.panelCss.panelNoFooterScrollableContainer },
        React.createElement("div", { className: continueShoppingCss, onClick: goToRootOffer },
            React.createElement("div", { className: 'backicon' }),
            "Continue Shopping"),
        React.createElement("section", { className: styles_1.confirmationStyles.sonyLuggageIcon, style: {
                background: `url(${offerPage.confirmationDetailsImage}) no-repeat center`,
                backgroundSize: 'contain'
            } }),
        React.createElement("div", { className: styles_1.confirmationStyles.grid },
            React.createElement("div", { className: styles_1.confirmationStyles.title }, offerPage.shareTitle),
            React.createElement("div", { className: styles_1.confirmationStyles.description }, offerPage.shareDetailsCopy),
            React.createElement(Share_1.default, { url: shareUrl }),
            React.createElement("section", { className: styles_1.confirmationStyles.progress, style: {
                    background: `url(${offerPage.progressImage}) no-repeat center`,
                    backgroundSize: 'contain'
                } }))))));
};
exports.default = ConfirmationShare;
