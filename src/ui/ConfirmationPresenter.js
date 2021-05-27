"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PanelLayout_1 = require("components/Panel/PanelLayout");
const OfferProvider_1 = require("data/OfferProvider");
const React = require("react");
const withRoutes_1 = require("router/withRoutes");
const OrderProvider_1 = require("data/OrderProvider");
const states_1 = require("ui/states");
const ConfirmationShare_1 = require("./components/Confirmation/ConfirmationShare");
const ConfirmationSummary_1 = require("./components/Confirmation/ConfirmationSummary");
const PaymentProvider_1 = require("data/PaymentProvider");
const cart_1 = require("cart");
const ConfirmationSlimLayout_1 = require("./components/Confirmation/ConfirmationSlimLayout");
const ConfirmationPresenter = ({ goToRootOffer, order, offerPage }) => {
    const Body = () => {
        return (React.createElement(cart_1.CartProvider, null, cartProps => (React.createElement(PaymentProvider_1.default, { cartTotal: cartProps.getCartTotal() }, paymentProps => {
            return (React.createElement(ConfirmationSummary_1.default, { order: order, offerPage: offerPage, isSplitPaying: paymentProps.payment.splitPay.isSplitPay }));
        }))));
    };
    const Header = () => {
        return (React.createElement(ConfirmationShare_1.default, { orderId: order.id, offerPageUri: offerPage.uri, goToRootOffer: goToRootOffer }));
    };
    const Slim = () => {
        const body = Header();
        const header = Body();
        return React.createElement(ConfirmationSlimLayout_1.default, { header: header, body: body });
    };
    return (React.createElement(PanelLayout_1.default, { Primary: Header, Secondary: Body, Slim: Slim, showConfetti: () => true }));
};
exports.default = withRoutes_1.default()(props => {
    const goToRootOffer = () => props.routes.go(states_1.Fuc.OfferPage);
    return (React.createElement(OrderProvider_1.default, { orderId: props.routes.params.orderId }, orderProps => {
        const { loading, order } = orderProps;
        return (React.createElement(OfferProvider_1.default, null, ({ offerPage }) => {
            return (React.createElement(ConfirmationPresenter, { goToRootOffer: goToRootOffer, order: order, offerPage: offerPage }));
        }));
    }));
});
