"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Slider = require("rc-slider");
const react_emotion_1 = require("react-emotion");
const currency_1 = require("cart/currency");
require("rc-slider/assets/index.css");
require("rc-tooltip/assets/bootstrap.css");
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const priceSliderContainerCss = react_emotion_1.css `
  display: flex;
  align-items: center;
`;
const priceSliderLabel = react_emotion_1.css `
  display: inline-block;
`;
// Gah! dealing with 3rd party
const priceSliderCss = react_emotion_1.css `
  margin: 0 1rem;
`;
exports.PriceSlider = ({ min, max, step, value, onChange, className }) => {
    const currency = window['currencyHack'] === 'GBP' ? currency_1.currencySymbols.GBP : '$';
    return (React.createElement("article", { className: `${className} ${priceSliderContainerCss}` },
        React.createElement("div", { className: priceSliderLabel }, `${currency}${min
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`),
        React.createElement(Range, { min: min, max: max, step: step, onChange: onChange, className: priceSliderCss, value: value, defaultValue: [min, max], allowCross: false, count: 2 }),
        React.createElement("div", { className: priceSliderLabel }, `${currency}${max
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`)));
};
