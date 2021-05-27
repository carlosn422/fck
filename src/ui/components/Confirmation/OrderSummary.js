"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const react_emotion_1 = require("react-emotion");
const utils_1 = require("cart/utils");
const lodash_1 = require("lodash");
const utils_2 = require("cart/utils");
const CartOfferItemHeader_1 = require("components/Checkout/CartOfferItemHeader");
const CartOfferItem_1 = require("components/CartOfferItem/CartOfferItem");
const RewardItem_1 = require("components/RewardItem/RewardItem");
const cartOfferItemsCss = react_emotion_1.css `
  margin-top: 4rem;
`;
const contentItem = (title, value, valueStyle) => {
    return (React.createElement("div", { className: styles_1.orderSummaryStyles.contentItem },
        React.createElement("div", { className: styles_1.orderSummaryStyles.contentItemTitle }, title),
        React.createElement("div", { className: valueStyle }, value)));
};
const OrderSummary = ({ orderNumber, tripDate, groupLeaderName, total, cart, groupTotal, youPaid, offerPage, isSplitPay }) => {
    const offerItems = Array.from(utils_2.getOfferItems(offerPage.offer));
    const addOnOffer = offerPage.offer.addonOffer || offerPage.offer.items[0].addonOffer;
    const additionalOffer = lodash_1.flatMap(offerPage.offer.items[0].items, i => i.offerItems) || [];
    const offerItemsWithAddon = addOnOffer
        ? Array.from(utils_2.getOfferItems(addOnOffer))
            .concat(offerItems)
            .concat(additionalOffer)
        : offerItems;
    const findOfferItem = id => offerItemsWithAddon.find(oi => oi.id === id);
    const additionalOfferItem = offerPage.offer.items[0];
    const additionalOffeItemCheck = additionalOfferItem.items &&
        additionalOfferItem.items.length > 0 &&
        additionalOfferItem.items[0];
    const cartOfferItem = (ci, i) => {
        const parentOffer = utils_2.findOffer(addOnOffer ? addOnOffer : offerPage.offer, o => {
            const item = findOfferItem(ci.offerItem.cId);
            if (item) {
                return o.id === item.parentId;
            }
            else {
                window.location.href = '/offers';
                return false;
            }
        });
        const reward = parentOffer || additionalOffeItemCheck
            ? ((parentOffer && parentOffer.rewards) ||
                ((additionalOffeItemCheck && additionalOfferItem.rewards) || [])).filter(r => {
                return r.threshold <= ci.quantity;
            })
            : undefined;
        const header = i === 0 ? React.createElement(CartOfferItemHeader_1.default, { showingRemove: false }) : React.createElement(React.Fragment, null);
        return (React.createElement("article", { key: ci.id },
            header,
            React.createElement(CartOfferItem_1.CartOfferItem, { cartItem: ci, shouldHideBorder: true, offerItem: findOfferItem(ci.offerItem.cId) }),
            reward && reward[reward.length - 1] ? (React.createElement(RewardItem_1.default, { reward: reward[reward.length - 1], quantity: ci.quantity, hideRemove: true })) : (undefined)));
    };
    return (React.createElement("article", { className: styles_1.orderSummaryStyles.container },
        React.createElement("header", { className: styles_1.confirmationStyles.sectionHeader },
            offerPage.orderSummaryTitle,
            " Summary"),
        React.createElement("section", { className: styles_1.orderSummaryStyles.content },
            React.createElement("section", { className: styles_1.orderSummaryStyles.bookingContent },
                contentItem('Order Number', orderNumber, styles_1.orderSummaryStyles.orderNumber),
                contentItem(`${offerPage.orderSummaryTitle} Date`, tripDate),
                isSplitPay && contentItem('Group leader', groupLeaderName)),
            React.createElement("section", { className: styles_1.orderSummaryStyles.paymentContent },
                !isSplitPay && contentItem('Group leader', groupLeaderName),
                contentItem(`${offerPage.orderSummaryTitle} Total`, `${utils_1.formatPrice(total)}`),
                isSplitPay && (React.createElement(React.Fragment, null,
                    contentItem('Group Total', `${utils_1.formatPrice(groupTotal)}`),
                    contentItem('You Paid', `${utils_1.formatPrice(youPaid)}`))))),
        isSplitPay ? (undefined) : (React.createElement("article", { className: cartOfferItemsCss }, cart.items.map(cartOfferItem)))));
};
exports.default = OrderSummary;
