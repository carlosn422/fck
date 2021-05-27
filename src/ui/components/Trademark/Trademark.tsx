import * as React from 'react'

import { trademarkStyles } from './styles'

interface Props {
  sonyDemo?: boolean
}

const Trademark: React.SFC<Props> = ({ sonyDemo }) => {
  return (
    <article
      className={
        sonyDemo ? trademarkStyles.sonyContainer : trademarkStyles.container
      }
    >
      {sonyDemo || <div className={trademarkStyles.title}>Powered by</div>}
      <div
        className={trademarkStyles.logoImage}
        style={{
          background: `url(https://fevo.s3.amazonaws.com/assets/logo/fevo_logo_white.svg) no-repeat center`,
          backgroundSize: 'contain'
        }}
      />
      {sonyDemo && <div className={trademarkStyles.sonyTitle}>Cart</div>}
    </article>
  )
}

export default Trademark
