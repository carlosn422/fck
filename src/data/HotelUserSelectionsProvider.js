"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const UserSelectionsStore_1 = require("data/UserSelectionsStore");
const esm_1 = require("date-fns/esm");
class HotelQuery extends react_apollo_1.Query {
}
class HotelUserSelectionsProvider extends React.Component {
    render() {
        const { children } = this.props;
        return (React.createElement(HotelQuery, { query: UserSelectionsStore_1.default.hotelUserSelections.query }, ({ loading, error, data, client }) => {
            const hotelUserSelections = data.hotelUserSelections;
            const setUserSelectionsState = newState => {
                const newHotelUserSelections = Object.assign({}, hotelUserSelections, newState, { __typename: 'HotelUserSelections' });
                client.writeData({
                    data: {
                        hotelUserSelections: newHotelUserSelections
                    }
                });
            };
            const updateUserSelections = {
                roomPreferences: (data) => setUserSelectionsState({
                    roomPreferences: Object.assign({}, hotelUserSelections.roomPreferences, data, { __typename: 'RoomPreferences' })
                }),
                timeslot: (slot) => {
                    setUserSelectionsState({
                        timeslot: Object.assign({}, slot, { __typename: 'Timeslot' })
                    });
                },
                startDate: (date) => setUserSelectionsState({
                    travelDates: Object.assign({}, hotelUserSelections.travelDates, { startDate: date.toJSON(), endDate: null, __typename: 'TravelDates' })
                }),
                endDate: (date) => setUserSelectionsState({
                    travelDates: Object.assign({}, hotelUserSelections.travelDates, { startDate: hotelUserSelections.travelDates.startDate, endDate: date.toJSON(), __typename: 'TravelDates' })
                }),
                previousMonth: () => setUserSelectionsState({
                    travelDates: Object.assign({}, hotelUserSelections.travelDates, { selectedMonthsDate: esm_1.addMonths(hotelUserSelections.travelDates.selectedMonthsDate, -1).toJSON(), __typename: 'TravelDates' })
                }),
                nextMonth: () => setUserSelectionsState({
                    travelDates: Object.assign({}, hotelUserSelections.travelDates, { selectedMonthsDate: esm_1.addMonths(hotelUserSelections.travelDates.selectedMonthsDate, 1).toJSON(), __typename: 'TravelDates' })
                }),
                price: (range) => setUserSelectionsState({
                    priceRange: {
                        lowerBound: range[0],
                        upperBound: range[1],
                        __typename: 'PriceRange'
                    }
                })
            };
            const providedProps = {
                hotelUserSelections,
                updateUserSelections
            };
            return children(providedProps);
        }));
    }
}
exports.default = HotelUserSelectionsProvider;
