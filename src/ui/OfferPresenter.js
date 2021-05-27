"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DateLocation_1 = require("components/Offer/DateLocation");
const EventOffer_1 = require("components/Offer/EventOffer");
const HotelOffer_1 = require("components/Offer/HotelOffer");
const MerchOffer_1 = require("components/Offer/MerchOffer");
const MixedOffer_1 = require("components/Offer/MixedOffer");
const OfferPreHeader_1 = require("components/Offer/OfferPreHeader");
const OfferSecondary_1 = require("components/Offer/OfferSecondary");
const SlimHeader_1 = require("components/Offer/SlimHeader");
const TimedOffer_1 = require("components/Offer/TimedOffer");
const helpers_1 = require("components/Offer/helpers");
const CheckoutCTA_1 = require("components/StickyCTA/CheckoutCTA");
const OfferProvider_1 = require("data/OfferProvider");
const lodash_1 = require("lodash");
const React = require("react");
const withRoutes_1 = require("router/withRoutes");
const cart_1 = require("cart");
const offerTypes_1 = require("custom-typings/offerTypes");
const states_1 = require("./states");
const OfferItemUserSelectionsProvider_1 = require("data/OfferItemUserSelectionsProvider");
function decideRenderer(offer, props) {
    switch (offer.type) {
        case offerTypes_1.OfferItemType.Event:
            return React.createElement(EventOffer_1.default, Object.assign({ offer: offer }, props));
        case offerTypes_1.OfferItemType.Merch:
            return React.createElement(MerchOffer_1.default, Object.assign({ offer: offer }, props));
        case offerTypes_1.OfferItemType.Hotel:
            return React.createElement(HotelOffer_1.default, Object.assign({ offer: offer }, props));
        case offerTypes_1.OfferItemType.Timed:
            return React.createElement(TimedOffer_1.default, Object.assign({ offer: offer }, props));
        default:
            return React.createElement(MixedOffer_1.default, Object.assign({ offer: offer }, props));
    }
}
const searchOfferByUri = (offerListItem, uri) => {
    if (helpers_1.isOffer(offerListItem)) {
        const offer = offerListItem;
        if (offer.uri === uri) {
            return offer;
        }
        const addOns = offer.addonOffer ? offer.addonOffer.items : [];
        const items = addOns.concat(offer.items);
        const childOffers = lodash_1.filter(items, item => helpers_1.isOffer(offerListItem));
        return lodash_1.reduce(childOffers, (res, item) => res || searchOfferByUri(item, uri), undefined);
    }
    else {
        return undefined;
    }
};
const OfferPresenter = withRoutes_1.default()(({ routes }) => {
    return (React.createElement(OfferItemUserSelectionsProvider_1.default, null, ({ offerItemUserSelections, offerItemUpdateUserSelections }) => {
        const cleanup = () => {
            offerItemUpdateUserSelections.seelctAdditionalMediaFor({
                id: '23',
                media: '',
                htmlDescription: '',
                additionalMedia: '',
                additionalDescription: '',
                type: offerTypes_1.OfferItemType.Event,
                parentId: '',
                title: '',
                thumbnailImage: '',
                description: '',
                startingPrice: 0
            });
            offerItemUpdateUserSelections.selectedOfferItem({
                id: '23',
                media: '',
                htmlDescription: '',
                additionalMedia: '',
                additionalDescription: '',
                type: offerTypes_1.OfferItemType.Event,
                parentId: '',
                title: '',
                thumbnailImage: '',
                description: '',
                startingPrice: 0
            });
        };
        return (React.createElement(OfferProvider_1.default, null, ({ offerPage }) => {
            const offerUri = routes.params.offerUri;
            const addOnIndex = offerPage.offer.items;
            const index = addOnIndex.findIndex((item) => item.addonOffer && item.addonOffer.uri === offerUri);
            const i = index === -1 ? 0 : index;
            const addOnCheck = offerUri => {
                const offer = offerPage.offer.items[i];
                var addOnOffer = offerPage.offer.addonOffer === undefined
                    ? offer.uri !== offerUri
                        ? offer.addonOffer
                        : undefined
                    : offerPage.offer.addonOffer;
                return addOnOffer && addOnOffer.uri === offerUri
                    ? searchOfferByUri(addOnOffer, offerUri)
                    : searchOfferByUri(offerPage.offer, offerUri);
            };
            const offer = offerUri ? addOnCheck(offerUri) : offerPage.offer;
            if (!offer) {
                cleanup();
                throw new Error(`no offer found at: ${offerUri}`);
            }
            return (React.createElement(cart_1.CartProvider, null, cartProps => {
                const cartItems = cartProps.cart && !cartProps.loading
                    ? cartProps.cart.items
                    : [];
                const numItemsInCart = cartProps.getNumberOfItems();
                const cartSubtotal = cartProps.getCartSubtotal();
                const selectOffer = (offerUri) => {
                    cleanup();
                    routes.go(states_1.Fuc.Offer, { offerUri });
                };
                const goToCheckout = () => {
                    cleanup();
                    cartProps.checkoutCart().then((data) => routes.go(states_1.Fuc.Checkout, {
                        orderId: data.data.checkoutCart.id
                    }));
                };
                const gotoRootOffer = () => {
                    cleanup();
                    routes.go(states_1.Fuc.Offer, { offerUri: '' });
                };
                const goToAddOns = () => {
                    cleanup();
                    routes.go(states_1.Fuc.Offer, {
                        offerUri: offer.addonOffer
                            ? offer.addonOffer.uri
                            : offer.uri
                    });
                };
                const offerPreHeader = (React.createElement(OfferPreHeader_1.default, { offer: offer, numItemsInCart: numItemsInCart, selectOffer: selectOffer, offerPage: offerPage }));
                const slimHeader = (React.createElement(SlimHeader_1.default, { offer: offer, numItemsInCart: numItemsInCart }));
                const checkoutCTA = (React.createElement(CheckoutCTA_1.default, { isRootOffer: offerPage.offer.uri !== offer.uri, goToCheckout: goToCheckout, gotoRootOffer: gotoRootOffer, cartSubtotal: cartSubtotal, numItems: numItemsInCart, containsAddons: !!offer.addonOffer, goToAddons: goToAddOns, title: offerPage.emptyCheckoutTitle, description: offerPage.emptyCheckoutDescription }));
                const offerSecondary = () => (React.createElement(OfferSecondary_1.default, { offer: offer, offerPage: offerPage, selectedOfferItem: offerItemUserSelections.selectedOfferItem, selectedAdditionalOfferItem: offerItemUserSelections.selectedAdditionalOfferItem }));
                const dateLocation = React.createElement(DateLocation_1.default, { offerPage: offerPage });
                const props = {
                    dateLocation,
                    selectOffer,
                    offerPreHeader,
                    checkoutCTA,
                    offerSecondary,
                    slimHeader,
                    addToCart: item => cartProps.addToCart(item)
                };
                return decideRenderer(offer, props);
            }));
        }));
    }));
});
exports.default = OfferPresenter;
