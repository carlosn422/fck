"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const CheckoutInvitedSummaryTitle = ({ invitedName, isSony, inviteeName, offerTitle }) => {
    return (React.createElement("article", null,
        React.createElement("div", { className: styles_1.splitPayStyles.nameTitle }, 'Hey ' + invitedName + '! ' + inviteeName + ' invited you'),
        React.createElement("h2", { className: styles_1.splitPayStyles.offerTitle }, "Order Summary"),
        isSony && React.createElement("div", { className: styles_1.splitPayStyles.sonyTitle }, " sonyTitle ")));
};
exports.default = CheckoutInvitedSummaryTitle;
