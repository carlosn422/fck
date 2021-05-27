"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OfferItemList_1 = require("components/Offer/OfferItemList");
const OfferPriceSlider_1 = require("components/Offer/OfferPriceSlider");
const PrimaryLayout_1 = require("components/Offer/PrimaryLayout");
const SlimLayout_1 = require("components/Offer/SlimLayout");
const styles_1 = require("components/Offer/styles");
const PanelLayout_1 = require("components/Panel/PanelLayout");
const variables_1 = require("css/variables");
const MerchUserSelectionsProvider_1 = require("data/MerchUserSelectionsProvider");
const React = require("react");
const OfferItemUserSelectionsProvider_1 = require("data/OfferItemUserSelectionsProvider");
const Header = (offer) => {
    return (React.createElement("header", { className: styles_1.styles.titleContainer },
        React.createElement("div", { className: `${variables_1.fonts.mainHeading} ${styles_1.styles.offerTitle} ` }, offer.title),
        React.createElement("div", { className: "description" }, offer.description)));
};
const Body = (offer, addToCart) => (React.createElement(OfferItemUserSelectionsProvider_1.default, null, ({ offerItemUpdateUserSelections }) => {
    return (React.createElement(MerchUserSelectionsProvider_1.default, null, ({ userSelections, updateUserSelections }) => {
        return (React.createElement(React.Fragment, null,
            React.createElement(OfferPriceSlider_1.default, { offer: offer, userSelectedLowerBound: userSelections.priceRange.lowerBound, userSelectedUpperBound: userSelections.priceRange.upperBound, onChange: updateUserSelections.price, className: styles_1.styles.priceSliderContainer }),
            React.createElement(OfferItemList_1.default, { offer: offer, userSelections: userSelections, addToCart: addToCart, updateUserSelections: offerItemUpdateUserSelections })));
    }));
}));
const MerchOfferPrimary = props => {
    const { offer, addToCart } = props;
    const header = Header(offer);
    const body = Body(offer, addToCart);
    return React.createElement(PrimaryLayout_1.default, Object.assign({}, props, { header: header, body: body }));
};
const Slim = props => {
    const { offer, addToCart } = props;
    const header = Header(offer);
    const body = Body(offer, addToCart);
    return React.createElement(SlimLayout_1.default, Object.assign({}, props, { header: header, body: body }));
};
const MerchOffer = props => (React.createElement(PanelLayout_1.default, { Primary: () => React.createElement(MerchOfferPrimary, Object.assign({}, props)), Secondary: props.offerSecondary, Slim: () => React.createElement(Slim, Object.assign({}, props)) }));
exports.default = MerchOffer;
