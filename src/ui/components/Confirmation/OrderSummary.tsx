import * as React from 'react'

import { confirmationStyles, orderSummaryStyles } from './styles'
import { css } from 'react-emotion'
import { formatPrice } from '../../../cart/utils'
import { Cart, CartItem, LineItem } from '../../../cart'

import {
  Offer,
  OfferItem,
  Reward,
  OfferPage,
  EventOffer,
  MultiTicketsOfferItem
} from 'custom-typings/offerTypes'

import { flatMap } from 'lodash'

import { findOffer, getOfferItems } from '../../../cart/utils'
import CartOfferItemHeader from 'components/Checkout/CartOfferItemHeader'
import { CartOfferItem } from 'components/CartOfferItem/CartOfferItem'
import RewardItem from 'components/RewardItem/RewardItem'

const cartOfferItemsCss = css`
  margin-top: 4rem;
`

interface Props {
  cart: Cart
  offerPage: OfferPage
  orderNumber: string
  tripDate: string
  groupLeaderName: string
  isSplitPay: boolean
  total: number
  groupTotal?: number
  youPaid?: number
}

const contentItem = (
  title: string,
  value: string | number,
  valueStyle?: string
) => {
  return (
    <div className={orderSummaryStyles.contentItem}>
      <div className={orderSummaryStyles.contentItemTitle}>{title}</div>
      <div className={valueStyle}>{value}</div>
    </div>
  )
}

const OrderSummary: React.SFC<any> = ({
  orderNumber,
  tripDate,
  groupLeaderName,
  total,
  cart,
  groupTotal,
  youPaid,
  offerPage,
  isSplitPay
}) => {
  const offerItems = Array.from(getOfferItems(offerPage.offer))

  const addOnOffer =
    offerPage.offer.addonOffer || (offerPage.offer.items[0] as Offer).addonOffer

  const additionalOffer =
    flatMap(
      (offerPage.offer.items[0] as Offer).items,
      i => (i as MultiTicketsOfferItem).offerItems
    ) || []

  const offerItemsWithAddon = addOnOffer
    ? Array.from(getOfferItems(addOnOffer))
        .concat(offerItems)
        .concat(additionalOffer)
    : offerItems

  const findOfferItem = id =>
    offerItemsWithAddon.find(oi => oi.id === id) as OfferItem

  const additionalOfferItem = offerPage.offer.items[0] as EventOffer
  const additionalOffeItemCheck =
    additionalOfferItem.items &&
    additionalOfferItem.items.length > 0 &&
    (additionalOfferItem.items[0] as MultiTicketsOfferItem)

  const cartOfferItem = (ci: CartItem, i: number) => {
    const parentOffer = findOffer(
      addOnOffer ? addOnOffer : offerPage.offer,
      o => {
        const item = findOfferItem(ci.offerItem.cId)

        if (item) {
          return o.id === item.parentId
        } else {
          window.location.href = '/offers'
          return false
        }
      }
    )

    const reward =
      parentOffer || additionalOffeItemCheck
        ? (
            (parentOffer && parentOffer.rewards) ||
            ((additionalOffeItemCheck && additionalOfferItem.rewards) || [])
          ).filter(r => {
            return r.threshold <= ci.quantity
          })
        : undefined

    const header =
      i === 0 ? <CartOfferItemHeader showingRemove={false} /> : <></>

    return (
      <article key={ci.id}>
        {header}
        <CartOfferItem
          cartItem={ci}
          shouldHideBorder={true}
          offerItem={findOfferItem(ci.offerItem.cId)}
        />
        {reward && reward[reward.length - 1] ? (
          <RewardItem
            reward={reward![reward!.length - 1]}
            quantity={ci.quantity}
            hideRemove={true}
          />
        ) : (
          undefined
        )}
      </article>
    )
  }

  return (
    <article className={orderSummaryStyles.container}>
      <header className={confirmationStyles.sectionHeader}>
        {offerPage.orderSummaryTitle} Summary
      </header>
      <section className={orderSummaryStyles.content}>
        <section className={orderSummaryStyles.bookingContent}>
          {contentItem(
            'Order Number',
            orderNumber,
            orderSummaryStyles.orderNumber
          )}
          {contentItem(`${offerPage.orderSummaryTitle} Date`, tripDate)}

          {isSplitPay && contentItem('Group leader', groupLeaderName)}
        </section>

        <section className={orderSummaryStyles.paymentContent}>
          {!isSplitPay && contentItem('Group leader', groupLeaderName)}
          {contentItem(
            `${offerPage.orderSummaryTitle} Total`,
            `${formatPrice(total)}`
          )}

          {isSplitPay && (
            <>
              {contentItem('Group Total', `${formatPrice(groupTotal)}`)}
              {contentItem('You Paid', `${formatPrice(youPaid)}`)}
            </>
          )}
        </section>
      </section>
      {isSplitPay ? (
        undefined
      ) : (
        <article className={cartOfferItemsCss}>
          {cart.items.map(cartOfferItem)}
        </article>
      )}
    </article>
  )
}

export default OrderSummary
