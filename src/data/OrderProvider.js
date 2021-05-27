"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Query_1 = require("react-apollo/Query");
const getOrder_graphql_1 = require("data/serverQueries/getOrder.graphql");
const payForOrder_graphql_1 = require("data/serverQueries/payForOrder.graphql");
const checkoutCart_graphql_1 = require("data/serverQueries/checkoutCart.graphql");
const Mutation_1 = require("react-apollo/Mutation");
class OrderQuery extends Query_1.default {
}
class PayForOrderMutation extends Mutation_1.default {
}
class OrderProvider extends React.Component {
    render() {
        const { children, orderId } = this.props;
        return (React.createElement(OrderQuery, { query: getOrder_graphql_1.default, variables: { id: orderId } }, ({ loading, error, data, client }) => {
            const order = data.order;
            const providedData = { order, loading };
            const orderGroup = order ? order.group : undefined;
            const isInvitedFlow = !!orderGroup && orderGroup.users.length > 0;
            return (React.createElement(PayForOrderMutation, { mutation: payForOrder_graphql_1.default }, (payForOrderAction, { loading, error }) => {
                const payForOrder = (amount, user, group) => payForOrderAction({
                    variables: { amount, user, group, orderId }
                });
                const addItemProvidedData = Object.assign({}, providedData, { payForOrder,
                    checkoutCart: checkoutCart_graphql_1.default,
                    isInvitedFlow });
                return children(addItemProvidedData);
            }));
        }));
    }
}
exports.default = OrderProvider;
