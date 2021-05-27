"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const buttons_1 = require("css/buttons");
const styles_1 = require("components/StickyCTA/styles");
const variables_1 = require("css/variables");
const utils_1 = require("cart/utils");
const CheckoutCTA = ({ goToCheckout, cartSubtotal, numItems, containsAddons, goToAddons, title, description, isRootOffer, gotoRootOffer }) => {
    const disabled = numItems === 0;
    const itemText = numItems > 1 ? 'items' : 'item';
    const checkoutBtnStyle = disabled
        ? styles_1.styles.checkoutButtonDisabled
        : styles_1.styles.checkoutButtonEnabled;
    const content = numItems ? (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "" },
            React.createElement("div", { className: 'checkout-info' },
                "Total (",
                numItems,
                " ",
                itemText,
                ")"),
            React.createElement("div", { className: variables_1.fonts.priceText }, utils_1.formatPrice(cartSubtotal))),
        React.createElement("div", { className: styles_1.styles.keepShopping }, isRootOffer && React.createElement("a", { onClick: gotoRootOffer }, "Keep Shopping")))) : (React.createElement("div", { className: 'checkout-info' },
        React.createElement("div", { className: styles_1.styles.checkoutInfoHeader }, title),
        React.createElement("div", { className: "" }, description)));
    return (React.createElement("article", { className: styles_1.styles.ctaContainerCss },
        content,
        React.createElement("button", { disabled: disabled, onClick: containsAddons ? goToAddons : goToCheckout, className: `${buttons_1.primaryButton} ${checkoutBtnStyle}` }, containsAddons ? 'Next' : 'Checkout')));
};
exports.default = CheckoutCTA;
