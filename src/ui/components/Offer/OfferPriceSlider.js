"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PriceSlider_1 = require("components/PriceSlider/PriceSlider");
const helpers_1 = require("components/Offer/helpers");
const OfferPriceSlider = ({ offer, className, userSelectedLowerBound, userSelectedUpperBound, onChange }) => {
    const minPrice = helpers_1.calcMinPrice(offer.items);
    const maxPrice = helpers_1.calcMaxPrice(offer.items);
    return (React.createElement(React.Fragment, null, minPrice !== maxPrice && (React.createElement(PriceSlider_1.PriceSlider, { min: minPrice, max: maxPrice, className: className, step: 1, value: [
            userSelectedLowerBound ? userSelectedLowerBound : minPrice,
            userSelectedUpperBound ? userSelectedUpperBound : maxPrice
        ], onChange: onChange }))));
};
exports.default = OfferPriceSlider;
