import * as React from 'react'
import { cartStyles } from './styles'
import CartIcon from '../../svg-icons/cart.svg'

interface Props {
  numberOfItems?: number
  fill?: string
  className?: string
}

const CartButton: React.SFC<Props> = ({
  numberOfItems = 0,
  fill,
  className
}) => {
  return (
    <article className={`${cartStyles.article} ${className}`}>
      <div className={cartStyles.container}>
        {fill ? (
          <CartIcon className={cartStyles.icon} fill={fill} />
        ) : (
          <CartIcon className={cartStyles.icon} />
        )}
        {numberOfItems > 0 ? (
          <div className={cartStyles.bubble}> {numberOfItems} </div>
        ) : (
          undefined
        )}
      </div>
    </article>
  )
}

export default CartButton
