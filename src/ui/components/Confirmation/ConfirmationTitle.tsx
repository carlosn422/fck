import * as React from 'react'

import { confirmationStyles } from './styles'
import { fonts } from 'css/variables'

interface Props {
  name: string
  offerTitle: string
  shareCopy?: string
}

const CheckoutInvitedSummaryTitle: React.SFC<Props> = ({
  name,
  shareCopy,
  offerTitle
}) => {
  return (
    <article>
      <div className={confirmationStyles.nameTitle}>
        {'Thanks ' + name + `, ` + offerTitle}
      </div>
      <h2 className={fonts.secondaryTitle}>{`Your Order Summary`}</h2>
      {shareCopy && (
        <div className={confirmationStyles.sonyTitle}>{shareCopy}</div>
      )}
    </article>
  )
}

export default CheckoutInvitedSummaryTitle
