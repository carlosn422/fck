"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const variables_1 = require("css/variables");
const styles_1 = require("components/Checkout/styles");
const PaymentMethod = ({ splitPay, updateSplitPay, friendsList }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("article", { className: styles_1.paymentMethodStyles.paymentContainerCss },
            React.createElement("header", { className: variables_1.fonts.secondaryTitle }, "Payment Method"),
            React.createElement("section", { className: styles_1.paymentMethodStyles.paymentMethodInputsCss },
                React.createElement("label", { className: styles_1.paymentMethodStyles.paymentMethodLabelCss },
                    React.createElement("input", { type: "radio", checked: !splitPay.isSplitPay, onChange: () => updateSplitPay({ isSplitPay: false }), className: styles_1.paymentMethodStyles.paymentMethodInputCss }),
                    "Pay Full Amount"),
                React.createElement("label", { className: styles_1.paymentMethodStyles.paymentMethodLabelCss },
                    React.createElement("input", { type: "radio", checked: splitPay.isSplitPay, className: styles_1.paymentMethodStyles.paymentMethodInputCss, onChange: () => updateSplitPay({ isSplitPay: true }) }),
                    "Split With Friends"))),
        splitPay.isSplitPay && (React.createElement("article", { className: styles_1.paymentMethodStyles.paymentContainerCss },
            React.createElement("header", { className: variables_1.fonts.secondaryTitle }, "Split By"),
            React.createElement("section", { className: styles_1.paymentMethodStyles.paymentMethodInputsCss },
                React.createElement("label", { className: styles_1.paymentMethodStyles.paymentMethodLabelCss },
                    React.createElement("input", { type: "radio", checked: splitPay.splitType === 'even', onChange: () => updateSplitPay({ splitType: 'even' }), className: styles_1.paymentMethodStyles.paymentMethodInputCss }),
                    "Even Split"),
                React.createElement("label", { className: styles_1.paymentMethodStyles.paymentMethodLabelCss },
                    React.createElement("input", { type: "radio", checked: splitPay.splitType === 'custom', className: styles_1.paymentMethodStyles.paymentMethodInputCss, onChange: () => updateSplitPay({ splitType: 'custom' }) }),
                    "Custom Split")),
            friendsList))));
};
exports.default = PaymentMethod;
