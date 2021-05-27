"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OfferItemList_1 = require("components/Offer/OfferItemList");
const PrimaryLayout_1 = require("components/Offer/PrimaryLayout");
const SlimLayout_1 = require("components/Offer/SlimLayout");
const styles_1 = require("components/Offer/styles");
const PanelLayout_1 = require("components/Panel/PanelLayout");
const variables_1 = require("css/variables");
const React = require("react");
const OfferItemUserSelectionsProvider_1 = require("data/OfferItemUserSelectionsProvider");
const Header = (offer, dateLocation) => {
    return (React.createElement("header", { className: styles_1.styles.titleContainer },
        React.createElement("div", { className: `${variables_1.fonts.mainHeading} ${styles_1.styles.offerTitle} ` }, offer.title),
        dateLocation,
        React.createElement("div", { className: styles_1.styles.description }, offer.description)));
};
const Body = (offer, addToCart) => {
    return (React.createElement(OfferItemUserSelectionsProvider_1.default, null, ({ offerItemUpdateUserSelections }) => {
        return (React.createElement(OfferItemList_1.default, { offer: offer, addToCart: addToCart, updateUserSelections: offerItemUpdateUserSelections }));
    }));
};
const MixedOfferPrimary = props => {
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
const MixedOffer = props => (React.createElement(PanelLayout_1.default, { Primary: () => React.createElement(MixedOfferPrimary, Object.assign({}, props)), Secondary: props.offerSecondary, Slim: () => React.createElement(Slim, Object.assign({}, props)) }));
exports.default = MixedOffer;
