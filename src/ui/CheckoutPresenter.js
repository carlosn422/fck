"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Checkout_1 = require("components/Checkout/Checkout");
const CheckoutSummary_1 = require("components/Checkout/CheckoutSummary");
const PanelLayout_1 = require("components/Panel/PanelLayout");
const ConfirmCTA_1 = require("components/StickyCTA/ConfirmCTA");
const cuid = require("cuid");
const CurrentOrderProvider_1 = require("data/CurrentOrderProvider");
const OfferProvider_1 = require("data/OfferProvider");
const PaymentProvider_1 = require("data/PaymentProvider");
const Cookies = require("js-cookie");
const React = require("react");
const withRoutes_1 = require("router/withRoutes");
const cart_1 = require("cart");
const OrderProvider_1 = require("data/OrderProvider");
const states_1 = require("ui/states");
const CheckoutSlimLayout_1 = require("components/Checkout/CheckoutSlimLayout");
const CheckoutPresenter = ({ gotoConfirm, gotoRootOffer, cartProps, offerPage, orderProps }) => {
    const { isInvitedFlow, order, payForOrder } = orderProps;
    const orderGroup = order ? order.group : undefined;
    const cartTotal = offerPage.isNeedToShowTax
        ? cartProps.getCartTotal()
        : cartProps.getCartSubtotal();
    const numItemsInCart = cartProps.getNumberOfItems();
    const makePayment = (order, payment) => {
        const user = {
            email: order.email,
            firstName: order.firstName,
            lastName: order.lastName
        };
        const group = {
            name: order.groupName
        };
        const payForOrderPromise = isInvitedFlow
            ? payForOrder(payment.amountOwed || cartTotal, user)
            : payForOrder(payment.amountOwed || cartTotal, user, group);
        payForOrderPromise.then((data) => {
            Cookies.remove('cartId');
            Cookies.set('cartId', cuid());
            gotoConfirm({
                orderId: data.data.payForOrder.id
            });
        });
    };
    const checkoutCTA = (React.createElement(PaymentProvider_1.default, { cartTotal: cartTotal }, paymentProps => (React.createElement(CurrentOrderProvider_1.default, null, currentOrderProps => {
        const onClick = () => {
            makePayment(currentOrderProps.currentOrder, paymentProps.payment);
        };
        const displayPrice = !paymentProps.payment.splitPay.isSplitPay ||
            paymentProps.payment.splitPay.splitType === 'custom'
            ? paymentProps.amountOwed
            : cartTotal / (paymentProps.payment.splitPay.friends.length + 1);
        return (React.createElement(ConfirmCTA_1.default, { amountOwed: displayPrice, numItems: numItemsInCart, onClick: onClick }));
    }))));
    const checkoutProps = {
        isInvitedFlow,
        makePayment,
        gotoRootOffer,
        cartProps
    };
    const checkoutSummaryProps = {
        orderGroup,
        cartProps
    };
    const Body = (showSummary = true, isUsedInSlim = false) => {
        return (React.createElement(CheckoutSummary_1.default, Object.assign({}, checkoutSummaryProps, { offerPage: offerPage, showSummary: showSummary, isUsedInSlim: isUsedInSlim })));
    };
    const Header = (isUsedInSlim = false) => {
        return (React.createElement(OfferProvider_1.default, null, ({ offerPage }) => (React.createElement(React.Fragment, null,
            React.createElement(Checkout_1.default, Object.assign({}, checkoutProps, { checkoutCTA: checkoutCTA, isUsedInSlim: isUsedInSlim, offerPage: offerPage }))))));
    };
    const Slim = () => {
        const body = Body(false, true);
        const header = (React.createElement(Checkout_1.default, Object.assign({}, checkoutProps, { isUsedInSlim: true, offerPage: offerPage })));
        return (React.createElement(CheckoutSlimLayout_1.default, { header: header, body: body, checkoutCTA: checkoutCTA }));
    };
    return React.createElement(PanelLayout_1.default, { Primary: Header, Secondary: Body, Slim: Slim });
};
exports.default = withRoutes_1.default()(props => {
    const gotoRootOffer = () => props.routes.go(states_1.Fuc.OfferPage);
    return (React.createElement(cart_1.CartProvider, null, cartProps => {
        return (React.createElement(OrderProvider_1.default, { orderId: props.routes.params.orderId }, orderProps => {
            const orderGroup = orderProps.order
                ? orderProps.order.group
                : undefined;
            return (React.createElement(OfferProvider_1.default, null, ({ offerPage }) => (React.createElement(CheckoutPresenter, Object.assign({}, props, { cartProps: cartProps, gotoConfirm: () => props.routes.go(states_1.Fuc.Confirm), gotoRootOffer: gotoRootOffer, orderProps: orderProps, offerPage: offerPage })))));
        }));
    }));
});
