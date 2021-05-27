import * as React from 'react'
import { cartItemStyles } from './styles'
import { css } from 'react-emotion'

import { formatPrice } from '../../../cart/utils'

import Trademark from '../Trademark/Trademark'

export interface Props {
  base: number
  tax: number
  total: number
  isShouldShowTax: boolean
  isSony?: boolean
}
const summaryListCss = css`
  color: white;
  display: table;
  padding-left: 14rem;
  width: 82%;
  text-align: right;
  margin: auto;
`
export const CartSplitCheckFooter: React.SFC<Props> = ({
  base,
  tax,
  total,
  isSony,
  isShouldShowTax
}) => {
  return (
    <article className={cartItemStyles.cartSplitTotalCss}>
      <Trademark sonyDemo={isSony} />
      <section className={summaryListCss}>
        {isShouldShowTax && (
          <>
            <section className={cartItemStyles.cartTotalRowCss}>
              <div className={cartItemStyles.cartTotalCellCss}>Subtotal</div>
              <div className={cartItemStyles.cartTotalCellCss}>
                {formatPrice(base)}
              </div>
            </section>
            <section className={cartItemStyles.cartTotalRowCss}>
              <div className={cartItemStyles.cartTotalCellCss}>
                {isShouldShowTax ? `Taxes & Fees` : `Fees`}
              </div>
              <div className={cartItemStyles.cartTotalCellCss}>
                {formatPrice(tax)}
              </div>
            </section>
          </>
        )}
        <section className={cartItemStyles.cartTotalRowCss}>
          <div
            className={`${cartItemStyles.cartSplitTotalItemBoldCss} ${
              cartItemStyles.cartTotalCellCss
            } `}
          >
            YOUR TOTAL
          </div>
          <div
            className={`${cartItemStyles.cartSplitTotalItemBoldCss} ${
              cartItemStyles.cartTotalCellCss
            } `}
          >
            {formatPrice(total)}
          </div>
        </section>
      </section>
    </article>
  )
}
