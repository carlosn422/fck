import { colors, typography } from './variables'

const borderColor = colors.secondaryBlack

export const formElementsFocus = `
  border-bottom: 1px solid ${colors.brandColorLight};
  outline: none;
`
export const formElementsBase = `
  border: 1px solid transparent;
  border-bottom: 1px solid ${colors.colorGrayStandard};
  box-sizing: border-box;
  font-family: ${typography.fontSecondary};
  font-size: ${14 / 16}rem;
`

export const formElementsAdditional = `
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
`
export const formElementsAutofill = `background-color: ${colors.grayDark};`

export const formElementsError = `
  border-bottom: 1px solid ${colors.brandRed};
  color: ${borderColor};
`

export default `
textarea, select, input[type="text"], input[type="tel"], input[type="password"],
input[type="email"], input[type="date"], input[type="number"] {
  ${formElementsBase}
  &:focus {
    ${formElementsFocus}
  }
}

select {
  height: 2rem;
}

input[type="text"], input[type="tel"], input[type="password"], input[type="email"],
input[type="date"], input[type="number"] {
  ${formElementsAdditional}
}

select {
  margin: 0;
  border: 1px solid ${colors.colorGrayStandard};
}

:not(.mobile.android) {
  select.select_native {
    font-family: ${typography.fontSecondary};
    font-size: ${14 / 16}rem;
    line-height: normal;
    width: 100%;

    border-radius: 0;
    border-bottom: 1px solid ${borderColor};
    background: white;
    height: 2.1875rem;
    &:focus {
      border-bottom: 1px solid ${colors.brandColor};
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
  color: ${colors.brandRed};
}

input:-webkit-autofill, textarea:-webkit-autofill {
  background-color: ${colors.grayDark};
}

input.error, .error input, select.error{
  border-bottom: 1px solid ${colors.brandRed};
  &:focus{
    border-bottom: 1px solid ${colors.brandRed};
  }
}

input.error::-webkit-input-placeholder,
input.error:-moz-placeholder,
input.error::-moz-placeholder,
input.error:-ms-input-placeholder {
  color: ${colors.placeholderGray};
  font-family: ${typography.fontSecondary};
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
    border-bottom: 1px solid ${colors.colorGrayStandard};
  }
}`
