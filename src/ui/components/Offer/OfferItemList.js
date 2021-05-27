"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const helpers_1 = require("components/Offer/helpers");
const lodash_1 = require("lodash");
const offerTypes_1 = require("custom-typings/offerTypes");
const MerchOfferItem_1 = require("components/OfferItem/MerchOfferItem");
const EventOfferItem_1 = require("components/OfferItem/EventOfferItem");
const TimedOfferItem_1 = require("components/OfferItem/TimedOfferItem");
const MultiTicketsItem_1 = require("components/OfferItem/MultiTicketsItem");
const HotelOfferItem_1 = require("components/OfferItem/HotelOfferItem");
const WithState_1 = require("utils/WithState");
const withRoutes_1 = require("router/withRoutes");
const states_1 = require("ui/states");
const recompose_1 = require("recompose");
const EventAdjustCta_1 = require("components/OfferItem/EventAdjustCta");
const MerchAdjustCta_1 = require("components/OfferItem/MerchAdjustCta");
const TimedAdjustCta_1 = require("components/OfferItem/TimedAdjustCta");
const MultiTicketAdjustCta_1 = require("components/OfferItem/MultiTicketAdjustCta");
const isSelected = (item, offer, timeSelection, selectedOfferItemId) => {
    const isItem = !helpers_1.isOffer(item);
    const timedIndex = timeSelection &&
        timeSelection.timeslot.date &&
        lodash_1.findIndex(offer.items, i => {
            return i.title === timeSelection.timeslot.date;
        });
    const itemsTemp = offer.items.slice(0);
    const items = timeSelection && timeSelection.timeslot.date && timedIndex
        ? itemsTemp.splice(timedIndex, timedIndex + 2)
        : itemsTemp;
    return (isItem &&
        ((!!selectedOfferItemId && selectedOfferItemId === item.id) || // preselect first item if nothing else selected
            (!selectedOfferItemId && items[0].id === item.id)));
};
const OfferItemList = ({ offer, userSelections, selectedOfferItemId, updateUserSelections, setState, routes, timeSelection, itemSelections, addToCart }) => {
    const selectOffer = (offerUri) => offerUri ? routes.go(states_1.Fuc.Offer, { offerUri }) : routes.go(states_1.Fuc.OfferPage);
    const onSelectOffer = item => {
        if (!helpers_1.isOffer(item)) {
            if (selectedOfferItemId !== item.id) {
                if (updateUserSelections !== undefined) {
                    updateUserSelections.selectedOfferItem(item);
                }
                setState({ selectedOfferItemId: item.id });
            }
        }
        else {
            const offer = item;
            selectOffer(offer.uri);
            if (updateUserSelections !== undefined) {
                updateUserSelections.seelctAdditionalMediaFor(Object.assign({ additionalMedia: null, additionalDescription: null }, item));
                updateUserSelections.selectedOfferItem(Object.assign({ additionalMedia: null, additionalDescription: null }, item));
            }
        }
    };
    const onSelectAdditionalMedia = item => {
        if (!helpers_1.isOffer(item)) {
            if (updateUserSelections !== undefined) {
                updateUserSelections.seelctAdditionalMediaFor(...item);
            }
        }
    };
    const updateItemSelections = (item, data) => {
        const currentSelections = itemSelections[item.id];
        const newSelections = Object.assign({}, currentSelections, data);
        setState({
            itemSelections: Object.assign({}, itemSelections, { [item.id]: newSelections })
        });
    };
    const MerchOfferItemImpl = ({ item, index }) => {
        const onSelectItem = () => onSelectOffer(item);
        const setItemSelections = data => updateItemSelections(item, data);
        const cartData = !item.items
            ? itemSelections[item.id] ||
                updateItemSelections(item, {
                    offerItemId: item.id,
                    size: item.productDetails.sizes
                        ? item.productDetails.sizes[0]
                        : undefined,
                    color: item.productDetails.colors
                        ? item.productDetails.colors[0]
                        : undefined,
                    quantity: 1
                })
            : undefined;
        const merchAdjustCta = !helpers_1.isOffer(item) &&
            isSelected(item, offer, timeSelection, selectedOfferItemId) ? (React.createElement(MerchAdjustCta_1.default, { offerItem: item, setOfferItemData: setItemSelections, offerItemCartData: cartData, addToCart: addToCart })) : (undefined);
        return (React.createElement(MerchOfferItem_1.default, { offerItem: item, merchAdjustCta: merchAdjustCta, onSelectOffer: onSelectItem, showDemoData: index === 0 }));
    };
    const EventOfferItemImpl = ({ item }) => {
        const onSelectItem = () => onSelectOffer(item);
        const onAdditionalMediaSelect = () => onSelectAdditionalMedia(item);
        const setItemSelections = data => updateItemSelections(item, data);
        const cartData = itemSelections[item.id] ||
            updateItemSelections(item, {
                offerItemId: item.id,
                quantity: 1
            });
        const eventAdjustCta = !helpers_1.isOffer(item) &&
            isSelected(item, offer, timeSelection, selectedOfferItemId) ? (React.createElement(EventAdjustCta_1.default, { offerItem: item, setOfferItemData: setItemSelections, offerItemCartData: cartData, addToCart: addToCart })) : (undefined);
        return (React.createElement(EventOfferItem_1.default, { offerItem: item, eventAdjustCta: eventAdjustCta, onSelectOffer: onSelectItem, onAdditionalMediaSelect: onAdditionalMediaSelect }));
    };
    const MultiTicketsItemImpl = ({ item }) => {
        const onSelectItem = () => onSelectOffer(item);
        const onAdditionalMediaSelect = () => onSelectAdditionalMedia(item);
        const setItemSelections = (item, data) => updateItemSelections(item, data);
        const cartData = item.offerItems &&
            item.offerItems.map(i => itemSelections[i.id] ||
                updateItemSelections(i, {
                    offerItemId: i.id,
                    quantity: 1
                }));
        const eventAdjustCta = !helpers_1.isOffer(item) &&
            isSelected(item, offer, timeSelection, selectedOfferItemId) ? (React.createElement(MultiTicketAdjustCta_1.default, { offerItem: item, setOfferItemData: setItemSelections, offerItemCartData: cartData, addToCart: addToCart })) : (undefined);
        return (React.createElement(MultiTicketsItem_1.default, { offerItem: item, eventAdjustCta: eventAdjustCta, onSelectOffer: onSelectItem, onAdditionalMediaSelect: onAdditionalMediaSelect }));
    };
    const TimedOfferItemImpl = ({ item, index }) => {
        const onSelectItem = () => onSelectOffer(item);
        const setItemSelections = data => updateItemSelections(item, data);
        const cartData = itemSelections[item.id] ||
            updateItemSelections(item, {
                offerItemId: item.id,
                quantity: 1
            });
        const timedAdjustCta = !helpers_1.isOffer(item) &&
            isSelected(item, offer, timeSelection, selectedOfferItemId) ? (React.createElement(TimedAdjustCta_1.default, { offerItem: item, setOfferItemData: setItemSelections, offerItemCartData: cartData, addToCart: addToCart, userSelection: userSelections })) : (undefined);
        return (React.createElement(TimedOfferItem_1.default, { showDemoData: index === 1, offerItem: item, timedAdjustCta: timedAdjustCta, onSelectOffer: onSelectItem }));
    };
    const HotelOfferItemImpl = ({ item, index }) => {
        const onSelectItem = () => onSelectOffer(item);
        const hotelUserSelections = userSelections;
        const ctaContainer = !helpers_1.isOffer(item) &&
            isSelected(item, offer, timeSelection, selectedOfferItemId) ? (React.createElement(HotelOfferItem_1.CtaContainer, { offerItem: item, userSelections: hotelUserSelections, addToCart: addToCart })) : (undefined);
        return (React.createElement(HotelOfferItem_1.default, { offerItem: item, showDemoData: index === 0 || index === 1 || index === 3 || index === 4, ctaContainer: ctaContainer, onSelectOffer: onSelectItem }));
    };
    const offerItems = () => {
        const timedIndex = timeSelection &&
            timeSelection.timeslot.date &&
            lodash_1.findIndex(offer.items, i => {
                return i.title === timeSelection.timeslot.date;
            });
        const itemsTemp = offer.items.slice(0);
        const items = timeSelection && timeSelection.timeslot.date && timedIndex
            ? itemsTemp.splice(timedIndex, timedIndex + 2)
            : itemsTemp;
        return lodash_1.map(items, (item, i) => {
            if ((userSelections &&
                helpers_1.doesItemFallWithinPriceRange(item, userSelections.priceRange)) ||
                !userSelections) {
                switch (item.type) {
                    case offerTypes_1.OfferItemType.ManyOptions:
                        return React.createElement(MultiTicketsItemImpl, { item: item, key: item.id });
                    case offerTypes_1.OfferItemType.MultipleEvent:
                        return React.createElement(MultiTicketsItemImpl, { item: item, key: item.id });
                    case offerTypes_1.OfferItemType.Event:
                        return React.createElement(EventOfferItemImpl, { item: item, key: item.id });
                    case offerTypes_1.OfferItemType.Merch:
                        return React.createElement(MerchOfferItemImpl, { item: item, index: i, key: item.id });
                    case offerTypes_1.OfferItemType.Hotel:
                        return React.createElement(HotelOfferItemImpl, { item: item, index: i, key: item.id });
                    case offerTypes_1.OfferItemType.Timed:
                        return React.createElement(TimedOfferItemImpl, { item: item, index: i, key: item.id });
                    default:
                        return React.createElement(React.Fragment, null);
                }
            }
            else {
                return React.createElement("span", { key: item.id });
            }
        });
    };
    return React.createElement("section", { className: "offeritems-container" }, offerItems());
};
exports.default = recompose_1.compose(withRoutes_1.default(), WithState_1.default({ itemSelections: {} }))(OfferItemList);
