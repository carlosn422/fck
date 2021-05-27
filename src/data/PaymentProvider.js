"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cuid = require("cuid");
const CheckoutStore_1 = require("data/CheckoutStore");
const React = require("react");
const Query_1 = require("react-apollo/Query");
const array_1 = require("utils/array");
const paymentQuery_gql_1 = require("./clientQueries/paymentQuery.gql");
class PaymentQuery extends Query_1.default {
}
const getFriendsWithEvenSplit = (data, cartTotal, splitPay) => {
    const friends = data.friends ? data.friends : splitPay.friends;
    const splitAmount = cartTotal / (friends.length + 1);
    return friends.map(friend => {
        const newFriend = Object.assign({}, friend, { splitAmount });
        return newFriend;
    });
};
const addFriend = (splitPay) => {
    const defaultFriend = CheckoutStore_1.CheckoutDefaults.defaults.payment.splitPay.friends[0];
    const newFriend = Object.assign({}, defaultFriend, { id: cuid() });
    const newFriends = splitPay.friends.concat([newFriend]);
    return { friends: newFriends };
};
const removeFriend = (id, splitPay) => {
    const newFriends = splitPay.friends.filter(friend => friend.id !== id);
    return { friends: newFriends };
};
const updateFriendData = (data, splitPay) => {
    const newFriends = array_1.replaceIn(splitPay.friends, friend => friend.id === data.id, friendToUpdate => {
        const splitAmount = data.splitAmount !== undefined
            ? data.splitAmount
            : friendToUpdate.splitAmount;
        return Object.assign({}, friendToUpdate, data, { splitAmount, __typename: 'SplitFriend' });
    });
    return { friends: newFriends };
};
const updateSplitPay = (splitPay, cartTotal, data, updatePayment) => {
    const newFriends = (data.splitType && data.splitType === 'even') ||
        splitPay.splitType === 'even'
        ? getFriendsWithEvenSplit(data, cartTotal, splitPay)
        : data.friends
            ? data.friends
            : splitPay.friends;
    const friendsAmount = newFriends.reduce((amt, friend) => (friend.splitAmount ? friend.splitAmount : 0) + amt, 0);
    const amountOwed = cartTotal - friendsAmount;
    updatePayment({
        amountOwed,
        splitPay: Object.assign({}, splitPay, data, { friends: newFriends })
    });
};
class PaymentProvider extends React.Component {
    render() {
        const { children, cartTotal } = this.props;
        return (React.createElement(PaymentQuery, { query: paymentQuery_gql_1.default }, ({ client, data, loading }) => {
            const payment = data.payment;
            const splitPay = payment.splitPay;
            const amountOwed = payment &&
                payment.splitPay &&
                payment.splitPay.isSplitPay &&
                payment.amountOwed
                ? payment.amountOwed
                : cartTotal;
            const updatePayment = (paymentData) => {
                client.writeData({
                    data: {
                        payment: Object.assign({}, data, paymentData, { __typename: 'Payment' })
                    }
                });
            };
            const resetToDefault = () => {
                client.writeData({
                    data: {
                        payment: CheckoutStore_1.CheckoutDefaults.defaults.payment
                    }
                });
            };
            const updateSplitPayHelper = (data) => updateSplitPay(splitPay, cartTotal, data, updatePayment);
            const providedData = {
                payment,
                amountOwed,
                updatePayment,
                updateSplitPay: (data) => updateSplitPayHelper(data),
                removeFriend: (id) => updateSplitPayHelper(removeFriend(id, splitPay)),
                addFriend: () => updateSplitPayHelper(addFriend(splitPay)),
                updateFriendData: (data) => updateSplitPayHelper(updateFriendData(data, splitPay)),
                resetToDefault
            };
            return children(providedData);
        }));
    }
}
exports.default = PaymentProvider;
