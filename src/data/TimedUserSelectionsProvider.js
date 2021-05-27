"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const UserSelectionsStore_1 = require("data/UserSelectionsStore");
const esm_1 = require("date-fns/esm");
class TimedSelectionsQuery extends react_apollo_1.Query {
}
class TimedUserSelectionsProvider extends React.Component {
    render() {
        const { children } = this.props;
        return (React.createElement(TimedSelectionsQuery, { query: UserSelectionsStore_1.default.timedUserSelections.query }, ({ loading, error, data, client }) => {
            const userSelections = data.timedUserSelections;
            const setUserSelectionsState = newState => {
                const newTimedUserSelections = Object.assign({}, userSelections, newState, { __typename: 'TimedUserSelections' });
                client.writeData({
                    data: {
                        timedUserSelections: newTimedUserSelections
                    }
                });
            };
            const updateUserSelections = {
                chooseDate: (date) => setUserSelectionsState({
                    chosenTime: Object.assign({}, userSelections.chosenTime, { selectedTimeSlot: date.toJSON(), __typename: 'ChosenTime' })
                }),
                previousMonth: () => setUserSelectionsState({
                    chosenTime: Object.assign({}, userSelections.chosenTime, { selectedMonthsDate: esm_1.addMonths(userSelections.chosenTime.selectedMonthsDate, -1).toJSON(), __typename: 'ChosenTime' })
                }),
                nextMonth: () => setUserSelectionsState({
                    chosenTime: Object.assign({}, userSelections.chosenTime, { selectedMonthsDate: esm_1.addMonths(userSelections.chosenTime.selectedMonthsDate, 1).toJSON(), __typename: 'ChosenTime' })
                }),
                price: (range) => setUserSelectionsState({
                    priceRange: {
                        lowerBound: range[0],
                        upperBound: range[1],
                        __typename: 'PriceRange'
                    }
                })
            };
            return children({
                userSelections,
                updateUserSelections
            });
        }));
    }
}
exports.default = TimedUserSelectionsProvider;
