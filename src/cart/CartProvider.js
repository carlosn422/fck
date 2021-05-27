"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Query_1 = require("react-apollo/Query");
const getCart_graphql_1 = require("data/serverQueries/getCart.graphql");
const addItemToCart_graphql_1 = require("data/serverQueries/addItemToCart.graphql");
const removeItemFromCart_graphql_1 = require("data/serverQueries/removeItemFromCart.graphql");
const checkoutCart_graphql_1 = require("data/serverQueries/checkoutCart.graphql");
const selectors_1 = require("./selectors");
const Cookies2 = require("js-cookie");
const Mutation_1 = require("react-apollo/Mutation");
const OfferProvider_1 = require("data/OfferProvider");
class CartQuery extends Query_1.default {
}
class AddItemToCartMutation extends Mutation_1.default {
}
class RemoveCartItemMutation extends Mutation_1.default {
}
class CheckoutCartMutation extends Mutation_1.default {
}
class CartProvider extends React.Component {
    render() {
        const { children } = this.props;
        const cartId = Cookies2.get('cartId');
        return (React.createElement(OfferProvider_1.default, null, ({ offerPage }) => (React.createElement(CartQuery, { query: getCart_graphql_1.default, variables: { cId: cartId } }, ({ loading, error, data }) => {
            const cart = data.cart;
            const cartItems = !loading && cart ? cart.items : [];
            const selectors = selectors_1.createSelectors(offerPage.offer, cartItems);
            const providedData = Object.assign({ cart }, selectors, { loading, cartItems });
            return (React.createElement(RemoveCartItemMutation, { mutation: removeItemFromCart_graphql_1.default }, (removeCartAction, { loading, error }) => {
                const removeFromCart = (cartItemId) => removeCartAction({
                    variables: { cartId, cartItemId }
                });
                return (React.createElement(CheckoutCartMutation, { mutation: checkoutCart_graphql_1.default }, (checkoutCartAction, { loading, error }) => {
                    const checkoutCart = () => checkoutCartAction({
                        variables: { cartId }
                    });
                    return (React.createElement(AddItemToCartMutation, { mutation: addItemToCart_graphql_1.default }, (addToCartAction, { loading, error }) => {
                        const addToCart = (data) => addToCartAction({
                            variables: { cartId, cartItem: data }
                        });
                        const addItemProvidedData = Object.assign({}, providedData, { addToCart,
                            removeFromCart,
                            checkoutCart });
                        return children(addItemProvidedData);
                    }));
                }));
            }));
        }))));
    }
}
exports.default = CartProvider;
