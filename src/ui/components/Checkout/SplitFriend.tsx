import * as React from 'react'
import { SplitPayFriend } from 'custom-typings/orderTypes'
import {
  SchemaFormField,
  formComponentStyles,
  SchemaFormFieldFormattedNumber
} from 'components/FormComponents'
import { css } from 'react-emotion'
import { splitPayStyles } from 'components/Checkout/styles'

import TrashCan from '../../svg-icons/trashcan.svg'
import { formatPrice } from '../../../cart/utils'
import { formElementsAdditional, formElementsBase } from 'css/forms'

interface FriendProps {
  friend: SplitPayFriend
  displayPrice?: number
  splitType: 'even' | 'custom'
  updateFriend: (data: Partial<SplitPayFriend>) => any
  removeFriend: (id: string) => any
  cartTotal?: number
}

class SplitFriend extends React.Component<any> {
  render() {
    const {
      friend,
      updateFriend,
      removeFriend,
      displayPrice,
      splitType,
      cartTotal
    } = this.props
    const friendAmountComponent =
      splitType === 'custom' ? (
        <SchemaFormFieldFormattedNumber
          name="splitAmount"
          type="text"
          value={{
            splitAmount: formatPrice(friend.splitAmount)
          }}
          placeholder="Amount"
          hasError={{}}
          onChangeEvent={(e, maskedValue, floatValue) => {
            if (cartTotal && floatValue <= cartTotal) {
              updateFriend({
                splitAmount: floatValue
              })
            } else {
              this.setState({ state: this.state })
            }
          }}
          className={formComponentStyles.formElement}
        />
      ) : (
        <div className={``}>
          {displayPrice
            ? formatPrice(displayPrice)
            : formatPrice(friend.splitAmount)}
        </div>
      )
    const friendAmountContainerCss =
      splitType === 'custom'
        ? splitPayStyles.friendAmount
        : css`
            margin-top: 1.5rem;
          ` +
          ' ' +
          splitPayStyles.friendAmount

    return (
      <article className={splitPayStyles.friend}>
        <section className={splitPayStyles.friendInfo}>
          <div
            className={splitPayStyles.avatar}
            style={{
              background: `url(https://s3.amazonaws.com/fevo-fuc/assets-demo/images/avatar/profile1.png)
              no-repeat center`,
              backgroundSize: 'cover'
            }}
          />
          <section className={splitPayStyles.friendDetails}>
            <SchemaFormField
              name="name"
              type="text"
              value={friend}
              placeholder="Name"
              hasError={{}}
              onChange={e => updateFriend({ name: e.target.value })}
              className={formComponentStyles.formElement}
            />
            <SchemaFormField
              name="phone"
              type="text"
              value={friend}
              placeholder="Phone (Optional)"
              hasError={{}}
              onChange={e => updateFriend({ phone: e.target.value })}
              className={formComponentStyles.formElement}
            />
            <SchemaFormField
              name="email"
              type="email"
              value={friend}
              placeholder="Email"
              hasError={{}}
              onChange={e => updateFriend({ email: e.target.value })}
              className={formComponentStyles.formElement}
            />
          </section>
        </section>
        <section className={friendAmountContainerCss}>
          {friendAmountComponent}
          <div className={splitPayStyles.remove}>
            <TrashCan
              className={splitPayStyles.removeIcon}
              onClick={() => removeFriend(friend.id)}
            />
          </div>
        </section>
      </article>
    )
  }
}
export default SplitFriend
