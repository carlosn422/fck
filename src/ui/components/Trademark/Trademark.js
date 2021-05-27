"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const Trademark = ({ sonyDemo }) => {
    return (React.createElement("article", { className: sonyDemo ? styles_1.trademarkStyles.sonyContainer : styles_1.trademarkStyles.container },
        sonyDemo || React.createElement("div", { className: styles_1.trademarkStyles.title }, "Powered by"),
        React.createElement("div", { className: styles_1.trademarkStyles.logoImage, style: {
                background: `url(https://fevo.s3.amazonaws.com/assets/logo/fevo_logo_white.svg) no-repeat center`,
                backgroundSize: 'contain'
            } }),
        sonyDemo && React.createElement("div", { className: styles_1.trademarkStyles.sonyTitle }, "Cart")));
};
exports.default = Trademark;
