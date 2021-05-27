"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import Calendar from 'components/Calendar/Calendar'
const OfferItemList_1 = require("components/Offer/OfferItemList");
const OfferPriceSlider_1 = require("components/Offer/OfferPriceSlider");
const PrimaryLayout_1 = require("components/Offer/PrimaryLayout");
const SlimLayout_1 = require("components/Offer/SlimLayout");
const styles_1 = require("components/Offer/styles");
const PanelLayout_1 = require("components/Panel/PanelLayout");
const variables_1 = require("css/variables");
const TimedUserSelectionsProvider_1 = require("data/TimedUserSelectionsProvider");
//import { isAfter, isEqual } from 'date-fns'
const React = require("react");
const Header = (offer, dateLocation) => {
    return (React.createElement("header", { className: styles_1.styles.titleContainer },
        React.createElement("div", { className: `${variables_1.fonts.mainHeading} ${styles_1.styles.offerTitle} ` }, offer.title),
        dateLocation));
};
const Body = (offer, addToCart) => {
    const now = new Date();
    return (React.createElement(TimedUserSelectionsProvider_1.default, null, ({ userSelections, updateUserSelections }) => (React.createElement(React.Fragment, null,
        React.createElement(OfferPriceSlider_1.default, { offer: offer, userSelectedLowerBound: userSelections.priceRange.lowerBound, userSelectedUpperBound: userSelections.priceRange.upperBound, onChange: updateUserSelections.price, className: styles_1.styles.priceSliderContainer }),
        React.createElement(OfferItemList_1.default, { addToCart: addToCart, offer: offer, userSelections: userSelections })))));
};
const EventOfferPrimary = props => {
    const { offer, addToCart, offerPreHeader, dateLocation, checkoutCTA } = props;
    const header = Header(offer, dateLocation);
    const body = Body(offer, addToCart);
    return React.createElement(PrimaryLayout_1.default, Object.assign({}, props, { header: header, body: body }));
};
const Slim = props => {
    const { offer, addToCart, offerPreHeader, dateLocation, checkoutCTA } = props;
    const header = Header(offer, dateLocation);
    const body = Body(offer, addToCart);
    return React.createElement(SlimLayout_1.default, Object.assign({}, props, { header: header, body: body }));
};
const TimedOffer = props => (React.createElement(PanelLayout_1.default, { Primary: () => React.createElement(EventOfferPrimary, Object.assign({}, props)), Secondary: props.offerSecondary, Slim: () => React.createElement(Slim, Object.assign({}, props)) }));
exports.default = TimedOffer;
