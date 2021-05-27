import SplitFriend from './SplitFriend'
import { splitPayStyles } from './styles'
import { fonts } from '../../css/variables'
import * as React from 'react'
import { SplitPay, SplitPayFriend } from 'custom-typings/orderTypes'
interface FriendsListProps {
  splitPay: SplitPay
  cartTotal?: number
  updateFriendData: (data: Partial<SplitPayFriend>) => void
  removeFriend: (id: string) => void
  addFriend: () => void
  className?: string
}

export const FriendsList: React.SFC<FriendsListProps> = ({
  splitPay,
  updateFriendData,
  removeFriend,
  cartTotal,
  addFriend,
  className
}) => {
  const displaySplitPrice =
    cartTotal && splitPay.isSplitPay
      ? cartTotal / (splitPay.friends.length + 1)
      : undefined

  return (
    <article
      className={`${className ? className : ''} ${
        splitPayStyles.friendsContainer
      }`}
    >
      <header className={fonts.secondaryTitle}>Friends List</header>
      <section>
        {splitPay.friends.map(friend => (
          <SplitFriend
            key={friend.id}
            friend={friend}
            cartTotal={cartTotal}
            displayPrice={displaySplitPrice}
            splitType={splitPay.splitType}
            updateFriend={data => updateFriendData({ id: friend.id, ...data })}
            removeFriend={removeFriend}
          />
        ))}
      </section>
      <section className={splitPayStyles.addContainer}>
        <button className={splitPayStyles.add} onClick={addFriend}>
          +
        </button>
        <div>Add a friend</div>
      </section>
    </article>
  )
}

export default FriendsList
