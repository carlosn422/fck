import OfferPresenter from './OfferPresenter'
import ConfirmationPresenter from './ConfirmationPresenter'
import CheckoutPresenter from './CheckoutPresenter'
import * as React from 'react'
import { Transition } from '@uirouter/react'
import OfferPage from './OfferPage'

export enum Fuc {
  OfferPage = 'offerPage',
  Offer = 'offerPage.offer',
  Checkout = 'offerPage.checkout',
  Confirm = 'offerPage.confirm'
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
  url: '/order/:orderId'
}

export const confirm = {
  name: Fuc.Confirm,
  component: ConfirmationPresenter,
  url: '/confirm/:orderId'
}

export const states = [app, offer, checkout, confirm]
