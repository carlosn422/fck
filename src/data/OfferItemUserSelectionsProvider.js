"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const UserSelectionsStore_1 = require("data/UserSelectionsStore");
class OfferItemQuery extends react_apollo_1.Query {
}
class OfferItemUserSelectionsProvider extends React.Component {
    render() {
        const { children } = this.props;
        return (React.createElement(OfferItemQuery, { query: UserSelectionsStore_1.default.offerItemUserSelections.query }, ({ loading, error, data, client }) => {
            const offerItemUserSelections = data.offerItemUserSelections;
            const setUserSelectionsState = newState => {
                const newUserSelections = Object.assign({}, offerItemUserSelections, newState, { __typename: 'OfferItemUserSelections' });
                client.writeData({
                    data: {
                        offerItemUserSelections: newUserSelections
                    }
                });
            };
            const offerItemUpdateUserSelections = {
                selectedOfferItem: (offerItem) => setUserSelectionsState({
                    selectedOfferItem: Object.assign({}, offerItemUserSelections.selectedOfferItem, offerItem, { __typename: 'OfferItem' })
                }),
                seelctAdditionalMediaFor: (offerItem) => setUserSelectionsState({
                    selectedAdditionalOfferItem: Object.assign({}, offerItemUserSelections.selectedAdditionalOfferItem, offerItem, { __typename: 'AdditionalOfferItem' })
                })
            };
            const providedProps = {
                offerItemUserSelections,
                offerItemUpdateUserSelections
            };
            return children(providedProps);
        }));
    }
}
exports.default = OfferItemUserSelectionsProvider;
