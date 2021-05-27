"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OfferItemList_1 = require("components/Offer/OfferItemList");
const OfferPriceSlider_1 = require("components/Offer/OfferPriceSlider");
const PrimaryLayout_1 = require("components/Offer/PrimaryLayout");
const SlimLayout_1 = require("components/Offer/SlimLayout");
const styles_1 = require("components/Offer/styles");
const PanelLayout_1 = require("components/Panel/PanelLayout");
const variables_1 = require("css/variables");
const EventUserSelectionsProvider_1 = require("data/EventUserSelectionsProvider");
const React = require("react");
const offerTypes_1 = require("custom-typings/offerTypes");
const variables_2 = require("css/variables");
const react_emotion_1 = require("react-emotion");
const HotelUserSelectionsProvider_1 = require("data/HotelUserSelectionsProvider");
const OfferItemUserSelectionsProvider_1 = require("data/OfferItemUserSelectionsProvider");
const DateRangePicker_1 = require("components/Calendar/DateRangePicker");
const esm_1 = require("date-fns/esm");
const Timeslots_1 = require("components/Timeslots/Timeslots");
const descriptionCss = react_emotion_1.css `
  color: ${variables_2.colors.secondaryGray};
  padding-bottom: 2rem;
`;
const Header = (offer, dateLocation) => {
    return (React.createElement("header", { className: styles_1.styles.titleContainer },
        React.createElement("div", { className: `${variables_1.fonts.mainHeading} ${styles_1.styles.offerTitle} ` }, offer.title),
        React.createElement("div", { className: descriptionCss }, dateLocation)));
};
const Body = (offer, addToCart) => {
    const now = new Date();
    const timeslots = [
        { date: '11:35 AM', __typename: 'Timeslot' },
        { date: '2:55 PM', __typename: 'Timeslot' },
        { date: '6:15 PM', __typename: 'Timeslot' },
        { date: '9:40 PM', __typename: 'Timeslot' }
    ];
    return (React.createElement(OfferItemUserSelectionsProvider_1.default, null, ({ offerItemUpdateUserSelections }) => {
        return (React.createElement(EventUserSelectionsProvider_1.default, null, ({ userSelections, updateUserSelections }) => {
            return (React.createElement(HotelUserSelectionsProvider_1.default, null, ({ hotelUserSelections, updateUserSelections }) => (React.createElement(React.Fragment, null, offer.items[0].type === offerTypes_1.OfferItemType.MultipleEvent ? (React.createElement(React.Fragment, null,
                React.createElement("section", { className: styles_1.styles.selectionContainer },
                    React.createElement(DateRangePicker_1.default, { isRangeEnabled: false, chooseStart: updateUserSelections.startDate, chooseEnd: updateUserSelections.startDate, gotoPreviousMonth: updateUserSelections.previousMonth, gotoNextMonth: updateUserSelections.nextMonth, canGotoNextMonth: true, startDate: hotelUserSelections.travelDates.startDate, endDate: hotelUserSelections.travelDates.startDate, selectedMonthsDate: hotelUserSelections.travelDates
                            .selectedMonthsDate, canGotoPreviousMonth: esm_1.isEqual(hotelUserSelections.travelDates
                            .selectedMonthsDate, now) ||
                            esm_1.isAfter(hotelUserSelections.travelDates
                                .selectedMonthsDate, now) }),
                    React.createElement(Timeslots_1.default, { timeSlots: timeslots, onTimeSelect: v => {
                            updateUserSelections.timeslot(v);
                            console.log(hotelUserSelections.timeslot);
                        }, selectedTimeSlot: hotelUserSelections.timeslot })),
                React.createElement(OfferItemList_1.default, { offer: offer, timeSelection: hotelUserSelections, addToCart: addToCart, userSelections: hotelUserSelections, updateUserSelections: offerItemUpdateUserSelections }))) : (React.createElement(React.Fragment, null,
                offer.uri !== 'tickets-giants' && (React.createElement(OfferPriceSlider_1.default, { offer: offer, onChange: updateUserSelections.price, className: styles_1.styles.priceSliderContainer, userSelectedLowerBound: hotelUserSelections.priceRange.lowerBound, userSelectedUpperBound: hotelUserSelections.priceRange.upperBound })),
                React.createElement(OfferItemList_1.default, { offer: offer, addToCart: addToCart, userSelections: hotelUserSelections, updateUserSelections: offerItemUpdateUserSelections })))))));
        }));
    }));
};
const EventOfferPrimary = props => {
    const { offer, addToCart, offerPreHeader, dateLocation, checkoutCTA } = props;
    const body = Body(offer, addToCart);
    const header = Header(offer, dateLocation);
    return React.createElement(PrimaryLayout_1.default, Object.assign({}, props, { header: header, body: body }));
};
const Slim = props => {
    const { offer, addToCart, offerPreHeader, dateLocation, checkoutCTA } = props;
    const body = Body(offer, addToCart);
    const header = Header(offer, dateLocation);
    return React.createElement(SlimLayout_1.default, Object.assign({}, props, { header: header, body: body }));
};
const EventOffer = props => (React.createElement(PanelLayout_1.default, { Primary: () => React.createElement(EventOfferPrimary, Object.assign({}, props)), Secondary: props.offerSecondary, Slim: () => React.createElement(Slim, Object.assign({}, props)) }));
exports.default = EventOffer;
