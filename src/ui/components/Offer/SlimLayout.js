"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("components/Panel/styles");
const styles_2 = require("components/Offer/styles");
const Rewards_1 = require("components/Rewards/Rewards");
const SlimLayout = ({ offer, offerPreHeader, checkoutCTA, header, body, slimHeader }) => (React.createElement(React.Fragment, null,
    slimHeader,
    React.createElement("section", { className: `${styles_1.panelCss.panelScrollableContainer}` },
        React.createElement("div", { className: styles_2.styles.slimBackgroundTransparentCover }),
        React.createElement("section", { className: styles_2.styles.slimOfferContentContainer },
            offerPreHeader,
            header,
            offer.rewards && (React.createElement(Rewards_1.default, { rewards: offer.rewards, className: Rewards_1.rewardsStyles.singlePanelLayout })),
            body)),
    checkoutCTA));
exports.default = SlimLayout;
