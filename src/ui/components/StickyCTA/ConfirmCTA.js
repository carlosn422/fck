"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const buttons_1 = require("css/buttons");
const styles_1 = require("components/StickyCTA/styles");
const variables_1 = require("css/variables");
const utils_1 = require("cart/utils");
const react_emotion_1 = require("react-emotion");
const ConfirmCTA = ({ disabled = false, amountOwed, numItems, onClick }) => {
    const itemText = numItems > 1 ? 'items' : 'item';
    return (React.createElement("article", { className: `confirm-cta ${styles_1.styles.ctaContainerCss}` },
        React.createElement("section", { className: "" },
            React.createElement("div", { className: 'checkout-info' },
                "Checkout with ",
                numItems,
                " ",
                itemText),
            React.createElement("div", { className: react_emotion_1.css `
            ${variables_1.fonts.priceText};
            color: ${variables_1.colors.brandColor};
          ` },
                "You'll pay ",
                utils_1.formatPrice(amountOwed))),
        React.createElement("button", { disabled: disabled, type: "submit", className: `${buttons_1.primaryButton} ${styles_1.styles.confirmBtn}`, onClick: onClick }, "Confirm")));
};
exports.default = ConfirmCTA;
