"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const styles_2 = require("components/Panel/styles");
const GroupTree_1 = require("components/Confirmation/GroupTree");
const PaymentStatus_1 = require("ui/components/PaymentStatus/PaymentStatus");
const ConfirmationTitle_1 = require("./ConfirmationTitle");
const OrderSummary_1 = require("components/Confirmation/OrderSummary");
const utils_1 = require("cart/utils");
const date_fns_1 = require("date-fns");
const variables_1 = require("css/variables");
const react_emotion_1 = require("react-emotion");
const headerCss = react_emotion_1.css `
  font-family: ${variables_1.typography.fontPrimary};
  font-size: ${20 / 16}rem;
  text-weight: bold;
  color: black;
  width: 20rem;
  margin: 0 auto;
  text-align: center;
  padding-right: 1.7rem;
`;
const ConfirmationSummary = ({ order, offerPage, isSplitPaying }) => {
    const leader = order.group.users[0];
    const leaderName = leader.firstName ? leader.firstName : '';
    const orderTotal = offerPage.isNeedToShowTax
        ? order.cart.items
            ? utils_1.doCartTotal(order.cart.items)
            : 0
        : order.cart.items
            ? utils_1.doCartSubTotal(order.cart.items)
            : 0;
    const orderSummaryData = {
        cart: order.cart,
        offerPage: offerPage,
        orderNumber: order.id,
        tripDate: date_fns_1.format(new Date(), 'E, d MMM'),
        groupLeaderName: leaderName,
        isSplitPay: isSplitPaying,
        total: orderTotal,
        groupTotal: orderTotal,
        youPaid: order.payments[0].amount
    };
    return (React.createElement("article", { className: styles_2.panelCss.panelNoFooterScrollableContainer },
        React.createElement(ConfirmationTitle_1.default, { name: leaderName, offerTitle: offerPage.shareOrderTitle, shareCopy: offerPage.shareCopy }),
        React.createElement(OrderSummary_1.default, Object.assign({}, orderSummaryData)),
        React.createElement("header", { className: styles_1.confirmationStyles.sectionHeader }, offerPage.treeTitle),
        React.createElement("div", { className: styles_1.confirmationStyles.tree },
            React.createElement("div", { className: headerCss }, order.group.name),
            React.createElement(GroupTree_1.default, null)),
        orderSummaryData.isSplitPay && (React.createElement(React.Fragment, null,
            React.createElement("header", { className: styles_1.confirmationStyles.sectionHeader }, "PAYMENT STATUS"),
            React.createElement(PaymentStatus_1.default, { total: orderTotal, paid: order.payments[0].amount, daysToGo: 18, endDate: 'Jul 1', offerTypeCopy: offerPage.orderSummaryTitle })))));
};
exports.default = ConfirmationSummary;
