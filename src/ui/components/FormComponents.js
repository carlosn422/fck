"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
const react_currency_input_1 = require("react-currency-input");
const buttons_1 = require("css/buttons");
const currency_1 = require("cart/currency");
exports.formComponentStyles = {
    formElement: react_emotion_1.css `
    width: 100%;
    border: 1px solid transparent;
    margin-top: 0.5rem;
  `,
    formElementLeft: react_emotion_1.css `
    width: 100%;
    margin-right: 0.5rem;
    @media ${variables_1.mediaQueries.bpLg} {
      width: calc(50% - 0.5rem);
    }
  `,
    formElementRight: react_emotion_1.css `
    width: 100%;
    margin-left: 0.5rem;
    @media ${variables_1.mediaQueries.bpLg} {
      width: calc(50% - 0.5rem);
    }
  `,
    formElementSubmitContainer: react_emotion_1.css `
    margin-top: 2rem;
    display: flex;
  `,
    formElementSubmitButton: react_emotion_1.css `
    width: 20%;
    @media ${variables_1.mediaQueries.bpLg} {
      width: calc(17% - 0.5rem);
      margin-right: 32%;
    }

    ${buttons_1.promoButton};
  `
};
/** @component */
exports.SchemaFormField = props => {
    const { name, hasError, value, className } = props, remainingProps = __rest(props, ["name", "hasError", "value", "className"]);
    const inputValue = value ? value[name] : undefined;
    const computedClassName = `${exports.formComponentStyles.formElement}
  ${className ? className : ''}
  ${!hasError || hasError[name] === undefined || inputValue === undefined
        ? ''
        : ' error'}`;
    return (React.createElement("input", Object.assign({}, remainingProps, { name: name, value: inputValue, className: computedClassName })));
};
exports.SchemaFormFieldSubmit = props => {
    const { name, hasError, value, className, onChange, onSubmit } = props, remainingProps = __rest(props, ["name", "hasError", "value", "className", "onChange", "onSubmit"]);
    const inputValue = value ? value[name] : undefined;
    const computedClassName = `${exports.formComponentStyles.formElement}
  ${className ? className : ''}
  ${!hasError || hasError[name] === undefined || inputValue === undefined
        ? ''
        : ' error'}`;
    return (React.createElement("article", { className: exports.formComponentStyles.formElementSubmitContainer },
        React.createElement("input", Object.assign({}, remainingProps, { name: name, value: inputValue, className: computedClassName })),
        React.createElement("button", { type: "button", className: exports.formComponentStyles.formElementSubmitButton }, "APPLY")));
};
exports.SchemaFormFieldFormattedNumber = props => {
    const { name, hasError, value, className, onChange } = props, remainingProps = __rest(props, ["name", "hasError", "value", "className", "onChange"]);
    const inputValue = value ? value[name] : undefined;
    const computedClassName = `${exports.formComponentStyles.formElement}
  ${className ? className : ''}
  ${!hasError || hasError[name] === undefined || inputValue === undefined
        ? ''
        : ' error'}`;
    return (React.createElement(react_currency_input_1.default, Object.assign({}, remainingProps, { name: name, value: inputValue, prefix: window['currencyHack'] === 'GBP'
            ? currency_1.currencySymbols.GBP
            : currency_1.currencySymbols.USD, className: computedClassName })));
};
