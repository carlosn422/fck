"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DateRangePicker_1 = require("components/Calendar/DateRangePicker");
const HotelRoomFilter_1 = require("components/Offer/HotelRoomFilter");
const OfferItemList_1 = require("components/Offer/OfferItemList");
const OfferPriceSlider_1 = require("components/Offer/OfferPriceSlider");
const PrimaryLayout_1 = require("components/Offer/PrimaryLayout");
const SlimLayout_1 = require("components/Offer/SlimLayout");
const styles_1 = require("components/Offer/styles");
const PanelLayout_1 = require("components/Panel/PanelLayout");
const variables_1 = require("css/variables");
const HotelUserSelectionsProvider_1 = require("data/HotelUserSelectionsProvider");
const esm_1 = require("date-fns/esm");
const React = require("react");
const OfferItemUserSelectionsProvider_1 = require("data/OfferItemUserSelectionsProvider");
const Header = (offer, dateLocation) => {
    return (React.createElement("header", { className: styles_1.styles.titleContainer },
        React.createElement("div", { className: `${variables_1.fonts.mainHeading} ${styles_1.styles.offerTitle} ` }, offer.title),
        dateLocation));
};
const Body = (offer, addToCart) => {
    const now = new Date();
    return (React.createElement(OfferItemUserSelectionsProvider_1.default, null, ({ offerItemUpdateUserSelections, offerItemUserSelections }) => {
        return (React.createElement(HotelUserSelectionsProvider_1.default, null, ({ hotelUserSelections, updateUserSelections }) => (React.createElement(React.Fragment, null,
            React.createElement("section", { className: styles_1.styles.selectionContainer },
                React.createElement(DateRangePicker_1.default, { isRangeEnabled: true, chooseStart: updateUserSelections.startDate, chooseEnd: updateUserSelections.endDate, gotoPreviousMonth: updateUserSelections.previousMonth, gotoNextMonth: updateUserSelections.nextMonth, canGotoNextMonth: true, startDate: hotelUserSelections.travelDates.startDate, endDate: hotelUserSelections.travelDates.endDate, selectedMonthsDate: hotelUserSelections.travelDates.selectedMonthsDate, canGotoPreviousMonth: esm_1.isEqual(hotelUserSelections.travelDates.selectedMonthsDate, now) ||
                        esm_1.isAfter(hotelUserSelections.travelDates.selectedMonthsDate, now) }),
                React.createElement(HotelRoomFilter_1.HotelRoomFilter, { numAdults: hotelUserSelections.roomPreferences.numAdults, numChildren: hotelUserSelections.roomPreferences.numChildren, numRooms: hotelUserSelections.roomPreferences.numRooms, onChange: updateUserSelections.roomPreferences })),
            React.createElement(OfferPriceSlider_1.default, { offer: offer, userSelectedLowerBound: hotelUserSelections.priceRange.lowerBound, userSelectedUpperBound: hotelUserSelections.priceRange.upperBound, onChange: updateUserSelections.price, className: styles_1.styles.priceSliderContainer }),
            React.createElement(OfferItemList_1.default, { addToCart: addToCart, offer: offer, updateUserSelections: offerItemUpdateUserSelections, userSelections: hotelUserSelections })))));
    }));
};
const HotelOfferPrimary = props => {
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
const HotelOffer = props => {
    return (React.createElement(PanelLayout_1.default, { Primary: () => React.createElement(HotelOfferPrimary, Object.assign({}, props)), Secondary: props.offerSecondary, Slim: () => React.createElement(Slim, Object.assign({}, props)) }));
};
exports.default = HotelOffer;
