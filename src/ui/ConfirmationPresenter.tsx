import PanelLayout from './components/Panel/PanelLayout'
import OfferProvider from 'data/OfferProvider'
import * as React from 'react'
import withRoutes, { AddedProps } from 'router/withRoutes'
import OrderProvider from 'data/OrderProvider'
import { Fuc } from './states'
import ConfirmationShare from './components/Confirmation/ConfirmationShare'
import ConfirmationSummary from './components/Confirmation/ConfirmationSummary'

import PaymentProvider from 'data/PaymentProvider'
import { CartProvider } from '../cart'
import { OfferPage, Offer } from '../custom-typings/offerTypes'
import { Order } from 'custom-typings/orderTypes'
import ConfirmationSlimLayout from './components/Confirmation/ConfirmationSlimLayout'

interface Props extends AddedProps {}

interface ConfirmationPresenterProps {
  goToRootOffer: () => void
  order: Order
  offerPage: OfferPage
}

const ConfirmationPresenter: React.SFC<ConfirmationPresenterProps> = ({
  goToRootOffer,
  order,
  offerPage
}) => {
  const Body = () => {
    return (
      <CartProvider>
        {cartProps => (
          <PaymentProvider cartTotal={cartProps.getCartTotal()}>
            {paymentProps => {
              return (
                <ConfirmationSummary
                  order={order}
                  offerPage={offerPage}
                  isSplitPaying={paymentProps.payment.splitPay.isSplitPay}
                />
              )
            }}
          </PaymentProvider>
        )}
      </CartProvider>
    )
  }

  const Header = () => {
    return (
      <ConfirmationShare
        orderId={order.id}
        offerPageUri={offerPage.uri}
        goToRootOffer={goToRootOffer}
      />
    )
  }

  const Slim = () => {
    const body = Header()
    const header = Body()

    return <ConfirmationSlimLayout header={header} body={body} />
  }

  return (
    <PanelLayout
      Primary={Header}
      Secondary={Body}
      Slim={Slim}
      showConfetti={() => true}
    />
  )
}

export default withRoutes()(props => {
  const goToRootOffer = () => props.routes.go(Fuc.OfferPage)

  return (
    <OrderProvider orderId={props.routes.params.orderId!}>
      {orderProps => {
        const { loading, order } = orderProps
        return (
          <OfferProvider>
            {({ offerPage }) => {
              return (
                <ConfirmationPresenter
                  goToRootOffer={goToRootOffer}
                  order={order}
                  offerPage={offerPage}
                />
              )
            }}
          </OfferProvider>
        )
      }}
    </OrderProvider>
  )
})
