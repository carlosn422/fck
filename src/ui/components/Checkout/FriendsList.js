"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SplitFriend_1 = require("components/Checkout/SplitFriend");
const styles_1 = require("components/Checkout/styles");
const variables_1 = require("css/variables");
const React = require("react");
exports.FriendsList = ({ splitPay, updateFriendData, removeFriend, cartTotal, addFriend, className }) => {
    const displaySplitPrice = cartTotal && splitPay.isSplitPay
        ? cartTotal / (splitPay.friends.length + 1)
        : undefined;
    return (React.createElement("article", { className: `${className ? className : ''} ${styles_1.splitPayStyles.friendsContainer}` },
        React.createElement("header", { className: variables_1.fonts.secondaryTitle }, "Friends List"),
        React.createElement("section", null, splitPay.friends.map(friend => (React.createElement(SplitFriend_1.default, { key: friend.id, friend: friend, cartTotal: cartTotal, displayPrice: displaySplitPrice, splitType: splitPay.splitType, updateFriend: data => updateFriendData(Object.assign({ id: friend.id }, data)), removeFriend: removeFriend })))),
        React.createElement("section", { className: styles_1.splitPayStyles.addContainer },
            React.createElement("button", { className: styles_1.splitPayStyles.add, onClick: addFriend }, "+"),
            React.createElement("div", null, "Add a friend"))));
};
exports.default = exports.FriendsList;
