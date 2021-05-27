import * as React from 'react'

import { isOffer, doesItemFallWithinPriceRange } from './helpers'
import { map, filter, findIndex } from 'lodash'
import {
  AnyOffer,
  OfferItemType,
  AnyOfferItem,
  AnyOfferListItem,
  HotelOfferItem as IHotelOfferItem,
  EventOfferItem as IEventOfferItem,
  MerchOfferItem as IMerchOfferItem,
  TimedOfferItem as ITimedOfferItem,
  EventCartData,
  MerchCartData,
  CartData,
  MultiTicketsOfferItem
} from 'custom-typings/offerTypes'
import MerchOfferItem from '../OfferItem/MerchOfferItem'
import EventOfferItem from '../OfferItem/EventOfferItem'
import TimedOfferItem from '../OfferItem/TimedOfferItem'
import MultiTicketsItem from '../OfferItem/MultiTicketsItem'
import HotelOfferItem, {
  CtaContainer as HotelCtaContainer
} from '../OfferItem/HotelOfferItem'
import WithState, { MutateStateProps } from 'utils/WithState'
import withRoutes, { AddedProps } from 'router/withRoutes'
import { offer as offerState, Fuc } from '../../states'
import { compose } from 'recompose'
import { addToCartType } from '../../../cart/CartProvider'
import { HotelUserSelections } from 'data/HotelUserSelectionsProvider'
import { MerchUserSelections } from 'data/MerchUserSelectionsProvider'
import { EventUserSelections } from 'data/EventUserSelectionsProvider'
import { OfferItemUpdateUserSelections } from 'data/OfferItemUserSelectionsProvider'

import { TimedUserSelections } from 'data/TimedUserSelectionsProvider'
import EventAdjustCta from '../OfferItem/EventAdjustCta'
import MerchAdjustCta from '../OfferItem/MerchAdjustCta'
import TimedAdjustCta from '../OfferItem/TimedAdjustCta'
import MultiTicketAdjustCta from '../OfferItem/MultiTicketAdjustCta'
interface OfferItemListProps {
  offer: AnyOffer
  userSelections?:
    | MerchUserSelections
    | EventUserSelections
    | HotelUserSelections
    | TimedUserSelections

  updateUserSelections?: OfferItemUpdateUserSelections

  timeSelection?: HotelUserSelections
}
type ItemSelections = {
  [offerItemId: string]: CartData
}

interface OfferItemListState {
  selectedOfferItemId?: string
  itemSelections: ItemSelections
}

const isSelected = (
  item: AnyOfferListItem,
  offer: AnyOffer,
  timeSelection?: HotelUserSelections,
  selectedOfferItemId?: string
): item is AnyOfferItem => {
  const isItem = !isOffer(item)

  const timedIndex =
    timeSelection &&
    timeSelection.timeslot.date &&
    findIndex(offer.items, i => {
      return i.title === timeSelection.timeslot.date
    })

  const itemsTemp = offer.items.slice(0)

  const items =
    timeSelection && timeSelection.timeslot.date && timedIndex
      ? itemsTemp.splice(timedIndex, timedIndex + 2)
      : itemsTemp

  return (
    isItem &&
    ((!!selectedOfferItemId && selectedOfferItemId === item.id) || // preselect first item if nothing else selected
      (!selectedOfferItemId && items[0].id === item.id))
  )
}

const OfferItemList: React.SFC<
  OfferItemListProps &
    OfferItemListState &
    MutateStateProps<OfferItemListState> &
    AddedProps &
    addToCartType
> = ({
  offer,
  userSelections,
  selectedOfferItemId,
  updateUserSelections,
  setState,
  routes,
  timeSelection,
  itemSelections,
  addToCart
}) => {
  const selectOffer = (offerUri?: string) =>
    offerUri ? routes.go(Fuc.Offer, { offerUri }) : routes.go(Fuc.OfferPage)

  const onSelectOffer = item => {
    if (!isOffer(item)) {
      if (selectedOfferItemId !== item.id) {
        if (updateUserSelections !== undefined) {
          updateUserSelections.selectedOfferItem(item)
        }

        setState({ selectedOfferItemId: item.id })
      }
    } else {
      const offer = item as AnyOffer
      selectOffer(offer.uri)

      if (updateUserSelections !== undefined) {
        updateUserSelections.seelctAdditionalMediaFor({
          additionalMedia: null,
          additionalDescription: null,
          ...item
        })

        updateUserSelections.selectedOfferItem({
          additionalMedia: null,
          additionalDescription: null,
          ...item
        })
      }
    }
  }

  const onSelectAdditionalMedia = item => {
    if (!isOffer(item)) {
      if (updateUserSelections !== undefined) {
        updateUserSelections.seelctAdditionalMediaFor(...item)
      }
    }
  }

  const updateItemSelections = (
    item: AnyOfferItem,
    data: MerchCartData | EventCartData
  ) => {
    const currentSelections = itemSelections[item.id]
    const newSelections = {
      ...currentSelections,
      ...data
    }

    setState({
      itemSelections: { ...itemSelections, [item.id]: newSelections }
    })
  }

  const MerchOfferItemImpl = ({ item, index }) => {
    const onSelectItem = () => onSelectOffer(item)
    const setItemSelections = data => updateItemSelections(item, data)

    const cartData = !item.items
      ? itemSelections[item.id] ||
        updateItemSelections(item, {
          offerItemId: item.id,
          size: item.productDetails.sizes
            ? item.productDetails.sizes[0]
            : undefined,
          color: item.productDetails.colors
            ? item.productDetails.colors[0]
            : undefined,
          quantity: 1
        })
      : undefined

    const merchAdjustCta =
      !isOffer(item) &&
      isSelected(item, offer, timeSelection, selectedOfferItemId) ? (
        <MerchAdjustCta
          offerItem={item as IMerchOfferItem}
          setOfferItemData={setItemSelections}
          offerItemCartData={cartData}
          addToCart={addToCart}
        />
      ) : (
        undefined
      )
    return (
      <MerchOfferItem
        offerItem={item}
        merchAdjustCta={merchAdjustCta}
        onSelectOffer={onSelectItem}
        showDemoData={index === 0}
      />
    )
  }

  const EventOfferItemImpl = ({ item }) => {
    const onSelectItem = () => onSelectOffer(item)
    const onAdditionalMediaSelect = () => onSelectAdditionalMedia(item)
    const setItemSelections = data => updateItemSelections(item, data)
    const cartData =
      itemSelections[item.id] ||
      updateItemSelections(item, {
        offerItemId: item.id,
        quantity: 1
      })

    const eventAdjustCta =
      !isOffer(item) &&
      isSelected(item, offer, timeSelection, selectedOfferItemId) ? (
        <EventAdjustCta
          offerItem={item as IEventOfferItem}
          setOfferItemData={setItemSelections}
          offerItemCartData={cartData}
          addToCart={addToCart}
        />
      ) : (
        undefined
      )
    return (
      <EventOfferItem
        offerItem={item}
        eventAdjustCta={eventAdjustCta}
        onSelectOffer={onSelectItem}
        onAdditionalMediaSelect={onAdditionalMediaSelect}
      />
    )
  }

  const MultiTicketsItemImpl = ({ item }) => {
    const onSelectItem = () => onSelectOffer(item)
    const onAdditionalMediaSelect = () => onSelectAdditionalMedia(item)
    const setItemSelections = (item, data) => updateItemSelections(item, data)
    const cartData =
      item.offerItems &&
      item.offerItems.map(
        i =>
          itemSelections[i.id] ||
          updateItemSelections(i, {
            offerItemId: i.id,
            quantity: 1
          })
      )

    const eventAdjustCta =
      !isOffer(item) &&
      isSelected(item, offer, timeSelection, selectedOfferItemId) ? (
        <MultiTicketAdjustCta
          offerItem={item as MultiTicketsOfferItem}
          setOfferItemData={setItemSelections}
          offerItemCartData={cartData}
          addToCart={addToCart}
        />
      ) : (
        undefined
      )
    return (
      <MultiTicketsItem
        offerItem={item}
        eventAdjustCta={eventAdjustCta}
        onSelectOffer={onSelectItem}
        onAdditionalMediaSelect={onAdditionalMediaSelect}
      />
    )
  }

  const TimedOfferItemImpl = ({ item, index }) => {
    const onSelectItem = () => onSelectOffer(item)
    const setItemSelections = data => updateItemSelections(item, data)
    const cartData =
      itemSelections[item.id] ||
      updateItemSelections(item, {
        offerItemId: item.id,
        quantity: 1
      })

    const timedAdjustCta =
      !isOffer(item) &&
      isSelected(item, offer, timeSelection, selectedOfferItemId) ? (
        <TimedAdjustCta
          offerItem={item as ITimedOfferItem}
          setOfferItemData={setItemSelections}
          offerItemCartData={cartData}
          addToCart={addToCart}
          userSelection={userSelections as TimedUserSelections}
        />
      ) : (
        undefined
      )
    return (
      <TimedOfferItem
        showDemoData={index === 1}
        offerItem={item}
        timedAdjustCta={timedAdjustCta}
        onSelectOffer={onSelectItem}
      />
    )
  }

  const HotelOfferItemImpl = ({ item, index }) => {
    const onSelectItem = () => onSelectOffer(item)
    const hotelUserSelections = userSelections as HotelUserSelections
    const ctaContainer =
      !isOffer(item) &&
      isSelected(item, offer, timeSelection, selectedOfferItemId) ? (
        <HotelCtaContainer
          offerItem={item as IHotelOfferItem}
          userSelections={hotelUserSelections}
          addToCart={addToCart}
        />
      ) : (
        undefined
      )
    return (
      <HotelOfferItem
        offerItem={item}
        showDemoData={index === 0 || index === 1 || index === 3 || index === 4}
        ctaContainer={ctaContainer}
        onSelectOffer={onSelectItem}
      />
    )
  }

  const offerItems = () => {
    const timedIndex =
      timeSelection &&
      timeSelection.timeslot.date &&
      findIndex(offer.items, i => {
        return i.title === timeSelection.timeslot.date
      })

    const itemsTemp = offer.items.slice(0)

    const items =
      timeSelection && timeSelection.timeslot.date && timedIndex
        ? itemsTemp.splice(timedIndex, timedIndex + 2)
        : itemsTemp

    return map(items, (item, i) => {
      if (
        (userSelections &&
          doesItemFallWithinPriceRange(item, userSelections.priceRange)) ||
        !userSelections
      ) {
        switch (item.type) {
          case OfferItemType.ManyOptions:
            return <MultiTicketsItemImpl item={item} key={item.id} />

          case OfferItemType.MultipleEvent:
            return <MultiTicketsItemImpl item={item} key={item.id} />

          case OfferItemType.Event:
            return <EventOfferItemImpl item={item} key={item.id} />

          case OfferItemType.Merch:
            return <MerchOfferItemImpl item={item} index={i} key={item.id} />

          case OfferItemType.Hotel:
            return <HotelOfferItemImpl item={item} index={i} key={item.id} />

          case OfferItemType.Timed:
            return <TimedOfferItemImpl item={item} index={i} key={item.id} />

          default:
            return <></>
        }
      } else {
        return <span key={item.id} />
      }
    })
  }
  return <section className="offeritems-container">{offerItems()}</section>
}

export default compose<{}, OfferItemListProps & addToCartType>(
  withRoutes<
    OfferItemListProps &
      OfferItemListState &
      MutateStateProps<OfferItemListState>
  >(),
  WithState<OfferItemListProps, OfferItemListState>({ itemSelections: {} })
)(OfferItemList)
