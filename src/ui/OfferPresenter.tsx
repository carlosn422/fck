import DateLocation from './components/Offer/DateLocation'
import EventOffer from './components/Offer/EventOffer'
import HotelOffer from './components/Offer/HotelOffer'
import MerchOffer from './components/Offer/MerchOffer'
import MixedOffer from './components/Offer/MixedOffer'
import OfferPreHeader from './components/Offer/OfferPreHeader'
import OfferSecondary from './components/Offer/OfferSecondary'
import SlimHeader from './components/Offer/SlimHeader'
import TimedOffer from './components/Offer/TimedOffer'
import { isOffer } from './components/Offer/helpers'
import CheckoutCTA from './components/StickyCTA/CheckoutCTA'
import OfferProvider from 'data/OfferProvider'
import { filter, reduce } from 'lodash'
import * as React from 'react'
import withRoutes from 'router/withRoutes'
import { CartProvider } from '../cart'
import { addToCartType } from '../cart/CartProvider'
import {
  AnyOffer,
  AnyOfferListItem,
  OfferItemType,
  Offer,
  EventOffer as EventOfferType,
  OfferPage
} from 'custom-typings/offerTypes'
import { Fuc } from './states'
import OfferItemUserSelectionsProvider from 'data/OfferItemUserSelectionsProvider'
import { addonOfferParent } from 'data/exampleData/giantsData'

export interface OfferProps extends addToCartType {
  selectOffer: (offerUri: string) => void
  offerPreHeader: JSX.Element
  checkoutCTA: JSX.Element
  dateLocation: JSX.Element
  offerSecondary: () => JSX.Element
  slimHeader: JSX.Element
}

function decideRenderer(offer: AnyOffer, props: OfferProps) {
  switch (offer.type) {
    case OfferItemType.Event:
      return <EventOffer offer={offer} {...props} />
    case OfferItemType.Merch:
      return <MerchOffer offer={offer} {...props} />
    case OfferItemType.Hotel:
      return <HotelOffer offer={offer} {...props} />
    case OfferItemType.Timed:
      return <TimedOffer offer={offer} {...props} />
    default:
      return <MixedOffer offer={offer} {...props} />
  }
}

const searchOfferByUri = (
  offerListItem: AnyOfferListItem,
  uri: string
): AnyOffer | undefined => {
  if (isOffer(offerListItem)) {
    const offer = offerListItem as AnyOffer
    if (offer.uri === uri) {
      return offer
    }

    const addOns = offer.addonOffer ? offer.addonOffer.items : []
    const items = addOns.concat(offer.items)

    const childOffers = filter(items, item =>
      isOffer(offerListItem)
    ) as AnyOffer[]

    return reduce(
      childOffers,
      (res, item) => res || searchOfferByUri(item, uri),
      undefined
    )
  } else {
    return undefined
  }
}

const OfferPresenter = withRoutes()(({ routes }) => {
  return (
    <OfferItemUserSelectionsProvider>
      {({ offerItemUserSelections, offerItemUpdateUserSelections }) => {
        const cleanup = () => {
          offerItemUpdateUserSelections.seelctAdditionalMediaFor({
            id: '23',
            media: '',
            htmlDescription: '',
            additionalMedia: '',
            additionalDescription: '',
            type: OfferItemType.Event,
            parentId: '',
            title: '',
            thumbnailImage: '',
            description: '',
            startingPrice: 0
          })

          offerItemUpdateUserSelections.selectedOfferItem({
            id: '23',
            media: '',
            htmlDescription: '',
            additionalMedia: '',
            additionalDescription: '',
            type: OfferItemType.Event,
            parentId: '',
            title: '',
            thumbnailImage: '',
            description: '',
            startingPrice: 0
          })
        }

        return (
          <OfferProvider>
            {({ offerPage }) => {
              const offerUri = routes.params.offerUri

              const addOnIndex = offerPage.offer.items as Offer[]

              const index: number = addOnIndex.findIndex(
                (item: any) =>
                  item.addonOffer && item.addonOffer.uri === offerUri
              )

              const i: number = index === -1 ? 0 : index

              const addOnCheck = offerUri => {
                const offer = offerPage.offer.items[i] as Offer

                var addOnOffer =
                  offerPage.offer.addonOffer === undefined
                    ? offer.uri !== offerUri
                      ? offer.addonOffer
                      : undefined
                    : offerPage.offer.addonOffer

                return addOnOffer && addOnOffer.uri === offerUri
                  ? searchOfferByUri(addOnOffer, offerUri)
                  : searchOfferByUri(offerPage.offer, offerUri)
              }

              const offer = offerUri ? addOnCheck(offerUri) : offerPage.offer

              if (!offer) {
                cleanup()
                throw new Error(`no offer found at: ${offerUri}`)
              }

              return (
                <CartProvider>
                  {cartProps => {
                    const cartItems =
                      cartProps.cart && !cartProps.loading
                        ? cartProps.cart.items
                        : []
                    const numItemsInCart = cartProps.getNumberOfItems()
                    const cartSubtotal = cartProps.getCartSubtotal()
                    const selectOffer = (offerUri: string) => {
                      cleanup()
                      routes.go(Fuc.Offer, { offerUri })
                    }

                    const goToCheckout = () => {
                      cleanup()
                      cartProps.checkoutCart().then((data: any) =>
                        routes.go(Fuc.Checkout, {
                          orderId: data.data.checkoutCart.id
                        })
                      )
                    }

                    const gotoRootOffer = () => {
                      cleanup()
                      routes.go(Fuc.Offer, { offerUri: '' })
                    }

                    const goToAddOns = () => {
                      cleanup()

                      routes.go(Fuc.Offer, {
                        offerUri: offer.addonOffer
                          ? offer.addonOffer.uri
                          : offer.uri
                      })
                    }

                    const offerPreHeader = (
                      <OfferPreHeader
                        offer={offer}
                        numItemsInCart={numItemsInCart}
                        selectOffer={selectOffer}
                        offerPage={offerPage}
                      />
                    )

                    const slimHeader = (
                      <SlimHeader
                        offer={offer}
                        numItemsInCart={numItemsInCart}
                      />
                    )

                    const checkoutCTA = (
                      <CheckoutCTA
                        isRootOffer={offerPage.offer.uri !== offer.uri}
                        goToCheckout={goToCheckout}
                        gotoRootOffer={gotoRootOffer}
                        cartSubtotal={cartSubtotal}
                        numItems={numItemsInCart}
                        containsAddons={!!offer.addonOffer}
                        goToAddons={goToAddOns}
                        title={offerPage.emptyCheckoutTitle}
                        description={offerPage.emptyCheckoutDescription}
                      />
                    )
                    const offerSecondary = () => (
                      <OfferSecondary
                        offer={offer}
                        offerPage={offerPage}
                        selectedOfferItem={
                          offerItemUserSelections.selectedOfferItem
                        }
                        selectedAdditionalOfferItem={
                          offerItemUserSelections.selectedAdditionalOfferItem
                        }
                      />
                    )

                    const dateLocation = <DateLocation offerPage={offerPage} />

                    const props: OfferProps = {
                      dateLocation,
                      selectOffer,
                      offerPreHeader,
                      checkoutCTA,
                      offerSecondary,
                      slimHeader,
                      addToCart: item => cartProps.addToCart(item)
                    }

                    return decideRenderer(offer, props)
                  }}
                </CartProvider>
              )
            }}
          </OfferProvider>
        )
      }}
    </OfferItemUserSelectionsProvider>
  )
})
export default OfferPresenter
