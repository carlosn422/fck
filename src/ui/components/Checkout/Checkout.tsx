import * as React from 'react'

import Payment from 'components/Checkout/Payment'
import CheckoutDelivery from './CheckoutDelivery'
// import {
//   CurrentOrder,
//   Payment as IPayment,
//   SplitPay,
//   SplitPayFriend,
//   Group
// } from 'custom-typings/orderTypes'
// import { Cart } from 'cart'
//import { primaryButton } from 'css/buttons'
import { fonts, typography, mediaQueries, colors } from 'css/variables'
import { css } from 'react-emotion'
import PaymentMethod from 'components/Checkout/PaymentMethod'
import CartButton from 'components/CartButton/CartButton'
import {
  ReactStripeElements,
  injectStripe,
  Elements,
  StripeProvider
} from 'react-stripe-elements'
import { SchemaFormFieldSubmit } from 'components/FormComponents'
import { panelCss } from 'components/Panel/styles'
import { CartProvided } from '../../../cart/CartProvider'
import PaymentProvider from 'data/PaymentProvider'
import CurrentOrderProvider from 'data/CurrentOrderProvider'
import FriendsList from 'components/Checkout/FriendsList'
import { paymentMethodStyles } from 'components/Checkout/styles'
import { SchemaFormField, formComponentStyles } from 'components/FormComponents'

import { OfferPage } from 'custom-typings/offerTypes'

interface CheckoutProps {
  cartProps: CartProvided
  isInvitedFlow: boolean
  gotoRootOffer: () => void
  checkoutCTA?: JSX.Element
  isUsedInSlim: boolean
  offerPage: OfferPage
}

const backCss = css`
  ${fonts.nav};
  margin: 0 0 2rem -0.75rem;
  display: inline-block;
  color: ${colors.brandColor};
`

const Checkout: React.SFC<CheckoutProps> = props => {
  const {
    cartProps,
    isInvitedFlow,
    gotoRootOffer,
    checkoutCTA,
    offerPage,
    isUsedInSlim
  } = props
  const cartTotal = offerPage.isNeedToShowTax
    ? cartProps.getCartTotal()
    : cartProps.getCartSubtotal()
  const numItemsInCart = cartProps.getNumberOfItems()

  return (
    <StripeProvider apiKey="pk_test_LxWu7sKYBLNDip992Vwke5pd">
      <>
        <article
          className={
            isUsedInSlim
              ? panelCss.panelContainer
              : panelCss.panelScrollableContainer
          }
        >
          <CartButton numberOfItems={numItemsInCart} />

          <div className={backCss} onClick={gotoRootOffer}>
            <div className={'backicon'} />
            Continue Shopping
          </div>
          <h1 className={fonts.mainHeading}>Review & Pay</h1>

          {!isInvitedFlow && (
            <PaymentProvider cartTotal={cartTotal}>
              {paymentProps => {
                const friendsList = (
                  <FriendsList
                    cartTotal={cartTotal}
                    splitPay={paymentProps.payment.splitPay}
                    {...paymentProps}
                    className={paymentMethodStyles.friendsList}
                  />
                )
                return !offerPage.isSony ? (
                  <PaymentMethod
                    {...paymentProps}
                    splitPay={paymentProps.payment.splitPay}
                    friendsList={friendsList}
                  />
                ) : (
                  <div />
                )
              }}
            </PaymentProvider>
          )}

          <Elements
            fonts={[
              {
                family: 'MarkOT',
                src:
                  'url(https://s3.amazonaws.com/fevo/assets/fontface/mark-ot/hinted-MarkOT-Medium.woff)',
                style: 'normal',
                weight: 'normal'
              }
            ]}
          >
            <form
              className="checkout-form"
              onSubmit={data => console.log('submitted form with data, ', data)}
            >
              <PaymentProvider cartTotal={cartTotal}>
                {paymentProps => (
                  <Payment
                    purchaserName={paymentProps.payment.purchaserName}
                    updatePayment={paymentProps.updatePayment}
                    paymentErrors={{}}
                  />
                )}
              </PaymentProvider>

              <section>
                <SchemaFormFieldSubmit
                  name="promo"
                  type="text"
                  value={'test'}
                  placeholder="Promo Code or Gift Voucher"
                  hasError={[]}
                  className={formComponentStyles.formElementLeft}
                />
              </section>

              <CurrentOrderProvider>
                {currentOrderProps => (
                  <CheckoutDelivery
                    {...currentOrderProps}
                    isNeedToShowBirthday={offerPage.showBirthday}
                    currentOrderErrors={{}}
                    isInvitedFlow={isInvitedFlow}
                  />
                )}
              </CurrentOrderProvider>
            </form>
          </Elements>
        </article>
        {checkoutCTA}
      </>
    </StripeProvider>
  )
}
export default Checkout
