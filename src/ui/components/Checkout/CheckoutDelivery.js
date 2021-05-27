"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const FormComponents_1 = require("components/FormComponents");
const variables_1 = require("css/variables");
const react_emotion_1 = require("react-emotion");
const styles_1 = require("components/Checkout/styles");
const tempCopy = `<p><span style="font-size: 7; color: #908f8f;">Yes,
I&rsquo;d like to hear from Sony about products and services
like games, electronics, mobile devices, entertainment and more. I can unsubscribe at any time.</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 7; color: #908f8f;">By clicking the confirm button
you agree to the Sony Rewards <a href="http://www.sonyrewards.com/en/footer/terms_of_use/">
Terms &amp; Conditions</a> and <a href="http://www.sonyrewards.com/en/footer/privacy_legal/">Privacy
Policy</a>.</span></p>`;
const styles = {
    checkoutDelivery: 'checkout-delivery ' +
        react_emotion_1.css `
      margin: 2rem 0;
    `,
    content: 'checkout-content ' +
        react_emotion_1.css `
      margin-top: 0.75rem;
    `
};
const checkmarkContainer = react_emotion_1.css `
  display: flow;
  padding-top: 2rem;
`;
const checkmarkCopy = react_emotion_1.css `
  padding: 0rem 4rem 0 0.5rem;
`;
const CheckoutDelivery = ({ updateCurrentOrder, isInvitedFlow, currentOrder, isCheckedTerms, isNeedToShowBirthday, currentOrderErrors }) => {
    const onChange = (e) => {
        const { name, value } = e.target;
        updateCurrentOrder({
            [name]: value
        });
    };
    return (React.createElement("article", { className: styles.checkoutDelivery },
        React.createElement("header", { className: variables_1.fonts.secondaryTitle }, "Your info"),
        React.createElement("section", { className: styles.content },
            React.createElement("section", { className: styles_1.formStyles.sectionContainer },
                React.createElement(FormComponents_1.SchemaFormField, { name: "firstName", type: "text", value: currentOrder, hasError: currentOrderErrors, placeholder: "First Name", onChange: onChange, className: FormComponents_1.formComponentStyles.formElementLeft }),
                React.createElement(FormComponents_1.SchemaFormField, { name: "lastName", type: "text", value: currentOrder, hasError: currentOrderErrors, placeholder: "Last Name", onChange: onChange, className: FormComponents_1.formComponentStyles.formElementRight })),
            React.createElement("section", { className: styles_1.formStyles.sectionContainer }, isNeedToShowBirthday ? (React.createElement(React.Fragment, null,
                React.createElement(FormComponents_1.SchemaFormField, { name: "birthday", type: "text", value: currentOrder, hasError: currentOrderErrors, placeholder: "Date of Birth (MM/DD/YYYY)", onChange: onChange, className: FormComponents_1.formComponentStyles.formElementLeft }),
                React.createElement(FormComponents_1.SchemaFormField, { name: "phone", type: "text", value: currentOrder, hasError: currentOrderErrors, placeholder: "Phone (Optional)", onChange: onChange, className: FormComponents_1.formComponentStyles.formElementLeft }))) : (React.createElement(React.Fragment, null,
                React.createElement(FormComponents_1.SchemaFormField, { name: "email", type: "text", value: currentOrder, hasError: currentOrderErrors, placeholder: "Email", onChange: onChange, className: FormComponents_1.formComponentStyles.formElementLeft }),
                React.createElement(FormComponents_1.SchemaFormField, { name: "phone", type: "text", value: currentOrder, hasError: currentOrderErrors, placeholder: "Phone (Optional)", onChange: onChange, className: FormComponents_1.formComponentStyles.formElementRight })))),
            isNeedToShowBirthday && (React.createElement(FormComponents_1.SchemaFormField, { name: "email", type: "text", value: currentOrder, hasError: currentOrderErrors, placeholder: "Email", onChange: onChange, className: FormComponents_1.formComponentStyles.formElementLeft }))),
        !isInvitedFlow && (React.createElement("section", { className: styles.checkoutDelivery },
            React.createElement("header", { className: variables_1.fonts.secondaryTitle }, "Name your group"),
            React.createElement(FormComponents_1.SchemaFormField, { name: "groupName", type: "text", value: currentOrder, placeholder: "Group Name", hasError: {}, onChange: onChange, className: FormComponents_1.formComponentStyles.formElement }))),
        isNeedToShowBirthday && (React.createElement("section", { className: checkmarkContainer },
            React.createElement("input", { type: "checkbox" }),
            React.createElement("div", { className: checkmarkCopy, dangerouslySetInnerHTML: { __html: tempCopy } })))));
};
exports.default = CheckoutDelivery;
