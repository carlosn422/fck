"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("components/OfferItem/styles");
const variables_1 = require("css/variables");
const react_emotion_1 = require("react-emotion");
const utils_1 = require("cart/utils");
const priceCss = react_emotion_1.css `
  ${variables_1.fonts.priceText};
  @media ${variables_1.mediaQueries.bpAboveSinglePanelWidth} {
    margin-left: 0.375rem;
  }
`;
const PriceContainer = (isOffer, startingPrice, title) => {
    return (React.createElement("section", { className: styles_1.offerItemStyles.priceCtaContainerCss },
        isOffer && startingPrice !== 0 ? (React.createElement("span", { className: variables_1.fonts.subText }, "From ")) : (undefined),
        startingPrice === 0 ? (title && title.includes('Free Trial') ? (React.createElement("span", { style: { whiteSpace: 'nowrap' } }, "Free")) : (React.createElement(React.Fragment, null, "Complimentary"))) : (React.createElement("div", { className: priceCss }, utils_1.formatPrice(startingPrice)))));
};
exports.default = PriceContainer;
