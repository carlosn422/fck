import {
  OfferItemType,
  MerchOfferItem,
  EventOfferItem,
  Offer,
  AnyOffer,
  EventOffer,
  EventOfferListItem,
  MixedOffer,
  Reward,
  OfferPage,
  MerchOffer
} from 'custom-typings/offerTypes'
import { parse } from 'date-fns'
import * as cuid from 'cuid'

const merchCopy = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, a
rial;"><strong>Chicago White Sox Hat</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">This New Era Official
Team Color 9FORTY hat is a great way to top off any Chicago White Sox game day look.
Its adjustable back closure and raised embroidery on the front panels will make this
lid a staple in your selection of Chicago White Sox gear.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Material: 100% Polyester</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Mid Crown</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Structured fit</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Curved bill</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Adjustable hook and loop fastener strap</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Woven team tag sewn-on to back closure strap</span></sup></p>`

const merchCopy1 = `<p><sup><span style="font-size:
16pt;font-family:SharpSans, arial;"><strong>Frank Thomas Jersey</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">

</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
Regular Fit: Not too slim, not too loose. Designed with a
relaxed fit through shoulders, chest and waist.</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Material: 100% Recycled Polyester</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Dri-FIT ® technology wicks away moisture</span></sup></p>`

const merchCopy2 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Patio Party </strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
TWO-HOUR PATIO PARTY INCLUDES:
<br />
All-You-Can-Eat Buffet
<br />
The delicious menu catered by Baseball Buffet features BBQ ribs, 
Cajun chicken, fried chicken, hot dogs, hamburgers, coleslaw, potato, 
macaroni, and pasta salads, wine, domestic beer, Coca-Cola products and water.
<br /><br />
Time: The party starts one-and-a-half hours before the scheduled game time and 
lasts 30 minutes after scheduled start time.
</span></sup></p>`

const merchCopy3 = `<p><sup><span style="font-size: 11pt; color: #908f8f;">
Parking is valid in Lots F and L.
</span></sup></p> `

export const eventRewards: Reward[] = [
  {
    id: '103',
    name: 'Get On Court Photos',
    description: 'When your group invite 15 friends',
    threshold: 15,
    thresholdCopy: 'Friends'
  },
  {
    id: '104',
    name: 'Get Bucks Ballers',
    description: 'When your group invite 20 friends',
    threshold: 20,
    thresholdCopy: 'Friends'
  },
  {
    id: '105',
    name: 'Get Anthem Buddies',
    description: 'When your group invite 50 friends',
    threshold: 50,
    thresholdCopy: 'Friends'
  }
]

export const merchRewards: Reward[] = [
  {
    id: '103',
    name: 'Get On Court Photos',
    description: 'When your group invite 15 friends',
    threshold: 15,
    thresholdCopy: 'Friends'
  },
  {
    id: '104',
    name: 'Get Bucks Ballers',
    description: 'When your group invite 20 friends',
    threshold: 20,
    thresholdCopy: 'Friends'
  },
  {
    id: '105',
    name: 'Get Anthem Buddies',
    description: 'When your group invite 50 friends',
    threshold: 50,
    thresholdCopy: 'Friends'
  }
]

// White Sox vs. Yankees: TICKETS
export const eventOfferItem: EventOfferItem = {
  id: 'cjftxsxt10004ho8e20e200qq',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/white-sox-logo.png',
  title: 'Section 207',
  description: '',
  additionalMedia:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/Bucks_Tickets_1_Seatmap%402x.png',
  startingPrice: 21,
  type: OfferItemType.Event
}

const eventOfferItem1: EventOfferItem = {
  id: 'cjftxsxt10005ho8eb1pjiyqw',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/white-sox-logo.png',
  title: 'Section 221',
  additionalMedia:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/Bucks_Tickets_2_Seatmap%402x.png',
  description: '',
  startingPrice: 25,
  type: OfferItemType.Event
}

const eventOfferItem2: EventOfferItem = {
  id: 'cjftxsxt10006ho8evph6c1qe',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/white-sox-logo.png',
  title: 'Section 126',
  description: '',
  additionalMedia:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/Bucks_Tickets_3_Seatmap%402x.png',
  startingPrice: 30,
  type: OfferItemType.Event
}

const eventOfferItem3: EventOfferItem = {
  id: 'cjftxsxt10006ho8evph6c1qr',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/white-sox-logo.png',
  title: 'Section 113',
  additionalMedia:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/Bucks_Tickets_4_Seatmap%402x.png',
  description: '',
  startingPrice: 40,
  type: OfferItemType.Event
}


export const offerItemMerch: MerchOfferItem = {
  id: 'cjftxsxt10007ho8e0cnancqq',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/white-sox-hat.png',
  title: 'Chicago White Sox Hat',
  description: 'Most popular',
  media:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/white-sox-hat.png',
  htmlDescription: merchCopy,
  startingPrice: 15,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerItemMerch2: MerchOfferItem = {
  id: 'cjftxsxt10008ho8en7lr73qw',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/frank-thomas-jersey.png',
  title: 'Frank Thomas Jersey',
  description: 'Gift Guide',
  media:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/frank-thomas-jersey.png',
  htmlDescription: merchCopy1,
  startingPrice: 35,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerItemMerch3: MerchOfferItem = {
  id: 'cjftxsxt1000aho8e4ps2xpqe',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/patio-party.png',
  title: 'Patio Party - Patio G',
  description: 'Best Value Today',
  media:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/patio-party.png',
  htmlDescription: merchCopy2,
  startingPrice: 15,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerItemMerch4: MerchOfferItem = {
  id: 'cjftxsxt1000aho8e4ps2xpqr',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/parking-pass.png',
  title: 'Parking Green 1',
  description: 'Exclusive Deal',
  media:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/parking-pass.png',
  htmlDescription: merchCopy3,
  startingPrice: 18,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const addonOfferParent: MerchOffer = {
  id: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/ticket_thumbnail.png',
  title: 'White Sox Add-Ons',
  description: '',
  type: OfferItemType.Merch,
  details: merchCopy,
  uri: 'add-ons',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/white-sox-hat.png'
  ],
  rewards: eventRewards,
  rewardCopy: 'test test',
  items: [
    offerItemMerch,
    offerItemMerch2,
    offerItemMerch3,
    offerItemMerch4
  ]
}

// White Sox vs Minnesota Twins
export const eventOfferItemParentFour: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/minnesota-twins.jpeg',
  title: 'White Sox vs Minnesota Twins',
  description: '',
  startDate: '',
  endDate: '',
  type: OfferItemType.Event,
  details: '',
  uri: 'tickets',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/minnesota-twins.jpeg'
  ],
  rewards: eventRewards,
  rewardCopy: '',
  venue: '',
  addonOffer: addonOfferParent,
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}

// White Sox vs Boston Red Sox
export const eventOfferItemParentThree: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/red-sox.jpeg',
  title: 'White Sox vs Boston Red Sox',
  description: '',
  startDate: '',
  endDate: '',
  type: OfferItemType.Event,
  details: '',
  uri: 'tickets',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/red-sox.jpeg'
  ],
  rewards: eventRewards,
  rewardCopy: '',
  venue: '',
  addonOffer: addonOfferParent,
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}

// White Sox vs Astros
export const eventOfferItemParentTwo: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/astros-white-sox.jpeg',
  title: 'White Sox vs Houston Astros',
  description: '',
  startDate: '',
  endDate: '',
  type: OfferItemType.Event,
  details: '',
  uri: 'tickets',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/astros-white-sox.jpeg'
  ],
  rewards: eventRewards,
  rewardCopy: '',
  venue: '',
  addonOffer: addonOfferParent,
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}


// White Sox vs Yankees
export const eventOfferItemParentOne: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/yankees-sox.jpeg',
  title: 'White Sox vs New York Yankees',
  description: '',
  startDate: '',
  endDate: '',
  type: OfferItemType.Event,
  details: '',
  uri: 'tickets',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/yankees-sox.jpeg'
  ],
  rewards: eventRewards,
  rewardCopy: '',
  venue: '',
  addonOffer: addonOfferParent,
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}


export const eventOfferItemGrandParent: MixedOffer = {
  id: '0ae26a8a-7310-4c48-bbbd-ab7bbb940748',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/white-sox-logo.png',
  title: 'City of Joliet Grand Slam Group',
  description: '',
  type: OfferItemType.Mixed,
  details: '',
  uri: 'bucks-hawks',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/media-carousel-1.jpeg'
  ],
  rewards: eventRewards,
  rewardCopy: '',
  addonOffer: addonOfferParent,
  items: [eventOfferItemParentOne, eventOfferItemParentTwo, eventOfferItemParentThree, eventOfferItemParentFour]  
}

export const offerPage: OfferPage = {
  id: cuid(),
  brandColor: '#000000',
  treeTitle: `WHO'S GOING (5)`,
  confirmationTitleCopy: 'Ready for your White Sox game?',
  backgroundImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/white-sox-background.png',
    //'https://s3.amazonaws.com/fevo-fuc/kevin-test/white-sox-background.jpeg',
    // 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/Bucks_landing_3%402x.png',
  location:
    'Guaranteed Rate Field, 333 W 35th St, Chicago, IL 60616',
  startDate: parse('2019-06-14', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-08-12', 'yyyy-MM-dd', new Date()).toJSON(),
  offer: eventOfferItemGrandParent,
  uri: 'white-sox-add-ons',
  shareTitle: 'Now share this page with friends',
  shareOrderTitle: 'Get ready for your White Sox game!',
  emptyCheckoutTitle: 'Pay Separately, Get Together',
  emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
  isNeedToShowTax: true,
  leaderboardImage:
    'https://s3.amazonaws.com/fevo-fuc/kevin-test/offer-description.png',
  progressImage:
    '',
  confirmationDetailsImage:
    '',
  orderSummaryTitle: 'Order',
  shareCopy: `*You'll receive an email to get your ticket`,
  shareDetailsCopy: `Want more friends to go games with you? They can see
  what you bought and purchase their own tickets. You’ll get bigger rewards by growing your group.`
}

