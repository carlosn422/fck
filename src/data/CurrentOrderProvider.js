"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Query_1 = require("react-apollo/Query");
const currentOrderQuery_gql_1 = require("./clientQueries/currentOrderQuery.gql");
class CurrentOrderQuery extends Query_1.default {
}
class CurrentOrderProvider extends React.Component {
    render() {
        const { children } = this.props;
        return (React.createElement(CurrentOrderQuery, { query: currentOrderQuery_gql_1.default }, ({ client, data, loading }) => {
            const currentOrder = data.currentOrder;
            const updateCurrentOrder = (currentOrderData) => {
                client.writeData({
                    data: {
                        currentOrder: Object.assign({}, data, currentOrderData, { __typename: 'CurrentOrder' })
                    }
                });
            };
            const providedData = {
                currentOrder,
                updateCurrentOrder
            };
            return children(providedData);
        }));
    }
}
exports.default = CurrentOrderProvider;
