import {
  OfferItemType,
  OfferPage,
  AnyOffer,
  EventOffer,
  EventOfferItem,
  Reward
} from 'custom-typings/offerTypes'
import { parse } from 'date-fns'
import * as cuid from 'cuid'

const createSlug = title =>
  title
    .toLowerCase()
    .replace(/"|“|”/g, '')
    .replace(/,/g, '')
    .replace(/ /g, '-')
    .replace('&-', '')

const formatCopy = copy =>
  copy
    .split('|')
    .filter(Boolean)
    .map((item, i) => {
      if (i === 0) {
        return `<p style="font-size: 16pt;font-family:SharpSans,
arial;font-weight:bold;margin-bottom: .5em;">${item}</p>`
      } else {
        return `<div style="font-size: 11pt; color: #908f8f;">
<p>${item}</p>
<p>&nbsp;</p></div>`
      }
    })
    .join('')

const eventCopy1 = formatCopy(`New York Yankees vs New York Mets|In the history of 
baseball there have been 14 "SUBWAY SERIES" between New York's baseball teams for 
THE WORLD CHAMPIONSHIP. The "Golden Era" of the Subway Series took place between 1947 
and 1956 when New York's teams - the Dodgers, Yankees & Giants - were among the best 
in baseball and there were 7 Subway Series. This is the most definitive show ever done 
about the historic Subway World Series played in New York. It started in 1889, when 
Brooklyn faced New York, and the last subway series was in 2000, when the Mets played 
the Yankees.`)
const eventCopy2 = formatCopy(`LA Rams vs Seattle Seahawks|Receivers Robert Woods, 
Brandin Cooks and Cooper Kupp appear to have recaptured the synchronicity that sparked 
the passing game in 2018. With tight end Gerald Everett sidelined for a second 
consecutive game because of a knee injury, Tyler Higbee could again be a preferred 
target after enjoying a career-best performance against the Cardinals. The Seahawks 
defense is anchored by linebackers Bobby Wagner and K.J. Wright, who are in their eighth 
and ninth seasons, respectively. The Seahawks lead the NFL with 16 forced fumbles.
`)
const eventCopy3 = formatCopy(`LA Lakers vs Toronto Raptors|The Raptors said their 
practice facility has been renamed the the OVO Athletic Centre. It's a nod to the 
team's partnership with Grammy award-winner Drake. The Toronto-born rapper has been 
involved with the Raptors since being named the team's 'global ambassador' in 
September 2013. OVO is an acronym for October's Very Own, Drake's record label and 
clothing line.`)
const eventCopy4 = formatCopy(`Membership|Executive Members earn an annual 2% Reward 
on qualifying purchases at Costco, Costco.com, and Costco Travel. Plus, additional 
benefits are available on our suite of Costco Services. We offer a 100% satisfaction 
guarantee and will cancel and refund membership fees in full at any time if a member 
is dissatisfied.|
Additional values are available to Executive Members such as lower prices on check 
printing, auto buying, one-year free roadside assistance for vehicles covered through 
the Auto Insurance program and additional travel benefits. View our full list of Costco 
Services. Executive Members also receive a monthly edition of The Costco Connection 
magazine.|
Costco membership is $60 a year. An Executive Membership is an additional $60 upgrade 
fee a year. Each includes a free Household Card. Please include sales tax in all applicable 
states. (Business Members also pay an additional $60 for each additional cardholder - purchases 
  made by the additional cardholders do not contribute towards the 2% Reward.) Members who 
  upgrade for a partial year will be charged a prorated upgrade fee.`)

export const eventRewards: Reward[] = [
  {
    id: '100',
    name: 'Get a scoreboard message',
    description: 'When your group invite 5 friends',
    threshold: 10,
    thresholdCopy: 'Friend'
  },
  {
    id: '101',
    name: 'High five tunnel pre-game',
    description: 'When your group invite 25 friends',
    threshold: 25,
    thresholdCopy: 'Friends'
  }
]

export const eventOfferItem11: EventOfferItem = {
  id: 'ck54am27k0001vsls4og0i60u',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
  title: 'Section 101',
  description: '',
  startingPrice: 0,
  type: OfferItemType.Event
}
export const eventOfferItem12: EventOfferItem = {
  id: 'ck54am27k0002vsls27vxkg4l',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
  title: 'Section 202',
  description: '',
  startingPrice: 0,
  type: OfferItemType.Event
}
export const eventOfferItem13: EventOfferItem = {
  id: 'ck54am27k0003vslsrek6rdgg',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
  title: 'Section 303',
  description: '',
  startingPrice: 0,
  type: OfferItemType.Event
}
export const eventOfferItem21: EventOfferItem = {
  id: 'ck54am27k0004vslsr6fv2kj3',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
  title: 'Section 101',
  description: '',
  startingPrice: 0,
  type: OfferItemType.Event
}
export const eventOfferItem22: EventOfferItem = {
  id: 'ck54am27k0005vslskot8km03',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
  title: 'Section 202',
  description: '',
  startingPrice: 0,
  type: OfferItemType.Event
}
export const eventOfferItem23: EventOfferItem = {
  id: 'ck54am27k0006vsls4blpxhp4',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
  title: 'Section 303',
  description: '',
  startingPrice: 0,
  type: OfferItemType.Event
}
export const eventOfferItem31: EventOfferItem = {
  id: 'ck54am27k0007vslsfr1n6ubd',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
  title: 'Section 101',
  description: '',
  startingPrice: 0,
  type: OfferItemType.Event
}
export const eventOfferItem32: EventOfferItem = {
  id: 'ck54am27k0008vslslyp030vz',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
  title: 'Section 202',
  description: '',
  startingPrice: 0,
  type: OfferItemType.Event
}
export const eventOfferItem33: EventOfferItem = {
  id: 'ck54am27k0009vslsbyqrskw4',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
  title: 'Section 303',
  description: '',
  startingPrice: 0,
  type: OfferItemType.Event
}

export const addOnEventOfferItem11: EventOfferItem = {
  id: 'ck54am27k000avsls5terdrkl',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
  title: 'Section 101',
  description: '',
  startingPrice: 100,
  type: OfferItemType.Event
}
export const addOnEventOfferItem12: EventOfferItem = {
  id: 'ck54am27k000bvslsqpy60o5a',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
  title: 'Section 202',
  description: '',
  startingPrice: 50,
  type: OfferItemType.Event
}
export const addOnEventOfferItem13: EventOfferItem = {
  id: 'ck54am27k000cvslsoparcy9z',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
  title: 'Section 303',
  description: '',
  startingPrice: 25,
  type: OfferItemType.Event
}
export const addOnEventOfferItem21: EventOfferItem = {
  id: 'ck54am27k000dvslse9gyedck',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
  title: 'Section 101',
  description: '',
  startingPrice: 100,
  type: OfferItemType.Event
}
export const addOnEventOfferItem22: EventOfferItem = {
  id: 'ck54am27k000evslstyjgi2oj',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
  title: 'Section 202',
  description: '',
  startingPrice: 50,
  type: OfferItemType.Event
}
export const addOnEventOfferItem23: EventOfferItem = {
  id: 'ck54am27k000fvsls141t2cbd',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
  title: 'Section 303',
  description: '',
  startingPrice: 25,
  type: OfferItemType.Event
}
export const addOnEventOfferItem31: EventOfferItem = {
  id: 'ck54am27k000gvsls8ehmqj71',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
  title: 'Section 101',
  description: '',
  startingPrice: 100,
  type: OfferItemType.Event
}
export const addOnEventOfferItem32: EventOfferItem = {
  id: 'ck54am27k000hvslscwvr97p7',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
  title: 'Section 202',
  description: '',
  startingPrice: 50,
  type: OfferItemType.Event
}
export const addOnEventOfferItem33: EventOfferItem = {
  id: 'ck54am27k000ivsls3bviglxw',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
  title: 'Section 303',
  description: '',
  startingPrice: 25,
  type: OfferItemType.Event
}
export const addOnMemberShip1: EventOfferItem = {
  id: 'cjftxsxt10005ho8eb1pjiyul',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Costco+Live+Exclusive+for+Members+V1%402x.png',
  title: 'Gold',
  description: '',
  startingPrice: 60,
  type: OfferItemType.Event
}
export const addOnMemberShip2: EventOfferItem = {
  id: 'xcvbnsdfgdsfgdsfg',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Costco+Live+Exclusive+for+Members+V1%402x.png',
  title: 'Executive',
  description: '',
  startingPrice: 120,
  type: OfferItemType.Event
}

export const addOfferItemParent1: EventOffer = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
  title: `New York Yankees vs New York Mets `,
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy1,
  uri: createSlug(`New York Yankees vs New York Mets add ons`),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Yankess+vs+Mets+V1%402x.png'
  ],
  venue: '',
  rewardCopy: '',
  rewards: eventRewards,
  items: [addOnEventOfferItem11, addOnEventOfferItem12, addOnEventOfferItem13]
}
export const addOfferItemParent2: EventOffer = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
  title: `LA Rams vs Seattle Seahawks`,
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy2,
  uri: createSlug(`LA Rams vs Seattle Seahawks add ons`),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Seahawks+vs+Rams+V1%402x.png'
  ],
  venue: '',
  rewardCopy: '',
  rewards: eventRewards,
  items: [addOnEventOfferItem21, addOnEventOfferItem22, addOnEventOfferItem23]
}
export const addOfferItemParent3: EventOffer = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
  title: `LA Lakers vs Toronto Raptors`,
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy3,
  uri: createSlug(`LA Lakers vs Toronto Raptors add ons`),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Lakers+vs+Raptors+V1%402x.png'
  ],
  venue: '',
  rewardCopy: '',
  rewards: eventRewards,
  items: [addOnEventOfferItem31, addOnEventOfferItem32, addOnEventOfferItem33]
}
export const addOfferItemParent4: EventOffer = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Costco+Live+Exclusive+for+Members+V1%402x.png',
  title: `Membership`,
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy4,
  uri: createSlug(`Membership add ons`),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Costco+Live+Exclusive+for+Members+V1%402x.png'
  ],
  venue: '',
  rewardCopy: '',
  rewards: eventRewards,
  items: [addOnMemberShip1, addOnMemberShip2]
}

export const AddOnOffer: AnyOffer = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
  title: `Get Discounts on Great Games!`,
  description:
    'Introducing Costco Live! A ticket marketplace exclusively for Coscto Members',
  type: OfferItemType.Mixed,
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Costco+Live+Exclusive+for+Members+V1%402x.png'
  ],
  details: '',
  uri: createSlug(`Get Discounts on Great Games`),
  rewards: eventRewards,
  items: [
    addOfferItemParent1,
    addOfferItemParent2,
    addOfferItemParent3,
    addOfferItemParent4
  ]
}

export const eventOfferItemParent1: EventOffer = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
  title: `New York Yankees vs New York Mets`,
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy1,
  uri: createSlug(`New York Yankees vs New York Mets`),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Yankess+vs+Mets+V1%402x.png'
  ],
  venue: '',
  addonOffer: AddOnOffer,
  rewardCopy: '',
  rewards: eventRewards,
  items: [eventOfferItem11, eventOfferItem12, eventOfferItem13]
}
export const eventOfferItemParent2: EventOffer = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
  title: `LA Rams vs Seattle Seahawks`,
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy2,
  uri: createSlug(`LA Rams vs Seattle Seahawks`),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Seahawks+vs+Rams+V1%402x.png'
  ],
  venue: '',
  addonOffer: AddOnOffer,
  rewardCopy: '',
  rewards: eventRewards,
  items: [eventOfferItem21, eventOfferItem22, eventOfferItem23]
}
export const eventOfferItemParent3: EventOffer = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
  title: `LA Lakers vs Toronto Raptors`,
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy3,
  uri: createSlug(`LA Lakers vs Toronto Raptors`),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Lakers+vs+Raptors+V1%402x.png'
  ],
  venue: '',
  addonOffer: AddOnOffer,
  rewardCopy: '',
  rewards: eventRewards,
  items: [eventOfferItem31, eventOfferItem32, eventOfferItem33]
}

export const offer: AnyOffer = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
  title: `Claim Your Free Tickets`,
  description:
    'Introducing Costco Live! A ticket marketplace exclusively for Coscto Members',
  type: OfferItemType.Mixed,
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Costco+Live+Exclusive+for+Members+V1%402x.png'
  ],
  details: '',
  uri: 'games',
  rewards: eventRewards,
  items: [eventOfferItemParent1, eventOfferItemParent2, eventOfferItemParent3]
}

export const offerPage: OfferPage = {
  id: cuid(),
  brandColor: '#0160A9',
  treeTitle: `WHO'S GOING (5)`,
  confirmationTitleCopy: 'Ready for Giants game?',
  backgroundImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-costco/Costco+Landing+Page+%402x.png',
  offer: offer,
  uri: 'costco',
  shareTitle: 'Now share this page with friends',
  shareOrderTitle: 'Get ready for Giants game!',
  emptyCheckoutTitle: 'Pay Separately, Get Together',
  emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
  isNeedToShowTax: true,
  leaderboardImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/09_leaderboard_NYCFC.gif',
  progressImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/10_reward_progress.svg',
  confirmationDetailsImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/10_reward_illustration.svg',
  orderSummaryTitle: 'Order',
  shareCopy: `*You'll receive an email to get your ticket`,
  shareDetailsCopy: `Want more friends to go games with you? They can see
  what you bought and purchase their own tickets. You’ll get bigger rewards by growing your group.`
}
