"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("./variables");
const borderColor = variables_1.colors.secondaryBlack;
exports.formElementsFocus = `
  border-bottom: 1px solid ${variables_1.colors.brandColorLight};
  outline: none;
`;
exports.formElementsBase = `
  border: 1px solid transparent;
  border-bottom: 1px solid ${variables_1.colors.colorGrayStandard};
  box-sizing: border-box;
  font-family: ${variables_1.typography.fontSecondary};
  font-size: ${14 / 16}rem;
`;
exports.formElementsAdditional = `
  line-height: normal;
  display: block;
  outline: none;
  border-radius: 0;
  color: ${borderColor};
  -webkit-appearance: none;
  background: transparent;
  height: 2rem;
  &::-ms-clear: {
    display: none;
  }
`;
exports.formElementsAutofill = `background-color: ${variables_1.colors.grayDark};`;
exports.formElementsError = `
  border-bottom: 1px solid ${variables_1.colors.brandRed};
  color: ${borderColor};
`;
exports.default = `
textarea, select, input[type="text"], input[type="tel"], input[type="password"],
input[type="email"], input[type="date"], input[type="number"] {
  ${exports.formElementsBase}
  &:focus {
    ${exports.formElementsFocus}
  }
}

select {
  height: 2rem;
}

input[type="text"], input[type="tel"], input[type="password"], input[type="email"],
input[type="date"], input[type="number"] {
  ${exports.formElementsAdditional}
}

select {
  margin: 0;
  border: 1px solid ${variables_1.colors.colorGrayStandard};
}

:not(.mobile.android) {
  select.select_native {
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${14 / 16}rem;
    line-height: normal;
    width: 100%;

    border-radius: 0;
    border-bottom: 1px solid ${borderColor};
    background: white;
    height: 2.1875rem;
    &:focus {
      border-bottom: 1px solid ${variables_1.colors.brandColor};
      outline: none;
    }
  }
}

input[type="submit"] {
  -webkit-appearance: none;
}

input[type="submit"], input[type="checkbox"], input[type="radio"] {
  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    border: none;
  }
}

textarea {
  font-size: 0.75rem;
  -webkit-appearance: none;
}

label {
  font-size: 0.875rem;
  font-weight: normal;
  display: inline-block;
}

.asterisk {
  color: ${variables_1.colors.brandRed};
}

input:-webkit-autofill, textarea:-webkit-autofill {
  background-color: ${variables_1.colors.grayDark};
}

input.error, .error input, select.error{
  border-bottom: 1px solid ${variables_1.colors.brandRed};
  &:focus{
    border-bottom: 1px solid ${variables_1.colors.brandRed};
  }
}

input.error::-webkit-input-placeholder,
input.error:-moz-placeholder,
input.error::-moz-placeholder,
input.error:-ms-input-placeholder {
  color: ${variables_1.colors.placeholderGray};
  font-family: ${variables_1.typography.fontSecondary};
  font-size: 0.6875rem;
  line-height: normal;
}

@media only screen and (min-width: 37.5em) and (min-device-width: 37.5em) {
  textarea, select, input[type="text"], input[type="tel"], input[type="password"],
  input[type="email"], input[type="date"], input[type="number"] {
    font-size: ${14 / 16}rem;
  }

  label {
    font-size: ${14 / 16}rem;
    text-align: left;
  }
  input.error::-webkit-input-placeholder,
  input.error:-moz-placeholder,
  input.error::-moz-placeholder,
  input.error:-ms-input-placeholder {
    font-size: 0.875rem;
    line-height: normal;
  }
  select {
    width: auto;
    border: 1px solid transparent;
    border-bottom: 1px solid ${variables_1.colors.colorGrayStandard};
  }
}`;
