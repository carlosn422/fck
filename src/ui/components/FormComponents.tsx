import * as React from 'react'
import { css } from 'react-emotion'
import { mediaQueries, colors, typography } from 'css/variables'
import CurrencyInput from 'react-currency-input'

import { promoButton } from 'css/buttons'
import { currencySymbols } from '../../cart/currency'

export const formComponentStyles = {
  formElement: css`
    width: 100%;
    border: 1px solid transparent;
    margin-top: 0.5rem;
  `,
  formElementLeft: css`
    width: 100%;
    margin-right: 0.5rem;
    @media ${mediaQueries.bpLg} {
      width: calc(50% - 0.5rem);
    }
  `,
  formElementRight: css`
    width: 100%;
    margin-left: 0.5rem;
    @media ${mediaQueries.bpLg} {
      width: calc(50% - 0.5rem);
    }
  `,
  formElementSubmitContainer: css`
    margin-top: 2rem;
    display: flex;
  `,
  formElementSubmitButton: css`
    width: 20%;
    @media ${mediaQueries.bpLg} {
      width: calc(17% - 0.5rem);
      margin-right: 32%;
    }

    ${promoButton};
  `
}

interface Props {
  name: string
  hasError: {}
  value: any
  type: string
  placeholder?: string
  onChange?: (data: any) => any
  onChangeEvent?: (event: any, maskedvalue: any, floatvalue: any) => void
  className?: string
}

interface SubmitProps extends Props {
  onSubmit?: (data: any) => any
}

/** @component */
export const SchemaFormField: React.SFC<Props> = props => {
  const { name, hasError, value, className, ...remainingProps } = props
  const inputValue = value ? value[name] : undefined
  const computedClassName = `${formComponentStyles.formElement}
  ${className ? className : ''}
  ${
    !hasError || hasError[name] === undefined || inputValue === undefined
      ? ''
      : ' error'
  }`

  return (
    <input
      {...remainingProps}
      name={name}
      value={inputValue}
      className={computedClassName}
    />
  )
}

export const SchemaFormFieldSubmit: React.SFC<SubmitProps> = props => {
  const {
    name,
    hasError,
    value,
    className,
    onChange,
    onSubmit,
    ...remainingProps
  } = props

  const inputValue = value ? value[name] : undefined
  const computedClassName = `${formComponentStyles.formElement}
  ${className ? className : ''}
  ${
    !hasError || hasError[name] === undefined || inputValue === undefined
      ? ''
      : ' error'
  }`

  return (
    <article className={formComponentStyles.formElementSubmitContainer}>
      <input
        {...remainingProps}
        name={name}
        value={inputValue}
        className={computedClassName}
      />

      <button
        type="button"
        className={formComponentStyles.formElementSubmitButton}
      >
        APPLY
      </button>
    </article>
  )
}

export const SchemaFormFieldFormattedNumber: React.SFC<Props> = props => {
  const {
    name,
    hasError,
    value,
    className,
    onChange,
    ...remainingProps
  } = props
  const inputValue = value ? value[name] : undefined
  const computedClassName = `${formComponentStyles.formElement}
  ${className ? className : ''}
  ${
    !hasError || hasError[name] === undefined || inputValue === undefined
      ? ''
      : ' error'
  }`

  return (
    <CurrencyInput
      {...remainingProps}
      name={name}
      value={inputValue}
      prefix={
        window['currencyHack'] === 'GBP'
          ? currencySymbols.GBP
          : currencySymbols.USD
      }
      className={computedClassName}
    />
  )
}
