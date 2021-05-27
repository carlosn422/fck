"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
exports.CartOfferUserInfo = ({ amount, orderSummaryTitle }) => {
    return (React.createElement("article", { className: styles_1.cartItemStyles.avatarItemCss },
        React.createElement("section", { className: styles_1.cartItemStyles.avatarCss, style: {
                background: `url(https://s3.amazonaws.com/fevo-fuc/assets-demo/images/avatar/profile1.png) no-repeat center`,
                backgroundSize: 'cover'
            } }),
        React.createElement("section", { className: styles_1.cartItemStyles.offerContentCss },
            React.createElement("header", { className: styles_1.cartItemStyles.avatarTitleCss }, orderSummaryTitle),
            React.createElement("div", { className: styles_1.cartItemStyles.avatarDetailsCss }, `Your order summary`),
            React.createElement("div", { className: styles_1.cartItemStyles.avatarAmountCss }, `You'll pay ` + amount))));
};
