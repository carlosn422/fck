"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const lodash_1 = require("lodash");
const currency_1 = require("./currency");
exports.formatPrice = (price) => {
    const currency = window['currencyHack'] === 'GBP'
        ? window['currencyHack']
        : currency_1.currencySymbols.USD;
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    const language = window.navigator.language || 'en-US';
    try {
        const result = numPrice !== undefined
            ? new Intl.NumberFormat(language, {
                style: 'currency',
                currency: currency.toUpperCase()
            }).format(numPrice)
            : '';
        return result;
    }
    catch (e) {
        const currencySymbol = currency_1.currencySymbols[currency.toUpperCase()] || '$';
        return numPrice !== undefined
            ? currencySymbol + numPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            : '';
    }
};
function isOffer(listItem) {
    return !!listItem.items;
}
function partionOfferListItems(items) {
    return lodash_1.partition(items, isOffer);
}
exports.partionOfferListItems = partionOfferListItems;
function* getOfferItems(offer) {
    const [offers, offerItems] = partionOfferListItems(offer.items);
    yield* offerItems;
    for (const o of offers) {
        yield* getOfferItems(o);
    }
}
exports.getOfferItems = getOfferItems;
function* getOffers(offer) {
    yield offer;
    const [offers, offerItems] = partionOfferListItems(offer.items);
    for (const o of offers) {
        yield* getOffers(o);
    }
}
exports.getOffers = getOffers;
function find(iterable, predicate) {
    for (const value of iterable) {
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}
exports.find = find;
function findOffer(root, predicate) {
    return find(getOffers(root), predicate);
}
exports.findOffer = findOffer;
function findOfferItem(root, predicate) {
    return find(getOfferItems(root), predicate);
}
exports.findOfferItem = findOfferItem;
function findOfferPath(root, uri) {
    const offerWithUri = findOffer(root, o => o.items.some(item => {
        const offer = isOffer(item) ? item : undefined;
        return offer ? offer.uri === uri : false;
    }));
    if (offerWithUri === undefined) {
        throw new Error(`Offer does not exist with uri: ${uri}`);
    }
    else {
        const parents = findParents(root, offerWithUri, []);
        return [offerWithUri].concat(parents);
    }
}
exports.findOfferPath = findOfferPath;
function findParents(root, current, parents) {
    if (root === current ||
        root.addonOffer === current ||
        root.items[0].addonOffer === current) {
        return parents;
    }
    else {
        const findParent = items => {
            return items.some(i => i === current);
        };
        const parent = findOffer(root, o => (o.addonOffer && findParent(o.addonOffer.items)) || findParent(o.items));
        return findParents(root, parent, parents.concat(parent));
    }
}
exports.findParents = findParents;
const calculateLineItemsFor = (type, cartItems) => {
    const result = cartItems.length
        ? cartItems
            .map(item => {
            const feeItems = item.lineItems.filter(li => li.type === type);
            return feeItems.length > 0 ? feeItems[0].value : 0;
        })
            .reduce((s, v) => v + s, 0)
        : 0;
    return result;
};
exports.doCartFees = (cartItems) => calculateLineItemsFor(_1.LineItemType.Fee, cartItems);
exports.doCartTaxes = (cartItems) => calculateLineItemsFor(_1.LineItemType.Tax, cartItems);
exports.doCartTotal = (cartItems) => calculateLineItemsFor(_1.LineItemType.Tax, cartItems) +
    calculateLineItemsFor(_1.LineItemType.Fee, cartItems) +
    calculateLineItemsFor(_1.LineItemType.Base, cartItems);
exports.itemsCount = (cartItems) => cartItems.length
    ? cartItems.map(item => item.quantity).reduce((s, v) => v + s)
    : 0;
exports.doCartSubTotal = (cartItems) => cartItems.length
    ? cartItems
        .filter(item => item.lineItems.filter(li => li.type === _1.LineItemType.Base))
        .map(item => item.lineItems[0].value)
        .reduce((s, v) => v + s, 0)
    : 0;
exports.calcAmountForReward = (rewardId, cartItems, rootOffer) => {
    const offerWithReward = findOffer(rootOffer, offer => offer.rewards ? offer.rewards.some(reward => reward.id === rewardId) : false);
    const reward = offerWithReward.rewards.find(reward => reward.id === rewardId);
    const [_, offerItemsWithReward] = partionOfferListItems(offerWithReward.items);
    const rewardedCartItems = cartItems.filter(cartItem => offerItemsWithReward.some(offerItem => cartItem.offerItem.cId === offerItem.id));
    const rewardCount = lodash_1.sum(rewardedCartItems.map(cartItem => cartItem.quantity));
    return rewardCount;
};
