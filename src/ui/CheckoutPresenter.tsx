import Checkout from './components/Checkout/Checkout'
import CheckoutSummary from './components/Checkout/CheckoutSummary'
import PanelLayout from './components/Panel/PanelLayout'
import ConfirmCTA from './components/StickyCTA/ConfirmCTA'
import * as cuid from 'cuid'
import CurrentOrderProvider from 'data/CurrentOrderProvider'
import OfferProvider from 'data/OfferProvider'
import PaymentProvider from 'data/PaymentProvider'
import { GroupCreateInput, UserCreateInput } from 'data/queries'
import * as Cookies from 'js-cookie'
import { Dictionary } from 'lodash'
import * as React from 'react'
import withRoutes from 'router/withRoutes'
import { CartProvider } from '../cart'
import { CartProvided } from '../cart/CartProvider'
import { CurrentOrder, Payment } from 'custom-typings/orderTypes'
import OrderProvider, { OrderProvided } from 'data/OrderProvider'
import { Fuc, checkout } from './states'


import { OfferPage } from 'custom-typings/offerTypes'

import { styles } from './components/Offer/styles'
import CheckoutSlimLayout from './components/Checkout/CheckoutSlimLayout'

interface CheckoutPresenterProps {
  gotoConfirm: (params?: Dictionary<string> | undefined) => void
  gotoRootOffer: () => void
  cartProps: CartProvided
  orderProps: OrderProvided
  offerPage: OfferPage
}

const CheckoutPresenter: React.SFC<CheckoutPresenterProps> = ({
  gotoConfirm,
  gotoRootOffer,
  cartProps,
  offerPage,
  orderProps
}) => {
  const { isInvitedFlow, order, payForOrder } = orderProps
  const orderGroup = order ? order.group : undefined

  const cartTotal = offerPage.isNeedToShowTax
    ? cartProps.getCartTotal()
    : cartProps.getCartSubtotal()
  const numItemsInCart = cartProps.getNumberOfItems()

  const makePayment = (order: CurrentOrder, payment: Payment) => {
    const user: UserCreateInput = {
      email: order.email!,
      firstName: order.firstName,
      lastName: order.lastName
    }

    const group: GroupCreateInput = {
      name: order.groupName!
    }

    const payForOrderPromise = isInvitedFlow
      ? payForOrder(payment.amountOwed || cartTotal, user)
      : payForOrder(payment.amountOwed || cartTotal, user, group)

    payForOrderPromise.then((data: any) => {
      Cookies.remove('cartId')
      Cookies.set('cartId', cuid())
      gotoConfirm({
        orderId: data.data.payForOrder.id
      })
    })
  }

  const checkoutCTA = (
    <PaymentProvider cartTotal={cartTotal}>
      {paymentProps => (
        <CurrentOrderProvider>
          {currentOrderProps => {
            const onClick = () => {
              makePayment(currentOrderProps.currentOrder, paymentProps.payment)
            }

            const displayPrice =
              !paymentProps.payment.splitPay.isSplitPay ||
              paymentProps.payment.splitPay.splitType === 'custom'
                ? paymentProps.amountOwed
                : cartTotal / (paymentProps.payment.splitPay.friends.length + 1)

            return (
              <ConfirmCTA
                amountOwed={displayPrice}
                numItems={numItemsInCart}
                onClick={onClick}
              />
            )
          }}
        </CurrentOrderProvider>
      )}
    </PaymentProvider>
  )

  const checkoutProps = {
    isInvitedFlow,
    makePayment,
    gotoRootOffer,
    cartProps
  }
  const checkoutSummaryProps = {
    orderGroup,
    cartProps
  }

  const Body = (showSummary: boolean = true, isUsedInSlim: boolean = false) => {
    return (
      <CheckoutSummary
        {...checkoutSummaryProps}
        offerPage={offerPage}
        showSummary={showSummary}
        isUsedInSlim={isUsedInSlim}
      />
    )
  }

  const Header = (isUsedInSlim: boolean = false) => {
    return (
      <OfferProvider>
        {({ offerPage }) => (
          <>
            <Checkout
              {...checkoutProps}
              checkoutCTA={checkoutCTA}
              isUsedInSlim={isUsedInSlim}
              offerPage={offerPage}
            />
          </>
        )}
      </OfferProvider>
    )
  }

  const Slim = () => {
    const body = Body(false, true)
    const header = (
      <Checkout {...checkoutProps} isUsedInSlim={true} offerPage={offerPage} />
    )

    return (
      <CheckoutSlimLayout
        header={header}
        body={body}
        checkoutCTA={checkoutCTA}
      />
    )
  }

  return <PanelLayout Primary={Header} Secondary={Body} Slim={Slim} />
}

export default withRoutes()(props => {
  const gotoRootOffer = () => props.routes.go(Fuc.OfferPage)

  return (
    <CartProvider>
      {cartProps => {
        return (
          <OrderProvider orderId={props.routes.params.orderId!}>
            {orderProps => {
              const orderGroup = orderProps.order
                ? orderProps.order.group
                : undefined

              return (
                <OfferProvider>
                  {({ offerPage }) => (
                    <CheckoutPresenter
                      {...props}
                      cartProps={cartProps}
                      gotoConfirm={() => props.routes.go(Fuc.Confirm)}
                      gotoRootOffer={gotoRootOffer}
                      orderProps={orderProps}
                      offerPage={offerPage}
                    />
                  )}
                </OfferProvider>
              )
            }}
          </OrderProvider>
        )
      }}
    </CartProvider>
  )
})
