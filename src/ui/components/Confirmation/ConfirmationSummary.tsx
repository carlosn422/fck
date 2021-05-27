import * as React from 'react'

import { confirmationStyles } from './styles'
import { panelCss } from '../Panel/styles'

import GroupTree from '../Confirmation/GroupTree'

import PaymentStatus from '../PaymentStatus/PaymentStatus'

import ConfirmationTitle from './ConfirmationTitle'
import OrderSummary from '../Confirmation/OrderSummary'
import { Order } from 'custom-typings/orderTypes'
import { doCartTotal, doCartSubTotal } from '../../../cart/utils'
import { OfferPage } from 'custom-typings/offerTypes'
import { format } from 'date-fns'
import { typography } from '../../css/variables'
import { css } from 'react-emotion'

const headerCss = css`
  font-family: ${typography.fontPrimary};
  font-size: ${20 / 16}rem;
  text-weight: bold;
  color: black;
  width: 20rem;
  margin: 0 auto;
  text-align: center;
  padding-right: 1.7rem;
`

interface Props {
  order: Order
  offerPage: OfferPage
  isSplitPaying: boolean
}
const ConfirmationSummary: React.SFC<Props> = ({
  order,
  offerPage,
  isSplitPaying
}) => {
  const leader = order.group["users"][0]
  const leaderName = leader.firstName ? leader.firstName : ''
  const orderTotal = offerPage.isNeedToShowTax
    ? order.cart["items"]
      ? doCartTotal(order.cart["items"])
      : 0
    : order.cart["items"]
      ? doCartSubTotal(order.cart["items"])
      : 0

  const orderSummaryData = {
    cart: order.cart,
    offerPage: offerPage,
    orderNumber: order.id,
    tripDate: format(new Date(), 'E, d MMM'),
    groupLeaderName: leaderName,
    isSplitPay: isSplitPaying,
    total: orderTotal,
    groupTotal: orderTotal,
    youPaid: order.payments[0].amount
  }

  return (
    <article className={panelCss.panelNoFooterScrollableContainer}>
      <ConfirmationTitle
        name={leaderName}
        offerTitle={offerPage.shareOrderTitle}
        shareCopy={offerPage.shareCopy}
      />
      <OrderSummary {...orderSummaryData} />

      <header className={confirmationStyles.sectionHeader}>
        {offerPage.treeTitle}
      </header>

      <div className={confirmationStyles.tree}>
        <div className={headerCss}>{order.group["name"]}</div>
        <GroupTree />
      </div>
      {orderSummaryData.isSplitPay && (
        <>
          <header className={confirmationStyles.sectionHeader}>
            PAYMENT STATUS
          </header>
          <PaymentStatus
            total={orderTotal}
            paid={order.payments[0].amount}
            daysToGo={18}
            endDate={'Jul 1'}
            offerTypeCopy={offerPage.orderSummaryTitle}
          />
        </>
      )}
    </article>
  )
}

export default ConfirmationSummary
