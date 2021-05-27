"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_emotion_1 = require("react-emotion");
const CartOfferItem_1 = require("components/CartOfferItem/CartOfferItem");
const CartOfferUserInfo_1 = require("components/CartOfferItem/CartOfferUserInfo");
const CartSplitCheckFooter_1 = require("components/CartOfferItem/CartSplitCheckFooter");
const styles_1 = require("components/Panel/styles");
const styles_2 = require("./styles");
const utils_1 = require("cart/utils");
const CheckoutSummaryEmptyState_1 = require("./CheckoutSummaryEmptyState");
const PaymentProvider_1 = require("data/PaymentProvider");
const CartOfferItemHeader_1 = require("./CartOfferItemHeader");
const lodash_1 = require("lodash");
const styles_3 = require("ui/components/Confirmation/styles");
const RewardItem_1 = require("components/RewardItem/RewardItem");
const GroupTreeShared_1 = require("components/Confirmation/GroupTreeShared");
const CheckoutInvitedSummaryTitle_1 = require("./CheckoutInvitedSummaryTitle");
const variables_1 = require("css/variables");
const cartOfferItemsCss = react_emotion_1.css `
  margin-top: 3rem;
`;
const sonyContainer = react_emotion_1.css `
  display: flex;
`;
const headerCss = react_emotion_1.css `
  font-family: ${variables_1.typography.fontPrimary};
  font-size: ${20 / 16}rem;
  text-weight: bold;
  color: black;
  width: 20rem;
  margin: 0 auto;
  text-align: center;
  padding-right: 0.5rem;
`;
const sonyCopy = react_emotion_1.css `
  margin-top: 1rem;
  font-family: ${variables_1.typography.fontPrimary};
  font-size: ${12 / 16}rem;
  color: ${variables_1.colors.brandColorLight};
`;
const sonyCopyBold = react_emotion_1.css `
  margin-top: 1rem;
  margin-left: 0.2rem;
  font-family: ${variables_1.typography.fontPrimary};
  font-size: ${12 / 16}rem;
  color: ${variables_1.colors.brandColor};
  font-weight: bold;
`;
const invitedContainer = (offerPage, leaderName, title, orderGroup, isSony = false) => (React.createElement(React.Fragment, null,
    React.createElement(CheckoutInvitedSummaryTitle_1.default, { invitedName: 'Anna', inviteeName: leaderName, offerTitle: title, isSony: isSony }),
    React.createElement("div", { className: react_emotion_1.css `
        position: relative;
      ` },
        React.createElement("header", { className: styles_3.confirmationStyles.sectionHeader }, offerPage.isSony ? `WHO'S PLAYING (5)` : offerPage.treeTitle),
        offerPage.isSony ? (React.createElement("div", { className: sonyContainer },
            React.createElement("div", { className: sonyCopy }, "Get 10 more friends pre-order to unlock"),
            React.createElement("div", { className: sonyCopyBold }, "Hope Never Dies DLC & 500 SR Points"))) : (React.createElement("div", null)),
        React.createElement("div", { className: styles_2.splitPayStyles.tree },
            orderGroup && React.createElement("div", { className: headerCss }, orderGroup.name),
            React.createElement(GroupTreeShared_1.default, { invitedName: 'You', inviteeName: leaderName })))));
const CheckoutSummary = (_a) => {
    var { offerPage, cartProps, orderGroup, showSummary, isUsedInSlim } = _a, props = __rest(_a, ["offerPage", "cartProps", "orderGroup", "showSummary", "isUsedInSlim"]);
    const offerItems = Array.from(utils_1.getOfferItems(offerPage.offer));
    const addOnOffer = offerPage.offer.addonOffer || offerPage.offer.items[0].addonOffer;
    const additionalOffer = lodash_1.flatMap(offerPage.offer.items[0].items, i => i.offerItems) || [];
    const offerItemsWithAddon = addOnOffer
        ? Array.from(utils_1.getOfferItems(addOnOffer))
            .concat(offerItems)
            .concat(additionalOffer)
        : offerItems;
    const findOfferItem = id => offerItemsWithAddon.find(oi => oi.id === id);
    const isInvitedFlow = !!orderGroup && orderGroup.users.length > 0;
    const { cart, getCartSubtotal, getCartTotal, getCartFees, getCartTaxes } = cartProps;
    const total = offerPage.isNeedToShowTax ? getCartTotal() : getCartSubtotal();
    const leaderName = isInvitedFlow && orderGroup.users[0].firstName
        ? orderGroup.users[0].firstName
        : '';
    const summaryContent = isInvitedFlow ? (invitedContainer(offerPage, leaderName || '', offerPage.confirmationTitleCopy, orderGroup)) : (React.createElement(React.Fragment, null,
        React.createElement(PaymentProvider_1.default, { cartTotal: total }, paymentProps => {
            const displayPrice = !paymentProps.payment.splitPay.isSplitPay ||
                paymentProps.payment.splitPay.splitType === 'custom'
                ? paymentProps.amountOwed
                : total / (paymentProps.payment.splitPay.friends.length + 1);
            return (React.createElement(CartOfferUserInfo_1.CartOfferUserInfo, { amount: utils_1.formatPrice(displayPrice), orderSummaryTitle: offerPage.confirmationTitleCopy }));
        })));
    const cartOfferItem = (ci, i) => {
        const header = i === 0 ? React.createElement(CartOfferItemHeader_1.default, { showingRemove: true }) : React.createElement(React.Fragment, null);
        const addOnOffer = offerPage.offer.addonOffer ||
            offerPage.offer.items[0].addonOffer;
        const parentOffer = utils_1.findOffer(addOnOffer ? addOnOffer : offerPage.offer, o => {
            const item = findOfferItem(ci.offerItem.cId);
            if (item) {
                return o.id === item.parentId;
            }
            else {
                window.location.href = '/offers';
                return false;
            }
        });
        const additionalOfferItem = offerPage.offer.items[0];
        const additionalOffeItemCheck = additionalOfferItem.items &&
            additionalOfferItem.items.length > 0 &&
            additionalOfferItem.items[0];
        const reward = parentOffer || additionalOffeItemCheck
            ? ((parentOffer && parentOffer.rewards) ||
                ((additionalOffeItemCheck && additionalOfferItem.rewards) || [])).filter(r => {
                return r.threshold <= ci.quantity;
            })
            : undefined;
        const invitedReward = parentOffer &&
            parentOffer.rewards &&
            parentOffer.rewards[parentOffer.rewards.length - 1] ? (React.createElement(RewardItem_1.default, { reward: parentOffer.rewards[parentOffer.rewards.length - 1], quantity: 1 })) : (undefined);
        const onRemove = () => cartProps.removeFromCart(ci.id);
        return (React.createElement("article", { key: ci.id },
            header,
            React.createElement(CartOfferItem_1.CartOfferItem, { cartItem: ci, offerItem: findOfferItem(ci.offerItem.cId), onRemoveItem: onRemove }),
            reward && reward[reward.length - 1] ? (React.createElement(RewardItem_1.default, { reward: reward[reward.length - 1], quantity: ci.quantity })) : isInvitedFlow ? (invitedReward) : (undefined)));
    };
    const emptyStateCheck = cart === undefined || cart.items.length === 0 ? (React.createElement(CheckoutSummaryEmptyState_1.default, null)) : (React.createElement(React.Fragment, null,
        React.createElement("article", { className: isUsedInSlim
                ? styles_1.panelCss.panelContainer
                : styles_1.panelCss.panelScrollableContainer },
            showSummary && summaryContent,
            React.createElement("article", { className: cartOfferItemsCss }, cart.items.map(cartOfferItem))),
        React.createElement(CartSplitCheckFooter_1.CartSplitCheckFooter, { base: getCartSubtotal(), tax: getCartTaxes() + getCartFees(), total: total, isSony: offerPage.isSony, isShouldShowTax: offerPage.isNeedToShowTax })));
    return emptyStateCheck;
};
exports.default = CheckoutSummary;
