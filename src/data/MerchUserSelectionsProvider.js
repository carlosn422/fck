"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const UserSelectionsStore_1 = require("data/UserSelectionsStore");
class MerchQuery extends react_apollo_1.Query {
}
class MerchUserSelectionsProvider extends React.Component {
    render() {
        const { children } = this.props;
        return (React.createElement(MerchQuery, { query: UserSelectionsStore_1.default.merchUserSelections.query, displayName: "merchUserSelections" }, ({ loading, error, data, client }) => {
            const userSelections = data.merchUserSelections;
            const setUserSelectionsState = newState => {
                const newUserSelections = Object.assign({}, userSelections, newState, { __typename: 'MerchUserSelections' });
                client.writeData({
                    data: {
                        merchUserSelections: newUserSelections
                    }
                });
            };
            const updateUserSelections = {
                price: ([lowerBound, upperBound]) => setUserSelectionsState({
                    priceRange: {
                        lowerBound,
                        upperBound,
                        __typename: 'PriceRange'
                    }
                }),
                selectedOfferItem: (offerItem) => setUserSelectionsState({
                    selectedOfferItem: Object.assign({}, offerItem, { __typename: 'OfferItem' })
                })
            };
            const providedProps = { updateUserSelections, userSelections };
            return children(providedProps);
        }));
    }
}
exports.default = MerchUserSelectionsProvider;
