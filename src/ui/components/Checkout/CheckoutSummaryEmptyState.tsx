import * as React from 'react'
import { css } from 'react-emotion'
const CheckoutSummaryEmptyState = ({}) => {
  return (
    <article
      className={css`
        padding: 2rem;
      `}
    >
      <h1>Whoops!</h1>
      <div>Looks like your cart is empty</div>
      <button
        onClick={() => {
          console.log('yo')
        }}
      >
        GO TO OFFERS
      </button>
    </article>
  )
}

export default CheckoutSummaryEmptyState
