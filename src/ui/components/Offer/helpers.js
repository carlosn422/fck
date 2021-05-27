"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.isOffer = (item) => !!item.items;
exports.calcMinPrice = (items) => {
    return lodash_1.min(items.map(item => {
        if (exports.isOffer(item)) {
            return exports.calcMinPrice(item.items);
        }
        else {
            return item.startingPrice;
        }
    }));
};
exports.calcMaxPrice = (items) => {
    return lodash_1.max(items.map(item => {
        if (exports.isOffer(item)) {
            return exports.calcMaxPrice(item.items);
        }
        else {
            return item.startingPrice;
        }
    }));
};
exports.calcStartingPrice = (offerItem) => exports.isOffer(offerItem)
    ? exports.calcMinPrice(offerItem.items)
    : offerItem.startingPrice;
exports.doesItemFallWithinPriceRange = (item, priceRange) => {
    const startingPrice = exports.calcStartingPrice(item);
    const { lowerBound, upperBound } = priceRange;
    if (lowerBound && upperBound) {
        return startingPrice >= lowerBound && startingPrice <= upperBound;
    }
    else {
        return true;
    }
};
