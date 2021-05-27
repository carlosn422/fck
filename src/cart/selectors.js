"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const lodash_1 = require("lodash");
function createSelectors(rootOffer, cartItems) {
    const getCartAmountForReward = lodash_1.memoize((rewardId) => utils_1.calcAmountForReward(rewardId, cartItems, rootOffer));
    const getCartSubtotal = lodash_1.memoize(() => utils_1.doCartSubTotal(cartItems));
    const getCartTotal = lodash_1.memoize(() => utils_1.doCartTotal(cartItems));
    const getCartTaxes = lodash_1.memoize(() => utils_1.doCartTaxes(cartItems));
    const getCartFees = lodash_1.memoize(() => utils_1.doCartFees(cartItems));
    const getNumberOfItems = lodash_1.memoize(() => utils_1.itemsCount(cartItems));
    return {
        getCartAmountForReward,
        getCartSubtotal,
        getCartTotal,
        getCartTaxes,
        getCartFees,
        getNumberOfItems
    };
}
exports.createSelectors = createSelectors;
