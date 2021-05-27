"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CartButton_1 = require("components/CartButton//CartButton");
const Breadcrumbs_1 = require("components/Offer/Breadcrumbs");
const React = require("react");
const utils_1 = require("cart/utils");
const react_responsive_1 = require("react-responsive");
const variables_1 = require("css/variables");
const OfferPreHeader = ({ offer, numItemsInCart, selectOffer, offerPage }) => {
    const offerToEntry = (offer) => ({
        title: offer ? offer.title : '',
        onClick: () => offer && selectOffer(offer.uri)
    });
    const parentEntries = utils_1.findParents(offerPage.offer, offer, []).map(offerToEntry);
    return (React.createElement(React.Fragment, null,
        React.createElement(react_responsive_1.default, { query: variables_1.mediaQueries.bpAboveSlimWidth },
            React.createElement(CartButton_1.default, { numberOfItems: numItemsInCart })),
        React.createElement(Breadcrumbs_1.default, { current: offerToEntry(offer), parents: parentEntries })));
};
exports.default = OfferPreHeader;
