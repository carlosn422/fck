"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_emotion_1 = require("react-emotion");
const styles_1 = require("./styles");
const variables_1 = require("css/variables");
const cartItemDetails = react_emotion_1.css `
  font-family: ${variables_1.typography.fontSecondary};
  font-size: ${12 / 16}rem;
  color: #908f8f;
`;
const RewardItem = ({ reward, quantity, hideRemove }) => {
    const icon = reward.icon ? reward.icon : `https://s3.amazonaws.com/fevo-fuc/assets-demo-sony/reward_unlock.png`;
    return (React.createElement("article", { className: styles_1.offerItemStyles.cartItemCss },
        React.createElement("section", { className: styles_1.offerItemStyles.cartImageCss, style: {
                background: `url(${icon}) no-repeat center`,
                backgroundSize: 'contain'
            } }),
        React.createElement("section", { className: styles_1.offerItemStyles.offerContentCss },
            React.createElement("header", { className: styles_1.offerItemStyles.cartOfferTitleCss }, reward.name),
            React.createElement("div", { className: cartItemDetails }, "Reward Unlocked")),
        React.createElement("section", { className: styles_1.offerItemStyles.priceCtaContainerCss },
            React.createElement("div", { className: styles_1.offerItemStyles.cartOfferQuantityPrice }, quantity)),
        React.createElement("section", { className: styles_1.offerItemStyles.quantityContainerCss },
            React.createElement("div", { className: styles_1.offerItemStyles.cartOfferQuantityPrice }, "FREE")),
        !hideRemove && (React.createElement("section", null,
            React.createElement("div", { className: styles_1.offerItemStyles.remove })))));
};
exports.default = RewardItem;
