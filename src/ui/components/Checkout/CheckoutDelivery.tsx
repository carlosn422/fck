import * as React from 'react'
import { SchemaFormField, formComponentStyles } from 'components/FormComponents'
import { primaryButton } from 'css/buttons'
import { CurrentOrder } from 'custom-typings/orderTypes'
import { fonts } from 'css/variables'
import { css } from 'react-emotion'
import { formStyles } from 'components/Checkout/styles'

const tempCopy = `<p><span style="font-size: 7; color: #908f8f;">Yes,
I&rsquo;d like to hear from Sony about products and services
like games, electronics, mobile devices, entertainment and more. I can unsubscribe at any time.</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 7; color: #908f8f;">By clicking the confirm button
you agree to the Sony Rewards <a href="http://www.sonyrewards.com/en/footer/terms_of_use/">
Terms &amp; Conditions</a> and <a href="http://www.sonyrewards.com/en/footer/privacy_legal/">Privacy
Policy</a>.</span></p>`

interface CheckoutDeliveryProps {
  currentOrder: CurrentOrder
  updateCurrentOrder: (data: Partial<CurrentOrder>) => any
  currentOrderErrors: {}
  isInvitedFlow: boolean

  isNeedToShowBirthday?: boolean

  isCheckedTerms?: boolean
}

const styles = {
  checkoutDelivery:
    'checkout-delivery ' +
    css`
      margin: 2rem 0;
    `,
  content:
    'checkout-content ' +
    css`
      margin-top: 0.75rem;
    `
}

const checkmarkContainer = css`
  display: flow;
  padding-top: 2rem;
`

const checkmarkCopy = css`
  padding: 0rem 4rem 0 0.5rem;
`

const CheckoutDelivery: React.SFC<CheckoutDeliveryProps> = ({
  updateCurrentOrder,
  isInvitedFlow,
  currentOrder,
  isCheckedTerms,
  isNeedToShowBirthday,
  currentOrderErrors
}) => {
  const onChange = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target as HTMLInputElement
    updateCurrentOrder({
      [name]: value
    })
  }
  return (
    <article className={styles.checkoutDelivery}>
      <header className={fonts.secondaryTitle}>Your info</header>
      <section className={styles.content}>
        <section className={formStyles.sectionContainer}>
          <SchemaFormField
            name="firstName"
            type="text"
            value={currentOrder}
            hasError={currentOrderErrors}
            placeholder="First Name"
            onChange={onChange}
            className={formComponentStyles.formElementLeft}
          />
          <SchemaFormField
            name="lastName"
            type="text"
            value={currentOrder}
            hasError={currentOrderErrors}
            placeholder="Last Name"
            onChange={onChange}
            className={formComponentStyles.formElementRight}
          />
        </section>

        <section className={formStyles.sectionContainer}>
          {isNeedToShowBirthday ? (
            <>
              <SchemaFormField
                name="birthday"
                type="text"
                value={currentOrder}
                hasError={currentOrderErrors}
                placeholder="Date of Birth (MM/DD/YYYY)"
                onChange={onChange}
                className={formComponentStyles.formElementLeft}
              />

              <SchemaFormField
                name="phone"
                type="text"
                value={currentOrder}
                hasError={currentOrderErrors}
                placeholder="Phone (Optional)"
                onChange={onChange}
                className={formComponentStyles.formElementLeft}
              />
            </>
          ) : (
            <>
              <SchemaFormField
                name="email"
                type="text"
                value={currentOrder}
                hasError={currentOrderErrors}
                placeholder="Email"
                onChange={onChange}
                className={formComponentStyles.formElementLeft}
              />

              <SchemaFormField
                name="phone"
                type="text"
                value={currentOrder}
                hasError={currentOrderErrors}
                placeholder="Phone (Optional)"
                onChange={onChange}
                className={formComponentStyles.formElementRight}
              />
            </>
          )}
        </section>
        {isNeedToShowBirthday && (
          <SchemaFormField
            name="email"
            type="text"
            value={currentOrder}
            hasError={currentOrderErrors}
            placeholder="Email"
            onChange={onChange}
            className={formComponentStyles.formElementLeft}
          />
        )}
      </section>
      {!isInvitedFlow && (
        <section className={styles.checkoutDelivery}>
          <header className={fonts.secondaryTitle}>Name your group</header>
          <SchemaFormField
            name="groupName"
            type="text"
            value={currentOrder}
            placeholder="Group Name"
            hasError={{}}
            onChange={onChange}
            className={formComponentStyles.formElement}
          />
        </section>
      )}
      {isNeedToShowBirthday && (
        <section className={checkmarkContainer}>
          <input type="checkbox" />
          <div
            className={checkmarkCopy}
            dangerouslySetInnerHTML={{ __html: tempCopy }}
          />
        </section>
      )}
    </article>
  )
}
export default CheckoutDelivery
