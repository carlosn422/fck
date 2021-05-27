import * as React from 'react'

import { paymentStyles } from './styles'
import { colors } from 'css/variables'

export interface Props {
  total: number
  paid: number
  daysToGo: number
  endDate: string
  offerTypeCopy: string
}

const PaymentStatus: React.SFC<Props> = ({
  total,
  paid,
  daysToGo,
  offerTypeCopy,
  endDate
}) => {
  let paidPercentage = Math.round((paid / total) * 100)

  return (
    <article className={paymentStyles.paymentStatus}>
      <div
        className={paymentStyles.tooltip}
        style={{ left: paidPercentage + '%' }}
      >
        <span
          className={paymentStyles.tooltipText}
          style={{
            background: `linear-gradient(
            56deg,
            ${colors.brandColor} 0%,
            ${colors.brandColorLight} 100%
            )`,
            color: `white`
          }}
        >
          Paid
          <br />
          {'$' + paid.toFixed(2)}
        </span>
        <div className={paymentStyles.triangle} />
      </div>
      <div className={paymentStyles.tooltip} style={{ left: 80 + '%' }}>
        <span
          className={paymentStyles.tooltipText}
          style={{
            background: `${colors.brandColorLightest}`,
            color: `${colors.brandColor}`
          }}
        >
          Owing
          <br />
          {'$' + total.toFixed(2)}
        </span>
        <div
          className={paymentStyles.triangle}
          style={{ borderTopColor: colors.brandColorLightest }}
        />
      </div>
      <div className={paymentStyles.paidProgressContainer}>
        <div className={paymentStyles.paidProgressTotal} />
        <div
          className={paymentStyles.paidProgress}
          style={{ width: paidPercentage + '%' }}
        />
      </div>
      <div className={paymentStyles.paidProgressDescriptinContainer}>
        <div className={paymentStyles.paidPercentage}>
          {paidPercentage + '% Paid'}
        </div>
        <div className={paymentStyles.paidDaysLeft}>
          {daysToGo + ' days to go'}
        </div>
      </div>
      <div className={paymentStyles.description}>
        {`Your friends will receive invitation emails & text`} <br />
        {`and have to pay their portion by Sep 30 to confirm your ${offerTypeCopy.toLowerCase()}`}
      </div>
    </article>
  )
}

export default PaymentStatus
