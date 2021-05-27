import {
  OfferItemType,
  EventOfferItem,
  MixedOffer,
  Reward,
  EventOffer,
  OfferPage,
  HotelOfferItem,
  HotelOfferListItem
} from 'custom-typings/offerTypes'
import { parse } from 'date-fns'
import * as cuid from 'cuid'

const roomCopy = `<p><sup><span color="#e19735", style="font-size: 16pt;
font-family:SharpSans, arial; color: #e19735;"><strong>Western Caribbean from Miami, FL</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">With an island for every taste,
the Caribbean is the ultimate place for relaxation. You'll find white sands
and turquoise water throughout the Caribbean Sea and Gulf of Mexico. Some
islands are lush, with rainforests and mountain trails, while others have
desert climates and coral beaches. Wherever you visit, taste regional
specialties such as conch fritters and get out on the water with snorkeling and sailing excursions.</span></sup></p>
<p>&nbsp;</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src=
"https://s3.amazonaws.com/fevo-fuc/assets-cruise/Untitled.png" alt="" width="400" height="170" /></p>
`

const copy2 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial; color: #e19735;"><strong>Wine County Adventure</strong></span></sup></p>
<p>&nbsp;</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src=
"https://s3.amazonaws.com/fevo-fuc/assets-cruise/Untitled-2.png" alt="" width="200" height="55" /></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">You're then transported in custom-made s
afari vehicles to the take-off point 500 feet above the
beaches of Labadee. Enjoy breathtaking views as you zip down a
flight line more than 2,600 feet long at speeds of 40-50 mph.
Your flight lands at Dragon's Breath Rock.</span></sup></p>`

export const hotelRewards: Reward[] = [
  {
    id: '105',
    name: 'Access to Exclusive Lounge',
    description: 'When your group brings 2 nights',
    threshold: 2,
    thresholdCopy: 'Nights'
  },
  {
    id: '104',
    name: 'Muscle-melting Massage',
    description: 'When your group brings 4 nights',
    threshold: 4,
    thresholdCopy: 'Nights'
  },
  {
    id: '103',
    name: 'Upgrade to Suites',
    description: 'When your group books 7 nights',
    threshold: 7,
    thresholdCopy: 'Nights'
  }
]

export const extraRewards: Reward[] = [
  {
    id: '103',
    name: 'Access to Exclusive Lounge',
    description: 'When your group brings 2 tours',
    threshold: 2,
    thresholdCopy: 'Tours'
  },
  {
    id: '104',
    name: 'Muscle-melting Massage',
    description: 'When your group brings 3 tours',
    threshold: 4,
    thresholdCopy: 'Tours'
  },
  {
    id: '105',
    name: 'Free Cloud 9 Spa Experience  ',
    description: 'When your group books 4 tours',
    threshold: 4,
    thresholdCopy: 'Tours'
  }
]

export const addonsReward: Reward[] = [
  {
    id: '103',
    name: '50% discount for duty-free',
    description: 'When your group books 5 extras',
    threshold: 5,
    thresholdCopy: 'Extras'
  },
  {
    id: '104',
    name: 'Muscle-melting Massage',
    description: 'When your group brings 3 extras',
    threshold: 3,
    thresholdCopy: 'Extras'
  },
  {
    id: '105',
    name: 'Access to Exclusive Lounge',
    description: 'When your group brings 2 extras',
    threshold: 2,
    thresholdCopy: 'Extras'
  }
]

export const eventOfferItem1: EventOfferItem = {
  id: 'cjftxsxt10004ho8e20evxcvx',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-1%403x.png',
  title: 'Wine County Adventure',
  media: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-main%403x.png',
  description: 'Take an ATV ride through the breaktaking landscape',
  startingPrice: 69,
  type: OfferItemType.Event
}

export const eventOfferItem2: EventOfferItem = {
  id: 'cjftxsxt10004ho8e20e2bzxbzx',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-2%403x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-2-hero_2%403x.png',
  title: 'Baja Bandidos Horseback Trial',
  description: 'What better way to enjoy your day than on a scenic trail ride',
  startingPrice: 45,
  type: OfferItemType.Event
}

export const eventOfferItem3: EventOfferItem = {
  id: 'cjftxsxt10004ho8e20e20bzb',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-3%403x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-3-hero_2%403x.png',
  title: 'Wine Country Tour',
  description:
    'Journey just a few miles northeast of Ensenada to Calafia Valley',
  startingPrice: 33,
  type: OfferItemType.Event
}

export const eventOfferItem4: EventOfferItem = {
  id: 'cjftxsxt10004ho8e20e20vzvz',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/bahamas-miami%403x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-4-hero_2%403x.png',
  title: 'Hiking',
  description: 'What better way to enjoy your day than on a scenic trail ride',
  startingPrice: 69,
  type: OfferItemType.Event
}

export const addonItem1: EventOfferItem = {
  id: 'cjftxsxt10004ho8e20e2lklk',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-1%403x.png',
  title: 'Greeb Eggs and Ham Breakfast',
  description: 'Pack your imagination, but don’t forget ',
  startingPrice: 89,
  type: OfferItemType.Event
}

export const addonItem2: EventOfferItem = {
  id: 'cjftxsxt10004ho8e20e2zbbz',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-2%403x.png',
  title: `The Chef's Table`,
  description: 'Treat your taste buds to the experience of a lifetime',
  startingPrice: 69,
  type: OfferItemType.Event
}

export const addonItem3: EventOfferItem = {
  id: 'cjftxsxt10004ho8e2aucn',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-3%403x.png',
  title: 'Cherry on Top',
  description:
    'A cruise is the perfect time to treat yourself to something sweet',
  startingPrice: 33,
  type: OfferItemType.Event
}

export const addonItem4: EventOfferItem = {
  id: 'cjftxsxt10004ho8e20eoaoa',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/bahamas-miami%403x.png',
  title: 'VIP Breakfast',
  description:
    'A cruise is the perfect time to treat yourself to something sweet',
  startingPrice: 69,
  type: OfferItemType.Event
}

export const addonOfferParent2: EventOffer = {
  id: 'cjftxsxt10001ho8e495ushvd',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_4%402.png',
  title: `Add Extra`,
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: copy2,
  uri: 'extra',
  media: ['https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-main%403x.png'],
  venue: '',
  rewards: extraRewards,
  rewardCopy: '',
  items: [addonItem1, addonItem2, addonItem3, addonItem4]
}

export const addonOfferParent: EventOffer = {
  id: 'cjftxsxt10001ho8e495ushvd',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_4%402.png',
  title: `Explore`,
  description: 'Dec 1, 2019 - Dec 5, 2019',
  type: OfferItemType.Event,
  startDate: '',
  endDate: '',
  details: copy2,
  uri: 'explore',
  media: ['https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-main%403x.png'],
  venue: '',
  rewards: addonsReward,
  rewardCopy: '',
  items: [eventOfferItem1, eventOfferItem2, eventOfferItem3, eventOfferItem4]
}

export const hotelOfferItem1: HotelOfferItem = {
  id: 'cjftxsxt10001ho8e49qqqqw',
  parentId: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-1-thumb%403x.png',
  title: 'Interior',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-1-hero_1%403x.png',
  description: '',
  startingPrice: 267,
  type: OfferItemType.Hotel
}

export const hotelOfferItem2: HotelOfferItem = {
  id: 'cjftxsxt10001ho8e495kaak',
  parentId: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-2-thumb%403x.png',
  title: 'Ocean View',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-2-hero_1%403x.png',
  description: '5 people are looking at this right now. Only 4 rooms left!',
  startingPrice: 390,
  type: OfferItemType.Hotel
}

export const hotelOfferItem3: HotelOfferItem = {
  id: 'cjftxsxt10001ho8e4pzpzp',
  parentId: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-3-thumb%403x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-3-hero_1%403x.png',
  title: 'Balcony',
  description: '',
  startingPrice: 420,
  type: OfferItemType.Hotel
}

export const hotelOfferItem4: HotelOfferItem = {
  id: 'cjftxsxt10001ho8e495xcaoe',
  parentId: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-4-thumb%403x.png',
  title: 'Suite',
  description: '15 people are looking at this right now. Only 2 rooms left!',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-4-hero_1%403x.png',
  startingPrice: 610,
  type: OfferItemType.Hotel
}

export const hotelOfferListItem1: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/baja%403x.png',
  title: 'Baja Mexico from Long Beach',
  description:
    '* Taxes, fees and port expenses are $98.40 additional to the prices displayed. Prices are AVG PP.',
  address: '',
  startingPrice: 169,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-1-hero_1%403x.png'
  ],
  details: roomCopy,
  uri: 'baja-maxico',
  addonOffer: addonOfferParent,
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3, hotelOfferItem4]
}

export const hotelOfferListItem2: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/western%403x.png',
  title: 'Western Caribbean from Miami, FL',
  description: '',
  address:
    'With an island for every taste, the Caribbean is the ultimate place for relaxation. ',
  startingPrice: 169,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-2-hero%403x.png'
  ],
  details: roomCopy,
  uri: 'caribbean-miami',
  addonOffer: addonOfferParent,
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3, hotelOfferItem4]
}

export const hotelOfferListItem3: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/bahamas-orlando%403x.png',
  title: 'The Bahamas from Orlando',
  address:
    'Start: Long Beach (Los Angeles) Catalina Island Ensenada End: Long Beach (Los Angeles)',
  startingPrice: 169,
  description: 'In high demand',
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-3-hero%403x.png'
  ],
  details: roomCopy,
  uri: 'bahamas-orlando',
  addonOffer: addonOfferParent,
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3, hotelOfferItem4]
}

export const hotelOfferListItem4: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/bahamas-miami%403x.png',
  title: 'The Bahamas from Miami',
  description: '',
  address: '',
  startingPrice: 169,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-4-hero%403x.png'
  ],
  details: roomCopy,
  uri: 'bahamas-miami',
  addonOffer: addonOfferParent,
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3, hotelOfferItem4]
}

export const hotelOfferListItem5: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/bahamas-ny%403x.png',
  title: 'The Bahamas from New York',
  description: '',
  address: '',
  startingPrice: 169,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-5-hero%403x.png'
  ],
  details: roomCopy,
  uri: 'bahamas-new-york',
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3, hotelOfferItem4]
}

export const hotelOfferItemParent: MixedOffer = {
  id: 'cjftxsxt10001ho8e495ushss',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/cruise-main%403x.png',
  title: 'Pick a Cruise',
  description:
    'With an island for every taste, the Caribbean is the ultimate place for relaxation.',
  type: OfferItemType.Mixed,
  details: '',
  uri: 'hotels',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/cruise-main%403x.png'
  ],
  items: [
    hotelOfferListItem1,
    hotelOfferListItem2,
    hotelOfferListItem3,
    hotelOfferListItem4,
    hotelOfferListItem5
  ],
  rewards: hotelRewards,
  rewardCopy: 'Rewards available for bringing friends'
}

export const offerPage: OfferPage = {
  id: cuid(),
  brandColor: '#ED9400',
  treeTitle: `WHO'S GOING (5)`,
  confirmationTitleCopy: 'Ready for your trip?',
  backgroundImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-cruise/0-cruise-landing-page.png',
  offer: hotelOfferItemParent,
  uri: 'cruise',
  shareTitle: 'Now share this page with friends',
  shareOrderTitle: 'Get ready for your trip!',
  emptyCheckoutTitle: 'Pay Separately, Get Together',
  emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
  isNeedToShowTax: true,
  leaderboardImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/gif_WBG.gif',
  progressImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/reward_progress.svg',
  confirmationDetailsImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/travel+bag_2.svg',
  orderSummaryTitle: 'Order',
  shareCopy: `*You'll receive an email to get your ticket`,
  shareDetailsCopy: `Want more friends to go on a trip with you? They can see
  what you bought and purchase their own tickets. You’ll get bigger rewards by growing your group.`
}
