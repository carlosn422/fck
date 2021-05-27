import * as React from 'react'
import { css } from 'react-emotion'
import { CartOfferItem } from '../CartOfferItem/CartOfferItem'
import { CartOfferUserInfo } from '../CartOfferItem/CartOfferUserInfo'
import { CartSplitCheckFooter } from '../CartOfferItem/CartSplitCheckFooter'

import { panelCss } from '../Panel/styles'
import { splitPayStyles } from './styles'

import { findOffer, getOfferItems, formatPrice } from '../../../cart/utils'

import CheckoutSummaryEmptyState from './CheckoutSummaryEmptyState'

import PaymentProvider from 'data/PaymentProvider'
import CartOfferItemHeader from './CartOfferItemHeader'
import { flatMap } from 'lodash'
import { confirmationStyles } from '../Confirmation/styles'

import ConfirmationTitle from '../Confirmation/ConfirmationTitle'

import { Cart, CartItem, LineItem } from '../../../cart'
import {
  Offer,
  OfferItem,
  Reward,
  OfferPage,
  MultiTicketsOfferItem,
  MovieOfferItem,
  EventOffer
} from 'custom-typings/offerTypes'
import RewardItem from '../RewardItem/RewardItem'
import { Group } from 'custom-typings/orderTypes'
import GroupTree from '../Confirmation/GroupTreeShared'
import CheckoutInvitedSummaryTitle from './CheckoutInvitedSummaryTitle'
import CartProvider, { CartProvided } from '../../../cart/CartProvider'
import { typography, colors } from '../../css/variables'

interface Props {
  offerPage: OfferPage
  orderGroup?: Group
  cartProps: CartProvided
  showSummary: boolean
  isUsedInSlim: boolean
}

const cartOfferItemsCss = css`
  margin-top: 3rem;
`

const sonyContainer = css`
  display: flex;
`

const headerCss = css`
  font-family: ${typography.fontPrimary};
  font-size: ${20 / 16}rem;
  text-weight: bold;
  color: black;
  width: 20rem;
  margin: 0 auto;
  text-align: center;
  padding-right: 0.5rem;
`

const sonyCopy = css`
  margin-top: 1rem;
  font-family: ${typography.fontPrimary};
  font-size: ${12 / 16}rem;
  color: ${colors.brandColorLight};
`

const sonyCopyBold = css`
  margin-top: 1rem;
  margin-left: 0.2rem;
  font-family: ${typography.fontPrimary};
  font-size: ${12 / 16}rem;
  color: ${colors.brandColor};
  font-weight: bold;
`

const invitedContainer = (
  offerPage: OfferPage,
  leaderName: string,
  title: string,
  orderGroup?: Group,
  isSony: boolean = false
) => (
  <>
    <CheckoutInvitedSummaryTitle
      invitedName={'Anna'}
      inviteeName={leaderName}
      offerTitle={title}
      isSony={isSony}
    />
    <div
      className={css`
        position: relative;
      `}
    >
      <header className={confirmationStyles.sectionHeader}>
        {offerPage.isSony ? `WHO'S PLAYING (5)` : offerPage.treeTitle}
      </header>
      {offerPage.isSony ? (
        <div className={sonyContainer}>
          <div className={sonyCopy}>
            Get 10 more friends pre-order to unlock
          </div>
          <div className={sonyCopyBold}>
            Hope Never Dies DLC & 500 SR Points
          </div>
        </div>
      ) : (
        <div />
      )}

      <div className={splitPayStyles.tree}>
        {orderGroup && <div className={headerCss}>{orderGroup["name"]}</div>}
        <GroupTree invitedName={'You'} inviteeName={leaderName} />
      </div>
    </div>
  </>
)

const CheckoutSummary: React.SFC<any> = ({
  offerPage,
  cartProps,
  orderGroup,
  showSummary,
  isUsedInSlim,
  ...props
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
  const isInvitedFlow = !!orderGroup && orderGroup["users"].length > 0

  const {
    cart,
    getCartSubtotal,
    getCartTotal,
    getCartFees,
    getCartTaxes
  } = cartProps

  const total = offerPage.isNeedToShowTax ? getCartTotal() : getCartSubtotal()

  const leaderName =
    isInvitedFlow && orderGroup!["users"][0].firstName
      ? orderGroup!["users"][0].firstName
      : ''
  const summaryContent = isInvitedFlow ? (
    invitedContainer(
      offerPage,
      leaderName || '',
      offerPage.confirmationTitleCopy,
      orderGroup
    )
  ) : (
    <>
      <PaymentProvider cartTotal={total}>
        {paymentProps => {
          const displayPrice =
            !paymentProps.payment.splitPay.isSplitPay ||
            paymentProps.payment.splitPay.splitType === 'custom'
              ? paymentProps.amountOwed
              : total / (paymentProps.payment.splitPay.friends.length + 1)

          return (
            <CartOfferUserInfo
              amount={formatPrice(displayPrice)}
              orderSummaryTitle={offerPage.confirmationTitleCopy}
            />
          )
        }}
      </PaymentProvider>
    </>
  )

  const cartOfferItem = (ci: CartItem, i: number) => {
    const header =
      i === 0 ? <CartOfferItemHeader showingRemove={true} /> : <></>

    const addOnOffer =
      offerPage.offer.addonOffer ||
      (offerPage.offer.items[0] as Offer).addonOffer

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

    const additionalOfferItem = offerPage.offer.items[0] as EventOffer
    const additionalOffeItemCheck =
      additionalOfferItem.items &&
      additionalOfferItem.items.length > 0 &&
      (additionalOfferItem.items[0] as MultiTicketsOfferItem)

    const reward =
      parentOffer || additionalOffeItemCheck
        ? (
            (parentOffer && parentOffer.rewards) ||
            ((additionalOffeItemCheck && additionalOfferItem.rewards) || [])
          ).filter(r => {
            return r.threshold <= ci.quantity
          })
        : undefined

    const invitedReward =
      parentOffer &&
      parentOffer.rewards &&
      parentOffer.rewards[parentOffer.rewards.length - 1] ? (
        <RewardItem
          reward={parentOffer.rewards[parentOffer.rewards.length - 1]}
          quantity={1}
        />
      ) : (
        undefined
      )

    const onRemove = () => cartProps.removeFromCart(ci.id)
    return (
      <article key={ci.id}>
        {header}
        <CartOfferItem
          cartItem={ci}
          offerItem={findOfferItem(ci.offerItem.cId)}
          onRemoveItem={onRemove}
        />
        {reward && reward[reward.length - 1] ? (
          <RewardItem
            reward={reward![reward!.length - 1]}
            quantity={ci.quantity}
          />
        ) : isInvitedFlow ? (
          invitedReward
        ) : (
          undefined
        )}
      </article>
    )
  }

  const emptyStateCheck =
    cart === undefined || cart.items.length === 0 ? (
      <CheckoutSummaryEmptyState />
    ) : (
      <>
        <article
          className={
            isUsedInSlim
              ? panelCss.panelContainer
              : panelCss.panelScrollableContainer
          }
        >
          {showSummary && summaryContent}
          <article className={cartOfferItemsCss}>
            {cart.items.map(cartOfferItem)}
          </article>
        </article>

        <CartSplitCheckFooter
          base={getCartSubtotal()}
          tax={getCartTaxes() + getCartFees()}
          total={total}
          isSony={offerPage.isSony}
          isShouldShowTax={offerPage.isNeedToShowTax}
        />
      </>
    )

  return emptyStateCheck
}

export default CheckoutSummary
