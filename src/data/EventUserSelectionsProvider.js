"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const UserSelectionsStore_1 = require("data/UserSelectionsStore");
class EventQuery extends react_apollo_1.Query {
}
class EventUserSelectionsProvider extends React.Component {
    render() {
        const { children } = this.props;
        return (React.createElement(EventQuery, { query: UserSelectionsStore_1.default.eventUserSelections.query }, ({ loading, error, data, client }) => {
            const userSelections = data.eventUserSelections;
            const setUserSelectionsState = newState => {
                const newEventUserSelections = Object.assign({}, userSelections, newState, { __typename: 'EventUserSelections' });
                client.writeData({
                    data: {
                        eventUserSelections: newEventUserSelections
                    }
                });
            };
            const updateUserSelections = {
                price: (range) => setUserSelectionsState({
                    priceRange: {
                        lowerBound: range[0],
                        upperBound: range[1],
                        __typename: 'PriceRange'
                    }
                })
            };
            const providedProps = {
                userSelections,
                updateUserSelections
            };
            return children(providedProps);
        }));
    }
}
exports.default = EventUserSelectionsProvider;
