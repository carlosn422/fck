import {
  OfferItemType,
  HotelOfferItem,
  HotelOfferListItem,
  AnyOffer,
  Reward,
  OfferPage,
  EventOfferListItem,
  EventOfferItem,
  EventOffer
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
arial;font-weight:bold;margin-bottom: .5em;color:#C90513;">${item}</p>`
      } else {
        return `<div style="font-size: 11pt; color: #908f8f;">
<p>${item}</p>
<p>&nbsp;</p>
`
      }
    })
    .join('').concat(`
    <p style="margin-top: 2rem;font-size: 16pt;color: #C90513;font-family:SharpSans,
arial;font-weight:bold;margin-bottom: .5em;">All this 'ON US'</p>
<div><img src="https://fevo-fuc.s3.amazonaws.com/assets-virgin/On+us.png"></div>
</div>
    `)

const formatCopyWithList = (copy, details) =>
  copy
    .split('|')
    .filter(Boolean)
    .map((item, i) => {
      if (i === 0) {
        const [title, rest] = item.split('[')
        const [quote, person] = rest.split('-')
        return `<p style="font-size: 16pt;font-family:SharpSans,
arial;font-weight:bold;margin-bottom: .5em;color:#C90513;">${title}</p>
<div style="display: flex; align-items: flex-start;margin-bottom: 1rem;">
  
  <img src="https://fevo-fuc.s3.amazonaws.com/assets-virgin/person.png" 
  style="width: 50px;margin-right: 1rem;"/>
  
  <p style="margin: 0;">
    “${quote}”<small 
    style="color:#5a5f73;white-space: nowrap;"> – ${person}</small>
  </p>
</div>`
      } else {
        return `<div style="font-size: 11pt; color: #908f8f;">
<p>${item}</p>
<p>&nbsp;</p>
`
      }
    })
    .join('').concat(`
    <div style="display:flex;font-size: 11pt; color: #908f8f;">
    ${details}
  </div>
    `)

const roomList = formatCopy(`Ahoy Sailor!|
Welcome to an irresistible adult-by-design experience at sea where tranquility meets curiosity. 
Restorative mornings or late nights under the stars — it’s all about balance your way. Come see 
how Richard Branson does cruises.|
From sundeck yoga to experimental eateries - if Instagramming your food isn't your thing, try 
tattooing it on your body instead. Your mom will love that.|
With spaces that transform to your given mood, you can live like a rockstar or retreat to a 
quiet and luxurious oasis whenever you need a break away from all the action.`)

const insider = formatCopy(`Play All Night Sleep All Day|
Friend groups, solo Sailors, and duos alike can get in on the Insider action. Roomy Rainshowers 
and mood lighting punctuate our cozy escapes — giving you the space to recover today and prepare 
for tomorrow.`)

const seaview = formatCopy(`A Room with a (Porthole) View|
For solo Sailors looking for quiet moments with the sea from our super large single beds, or duos 
perched on our nautically-inspired window seats — the ocean is yours to make eyes with. Gazing out 
at the waves every morning, this is the closest you can get to the ocean (without the windblown hair).`)

const rockstar = formatCopy(`Suite Dreams are Made of This|
Can you say exclusive access throughout the ship, personal RockStar style riders, upgraded marble clad 
bathrooms with premium amenities and spaces conceptualized by world renowned designer, Tom Dixon? Then 
let’s talk suites.`)

const megaStar = formatCopy(`How your Celeb Friends Live... but Better|
This is the most exclusive, top-tier luxury living on board; granting you prime access, 24/7 agent attention, 
and personal riders. Our Tom Dixon-designed suites boast large marbled bathrooms with Peek-a-Boo showers, 
hand-woven terrace hammocks and outdoor Peek-a-View showers for when rinsing off requires a little help 
from the moonlight.`)

const addOnItemCopy1 = formatCopyWithList(
  `The Beach Club[Thank you for a truly amazing stay! This private 
  beach is EPIC.-Mahira Hulme|Our private beach club in Bimini, Bahamas is an experience you (literally) 
  can't get anywhere else. It's like if Mykonos had a love affair with St. Tropez — the energy intentionally 
  amplifying as the day goes on. You can choose between ecstacy-inducing DJ sets, quiet beach-lounging with a 
  perma-cocktail in hand, or embrace your inner explorer and seek out secluded and undiscovered corners of 
  the island.`,
  `
  <div style="flex: 1;">
  <p style="color: #5a5f73;">WHAT TO BRING</p>
  <ul style="margin-top: 1em;list-style-type: disc;padding-left: 20px;">
    <li>Photo identification</li>
    <li>Camera</li>
    <li>Sun protection</li>
    <li>Cash/credit cards</li>
    <li>Insect repellent</li>
  </ul>
</div>
<div style="flex: 1;">
  <p style="color: #5a5f73;">WHAT TO WEAR</p>
  <ul style="margin-top: 1em;list-style-type: disc;padding-left: 20px;">
    <li>Walking shoes</li>
    <li>Hat and sunglasses</li>
  </ul>
</div>
  `
)

const addOnItemCopy2 = formatCopyWithList(
  `Aquatic Club[Calm, Serene, Retro – What a way to relax and enjoy while 
  partying.-Che Sparks|With smooth curves and nautical details, we've created a pool deck with the sophisticated 
  glam of a contemporary yacht. Whether you're looking for mornings spent sunbathing in one of our daybeds, or 
  letting last night's choices melt away as you glide through the water — our pool club is a serene space for
   ultimate relaxation.`,
  `<div style="flex: 1;">
   <p style="color: #5a5f73;">WHAT TO BRING</p>
   <ul style="margin-top: 1em;list-style-type: disc;padding-left: 20px;">
     <li>Photo identification</li>
     <li>Camera</li>
     <li>Sun protection</li>
     <li>Cash/credit cards</li>
     <li>Insect repellent</li>
   </ul>
 </div>
 <div style="flex: 1;">
   <p style="color: #5a5f73;">WHAT TO WEAR</p>
   <ul style="margin-top: 1em;list-style-type: disc;padding-left: 20px;">
     <li>Walking shoes</li>
     <li>Hat and sunglasses</li>
   </ul>
 </div>`
)

const addOnItemCopy3 = formatCopyWithList(
  `The Manor[The service here has just been fantastic; whatever we 
  needed was brought to us right away. The drinks were incredible; the entire experience was really great.
  -Lula Tucker|The two-story, three bar space, named after Richard's first recording studio, is inspired by
   a classic theatrical zeitgeist - layered with a moody & sexy ‘70s, punk vibe. Ground-breaking shows will
    kick the night off before it transitions into a mind-blowing nightclub.`,
  `
  <div style="flex: 1;">
  <p style="color: #5a5f73;">WHAT TO BRING</p>
  <ul style="margin-top: 1em;list-style-type: disc;padding-left: 20px;">
    <li>Photo identification</li>
    <li>Your Party Best</li>
  </ul>
</div>
<div style="flex: 1;">
  <p style="color: #5a5f73;">WHAT TO WEAR</p>
  <ul style="margin-top: 1em;list-style-type: disc;padding-left: 20px;">
    <li>Anything you vibe in</li>
  </ul>
</div>
  `
)

const addOnItemCopy4 = formatCopyWithList(
  `The Red Room[It is not all that often that one can say that an 
  evening out has been perfect in every way.-Arianna Jimenez|Our larger-than-life entertainment space is 
  the first ever transformational, multi-form theater at sea. Boundary-pushing performances on the traditional 
  Proscenium stage or late-night dance parties on the flat-floor configuration — undiscovered experiences are 
  always unfolding here. Designed by renowned theater design consultants, Auerbach Pollock Friedlander — we've
   created a unique and flexible (while still being intimate) theater space that delivers a sea of possibilities.
  `,
  `
  <div style="flex: 1;">
  <p style="color: #5a5f73;">WHAT TO BRING</p>
  <ul style="margin-top: 1em;list-style-type: disc;padding-left: 20px;">
    <li>Photo identification</li>
    <li>Your Party Best</li>
  </ul>
</div>
<div style="flex: 1;">
  <p style="color: #5a5f73;">WHAT TO WEAR</p>
  <ul style="margin-top: 1em;list-style-type: disc;padding-left: 20px;">
    <li>Anything you vibe in</li>
  </ul>
</div>
  `
)

export const cruseRewards: Reward[] = [
  {
    id: '200',
    name: 'Rockstar Cabin Upgrade',
    description: 'When you bring 15 Sailors',
    threshold: 15,
    thresholdCopy: 'Sailors',
    icon: 'https://s3.amazonaws.com/fevo-fuc/assets-thompson/reward_unlock.png'
  },
  {
    id: '201',
    name: 'Unlimited Möet Chandon Impérial®',
    description: 'When you bring 10 Sailors',
    threshold: 10,
    thresholdCopy: 'Sailors',
    icon: 'https://s3.amazonaws.com/fevo-fuc/assets-thompson/reward_unlock.png'
  },
  {
    id: '202',
    name: 'Daily In-Cabin Seaweed Wrap',
    description: 'When you bring 5 Sailors',
    threshold: 5,
    thresholdCopy: 'Sailors',
    icon: 'https://s3.amazonaws.com/fevo-fuc/assets-thompson/reward_unlock.png'
  }
]

export const offerAddOn1: EventOfferItem = {
  id: 'ck2qrt3c1005pbmlsdv6mmnb4',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  media: 'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Experience1_hero.png',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Experience1_hero.png',
  title: 'The Beach Club',
  description: 'Bimini',
  startingPrice: 0,
  htmlDescription: addOnItemCopy1,
  type: OfferItemType.Event
}
export const offerAddOn2: EventOfferItem = {
  id: 'ck2qrt3c1005qbmlsyvk7xvsg',
  media: 'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Experience2_hero.png',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Experience2_hero.png',
  title: 'Aquatic Club',
  description: 'Poolside Oasis',
  startingPrice: 0,
  htmlDescription: addOnItemCopy2,
  type: OfferItemType.Event
}
export const offerAddOn3: EventOfferItem = {
  id: 'ck2qrt3c1005rbmls43t65ea9',
  media: 'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Experience3_hero.png',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Experience3_hero.png',
  title: 'The Manor',
  description: 'Alluring Nightclub',
  startingPrice: 0,
  htmlDescription: addOnItemCopy3,
  type: OfferItemType.Event
}
export const offerAddOn4: EventOfferItem = {
  id: 'ck2qrt3c1005sbmlsus56vck6',
  media: 'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Experience4_hero.png',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Experience4_hero.png',
  title: 'The Red Room',
  description: 'Live Perfomance Space',
  startingPrice: 0,
  htmlDescription: addOnItemCopy4,
  type: OfferItemType.Event
}

export const addonOfferParent: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Experience1_hero.png',
  title: 'Experiences',
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: addOnItemCopy1,
  uri: createSlug('Experiences'),
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Experience1_hero.png'
  ],
  venue: '',
  items: [offerAddOn1, offerAddOn2, offerAddOn3, offerAddOn4],
  rewards: cruseRewards
}

export const roomItem1: HotelOfferItem = {
  id: 'ck2qrt3c1005lbmlshictyfbr',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+2_hero.png',
  media: `https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+2_hero.png`,
  title: 'Insider',
  description: 'Your cozy solace away from it all',
  startingPrice: 1150,
  htmlDescription: insider,
  type: OfferItemType.Hotel
}

export const roomItem2: HotelOfferItem = {
  id: 'ck2qrt3c1005mbmls7cwcklw1',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+3_hero.png',
  media: `https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+3_hero.png`,
  title: 'Sea View',
  description: 'A flirty (window) view of the sea',
  startingPrice: 1200,
  htmlDescription: seaview,
  type: OfferItemType.Hotel
}

export const roomItem3: HotelOfferItem = {
  id: 'ck2qrt3c1005nbmlsztii2sk3',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+4_hero.png',
  media: `https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+4_hero.png`,
  title: 'RockStar Cheeky Corner Suites',
  description: 'Views on views...and not just from the terrace',
  startingPrice: 2825,
  htmlDescription: rockstar,
  type: OfferItemType.Hotel
}
export const roomItem4: HotelOfferItem = {
  id: 'ck2qrt3c1005obmls6wou8tq8',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+5_hero.png',
  media: `https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+5_hero.png`,
  title: 'Mega RockStar Fab Suites',
  description: 'Living quarters made for living icons',
  startingPrice: 9200,
  htmlDescription: megaStar,
  type: OfferItemType.Hotel
}

export const hotelOfferListItem1: HotelOfferListItem = {
  id: 'guid()',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Voyages+1_hero.png',
  title: 'Mayan Sol',

  description:
    '5 Nights - Miami - Costa Maya - The Beach Club at Bimini - Miami',
  address: '',
  startingPrice: 1150,
  type: OfferItemType.Hotel,
  media: ['https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+1_hero.png'],
  details: roomList,
  uri: createSlug('Mayan Sol'),
  addonOffer: addonOfferParent,
  items: [roomItem1, roomItem2, roomItem3, roomItem4],
  rewards: cruseRewards
}
export const hotelOfferListItem2: HotelOfferListItem = {
  id: 'guid()',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Voyages+2_hero.png',
  title: 'Dominican Daze',

  description:
    '5 Nights - Miami - Puerto Plata - The Beach Club at Bimini - Miami',
  address: '',
  startingPrice: 1150,
  type: OfferItemType.Hotel,
  media: ['https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+1_hero.png'],
  details: roomList,
  uri: createSlug('Dominican Daze'),
  addonOffer: addonOfferParent,
  items: [roomItem1, roomItem2, roomItem3, roomItem4],
  rewards: cruseRewards
}
export const hotelOfferListItem3: HotelOfferListItem = {
  id: 'guid()',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Voyages+3_hero.png',
  title: 'Riviera Maya',

  description:
    '5 Nights - Miami - Cozumel - Playa del Carmen - The Beach Club at Bimini - Miami',
  address: '',
  startingPrice: 2350,
  type: OfferItemType.Hotel,
  media: ['https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+1_hero.png'],
  details: roomList,
  uri: createSlug('Riviera Maya'),
  addonOffer: addonOfferParent,
  items: [roomItem1, roomItem2, roomItem3, roomItem4],
  rewards: cruseRewards
}
export const hotelOfferListItem4: HotelOfferListItem = {
  id: 'guid()',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Voyages+4_hero.png',
  title: 'Fire and Sunset Soirees',

  description: '4 Nights - Miami - Key West - The Beach Club at Bimini - Miami',
  address: '',
  startingPrice: 1350,
  type: OfferItemType.Hotel,
  media: ['https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+1_hero.png'],
  details: roomList,
  uri: createSlug('Fire and Sunset Soirees'),
  addonOffer: addonOfferParent,
  items: [roomItem1, roomItem2, roomItem3, roomItem4],
  rewards: cruseRewards
}
export const hotelOfferListItem5: HotelOfferListItem = {
  id: 'guid()',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Voyages+5_hero.png',
  title: 'Holidayze and Nights',

  description:
    '7 Nights - Miami - Puerto Plata - San Juan - The Beach Club at Bimini - Miami',
  address: '',
  startingPrice: 3950,
  type: OfferItemType.Hotel,
  media: ['https://fevo-fuc.s3.amazonaws.com/assets-virgin/Choose+1_hero.png'],
  details: roomList,
  uri: createSlug('Holidayze and Nights'),
  addonOffer: addonOfferParent,
  items: [roomItem1, roomItem2, roomItem3, roomItem4],
  rewards: cruseRewards
}

export const offer: AnyOffer = {
  id: 'cjg8ckfil00093i5nlvm7gmc1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
  title: 'Choose your Voyage',
  description:
    'With an island for every taste, the Caribbean is the ultimate place for relaxation.',
  type: OfferItemType.Mixed,
  media: ['https://fevo-fuc.s3.amazonaws.com/assets-virgin/Home.png'],
  details: '',
  uri: 'virgin-voyages',
  rewards: cruseRewards,
  items: [
    hotelOfferListItem1,
    hotelOfferListItem2,
    hotelOfferListItem4,
    hotelOfferListItem3,
    hotelOfferListItem5
  ]
}

export const offerPage: OfferPage = {
  id: guid(),
  brandColor: '#C90513',
  offer: offer,
  uri: 'virgin-voyages',
  treeTitle: `WHO'S GOING (5)`,
  isNeedToShowTax: true,
  shareOrderTitle: 'Get ready for your trip!',
  shareTitle: 'Now share this page with friends',
  confirmationTitleCopy: 'Ready for your trip?',
  emptyCheckoutTitle: 'Pay Separately, Stay Together',
  emptyCheckoutDescription: 'Book your stay, invite friends and earn perks',
  backgroundImage:
    'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Background.png',
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
