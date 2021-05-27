import {
  OfferItemType,
  EventOfferItem,
  MixedOffer,
  Reward,
  OfferPage,
  MovieOfferItem,
  MerchOffer,
  MerchOfferItem,
  EventOfferListItem,
  MultiTicketsOfferItem
} from 'custom-typings/offerTypes'
import { parse } from 'date-fns'
import * as cuid from 'cuid'

const copy1 = `
<p>&nbsp;</p>
<p><sup><span style="font-size:
16pt;font-family:SharpSans, arial; margin-left: 1rem;">
<strong>Fantastic Beasts: The Crimes of Grindelwald</strong></span></sup></p>
<p>&nbsp;</p>
  <p><sup><span style="font-size: 11pt; margin-left: 1rem; color:
   #908f8f;">Adventure, Family, Fantasy | 16 November 2018 (USA)</span></sup></p>
  <p><sup><span style="font-size: 11pt; margin-left: 1rem; color: #908f8f;">Director: David Yates
</span></sup></p>
  <p><sup><span style="font-size: 11pt; color: #908f8f; margin-left: 1rem;">Writer: J.K. Rowling
</span></sup></p>
  <p>&nbsp;</p>
  <sup><span style="font-size: 11pt; margin-left: 1rem; color:
   #908f8f;">The second installment of the "Fantastic Beasts" series set in </span></sup>

   <sup><span style="font-size: 11pt; margin-left: 1rem; color:
   #908f8f;">J.K. Rowling's Wizarding World featuring the adventures of</span></sup>
  <sup><span style="font-size: 11pt; margin-left: 1rem; color:
   #908f8f;"> magizoologist Newt Scamander.</span></sup>

  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p><sup><span style="font-size: 16pt;font-family:SharpSans, arial; margin-left: 1rem;
  "><strong>Stars</strong></span></sup></p>
  <p>&nbsp;</p>
<p><img style="display: block; margin-left: 2rem; padding-right: 4rem;" src=
"https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_stars%402x.png
" alt="" width="300" height="210" /></p>
`

const copy2 = `<p><sup><span style="font-size: 16pt;font-family:
SharpSans, arial;"><strong>Showtime Snacks & Meals</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">The movies
just wouldn’t be the same without an ice-cold, refreshing Coca-Cola® and
freshly popped popcorn. Now, classics like hot dogs and candy are joined with
more menu options than ever.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Grab your popcorn bucket
next time you visit your hometown AMC CLASSIC and you can refill it for just $4.49
+tax every time you return this year!</span></sup></p>`

const copy3 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans,
arial;"><strong>Coca-Cola Freestyle</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">100+ drink choices
at your fingertips.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Explore the
possibilities with 100+ drink choices at your fingertips. So whether
you're craving Sprite® Peach, Hi-C® Raspberry Lime or a Dasani Lime, the choice is yours.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Simply touch the
screen to begin, push the lever for ice, choose your drink and enjoy.
</span></sup></p>
`

const copy4 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans,
arial;"><strong>Fully Loaded Flavor</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">These all USA-beef
 hot dogs are loaded with the tastes you love—from the simply savory to the
 fired-up! Become a fully-loaded fan when you choose from Chili-Cheese, Mustard
 and Kraut, Royal Garden, or Spicy Sriracha!</span></sup></p> `

const copy5 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans,
 arial;"><strong>Introduce Smart Parking</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Smart Parking is
the easy way to park with ticketless, digital entry using the Westfield App.
Never lose a ticket and pay the maximum, and never worry about finding a pay
station or waiting in lines.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Now for a limited time,
all registered Smart Parkers receive 50% off standard parking rates through Dec 31st, 2018.
</span></sup></p>
`

const posterCopy = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>New 'Fantastic Beasts:
The Crimes of Grindelwald' Poster Released</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Ahead of
Warner Bros.' highly anticipated panel for the upcoming Fantastic
Beasts sequel, a new Fantastic Beasts The Crimes of Grindelwald poster
has been released. And it pays glorious homage to the art-deco style of
the Wizarding World sequel's 1920s setting.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">When Newt
Scamander (Eddie Redmayne) arrives in New York City in 1926, he's
 greeted by the soaring spires and bold geometrical patterns of Art Deco,
 the architectural and art style that swept the world shortly before World
 War I. But in Fantastic Beasts: The Crimes of Grindelwald, Newt actually travels
 to the birthplace of Art Deco: France. And naturally, the new poster designed by graphic
 design company MinaLima and released in honor of Comic-Con pays homage to that fact. </span></sup></p>
 `

export const eventRewards: Reward[] = [
  {
    id: '103',
    name: 'Free drink',
    description: 'When your group brings 4 friends',
    threshold: 4,
    thresholdCopy: 'Friends'
  },
  {
    id: '104',
    name: 'FREE Medium popcorn',
    description: 'When your group brings 10 friends',
    threshold: 10,
    thresholdCopy: 'Friends'
  },
  {
    id: '105',
    name: 'Free Large popcorn and drinks',
    description: 'When your group brings 20 friends',
    threshold: 20,
    thresholdCopy: 'Friends'
  }
]

const eventTicket10: MovieOfferItem = {
  id: 'cjftasdasd0006ho8evph6c1qr',
  parentId: 'cjfasdfqwe00qq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: 'Adult',
  description: '',
  startingPrice: 21.99,
  detailTitleCopy: 'Fantastic Beasts: The Crimes of Grindelwald',
  detailCopy: '11:35 AM',
  type: OfferItemType.Event
}

const eventTicket20: MovieOfferItem = {
  id: 'cjftxsxt1000xzbzxcvc1qr',
  parentId: 'cjfasdfqwe00qq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: 'Child',
  description: '',
  startingPrice: 18.99,
  detailTitleCopy: 'Fantastic Beasts: The Crimes of Grindelwald',
  detailCopy: '11:35 AM',
  type: OfferItemType.Event
}

const eventTicket30: MovieOfferItem = {
  id: 'cj12312306ho8evph6c1qr',
  parentId: 'cjfasdfqwe00qq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: 'Senior',
  description: '',
  startingPrice: 18.99,
  detailTitleCopy: 'Fantastic Beasts: The Crimes of Grindelwald',
  detailCopy: '11:35 AM',
  type: OfferItemType.Event
}

const eventTicket11: MovieOfferItem = {
  id: 'cjftasdzzzasd0006ho8evph6c1qr',
  parentId: 'cjfasdfqwe00qq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: 'Adult',
  description: '',
  startingPrice: 21.99,
  detailTitleCopy: 'Fantastic Beasts: The Crimes of Grindelwald',
  detailCopy: '2:55 PM',
  type: OfferItemType.Event
}

const eventTicket21: MovieOfferItem = {
  id: 'bbbbbxasfsdafsadfasd',
  parentId: 'cjfasdfqwe00qq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: 'Child',
  description: '',
  startingPrice: 18.99,
  detailTitleCopy: 'Fantastic Beasts: The Crimes of Grindelwald',
  detailCopy: '2:55 PM',
  type: OfferItemType.Event
}

const eventTicket31: MovieOfferItem = {
  id: 'cj12312306ho8ezxcvvph6c1qr',
  parentId: 'cjfasdfqwe00qq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: 'Senior',
  description: '',
  startingPrice: 18.99,
  detailTitleCopy: 'Fantastic Beasts: The Crimes of Grindelwald',
  detailCopy: '2:55 PM',
  type: OfferItemType.Event
}

const eventTicket12: MovieOfferItem = {
  id: 'cjftasdasd0006ho8easdvph6c1qr',
  parentId: 'cjfasdfqwe00qq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: 'Adult',
  description: '',
  startingPrice: 21.99,
  detailTitleCopy: 'Fantastic Beasts: The Crimes of Grindelwald',
  detailCopy: '6:40 PM',
  type: OfferItemType.Event
}

const eventTicket22: MovieOfferItem = {
  id: 'cjftxsxt1000xzzxczbzxcvc1qr',
  parentId: 'cjfasdfqwe00qq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: 'Child',
  description: '',
  startingPrice: 18.99,
  detailTitleCopy: 'Fantastic Beasts: The Crimes of Grindelwald',
  detailCopy: '6:40 PM',
  type: OfferItemType.Event
}

const eventTicket32: MovieOfferItem = {
  id: 'cj12312306ho8evph6zxczc1qr',
  parentId: 'cjfasdfqwe00qq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: 'Senior',
  description: '',
  startingPrice: 18.99,
  detailTitleCopy: 'Fantastic Beasts: The Crimes of Grindelwald',
  detailCopy: '6:40 PM',
  type: OfferItemType.Event
}

const eventTicket13: MovieOfferItem = {
  id: 'cjftasdasd0006ho8ezxcvph6c1qr',
  parentId: 'cjfasdfqwe00qq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: 'Adult',
  description: '',
  startingPrice: 21.99,
  additionalMedia: '',
  detailTitleCopy: 'Fantastic Beasts: The Crimes of Grindelwald',
  detailCopy: '9:40 PM',
  type: OfferItemType.Event
}

const eventTicket23: MovieOfferItem = {
  id: 'cjftxsxt1000xzbzxcvxcvbc1qr',
  parentId: 'cjfasdfqwe00qq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: 'Child',
  description: '',
  startingPrice: 18.99,
  detailTitleCopy: 'Fantastic Beasts: The Crimes of Grindelwald',
  detailCopy: '9:40 PM',
  type: OfferItemType.Event
}

const eventTicket33: MovieOfferItem = {
  id: 'cj12312306ho8evpzxch6c1qr',
  parentId: 'cjfasdfqwe00qq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: 'Senior',
  description: '',
  startingPrice: 18.99,
  detailTitleCopy: 'Fantastic Beasts: The Crimes of Grindelwald',
  detailCopy: '9:40 PM',
  type: OfferItemType.Event
}

export const eventOfferItem: MultiTicketsOfferItem = {
  id: 'cjfasdfqwe00qq',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: '11:35 AM',
  description: '',
  startingPrice: 21,
  offerItems: [eventTicket10, eventTicket20, eventTicket30],
  additionalMedia:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/03_seatmap_01_hero%402x.png',
  type: OfferItemType.MultipleEvent
}

const eventOfferItem1: MultiTicketsOfferItem = {
  id: 'cjftxadvsdeb1pjiyqw',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: '2:55 PM',
  description: '',
  startingPrice: 25,
  offerItems: [eventTicket11, eventTicket21, eventTicket31],
  additionalMedia:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/03_seatmap_02_hero%402x.png',
  type: OfferItemType.MultipleEvent
}

const eventOfferItem2: MultiTicketsOfferItem = {
  id: 'cjftxsxt10006zxcbvqr',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: '6:15 PM',
  description: '',
  startingPrice: 22,
  offerItems: [eventTicket12, eventTicket22, eventTicket32],
  additionalMedia:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/03_seatmap_03_hero%402x.png',
  type: OfferItemType.MultipleEvent
}

const eventOfferItem3: MultiTicketsOfferItem = {
  id: 'cjftxsxt10006htreysqr',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Theater_thumbnail%402x.png',
  title: '9:40 PM',
  description: '',
  startingPrice: 21,
  offerItems: [eventTicket13, eventTicket23, eventTicket33],
  additionalMedia:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/03_seatmap_04_hero%402x.png',
  type: OfferItemType.MultipleEvent
}

export const offerItemMerch: MerchOfferItem = {
  id: 'cjftxsxtbae',
  parentId: 'cjftxasd001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/04_add+on_01_thumbnail%402X.png',
  title: 'Popcorn',
  description: 'Most popular',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/04_add+on_01_hero%402X.png',
  htmlDescription: copy2,
  startingPrice: 8,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerItemMerch2: MerchOfferItem = {
  id: 'cjftxsjhsdo8en7lr73qw',
  parentId: 'cjftxasd001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/04_add+on_02_thumbnail%402X.png',
  title: 'Drinks',
  description: 'In High Demand',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/04_add+on_02_hero%402X.png',
  htmlDescription: copy3,
  startingPrice: 6,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerItemMerch3: MerchOfferItem = {
  id: 'cjftxsxt100zvzs2xpqe',
  parentId: 'cjftxasd001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/04_add+on_03_thumbnail%402X.png',
  title: 'Snacks',
  description: 'Best Value Today',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/04_add+on_03_hero%402X.png',
  htmlDescription: copy4,
  startingPrice: 15,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerItemMerch4: MerchOfferItem = {
  id: 'ajdfhjkadshfjkashdf',
  parentId: 'cjftxasd001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/04_add+on_5_thumbnail%402X.png',
  title: '2018 Comic-Con Fantastic Beasts Poster',
  description: 'Limited Edition',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/04_add+on_5_hero%402X.png',
  htmlDescription: posterCopy,
  startingPrice: 8,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerItemMerch5: MerchOfferItem = {
  id: 'cjftxqweo8e4ps2xpqr',
  parentId: 'cjftxasd001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/04_add+on_04_thumbnail%402X.png',
  title: 'Parking',
  description: 'Exclusive Deal',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/04_add+on_04_hero%402X.png',
  htmlDescription: copy5,
  startingPrice: 5,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const addonOfferParent: MerchOffer = {
  id: 'cjftxasd001ho8e495ushvw',
  thumbnailImage: '',
  title: 'Buy now, Skip the line',
  description: '',
  type: OfferItemType.Merch,
  details: copy2,
  uri: 'add-ons',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/04_add+on_01_hero%402X.png'
  ],
  rewards: eventRewards,
  rewardCopy: 'test test',
  items: [
    offerItemMerch,
    offerItemMerch2,
    offerItemMerch3,
    offerItemMerch4,
    offerItemMerch5
  ]
}

export const theaterOfferItemList: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/01_home_thumbnail_01%402x.png',
  title: 'AMC Century City 15',
  description: '10250 Santa Monica Blvd #2000, Los Angeles, CA 90067 (1.8mi)',
  startDate: '',
  endDate: '',
  type: OfferItemType.Event,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Thater_01_hero%402x.png'
  ],
  details: copy1,
  uri: 'amc-century',
  rewards: eventRewards,
  addonOffer: addonOfferParent,
  venue: '',
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}

export const theaterOfferItemList1: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/01_home_thumbnail_02%402x.png',
  title: 'Pacific Theatres at the Grove',
  description: '189 The Grove Dr, Los Angeles, CA 90036 (2.2 mi)',
  startDate: '',
  endDate: '',
  type: OfferItemType.Event,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Thater_02_hero%402x.png'
  ],
  details: copy1,
  addonOffer: addonOfferParent,
  rewards: eventRewards,
  uri: 'pacific',
  venue: '',
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}

export const theaterOfferItemList2: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/01_home_thumbnail_03%402x.png',
  title: 'AMC Sunset 5',
  description: '8000 Sunset Blvd, West Hollywood, CA 90046 (2.3mi)',
  startDate: '',
  endDate: '',
  type: OfferItemType.Event,
  rewards: eventRewards,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Thater_03_hero%402x.png'
  ],
  details: copy1,
  uri: 'amc-sunset',
  addonOffer: addonOfferParent,
  venue: '',
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}

export const theaterOfferItemList3: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/01_home_thumbnail_04%402x.png',
  title: 'iPic Westwood',
  description: '10840 Wilshire Blvd, Los Angeles, CA 90024 (2.9mi)',
  startDate: '',
  endDate: '',
  type: OfferItemType.Event,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Thater_04_hero%402x.png'
  ],
  details: copy1,
  addonOffer: addonOfferParent,
  uri: 'amc-sunset',
  venue: '',
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}

export const theaterOfferItemList4: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/01_home_thumbnail_05%402x.png',
  title: 'Fox Theater, Westwood Village',
  description: '2801, 961 Broxton Ave, Los Angeles, CA 90024 (3.2mi)',
  startDate: '',
  endDate: '',
  type: OfferItemType.Event,
  rewards: eventRewards,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/02_Thater_05_hero%402x.png'
  ],
  details: copy1,
  addonOffer: addonOfferParent,
  uri: 'fox',
  venue: '',
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}

export const eventOfferItemParent: MixedOffer = {
  id: 'cjftxsxt1zxc1ho8e495ushvq',
  thumbnailImage: '',
  title: 'Fantastic Beasts: The Crimes of Grindelwald',
  description: '',
  type: OfferItemType.Mixed,
  details: '',
  uri: 'fantastic-beasts',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/01_home_hero_01%402x.png'
  ],
  items: [
    theaterOfferItemList,
    theaterOfferItemList1,
    theaterOfferItemList2,
    theaterOfferItemList3,
    theaterOfferItemList4
  ]
}

export const offerPage: OfferPage = {
  id: cuid(),
  brandColor: '#fe7900',
  treeTitle: `WHO'S GOING (5)`,
  confirmationTitleCopy: 'Ready for your movie night?',
  backgroundImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/00_Fandango_landing+page%402x.png',
  offer: eventOfferItemParent,
  uri: 'fandango',
  shareTitle: 'Now share this page with friends',
  shareOrderTitle: 'Get ready for Fantastic Beasts!',
  emptyCheckoutTitle: 'Pay Separately, Get Together',
  emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
  isNeedToShowTax: true,
  leaderboardImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/Leaderboard_Fandango.gif',
  progressImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/fandango_reward_progress.svg',
  confirmationDetailsImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fandango/fandango_rewards_gift.svg',
  orderSummaryTitle: 'Order',
  shareCopy: `*You'll receive an email to get your ticket`,
  shareDetailsCopy: `Want more friends to go on a movie with you? They can see
  what you bought and purchase their own tickets. You’ll get bigger rewards by growing your group.`
}
