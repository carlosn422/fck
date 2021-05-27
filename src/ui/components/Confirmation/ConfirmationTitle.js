"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const variables_1 = require("css/variables");
const CheckoutInvitedSummaryTitle = ({ name, shareCopy, offerTitle }) => {
    return (React.createElement("article", null,
        React.createElement("div", { className: styles_1.confirmationStyles.nameTitle }, 'Thanks ' + name + `, ` + offerTitle),
        React.createElement("h2", { className: variables_1.fonts.secondaryTitle }, `Your Order Summary`),
        shareCopy && (React.createElement("div", { className: styles_1.confirmationStyles.sonyTitle }, shareCopy))));
};
exports.default = CheckoutInvitedSummaryTitle;
