import * as React from 'react'
import { fonts } from 'css/variables'
import { css } from 'react-emotion'
import {
  SplitPay,
  SplitPayFriend,
  Payment
} from 'custom-typings/orderTypes'
import { SchemaFormField, formComponentStyles } from 'components/FormComponents'
import FriendsList from 'components/Checkout/FriendsList'
import { paymentMethodStyles } from 'components/Checkout/styles'
import { PaymentProvidedData } from 'data/PaymentProvider'

interface PaymentMethodProps {
  splitPay: SplitPay
  updateFriendData: (data: Partial<SplitPayFriend>) => void
  updateSplitPay: (data: Partial<SplitPay>) => void
  friendsList: JSX.Element
}

const PaymentMethod: React.SFC<PaymentMethodProps> = ({
  splitPay,
  updateSplitPay,
  friendsList
}) => {
  return (
    <>
      <article className={paymentMethodStyles.paymentContainerCss}>
        <header className={fonts.secondaryTitle}>Payment Method</header>
        <section className={paymentMethodStyles.paymentMethodInputsCss}>
          <label className={paymentMethodStyles.paymentMethodLabelCss}>
            <input
              type="radio"
              checked={!splitPay.isSplitPay}
              onChange={() => updateSplitPay({ isSplitPay: false })}
              className={paymentMethodStyles.paymentMethodInputCss}
            />
            Pay Full Amount
          </label>
          <label className={paymentMethodStyles.paymentMethodLabelCss}>
            <input
              type="radio"
              checked={splitPay.isSplitPay}
              className={paymentMethodStyles.paymentMethodInputCss}
              onChange={() => updateSplitPay({ isSplitPay: true })}
            />
            Split With Friends
          </label>
        </section>
      </article>

      {splitPay.isSplitPay && (
        <article className={paymentMethodStyles.paymentContainerCss}>
          <header className={fonts.secondaryTitle}>Split By</header>

          <section className={paymentMethodStyles.paymentMethodInputsCss}>
            <label className={paymentMethodStyles.paymentMethodLabelCss}>
              <input
                type="radio"
                checked={splitPay.splitType === 'even'}
                onChange={() => updateSplitPay({ splitType: 'even' })}
                className={paymentMethodStyles.paymentMethodInputCss}
              />
              Even Split
            </label>
            <label className={paymentMethodStyles.paymentMethodLabelCss}>
              <input
                type="radio"
                checked={splitPay.splitType === 'custom'}
                className={paymentMethodStyles.paymentMethodInputCss}
                onChange={() => updateSplitPay({ splitType: 'custom' })}
              />
              Custom Split
            </label>
          </section>

          {friendsList}
        </article>
      )}
    </>
  )
}

export default PaymentMethod
