import {
  OfferItemType,
  MerchOfferItem,
  EventOfferItem,
  MerchOfferListItem,
  AnyOffer,
  EventOffer,
  Reward,
  OfferPage
} from 'custom-typings/offerTypes'
import { parse } from 'date-fns'
import * as cuid from 'cuid'

const eventCopy = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Details</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Join the San Francisco Giants for a fun-filled outing at
AT&T Park on June 18th as the Giants take on the Miami Marlins. </span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Get tickets for $5.01 for
upcoming games. Brought to you by Levi's®.
More Info - Limit of 8 tickets per order. Offer valid Tuesday, May 1st 10AM PT to 10PM PT. Subject to availability.
 </span></sup></p>`

const merchCopy1 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Fitted Hat</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
Celebrate that team that's always had a special place in your heart
with this one-of-a-kind Authentic Collection On Field low profile 59FIFTY
fitted hat from New Era. You'll feel like the most die-hard San Francisco Giants
supporter when you promote them in this incredible cap all season long!</span></sup></p>
<p>&nbsp;</p>`

const merchCopy2 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>San Francisco Giants Jersey</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Material: 100% Polyester</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Cool Base ® technology is made
with interlocking moisture-wicking fabric for a lightweight, breathable feel</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Customized with stitched twill graphics</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Due to MLB regulations items cannot
be customized with retired/former players, player nicknames/full names, fictional characters
or team announcers/staff</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Heat-sealed MLB Authentic Collection
jock tag about left hem</span></sup></p>`

const merchCopy3 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans,
arial;"><strong>Nike Legend Batting Practice Primary Logo Performance T-Shirt</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Grab this bold San Francisco
 Giants Legend Primary Logo T-shirt from Nike to show everyone who your favorite team is.
 Vibrant colors make the crisp graphics pop, ensuring you stand out at the San Francisco Giants game.
  Dri-FIT technology will keep you comfortable on a hot day, so you can cheer on the San Francisco
  Giants worry-free.</span></sup></p>`

const merchCopy4 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Team drive Ultra-Streak Fleece Pullover Hoodie</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color:
#908f8f;">Your San Francisco Giants fandom will
shine through the chilly temperatures when you have this
 Authentic Collection Team Drive Ultra-Streak hoodie from Majestic. It
  features sharp team graphics, so everyone at the ballpark will know
  you're there to see the San Francisco Giants bring home a victory.
  Thanks to its cozy fleece lining, this pullover will be perfect for those
  brisk fall nights during the tail end of baseball season.</span></sup></p>
`

export const eventRewards: Reward[] = [
  {
    id: '103',
    name: 'Opening Ceremony Ticket',
    description: 'When your group buys 15 tickets',
    threshold: 15,
    thresholdCopy: 'Friends'
  }
]

export const merchRewards: Reward[] = [
  {
    id: '105',
    name: 'Get Meet & Greet with Barry Bonds',
    description: 'When your group invite 50 friends',
    threshold: 50,
    thresholdCopy: 'Items'
  },
  {
    id: '106',
    name: 'Get Scoreboard Shoutout',
    description: 'When your group invite 15 friends',
    threshold: 15,
    thresholdCopy: 'Items'
  },
  {
    id: '107',
    name: 'Get On Field Photos',
    description: 'When your group invite 5 friends',
    threshold: 5,
    thresholdCopy: 'Items'
  }
]

export const eventOfferItem: EventOfferItem = {
  id: 'cjftxsxt10004ho8e20e200zz',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_2_event+tickets.png',
  title: 'Section 207',
  description: '',
  startingPrice: 21,
  additionalMedia: `https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Giants_Tickets_1_Seatmap%402x.png`,
  type: OfferItemType.Event
}

const eventOfferItem1: EventOfferItem = {
  id: 'cjftxsxt10005ho8eb1pjiyzx',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_2_event+tickets.png',
  title: 'Section 221',
  description: '',
  startingPrice: 25,
  additionalMedia:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Giants_Tickets_2_Seatmap%402x.png',
  type: OfferItemType.Event
}

const eventOfferItem2: EventOfferItem = {
  id: 'cjftxsxt10006ho8evph6c1zc',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_2_event+tickets.png',
  title: 'Section 126',
  additionalMedia:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Giants_Tickets_3_Seatmap%402x.png',
  description: '',
  startingPrice: 30,
  type: OfferItemType.Event
}

export const eventOfferItemParent: EventOffer = {
  id: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_1%402.png',
  title: `San Francisco Giants vs Miami Marlins`,
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy,
  uri: 'tickets',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/left+pic_2_event%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  rewardCopy: '',
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2]
}

export const eventOfferItemParent1: EventOffer = {
  id: 'cjftxsxt10001ho8e495ushva',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_2%402.png',
  title: `San Francisco vs Cincinnati Reds`,
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy,
  uri: 'tickets',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/left+pic_2_event%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  rewardCopy: '',
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2]
}

export const eventOfferItemParent2: EventOffer = {
  id: 'cjftxsxt10001ho8e495ushvs',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_3%402.png',
  title: `San Francisco Giants vs Arizona Diamondbacks`,
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy,
  uri: 'tickets',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/left+pic_2_event%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  rewardCopy: '',
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2]
}

export const offerItemMerch: MerchOfferItem = {
  id: 'hdfhsaxczxcvsadf',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v2/merch_1_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v2/merch_1_hero%402x.png',
  title: 'Fitted Hat',
  description: '',
  htmlDescription: merchCopy1,
  startingPrice: 35,
  type: OfferItemType.Merch,
  productDetails: {
    colors: [
      { value: 'abc', label: 'Black' },
      { value: 'sdf', label: 'Gray' },
      { value: 'g', label: 'White' }
    ]
  }
}

export const offerItemMerch2: MerchOfferItem = {
  id: 'xcvbnsdfgdsfgdsfg',
  parentId: 'cjftxsxt1441ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v2/merch_2_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v2/merch_2_hero%402x.png',
  title: 'Buster Posey Jersey',
  htmlDescription: merchCopy2,
  description: '',
  startingPrice: 120,
  type: OfferItemType.Merch,
  productDetails: {
    colors: [
      { value: 'g', label: 'White' },
      { value: 'abc', label: 'Black' },
      { value: 'sdf', label: 'Gray' }
    ],
    sizes: [
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' }
    ]
  }
}

export const offerItemMerch3: MerchOfferItem = {
  id: 'bncvasfasdfsadfasd',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v2/merch_3_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v2/merch_3_hero%402x.png',
  title: 'Nike Legend Batting Practice Primary Logo Performance T-Shirt',
  description: '',
  htmlDescription: merchCopy3,
  startingPrice: 30,
  type: OfferItemType.Merch,
  productDetails: {
    colors: [],
    sizes: [
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' }
    ]
  }
}

export const offerItemMerch4: MerchOfferItem = {
  id: 'askdjfhklsadfhklasdhf',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v2/merch_4_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v2/merch_4_hero%402x.png',
  title: 'Team Drive Ultra-Streak Fleece Pullover Hoodie',
  description: '',
  startingPrice: 80,
  htmlDescription: merchCopy4,
  type: OfferItemType.Merch,
  productDetails: {
    colors: [],
    sizes: [
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' }
    ]
  }
}

export const merchOfferItemParent: MerchOfferListItem = {
  id: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v2/merch_1_thumbnail%402x.png',
  title: 'Official Merchandise',
  description: 'T-shirts, Hats, shorts and more',
  startingPrice: 25,
  type: OfferItemType.Merch,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v2/merch_1_hero%402x.png'
  ],
  details: merchCopy1,
  rewards: merchRewards,
  uri: 'official-merch',
  items: [offerItemMerch, offerItemMerch2, offerItemMerch3, offerItemMerch4]
}

export const offer: AnyOffer = {
  id: 'cjg8ckfil00093i5nlvm7gmc1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
  title: `San Francisco Giants Summer Schedule`,
  description: '',
  type: OfferItemType.Mixed,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/left+pic_1_discovery%402x.png'
  ],
  details: '',
  uri: 'games',
  items: [
    eventOfferItemParent,
    eventOfferItemParent1,
    eventOfferItemParent2,
    merchOfferItemParent
  ]
}

export const offerPage: OfferPage = {
  id: cuid(),
  brandColor: '#EC5829',
  treeTitle: `WHO'S GOING (5)`,
  confirmationTitleCopy: 'Ready for Giants game?',
  backgroundImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Landing+page_SF+Giants%402x.png',
  location: 'AT&T Park, 24 Willie Mays Plaza San Francisco, California 94107',
  startDate: parse('2019-06-01', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-08-31', 'yyyy-MM-dd', new Date()).toJSON(),
  offer: offer,
  uri: 'fanatics-sfgiants-games',
  shareTitle: 'Now share this page with friends',
  shareOrderTitle: 'Get ready for Giants game!',
  emptyCheckoutTitle: 'Pay Separately, Get Together',
  emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
  isNeedToShowTax: true,
  leaderboardImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/gif_giants.gif',
  progressImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/reward+progress.svg',
  confirmationDetailsImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/rewards.svg',
  orderSummaryTitle: 'Order',
  shareCopy: `*You'll receive an email to get your ticket`,
  shareDetailsCopy: `Want more friends to go games with you? They can see
  what you bought and purchase their own tickets. You’ll get bigger rewards by growing your group.`
}
