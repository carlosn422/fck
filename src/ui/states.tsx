import OfferPresenter from './OfferPresenter'
import ConfirmationPresenter from './ConfirmationPresenter'
import CheckoutPresenter from './CheckoutPresenter'
import OfferPage from './OfferPage'
import Test from './Test'

export enum Fuc {
  OfferPage = 'offerPage',
  Offer = 'offerPage.offer',
  Checkout = 'offerPage.checkout',
  Confirm = 'offerPage.confirm'
}

export const test = {
  name: 'test',
  component: Test,
  url: '/test',
}

export const app = {
  name: Fuc.OfferPage,
  component: OfferPage,
  url: '/offer/:offerPageUri',
  redirectTo: Fuc.Offer
}

export const offer = {
  name: Fuc.Offer,
  component: OfferPresenter,
  url: '/:offerUri',
  params: {
    offerUri: null
  }
}

export const checkout = {
  name: Fuc.Checkout,
  component: CheckoutPresenter,
  url: '/order'
}

export const confirm = {
  name: Fuc.Confirm,
  component: ConfirmationPresenter,
  url: '/confirm'
}

export const states = [
  {
    name: 'test',
    component: Test,
    url: '/test',
  },
  {
    name: 'offer.uri',
    component: OfferPage,
    url: '/offer/:offerPageUri',
  },
  {
    name: 'offer',
    component: OfferPage,
    url: '/offer',
  },
]
