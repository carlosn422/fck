"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Payment_1 = require("components/Checkout/Payment");
const CheckoutDelivery_1 = require("./CheckoutDelivery");
// import {
//   CurrentOrder,
//   Payment as IPayment,
//   SplitPay,
//   SplitPayFriend,
//   Group
// } from 'custom-typings/orderTypes'
// import { Cart } from 'cart'
//import { primaryButton } from 'css/buttons'
const variables_1 = require("css/variables");
const react_emotion_1 = require("react-emotion");
const PaymentMethod_1 = require("components/Checkout/PaymentMethod");
const CartButton_1 = require("components/CartButton/CartButton");
const react_stripe_elements_1 = require("react-stripe-elements");
const FormComponents_1 = require("components/FormComponents");
const styles_1 = require("components/Panel/styles");
const PaymentProvider_1 = require("data/PaymentProvider");
const CurrentOrderProvider_1 = require("data/CurrentOrderProvider");
const FriendsList_1 = require("components/Checkout/FriendsList");
const styles_2 = require("components/Checkout/styles");
const FormComponents_2 = require("components/FormComponents");
const backCss = react_emotion_1.css `
  ${variables_1.fonts.nav};
  margin: 0 0 2rem -0.75rem;
  display: inline-block;
  color: ${variables_1.colors.brandColor};
`;
const Checkout = props => {
    const { cartProps, isInvitedFlow, gotoRootOffer, checkoutCTA, offerPage, isUsedInSlim } = props;
    const cartTotal = offerPage.isNeedToShowTax
        ? cartProps.getCartTotal()
        : cartProps.getCartSubtotal();
    const numItemsInCart = cartProps.getNumberOfItems();
    return (React.createElement(react_stripe_elements_1.StripeProvider, { apiKey: "pk_test_LxWu7sKYBLNDip992Vwke5pd" },
        React.createElement(React.Fragment, null,
            React.createElement("article", { className: isUsedInSlim
                    ? styles_1.panelCss.panelContainer
                    : styles_1.panelCss.panelScrollableContainer },
                React.createElement(CartButton_1.default, { numberOfItems: numItemsInCart }),
                React.createElement("div", { className: backCss, onClick: gotoRootOffer },
                    React.createElement("div", { className: 'backicon' }),
                    "Continue Shopping"),
                React.createElement("h1", { className: variables_1.fonts.mainHeading }, "Review & Pay"),
                !isInvitedFlow && (React.createElement(PaymentProvider_1.default, { cartTotal: cartTotal }, paymentProps => {
                    const friendsList = (React.createElement(FriendsList_1.default, Object.assign({ cartTotal: cartTotal, splitPay: paymentProps.payment.splitPay }, paymentProps, { className: styles_2.paymentMethodStyles.friendsList })));
                    return !offerPage.isSony ? (React.createElement(PaymentMethod_1.default, Object.assign({}, paymentProps, { splitPay: paymentProps.payment.splitPay, friendsList: friendsList }))) : (React.createElement("div", null));
                })),
                React.createElement(react_stripe_elements_1.Elements, { fonts: [
                        {
                            family: 'MarkOT',
                            src: 'url(https://s3.amazonaws.com/fevo/assets/fontface/mark-ot/hinted-MarkOT-Medium.woff)',
                            style: 'normal',
                            weight: 'normal'
                        }
                    ] },
                    React.createElement("form", { className: "checkout-form", onSubmit: data => console.log('submitted form with data, ', data) },
                        React.createElement(PaymentProvider_1.default, { cartTotal: cartTotal }, paymentProps => (React.createElement(Payment_1.default, { purchaserName: paymentProps.payment.purchaserName, updatePayment: paymentProps.updatePayment, paymentErrors: {} }))),
                        React.createElement("section", null,
                            React.createElement(FormComponents_1.SchemaFormFieldSubmit, { name: "promo", type: "text", value: 'test', placeholder: "Promo Code or Gift Voucher", hasError: [], className: FormComponents_2.formComponentStyles.formElementLeft })),
                        React.createElement(CurrentOrderProvider_1.default, null, currentOrderProps => (React.createElement(CheckoutDelivery_1.default, Object.assign({}, currentOrderProps, { isNeedToShowBirthday: offerPage.showBirthday, currentOrderErrors: {}, isInvitedFlow: isInvitedFlow }))))))),
            checkoutCTA)));
};
exports.default = Checkout;
