"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const FormComponents_1 = require("components/FormComponents");
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
const styles_1 = require("components/Checkout/styles");
const react_stripe_elements_1 = require("react-stripe-elements");
const forms_1 = require("css/forms");
const styles = {
    payment: 'payment ' +
        react_emotion_1.css `
      margin: 2rem 0;
    `,
    content: 'payment-content ' +
        react_emotion_1.css `
      margin-top: 0.75rem;
    `
};
const base = [forms_1.formElementsBase, forms_1.formElementsAdditional, `margin-top: 8px;`];
const formElementClasses = {
    base: react_emotion_1.css(base),
    baseSplitLeft: react_emotion_1.css(base.concat(FormComponents_1.formComponentStyles.formElementLeft)),
    baseSplitRight: react_emotion_1.css(base.concat(FormComponents_1.formComponentStyles.formElementRight)),
    webkitAutofill: react_emotion_1.css `
    ${forms_1.formElementsAutofill};
  `,
    invalid: react_emotion_1.css `
    ${forms_1.formElementsError};
  `,
    focus: react_emotion_1.css `
    ${forms_1.formElementsFocus};
  `
};
const formElementStyles = {
    base: {
        fontFamily: variables_1.typography.fontSecondary,
        color: variables_1.colors.standardBlack,
        fontSize: '14px',
        fontSmoothing: 'antialiased'
    },
    invalid: { color: variables_1.colors.standardBlack }
};
const Payment = ({ purchaserName, paymentErrors, updatePayment, stripe }) => {
    const changeEvent = (e) => {
        const { name, value } = e.target;
        updatePayment({ [name]: value });
    };
    return (React.createElement("article", { className: styles.payment },
        React.createElement("header", { className: variables_1.fonts.secondaryTitle }, "Payment"),
        React.createElement("section", { className: styles.content },
            React.createElement(react_stripe_elements_1.CardNumberElement, { placeholder: "Card Number", onChange: e => console.log(e), hideIcon: false, classes: {
                    focus: formElementClasses.focus,
                    invalid: formElementClasses.invalid,
                    base: formElementClasses.base,
                    webkitAutofill: formElementClasses.webkitAutofill
                }, style: {
                    base: formElementStyles.base,
                    invalid: formElementStyles.invalid
                } }),
            React.createElement("section", { className: styles_1.formStyles.sectionContainer },
                React.createElement(react_stripe_elements_1.CardExpiryElement, { placeholder: "Expiry", classes: {
                        invalid: formElementClasses.invalid,
                        focus: formElementClasses.focus,
                        base: formElementClasses.baseSplitLeft,
                        webkitAutofill: formElementClasses.webkitAutofill
                    }, style: {
                        base: formElementStyles.base,
                        invalid: formElementStyles.invalid
                    } }),
                React.createElement(react_stripe_elements_1.CardCVCElement, { placeholder: "CVC", className: FormComponents_1.formComponentStyles.formElementRight, classes: {
                        invalid: formElementClasses.invalid,
                        focus: formElementClasses.focus,
                        base: formElementClasses.baseSplitRight,
                        webkitAutofill: formElementClasses.webkitAutofill
                    }, style: {
                        base: formElementStyles.base,
                        invalid: formElementStyles.invalid
                    } })),
            React.createElement("section", { className: styles_1.formStyles.sectionContainer },
                React.createElement(FormComponents_1.SchemaFormField, { name: "purchaserName", type: "text", value: purchaserName, placeholder: "Name on card", hasError: paymentErrors, onChange: changeEvent, className: FormComponents_1.formComponentStyles.formElementLeft }),
                React.createElement(react_stripe_elements_1.PostalCodeElement, { placeholder: "Zipcode", classes: {
                        invalid: formElementClasses.invalid,
                        focus: formElementClasses.focus,
                        base: formElementClasses.baseSplitRight,
                        webkitAutofill: formElementClasses.webkitAutofill
                    }, style: {
                        base: formElementStyles.base,
                        invalid: formElementStyles.invalid
                    } })))));
};
exports.default = react_stripe_elements_1.injectStripe(Payment);
