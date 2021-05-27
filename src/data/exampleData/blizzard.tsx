import {
  OfferItemType,
  MerchOfferItem,
  HotelOfferItem,
  HotelOfferListItem,
  MerchOffer,
  MerchOfferListItem,
  AnyOffer,
  Reward,
  OfferPage,
  EventOfferListItem,
  EventOfferItem
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

const eventCopy1 = formatCopy(`2019 GRAND FINALS|
The final two teams will face off at the Wells Fargo Center in a first-to-four-map 
series. The winning team will take home USD $1,100,000 and the Overwatch League championship trophy!|
Wells Fargo Center<br/>
3601 South Broad Street<br/>
Philadelphia, Pennsylvania 19148|
Sunday, September 29 at 3 p.m. EDT`)

const eventCopy2 = formatCopy(`Call of Duty League|
The 2019 Call of Duty World League Championship will take place in Los Angeles, California this August. 
Announced in broadcast during CWL Anaheim, the season’s final event comes to the UCLA Pauley Pavilion 
for a massive, multi-day event from August 14-18, 2019.|
More information is available on the official 2019 Call of Duty World League Championship website.|
Los Angeles was the longtime home of Call of Duty’s Championship event before rotating to new cities 
during the 2017 and 2018 seasons of the CWL. For the first time since 2016, teams from around the world 
will journey to Southern California to compete for the biggest prize in Call of Duty esports.|
Similar to previous Championship events, the first two days of competition will be closed to the public 
as 32 teams battle for a chance to make it to the main stage in search of their coveted Championship ring. 
All five days of the tournament will be broadcast on the official Call of Duty Twitch channel, MLG.com and 
via the in-game viewer in the PlayStation®4 version of Call of Duty®: Black Ops 4.`)

const eventCopy3 = formatCopy(`Games|Activision Blizzard is the world's most successful standalone interactive 
entertainment company. Our portfolio includes some of the biggest franchises in all of entertainment, developed
 by the incredibly talented teams at Activision Publishing, Blizzard Entertainment, King Digital Entertainment,
  Activision Blizzard Studios, Major League Gaming, and our independent studios, including Toys for Bob, Infinity
   Ward, Sledgehammer Games and Treyarch. Our central corporate operations provide shared services such as Finance, 
   IT, Sales and Supply Chain, Human Resources and Legal. Great entertainment starts with great people. If you 
   believe you’re one of them, we invite you to apply to join our amazing team.`)

const merchCopy31 = formatCopy(`Sekiro Shadows Die Twice|In Sekiro: Shadows Die Twice you are the “one-armed wolf”, 
a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the 
descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina 
clan. When the young lord is captured, nothing will stop you on a perilous quest to regain your honor, not even 
death itself.Explore late 1500s Sengoku Japan, a brutal period of constant life and death conflict, as you come 
face to face with larger than life foes in a dark and twisted world. Unleash an arsenal of deadly prosthetic tools 
and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody 
confrontation.`)

const merchCopy32 = formatCopy(`Call of Duty Modern Warefare Preorder|PREPARE TO GO DARK Modern Warfare® is backIn the 
visceral and dramatic single-player story campaign, Call of Duty®: Modern Warfare® pushes boundaries and breaks rules 
the way only Modern Warfare® can.Experience the ultimate online playground with classic multiplayer, or squad-up and 
play `)

const merchParentCopy = formatCopy(`Merchandise|Stay a While and Shop!`)

export const eventRewards: Reward[] = [
  {
    id: '100',
    name: 'Group Shoutout on the Jumbotron ',
    description: 'When your group invite 5 friends',
    threshold: 5,
    thresholdCopy: 'Friend'
  },
  {
    id: '101',
    name: 'Player Meet & Greet',
    description: 'When your group invite 15 friends',
    threshold: 15,
    thresholdCopy: 'Meet'
  },
  {
    id: '102',
    name: 'Have a Match with the Winning Team',
    description: 'When your group invite 50 friend',
    threshold: 50,
    thresholdCopy: 'Winning'
  }
]
export const gameReward1: Reward[] = [
  {
    id: '103',
    name: 'Early Access to DLC',
    description: 'When your group invite 5 friends',
    threshold: 5,
    thresholdCopy: 'DLC'
  },
  {
    id: '104',
    name: 'Exclusive Double Kill Blade',
    description: 'When your group invite 15 friends',
    threshold: 15,
    thresholdCopy: 'Blade'
  },
  {
    id: '105',
    name: 'Resin 12” Sekiro Statue by Project Triforce',
    description: 'When your group invite 50 friend',
    threshold: 30,
    thresholdCopy: 'Sekiro'
  }
]
export const gameReward2: Reward[] = [
  {
    id: '106',
    name: 'Operator Supreme Pack',
    description: 'When your group invite 5 friends',
    threshold: 5,
    thresholdCopy: 'Supreme'
  },
  {
    id: '107',
    name: 'Exclusive Class Mods',
    description: 'When your group invite 15 friends',
    threshold: 15,
    thresholdCopy: 'Mods'
  },
  {
    id: '108',
    name: 'Closed Alpha Access',
    description: 'When your group invite 50 friend',
    threshold: 30,
    thresholdCopy: 'Access'
  }
]

const eventOfferItem11: EventOfferItem = {
  id: 'cjyuhgn0700ci66lsbpmtuhx8',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Overwatch%20League@2x.png',
  title: '200 Sections',
  description: '',
  startingPrice: 55,
  type: OfferItemType.Event
}
const eventOfferItem12: EventOfferItem = {
  id: 'cjyuhgn0700cj66ls7h6t6q38',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Overwatch%20League@2x.png',
  title: 'Club',
  description: '',
  startingPrice: 84,
  type: OfferItemType.Event
}
const eventOfferItem13: EventOfferItem = {
  id: 'cjyuhgn0700ck66lsyo2mpjum',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Overwatch%20League@2x.png',
  title: '100 Sections',
  description: '',
  startingPrice: 99,
  type: OfferItemType.Event
}
const eventOfferItem14: EventOfferItem = {
  id: 'cjyuhgn0700cl66lsw7nf8f0e',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Overwatch%20League@2x.png',
  title: 'Floor',
  description: '',
  startingPrice: 169,
  type: OfferItemType.Event
}
const eventOfferItem21: EventOfferItem = {
  id: 'cjyuhgn0700cm66ls5elgxeik',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Call+of+duty+league%402x.png',
  title: 'GA',
  description: '',
  startingPrice: 65,
  type: OfferItemType.Event
}
const eventOfferItem22: EventOfferItem = {
  id: 'cjyuhgn0700cn66ls3kcylpzo',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Call+of+duty+league%402x.png',
  title: 'Team Pass',
  description: '',
  startingPrice: 400,
  type: OfferItemType.Event
}
const gameOfferItem31: EventOfferItem = {
  id: 'cjyuhgn0700co66lsv29dtuom',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Games%402x.png',
  title: 'Sekiro Shadows Die Twice',
  description: '',
  startingPrice: 59.99,
  type: OfferItemType.Event
}
const gameOfferItem32: EventOfferItem = {
  id: 'cjyuhgn0700cp66lsonvkope9',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/3-games-cod.jpg',
  title: 'Call of Duty Modern Warefare Preorder ',
  description: '',
  startingPrice: 59.99,
  type: OfferItemType.Event
}
const merchItem1: MerchOfferItem = {
  id: 'cjyuhgn0700cq66lszrz00eek',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/3_Winston+Incredibuild%402x.png',
  media:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/3_Winston+Incredibuild%402x.png',
  title: 'Overwatch Winston Incredibuilds Wood Model',
  description:
    'The IncrediBuilds Overwatch Winston Poster and 3D Wood Model Kit ',
  startingPrice: 22,
  type: OfferItemType.Merch,
  productDetails: {
    sizes: []
  }
}
const merchItem2: MerchOfferItem = {
  id: 'cjyuhgn0700cr66lsjbdkm8mp',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/3_Pachimari%402x.png',
  media:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/3_Pachimari%402x.png',
  title: 'Overwatch Pachimari Pullover Hoodie',
  description:
    'You’ll be well on your way to smiling as brightly as Pachimari with this soft, light blue hoodie',
  startingPrice: 45,
  type: OfferItemType.Merch,
  productDetails: {
    sizes: [
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' }
    ]
  }
}
const merchItem3: MerchOfferItem = {
  id: 'cjyuhgn0700cs66lsxu48nct3',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/3_Hearthstone%402x.png',
  media:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/3_Hearthstone%402x.png',
  // prettier-ignore
  title: 'Hearthstone "Well Played" Hoodie',
  // prettier-ignore
  description: `Send your favorite message in an un-squelch-able way with the 
  official Hearthstone “Well Played” hoodie!`,
  startingPrice: 40,
  type: OfferItemType.Merch,
  productDetails: {
    sizes: [
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' }
    ]
  }
}

export const eventOffer11: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Overwatch%20League@2x.png',
  title: '2019 Overwatch League Grand Finals',
  description: 'Sunday | Sep. 29, 2019 3:00 PM',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy1,
  uri: createSlug('2019 Overwatch League Grand Finals'),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Overwatch%20League@2x.png'
  ],
  venue: '',
  rewards: eventRewards,
  // addonOffer: addonOfferParent,
  items: [
    eventOfferItem11,
    eventOfferItem12,
    eventOfferItem13,
    eventOfferItem14
  ]
}
export const eventOffer12: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Overwatch%20League@2x.png',
  title: '2019 Overwatch League Grand Semifinals',
  description: 'Saturday | Sep. 28, 2019 3:00 PM',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy1,
  uri: createSlug('2019 Overwatch League Grand Finals'),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Overwatch%20League@2x.png'
  ],
  venue: '',
  rewards: eventRewards,
  // addonOffer: addonOfferParent,
  items: [
    eventOfferItem11,
    eventOfferItem12,
    eventOfferItem13,
    eventOfferItem14
  ]
}
export const eventOffer2: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Call+of+duty+league%402x.png',
  title: '2019 Call of Duty World League Championship',
  description: 'AUGUST 16 - AUGUST 18, 2019',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy2,
  uri: createSlug('2019 Call of Duty World League Championship'),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Call+of+duty+league%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  // addonOffer: addonOfferParent,
  items: [eventOfferItem21, eventOfferItem22]
}
export const gameItem31: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Games%402x.png',
  title: 'Sekiro Shadows Die Twice',
  description: 'AUGUST 16 - AUGUST 18, 2019',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: merchCopy31,
  uri: createSlug('Sekiro Shadows Die Twice'),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Games%402x.png'
  ],
  venue: '',
  rewards: gameReward1,
  // addonOffer: addonOfferParent,
  items: [gameOfferItem31]
}
export const gameItem32: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/3-games-cod.jpg',
  title: 'Call of Duty Modern Warefare Preorder ',
  description: 'AUGUST 16 - AUGUST 18, 2019',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: merchCopy32,
  uri: createSlug('Call of Duty Modern Warefare Preorder '),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/3-games-cod.jpg'
  ],
  venue: '',
  rewards: gameReward2,
  // addonOffer: addonOfferParent,
  items: [gameOfferItem32]
}
// export const merchItem1: EventOfferListItem = {
//   id: cuid(),
//   thumbnailImage:
//     'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/3-games-cod.jpg',
//   title: 'Call of Duty Modern Warefare Preorder ',
//   description: 'AUGUST 16 - AUGUST 18, 2019',
//   type: OfferItemType.Event,
//   startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
//   endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
//   details: merchCopy32,
//   uri: createSlug('Call of Duty Modern Warefare Preorder '),
//   media: [
//     'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/3-games-cod.jpg'
//   ],
//   venue: '',
//   // rewards: eventRewards,
//   // addonOffer: addonOfferParent,
//   items: [gameOfferItem32]
// }

export const eventOfferItemParent: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Overwatch%20League@2x.png',
  title: 'Overwatch League',
  description: 'Most popular',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy1,
  uri: createSlug('Overwatch League'),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Overwatch%20League@2x.png'
  ],
  venue: '',
  rewards: eventRewards,
  // addonOffer: addonOfferParent,
  rewardCopy: 'Rewards available for bringing 10 friends',
  items: [eventOffer11, eventOffer12]
}
export const eventOfferItem2Parent: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Call+of+duty+league%402x.png',
  title: 'Call of Duty League',
  description: 'Trending',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy2,
  uri: createSlug('Call of Duty League'),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Call+of+duty+league%402x.png'
  ],
  venue: '',
  // addonOffer: addonOfferParent,
  rewards: eventRewards,

  // rewardCopy: 'Rewards available for bringing 10 friends',
  items: [eventOffer2]
}
export const gamesItemParent: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Games%402x.png',
  title: 'Games',
  description: 'Preorders, Exclusives and More',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy3,
  uri: createSlug('Games'),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Games%402x.png'
  ],
  venue: '',
  rewardCopy: 'Blizzard Activision Picks',
  // addonOffer: addonOfferParent,
  items: [gameItem31, gameItem32]
}
export const merchItemParent: MerchOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Merchandise%402x.png',
  title: 'Merchandise',
  description: '',
  type: OfferItemType.Merch,
  details: merchParentCopy,
  uri: createSlug('Merchandise'),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Merchandise%402x.png'
  ],
  rewardCopy: 'Blizzard Activision Picks',
  // addonOffer: addonOfferParent,
  items: [merchItem1, merchItem2, merchItem3]
}

export const offer: AnyOffer = {
  id: 'cjg8ckfil00093i5nlvm7gmc1',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Overwatch%20League@2x.png',
  title: 'Blizzard',
  description: '',
  type: OfferItemType.Mixed,
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/2_Overwatch%20League@2x.png'
  ],
  details: '',
  uri: 'blizzard',
  items: [
    eventOfferItemParent,
    eventOfferItem2Parent,
    gamesItemParent,
    merchItemParent
  ]
}

export const offerPage: OfferPage = {
  id: guid(),
  brandColor: '#019AE4',
  offer: offer,
  uri: 'blizzard',
  treeTitle: `WHO'S GOING (5)`,
  isNeedToShowTax: true,
  shareOrderTitle: 'Get ready for your trip!',
  shareTitle: 'Now share this page with friends',
  confirmationTitleCopy: 'Ready for your trip?',
  emptyCheckoutTitle: 'Pay Separately, Stay Together',
  emptyCheckoutDescription: 'Book your stay, invite friends and earn perks',
  backgroundImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-demo-blizzard/1_Activision_Landing+page+%402x.png',
  leaderboardImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/09_leaderboard_NYCFC.gif',
  progressImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/10_reward_progress.svg',
  confirmationDetailsImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/10_reward_illustration.svg',
  orderSummaryTitle: 'Booking',
  shareDetailsCopy: `Want more friends to join you? They will see
  your group itinerary and can book their own trip. You’ll get bigger rewards by growing your group!`
}
