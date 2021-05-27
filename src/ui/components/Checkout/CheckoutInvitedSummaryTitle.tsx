import * as React from 'react'

import { splitPayStyles } from './styles'

interface Props {
  invitedName: string
  inviteeName: string
  offerTitle: string
  isSony?: boolean
}

const CheckoutInvitedSummaryTitle: React.SFC<Props> = ({
  invitedName,
  isSony,
  inviteeName,
  offerTitle
}) => {
  return (
    <article>
      <div className={splitPayStyles.nameTitle}>
        {'Hey ' + invitedName + '! ' + inviteeName + ' invited you'}
      </div>
      <h2 className={splitPayStyles.offerTitle}>Order Summary</h2>
      {isSony && <div className={splitPayStyles.sonyTitle}> sonyTitle </div>}
    </article>
  )
}

export default CheckoutInvitedSummaryTitle
