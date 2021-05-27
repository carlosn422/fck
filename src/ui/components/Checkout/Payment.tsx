import * as React from 'react'
import { SchemaFormField, formComponentStyles } from 'components/FormComponents'
import { Payment as IPayment } from 'custom-typings/orderTypes'
import { css } from 'react-emotion'
import { fonts, colors, mediaQueries, typography } from 'css/variables'
import { formStyles } from 'components/Checkout/styles'
import {
  CardNumberElement,
  injectStripe,
  ReactStripeElements,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement
} from 'react-stripe-elements'
import {
  formElementsAdditional,
  formElementsBase,
  formElementsAutofill,
  formElementsError,
  formElementsFocus
} from 'css/forms'

interface PaymentProps {
  purchaserName?: string
  paymentErrors: {}
  updatePayment: (data: Partial<IPayment>) => any
}

const styles = {
  payment:
    'payment ' +
    css`
      margin: 2rem 0;
    `,
  content:
    'payment-content ' +
    css`
      margin-top: 0.75rem;
    `
}
const base = [formElementsBase, formElementsAdditional, `margin-top: 8px;`]
const formElementClasses = {
  base: css(base),
  baseSplitLeft: css(base.concat(formComponentStyles.formElementLeft)),
  baseSplitRight: css(base.concat(formComponentStyles.formElementRight)),
  webkitAutofill: css`
    ${formElementsAutofill};
  `,
  invalid: css`
    ${formElementsError};
  `,
  focus: css`
    ${formElementsFocus};
  `
}

const formElementStyles = {
  base: {
    fontFamily: typography.fontSecondary,
    color: colors.standardBlack,
    fontSize: '14px',
    fontSmoothing: 'antialiased'
  },

  invalid: { color: colors.standardBlack }
}

const Payment: React.SFC<
  PaymentProps & ReactStripeElements.InjectedStripeProps
> = ({ purchaserName, paymentErrors, updatePayment, stripe }) => {
  const changeEvent = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target as HTMLInputElement
    updatePayment({ [name]: value })
  }

  return (
    <article className={styles.payment}>
      <header className={fonts.secondaryTitle}>Payment</header>
      <section className={styles.content}>
        <CardNumberElement
          placeholder="Card Number"
          onChange={e => console.log(e)}
          hideIcon={false}
          classes={{
            focus: formElementClasses.focus,
            invalid: formElementClasses.invalid,
            base: formElementClasses.base,
            webkitAutofill: formElementClasses.webkitAutofill
          }}
          style={{
            base: formElementStyles.base,
            invalid: formElementStyles.invalid
          }}
        />
        <section className={formStyles.sectionContainer}>
          <CardExpiryElement
            placeholder="Expiry"
            classes={{
              invalid: formElementClasses.invalid,
              focus: formElementClasses.focus,
              base: formElementClasses.baseSplitLeft,
              webkitAutofill: formElementClasses.webkitAutofill
            }}
            style={{
              base: formElementStyles.base,
              invalid: formElementStyles.invalid
            }}
          />

          <CardCVCElement
            placeholder="CVC"
            className={formComponentStyles.formElementRight}
            classes={{
              invalid: formElementClasses.invalid,
              focus: formElementClasses.focus,
              base: formElementClasses.baseSplitRight,
              webkitAutofill: formElementClasses.webkitAutofill
            }}
            style={{
              base: formElementStyles.base,
              invalid: formElementStyles.invalid
            }}
          />
        </section>

        <section className={formStyles.sectionContainer}>
          <SchemaFormField
            name="purchaserName"
            type="text"
            value={purchaserName}
            placeholder="Name on card"
            hasError={paymentErrors}
            onChange={changeEvent}
            className={formComponentStyles.formElementLeft}
          />

          <PostalCodeElement
            placeholder="Zipcode"
            classes={{
              invalid: formElementClasses.invalid,
              focus: formElementClasses.focus,
              base: formElementClasses.baseSplitRight,
              webkitAutofill: formElementClasses.webkitAutofill
            }}
            style={{
              base: formElementStyles.base,
              invalid: formElementStyles.invalid
            }}
          />
        </section>
      </section>
    </article>
  )
}

export default injectStripe(Payment)
