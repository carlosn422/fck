"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("components/Panel/styles");
const styles_2 = require("components/Offer/styles");
const CheckoutSlimLayout = ({ body, header, checkoutCTA }) => (React.createElement(React.Fragment, null,
    React.createElement("section", { className: `${styles_1.panelCss.panelScrollableContainer}` },
        React.createElement("div", { className: styles_2.styles.slimBackgroundTransparentCover }),
        React.createElement("section", { className: styles_2.styles.slimOfferContentContainer },
            header,
            body)),
    checkoutCTA));
exports.default = CheckoutSlimLayout;
