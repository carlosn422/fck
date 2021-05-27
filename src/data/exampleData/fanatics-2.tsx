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

const hatsCopy1 = `<p><sup><span style="font-size: 16pt;font-family:
SharpSans, arial;"><strong>Fitted Hat – Black</strong></span></sup></p>
  <p>&nbsp;</p>
  <p><sup><span style="font-size: 11pt; color: #908f8f;">
  Celebrate that team that's always had a special place in
  your heart with this one-of-a-kind Authentic Collection
   On Field low profile 59FIFTY fitted hat from New Era. You'll feel like
    the most die-hard San Francisco Giants supporter when you promote
     them in this incredible cap all season long!</span></sup></p>
  <p>&nbsp;</p>
  <p><sup><span style="font-size: 11pt; color: #908f8f;">• Material: 100% Polyester</span></sup></p>
  <p><sup><span style="font-size: 11pt; color: #908f8f;">• Mid Crown</span></sup></p>
  <p><sup><span style="font-size: 11pt; color: #908f8f;">• Structured fit</span></sup></p>
  <p><sup><span style="font-size: 11pt; color: #908f8f;">• Curved bill</span></sup></p>
  <p><sup><span style="font-size: 11pt; color: #908f8f;">• Adjustable hook and loop fastener strap</span></sup></p>
  <p><sup><span style="font-size: 11pt; color: #908f8f;">• Woven team tag sewn-on to back closure strap</span></sup></p>
  <p><sup><span style="font-size: 11pt; color: #908f8f;">• Six panel
   construction with embroidered eyelets</span></sup></p>
  <p><sup><span style="font-size: 11pt; color: #908f8f;">• Raised embroidery</span></sup></p>`

const hatsCopy2 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>New Era Primary Logo Fitted Hat</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Material
: 100% Polyester</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Cool Base
 ® technology is made with interlocking moisture-wicking fabric for a lightweight, breathable feel</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Customized with stitched twill graphics</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Due to M
LB regulations items cannot be customized with retired/former players, player
 nicknames/full names, fictional characters or team announcers/staff</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Heat-sealed MLB
Authentic Collection jock tag about left hem</span></sup></p>`

const hatsCopy3 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>New Era Primary Knit Hat</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Show off your loyalty to the San
Francisco Giants with this bold On-Field Sport cuffed knit hat from New Era. It's made with lively graphics
and distinctive colors that will effortlessly display your unyielding devotion. Anytime you wear this cap, everyone
 will see that you're ready for a big victory by your San Francisco Giants.</span></sup></p>`

const hatsCopy4 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans,
 arial;"><strong>New Era Primary Knit Hat with Pom</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">You're a tried and tr
ue San Francisco Giants fan and are always prepared no matter what.
Now you'll be able to keep your head nice and warm as it gets cold out by putting
 on this San Francisco Giants Sport cuffed knit hat with pom from New Era. It features distinctive San Francisco
  Giants graphics all over, so your devotion for the team will never go unnoticed.</span></sup></p>
`

const clothingCopy1 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>BlackBuster Posey Jersey – Cream</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">You love heading to the ballpark to
watch the San Francisco Giants game whenever you can. Now you can share your loyalty for the
team all season long when you get this Buster Posey 2017 Cool Base Player Jersey from Majestic.
This jersey is modeled after what the San Francisco Giants wear, so it will keep you comfortable no
matter how much things heat up on the diamond. Buster Posey's name and number are featured at the back of
this jersey so everyone will know just who you cheer for.</span></sup></p>
`

const clothingCopy2 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans
, arial;"><strong>Buster Posey Jersey – Orange</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">You love heading to the
 ballpark to watch the San Francisco Giants game whenever you can. Now you can share
  your loyalty for the team all season long when you get this Buster Posey 2017 Cool Base
  Player Jersey from Majestic. This jersey is modeled after what the San Francisco Giants wear,
  so it will keep you comfortable no matter how much things heat up on the diamond. Buster Posey's name
   and number are featured at the back of this jersey so everyone will know just who you cheer for.</span></sup></p>
`

const clothingCopy3 = `<p><sup><span style="font-size:
16pt;font-family:SharpSans, arial;"><strong>Nike Legend Batting
Practice Primary Logo Performance T-Shirt</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Grab this
bold San Francisco Giants Legend Primary Logo T-shirt from Nike to
show everyone who your favorite team is. Vibrant colors make the crisp graphics
 pop, ensuring you stand out at the San Francisco Giants game. Dri-FIT technology
  will keep you comfortable on a hot day, so you can cheer on the San Francisco Giants worry-free.</span></sup></p>
`

const clothingCopy4 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Team Drive Ultra-Streak Fleece Pullover Hoodie</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Your San
Francisco Giants fandom will shine through the chilly temperatures when you have this
Authentic Collection Team Drive Ultra-Streak hoodie from Majestic. It features sharp team
graphics, so everyone at the ballpark will know you're there to see the San Francisco Giants
bring home a victory. Thanks to its cozy fleece lining, this pullover will be perfect for those
brisk fall nights during the tail end of baseball season.</span></sup></p>
`

const accesoriesCopy = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>
Herschel Supply Co. Heritage Backpack</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">You're the definition o
f a die-hard San Francisco Giants fan and love showing off that unwavering devotion
 all the time. You'll be able to accomplish that goal when you get this San Francisco Giants Heri
 tage backpack from Herschel Supply Co. It features crisp San Francisco Giants graphics on the front and side, s
 o people know your true fandom. Because of the multiple pockets, you'll have ample room to store your stuff.</spa
 n></sup></p>
`

const accesoriesCopy2 = `
<p><sup><span style="font-size: 16pt;font-family:
SharpSans, arial;"><strong>Herschel Supply Co. Novel Duffle Bag</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;
">There's no better way to conquer the away games like following your San Francisco
 Giants! This Novel duffle from Herschel Supply Co. has plenty of space for all of your necessities.
  With this San Francisco Giants bag in tow, you'll be ready to head for the next destination in no time.
  </span></sup></p>
`

const accesoriesCopy3 = `
<p><sup><span style="font-size: 16pt;font-family:
SharpSans, arial;"><strong>Youth Big Logo Stripe Slippers</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;
">Whether your kiddo is heading to bed or just waking up, they
love to display their San Francisco Giants pride. Now your young fan can
take their head-to-toe support for their favorite team to the next level with
these Big Logo Stripe slippers. Along with embroidered San Francisco Giants graphics,
they feature soft, cozy material that's perfect for warming up your youngster's feet on those
chilly game days.</span></sup></p>
`

const accessoriesCopy4 = `
<p><sup><span style="font-size: 16pt
;font-family:SharpSans, arial;"><strong>Stripe Crew Socks - Black</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Nothing
 can compare to the feeling you get when you see your beloved San Francisco
 Giants dominating their opponents on game day. Get the look of a truly dedicated San
 Francisco Giants supporter when you slip on these spirited Stripe crew socks. They feature
 dynamic San Francisco Giants graphics that will put your ardent pride on full display all season long!</span></sup></p>
`

const collectiblesCopy = `
<p><sup><span style="font-size: 16pt;font-family:
SharpSans, arial;"><strong>Buster Posey San Francisco Giants Glow-In-The-Dark Bobblehead</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
Personalize your room with all the things you love, like Buster Posey.
 The most awesome San Francisco Giants player now comes in a Glow-In-The-Dark bobblehead
 version for decorating your desks and shelves. Whether it's morning or night, your daily
 inspiration will never be out of sight.</span></sup></p>
`

const collectiblesCopy2 = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans,
 arial;"><strong>Hunter Pence San Francisco Giants Player Baller Bobblehead</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">You already
 have plenty of San Francisco Giants jerseys, jackets and hats, but you're always
 looking for that new, quirky item to add to your collection. This Hunter Pence San
 Francisco Giants Player Baller bobblehead is just what you've been searching for! It looks
 just like your favorite player, so any time you bring it out, people will know that you're
  one die-hard team fan.</span></sup></p>
`

const collectiblesCopy3 = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>Willie Mccovey Authentic 12" x 15
" Hall of Fame Career Profile Sublimated Plaque</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Each plaq
ue comes with a layer image sublimated onto a black plaque. The product is offi
cially licensed by Major League Baseball. The black plaque measures 12" x 15" x 1" and c
omes ready to hang in an any home or office</span></sup></p>
`

const collectiblesCopy4 = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans,
 arial;"><strong>San Francisco Giants Primary Logo Patch</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Y
ou love everything there is about the San Francisco Giants. Celebrate that
pride when you get this San Francisco Giants Primary Logo patch. This patch features
 a unique design that will help you show that you're one die-hard San Francisco Giants fan.</span></sup></p>
`

export const eventRewards: Reward[] = [
  {
    id: '103',
    name: 'Get On Field Photos',
    description: 'When your group invite 5 friends',
    threshold: 5,
    thresholdCopy: 'Friends'
  },
  {
    id: '104',
    name: 'Get Scoreboard Shoutout',
    description: 'When your group invite 15 friends',
    threshold: 15,
    thresholdCopy: 'Friends'
  },
  {
    id: '105',
    name: 'Get Meet & Greet with Barry Bonds',
    description: 'When your group invite 50 friends',
    threshold: 50,
    thresholdCopy: 'Friends'
  }
]

export const merchRewards: Reward[] = [
  {
    id: '105',
    name: 'SF Giants Gym Sack',
    description: 'When your group invite 50 friends',
    threshold: 50,
    thresholdCopy: 'Items'
  },
  {
    id: '106',
    name: 'SF Giants Beach Towel',
    description: 'When your group invite 15 friends',
    threshold: 15,
    thresholdCopy: 'Items'
  },
  {
    id: '107',
    name: 'WinCraft 4-Pack Button Set',
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
  uri: 'tickets-1',
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
  uri: 'tickets-2',
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
  uri: 'tickets-3',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/left+pic_2_event%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  rewardCopy: '',
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2]
}

export const hatsItem: MerchOfferItem = {
  id: 'adsfjsaldkfjlsdkjf',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/1_hats/merch_hats_1_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/1_hats/merch_hats_1_hero%402x.png',
  title: 'New Era Authentic Collection On Field Low Profile Fitted Hat - Black',
  description: '',
  htmlDescription: hatsCopy1,
  startingPrice: 35,
  type: OfferItemType.Merch,
  additionalDescription: 'Rewards available when you invite 5 friends',
  productDetails: {
    colors: []
  }
}

export const hatsItem2: MerchOfferItem = {
  id: 'poqweiuropqwieuropiqwuer',
  parentId: 'cjftxsxt1441ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/1_hats/merch_hats_2_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/1_hats/merch_hats_2_hero%402x.png',
  title: 'New Era Primary Logo Basic 59FIFTY Fitted Hat - Black',
  htmlDescription: hatsCopy2,
  description: '',
  startingPrice: 20,
  type: OfferItemType.Merch,
  additionalDescription: 'Gift Guide',
  productDetails: {
    colors: []
  }
}

export const hatsItem3: MerchOfferItem = {
  id: 'sdfjsdklfjsdlkfjlsdkj',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/1_hats/merch_hats_3_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/1_hats/merch_hats_3_hero%402x.png',
  title: 'New Era On-Field Sport Cuffed Knit Hat – Black',
  description: '',
  htmlDescription: hatsCopy3,
  additionalDescription: 'Best Value Today',
  startingPrice: 28,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const hatsItem4: MerchOfferItem = {
  id: 'asdopfkjosadjfosadijf',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/1_hats/merch_hats_4_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/1_hats/merch_hats_4_hero%402x.png',
  title: 'New Era Sport Cuffed Knit Hat with Pom - Black',
  description: '',
  startingPrice: 24,
  htmlDescription: hatsCopy4,
  additionalDescription: 'Exclusive Deal',
  type: OfferItemType.Merch,
  productDetails: { colors: [] }
}

export const clothingItem: MerchOfferItem = {
  id: 'hjkadfghgsadkfjgsadkfjhg',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/2_clothing/merch_clothing_1_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/2_clothing/merch_clothing_1_hero%402x.png',
  title: 'Buster Posey Jersey – Cream',
  additionalDescription: 'Rewards available when you bring 5 friends',
  description: '',
  htmlDescription: clothingCopy1,
  startingPrice: 120,
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

export const clothingItem2: MerchOfferItem = {
  id: 'sadgfhsadjhfgsjadfg',
  parentId: 'cjftxsxt1441ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/2_clothing/merch_clothing_2_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/2_clothing/merch_clothing_2_hero%402x.png',
  title: 'Buster Posey Jersey – Orange',
  htmlDescription: clothingCopy2,
  description: '',
  startingPrice: 105,
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

export const clothingItem4: MerchOfferItem = {
  id: 'ashdjgfkjhsagdfkjhgs',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/2_clothing/merch_clothing_3_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/2_clothing/merch_clothing_3_hero%402x.png',
  title: 'Nike Legend Batting Practice Primary Logo Performance T-Shirt',
  description: '',
  htmlDescription: clothingCopy3,
  additionalDescription: 'Best Value Today',
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

export const clothingItem3: MerchOfferItem = {
  id: 'yteqwuirtquweiyrtqw',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/2_clothing/merch_clothing_4_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/2_clothing/merch_clothing_4_hero%402x.png',
  title: 'Team Drive Ultra-Streak Fleece Pullover Hoodie',
  additionalDescription: 'Exclusive deal',
  description: '',
  startingPrice: 80,
  htmlDescription: clothingCopy4,
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

export const accessoryItem: MerchOfferItem = {
  id: 'yquwertuiqywetruiyqwet',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/3_accessories/merch_accessories_1_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/3_accessories/merch_accessories_1_hero%402x.png',
  title: 'Herschel Supply Co. Heritage Backpack',
  additionalDescription: 'Rewards available when you bring 5 friends',
  description: '',
  htmlDescription: accesoriesCopy,
  startingPrice: 70,
  type: OfferItemType.Merch,
  productDetails: {
    colors: []
  }
}

export const accessoryItem2: MerchOfferItem = {
  id: 'qywerqiwueyriuqweyr',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/3_accessories/merch_accessories_2_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/3_accessories/merch_accessories_2_hero%402x.png',
  title: 'Herschel Supply Co. Novel Duffle Bag',
  description: '',
  htmlDescription: accesoriesCopy2,
  startingPrice: 100,
  type: OfferItemType.Merch,
  productDetails: {
    colors: [
      { value: 'abc', label: 'Black' },
      { value: 'sdf', label: 'Grey' },
      { value: 'g', label: 'White' }
    ]
  }
}

export const accessoryItem3: MerchOfferItem = {
  id: 'eqwrtqweyrutqwer',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/3_accessories/merch_accessories_3_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/3_accessories/merch_accessories_3_hero%402x.png',
  title: 'Youth Big Logo Stripe Slippers',
  description: '',
  htmlDescription: accesoriesCopy3,
  additionalDescription: 'Best Value Today',
  startingPrice: 15,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const accessoryItem4: MerchOfferItem = {
  id: 'dacadfqwrfqwer',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/3_accessories/merch_accessories_4_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/3_accessories/merch_accessories_4_hero%402x.png',
  title: 'Stripe Crew Socks - Black',
  additionalDescription: 'Exclusive deal',
  description: '',
  startingPrice: 8,
  htmlDescription: accessoriesCopy4,
  type: OfferItemType.Merch,
  productDetails: { colors: [] }
}

export const collectiblesItem: MerchOfferItem = {
  id: 'qwuyeifqwuyefg',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/4_Collectibles/merch_collectibles_1_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/4_Collectibles/merch_collectibles_1_hero%402x.png',
  title: 'Buster Posey San Francisco Giants Glow-In-The-Dark Bobblehead',
  additionalDescription: 'Rewards available when you bring 5 friends',
  description: '',
  htmlDescription: collectiblesCopy,
  startingPrice: 35,
  type: OfferItemType.Merch,
  productDetails: { colors: [] }
}

export const collectiblesItem2: MerchOfferItem = {
  id: 'uywqebfuyqbwef',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/4_Collectibles/merch_collectibles_2_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/4_Collectibles/merch_collectibles_2_hero%402x.png',
  title: 'Hunter Pence San Francisco Giants Player Baller Bobblehead',
  description: '',
  htmlDescription: collectiblesCopy2,
  startingPrice: 35,
  type: OfferItemType.Merch,
  productDetails: {
    colors: []
  }
}

export const collectiblesitem3: MerchOfferItem = {
  id: 'iqunfweiufnqwuie',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/4_Collectibles/merch_collectibles_3_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/4_Collectibles/merch_collectibles_3_hero%402x.png',
  title:
    'Willie Mccovey Authentic 12" x 15" Hall of Fame Career Profile Sublimated Plaque',
  description: '',
  htmlDescription: collectiblesCopy3,
  additionalDescription: 'Best Value Today',
  startingPrice: 40,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const collectiblesItem4: MerchOfferItem = {
  id: 'qiwefiqwefnuiuqnwfeui',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/4_Collectibles/merch_collectibles_4_thumbnail%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/4_Collectibles/merch_collectibles_4_hero%402x.png',
  title: 'San Francisco Giants Primary Logo Patch',
  additionalDescription: 'Exclusive deal',
  description: '',
  startingPrice: 14,
  htmlDescription: collectiblesCopy4,
  type: OfferItemType.Merch,
  productDetails: { colors: [] }
}

export const merchOfferItemParent: MerchOfferListItem = {
  id: 'cjftxsxt10001ho8e495ushvwxzxc',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/1_hats/merch_hats_1_thumbnail%402x.png',
  title: 'Hats',
  description: '',
  startingPrice: 20,
  type: OfferItemType.Merch,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v2/merch_1_hero%402x.png'
  ],
  details: hatsCopy1,
  rewards: merchRewards,
  uri: 'hats',
  items: [hatsItem, hatsItem2, hatsItem3, hatsItem4]
}

export const merchOfferItemParent4: MerchOfferListItem = {
  id: 'cjftxsxt10001ho8e49aszxc5ushvwzxczxc',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/4_Collectibles/merch_collectibles_1_thumbnail%402x.png',
  title: 'Collectibles',
  description: '',
  startingPrice: 14,
  type: OfferItemType.Merch,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/4_Collectibles/merch_collectibles_1_hero%402x.png'
  ],
  details: collectiblesCopy,
  rewards: merchRewards,
  uri: 'collectibles',
  items: [
    collectiblesItem,
    collectiblesItem2,
    collectiblesitem3,
    collectiblesItem4
  ]
}

export const merchOfferItemParent3: MerchOfferListItem = {
  id: 'cjftxsxt10001ho8e495ushvwasdfzxczxc',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/3_accessories/merch_accessories_1_thumbnail%402x.png',
  title: 'Accessories',
  description: '',
  startingPrice: 8,
  type: OfferItemType.Merch,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/3_accessories/merch_accessories_1_hero%402x.png'
  ],
  details: accesoriesCopy,
  rewards: merchRewards,
  uri: 'accessories',
  items: [accessoryItem, accessoryItem2, accessoryItem3, accessoryItem4]
}

export const merchOfferItemParent2: MerchOfferListItem = {
  id: 'cjftxsxt10001ho8e495ushvwzxczxcasdas',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/2_clothing/merch_clothing_1_thumbnail%402x.png',
  title: 'Apparel',
  description: '',
  startingPrice: 30,
  type: OfferItemType.Merch,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/2_clothing/merch_clothing_1_hero%402x.png'
  ],
  details: clothingCopy1,
  rewards: merchRewards,
  uri: 'clothing',
  items: [clothingItem, clothingItem2, clothingItem3, clothingItem4]
}

export const gameOfferItemParent: EventOffer = {
  id: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_1%402.png',
  title: `San Francisco Giants Games`,
  description: '',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy,
  uri: 'tickets-giants',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/left+pic_2_event%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  rewardCopy: '',
  items: [eventOfferItemParent, eventOfferItemParent1, eventOfferItemParent2]
}

export const offer: AnyOffer = {
  id: 'cjg8ckfil00093i5nlvm7gmc1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
  title: `Fanatics: San Francisco Giants`,
  description: '',
  type: OfferItemType.Mixed,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/merch_home_1_hero%402x.png'
  ],
  details: '',
  uri: 'games',
  items: [
    merchOfferItemParent,
    merchOfferItemParent2,
    merchOfferItemParent3,
    merchOfferItemParent4,
    gameOfferItemParent
  ]
}

export const offerPage: OfferPage = {
  id: cuid(),
  brandColor: '#EC5829',
  treeTitle: `WHO'S GOING (5)`,
  confirmationTitleCopy: 'Ready for Giants game?',
  backgroundImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-fanatics/v1/Fanatcis_SF+Giants_landing+page%402x.png',
  offer: offer,
  uri: 'fanatics-sfgiants-merch',
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
