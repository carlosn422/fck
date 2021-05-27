import {
  OfferItemType,
  HotelOfferItem,
  HotelOfferListItem,
  AnyOffer,
  Reward,
  OfferPage,
  EventOfferListItem,
  EventOfferItem,
  EventOffer,
  MerchOfferListItem,
  MerchOfferItem
} from 'custom-typings/offerTypes'
import guid from 'utils/guid'
import { parse } from 'date-fns'
import * as cuid from 'cuid'

const createSlug = title =>
  title
    .toLowerCase()
    .replace(/"|“|”/g, '')
    .replace(/,/g, '')
    .replace(/ /g, '-')
    .replace('&-', '')

export const reward: Reward[] = [
  {
    id: '100',
    name: 'Get your friends to do a free 7-day trial',
    description: 'Everyone gets HBOMAX free for the first 3 months',
    threshold: 25,
    thresholdCopy: 'Nights'
  }
]

export const offer1: EventOfferItem = {
  id: 'ck2qrt3c1005pbmlsdv6mmnb4',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-hbo/Thumbnail-+HBO%402x.png',
  title: 'HBO Max Free Trial',
  description:
    'Stream on your favorite screen -  Try 7 days free, then $14.99/month',
  startingPrice: 0,
  type: OfferItemType.Event
}

export const hboOffer: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-hbo/Thumbnail-+HBO%402x.png',
  title: 'Watch With Friends',
  description:
    'Stream on your favorite screen -  Try 7 days free, then $14.99/month',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: `
    <img src="https://fevo-fuc.s3.amazonaws.com/assets-hbo/HBO+Group+Tree%402x.png">`,
  uri: 'Manchester-City-v-Leicester-City',
  media: ['https://fevo-fuc.s3.amazonaws.com/assets-hbo/Carousel-HBO%402x.png'],
  venue: '',
  rewards: reward,
  items: [offer1]
}

export const offerPage: OfferPage = {
  id: guid(),
  brandColor: '#6818d6',
  offer: hboOffer,
  uri: 'hbo',
  treeTitle: `WHO'S GOING (5)`,
  isNeedToShowTax: true,
  shareOrderTitle: 'Get ready to watch!',
  shareTitle: 'Now share this page with friends',
  confirmationTitleCopy: 'Ready for to watch?',
  emptyCheckoutTitle: 'Pay Separately, Watch Together',
  emptyCheckoutDescription:
    'Subscribe for HBO Max, invite friends and earn perks',
  backgroundImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-hbo/HBO+Demo+Landing+Page+%402x.png',
  leaderboardImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Leaderboard.png',
  progressImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/8_MGM_Confirmation_reward progress.svg',
  confirmationDetailsImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/8_MGMConfirmation_rewards.svg',
  orderSummaryTitle: 'Booking',
  shareDetailsCopy: `Want more friends to join you? They will see
  your group itinerary and can book their own trip. You’ll get bigger rewards by growing your group!`
}
