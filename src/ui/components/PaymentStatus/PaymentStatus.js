"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const variables_1 = require("css/variables");
const PaymentStatus = ({ total, paid, daysToGo, offerTypeCopy, endDate }) => {
    let paidPercentage = Math.round((paid / total) * 100);
    return (React.createElement("article", { className: styles_1.paymentStyles.paymentStatus },
        React.createElement("div", { className: styles_1.paymentStyles.tooltip, style: { left: paidPercentage + '%' } },
            React.createElement("span", { className: styles_1.paymentStyles.tooltipText, style: {
                    background: `linear-gradient(
            56deg,
            ${variables_1.colors.brandColor} 0%,
            ${variables_1.colors.brandColorLight} 100%
            )`,
                    color: `white`
                } },
                "Paid",
                React.createElement("br", null),
                '$' + paid.toFixed(2)),
            React.createElement("div", { className: styles_1.paymentStyles.triangle })),
        React.createElement("div", { className: styles_1.paymentStyles.tooltip, style: { left: 80 + '%' } },
            React.createElement("span", { className: styles_1.paymentStyles.tooltipText, style: {
                    background: `${variables_1.colors.brandColorLightest}`,
                    color: `${variables_1.colors.brandColor}`
                } },
                "Owing",
                React.createElement("br", null),
                '$' + total.toFixed(2)),
            React.createElement("div", { className: styles_1.paymentStyles.triangle, style: { borderTopColor: variables_1.colors.brandColorLightest } })),
        React.createElement("div", { className: styles_1.paymentStyles.paidProgressContainer },
            React.createElement("div", { className: styles_1.paymentStyles.paidProgressTotal }),
            React.createElement("div", { className: styles_1.paymentStyles.paidProgress, style: { width: paidPercentage + '%' } })),
        React.createElement("div", { className: styles_1.paymentStyles.paidProgressDescriptinContainer },
            React.createElement("div", { className: styles_1.paymentStyles.paidPercentage }, paidPercentage + '% Paid'),
            React.createElement("div", { className: styles_1.paymentStyles.paidDaysLeft }, daysToGo + ' days to go')),
        React.createElement("div", { className: styles_1.paymentStyles.description },
            `Your friends will receive invitation emails & text`,
            " ",
            React.createElement("br", null),
            `and have to pay their portion by Sep 30 to confirm your ${offerTypeCopy.toLowerCase()}`)));
};
exports.default = PaymentStatus;
