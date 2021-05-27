import {
  OfferItemType,
  MerchOfferItem,
  HotelOfferItem,
  HotelOfferListItem,
  MerchOffer,
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

const activityCopy = formatCopy(`Hakkasan Nightclub at MGM Grand|
Never before has Las Vegas seen a club complex as revolutionary as Hakkasan Nightclub. 
Putting aside the extensive list of accolades the club has raked in since opening, you 
need only look at the sheer size and variety of this nightlife option to know it should 
be fighting for the top of your list. Wandering through the club is like a tour of 
everything that is possible in just one night of clubbing, all in one space. Nightlife 
pros will start out with a chic dinner at Hakkasan Restaurant and continue dancing into 
the night after being escorted into the club by their staff, which is an awesome amenity 
of dining here that anyone can enjoy. The rest of the night can be spent exploring each 
area of Hakkasan’s levels; The main room & mezzanine, where the world’s top DJs like Steve 
Aoki and Calvin Harris frequently headline. Visit the Ling Ling Lounge for a more laidback 
area of the club. Dip down into Ling Ling Club for a more up-tempo version of the lounge, 
yet not quite the bombastic adventure of the main room. And don’t forget the Pavilion, an 
outdoor oriental garden unlike any other venue on the Strip.`)

const activityCopy2 = `
  <p><sup><span style="font-size:
  16pt;font-family:SharpSans, arial;"><strong>Northwestern Penthouse Package</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color:
 #908f8f;">Come and experience the Northwestern University home games as a VIP at Thompson Chicago.</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">In
conjunction with Thompson Chicago' s exclusive partnership with
 Northwestern, join us this fall in one of our bi-level penthouse suites.
 Host guests in your suite to watch the game with catering from Nico Osteria
 (priced separately), or reserve one of our Lexus vehicles for your trip up to
 Evanston to cheer on the Wildcats as they take on some of the biggest names in th
 e Big 10 conference this season.</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Along
with your reservation of the penthouse, you will receive personalized
 concierge services prior to arrival, a welcome amenity of Northwestern swag
  and a bottle of Prosecco to pop just in time for the victory. Go Wildcats!</span></sup></p>
`

const activityCopy3 = `
<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Ladies Music City Getaway</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color:
 #908f8f;">Revel in the good music and southern hospitality
 that Music City has to offer. Pack your bags and grab your girlfriends
  for a few days in Nashville as you kick back, relax and enjoy all that the
  Thompson Nashville has to offer. Enjoy in-room mimosas upon arrival, confirmed
   spots in a Barry’s Bootcamp class and a reservation at L.A. Jackson, our rooftop bar.</span></sup></p>
`

const activityCopy4 = `
  <p><sup><span style="font-size: 16pt;font-family:
  SharpSans, arial;"><strong>New Year's Eve at Thompson Nashville</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Ring in
 2019 at Thompson Nashville’s rooftop bar as we toast the New Year
 with L.A. Jackson’s Midnight Hour. The night begins at 9PM and will feature
  DJ sets by KO and Warfield. Stay overnight with us and enjoy a reduced ticket
  price that includes a complimentary bar, champagne toast and late night breakfast.</span></sup></p>
`

const hotelCopy = ``

const roomCopy11 = formatCopy(`Resort Tower King|
Indulge in the comfort of a peaceful Las Vegas hotel suite.
Our Salone Suite is a lush, peaceful haven in the heart of Las Vegas.
`)

const roomCopy12 = formatCopy(`Salone Suite|
Our Salone Suite is a lush, peaceful haven in the heart of Las Vegas.
`)

const roomCopy13 = formatCopy(`Bellagio Suite|
Enjoy the timeless beauty of Bellagio in these spacious suites.|
The residential-style layout features a beautiful King-sized bed 
and an elegantly furnished living area featuring views of the Las 
Vegas landscape.
`)

const roomCopy14 = formatCopy(`Penthouse Fountain View Suite|
Located in the Bellagio Tower - Pamper yourself with breathtaking 
Bellagio Fountain views and plush residential-style accommodations.|
The Penthouse Premier Fountain View Suites offer stunning views 
of the Fountains of Bellagio, along with beautiful living and dining 
areas and separate master bedroom.
`)

const roomCopy21 = formatCopy(`Deluxe King Room|
Unparalleled amenities, corner views and state-of-the-art technology.|
Triple-sheeted, 300-thread-count bedding. A goodnight button to power 
down your room with the touch of your finger. Custom beds from Sealy®. 
These are just a few of the details we’ve perfected in our 520-square-foot 
sanctuaries. And it’s earned us top ratings from both AAA and Forbes Travel
Guide. Our Deluxe Rooms have all the amenities to make for a glamorous Las 
Vegas stay.`)

const roomCopy22 = formatCopy(`Deluxe Strip View King|
Corner-view windows make for stunning center Strip views.|
Leave your luggage at the door, head straight for your corner-view window 
and take in a spectacular center Strip view. When you’re ready to transition 
from neon lights to lights out, a custom-made Sealy® bed and 300-thread-count, 
triple-sheeted bedding will transport you to a blissful night’s sleep.`)

const roomCopy23 = formatCopy(`Resort Club Lounge - King Strip View|
Our Deluxe Rooms have all the amenities to make for a glamorous Las Vegas stay.|
Not only does this room give you access to Resort Club Lounge, ARIA’s new luxury 
experience that combines intimacy with elegance – but  also an in-room tablet to 
have access to reservations, in-room dining and room control all within a touch 
of your finger. Resort Club Lounge access is based on two (2) registered guests 
per occupied room. An additional fee of $50 per guest will be added to parties 
of three (3) or more upon arrival.`)

const roomCopy31 = formatCopy(`Grand King|
The stylishly chic Grand King has all the amenities you need to recharge for the 
next phase of the party.|
This award-winning, elegantly appointed Grand King has all the comforts and 
amenities you need for a good time. From the sleek, modern furnishings to the 
luxurious king bed, this room is a comfortable and relaxing retreat – as well 
as the perfect place to get the night started.`)

const roomCopy32 = formatCopy(`
Grand Queen Strip View|
Vegas never stops. But when you need to pause, this room is a destination all its own.|
When you need to rest, relax and get ready for Vegas, stay in this room with a view.`)

const roomCopy33 = formatCopy(`Two Bedroom Marquee Suite|
With dramatic floor-to-ceiling windows, this two-bedroom suite offers sweeping 180-degree
views of The Strip.|
Watch the world unfold before you in our two-bedroom Skyline Marquee Suite. Loaded with
amenities including dramatic floor-to-ceiling windows that offer sweeping 180-degree 
views of The Strip, this spectacular suite offers beautiful scenery inside and out.`)

const roomCopy34 = formatCopy(`Skyline Terrace Suite|
With expansive views from your private terrace, this two-story suite is 
the epitome of Las Vegas living.|
High above The Strip with expansive views that last for miles, our two-story 
Skyline Terrace Suite is the epitome of Las Vegas living. Outside, this suite 
boasts a terrace of nearly 800 square feet with a cozy sectional sofa, dining 
area and plenty of room to take in the skyline vistas. Inside the suite, guests 
are welcomed with vaulted ceilings, spacious living, dining and entertainment 
areas, and an upstairs master bedroom and bath.`)

const roomCopy41 = formatCopy(`Resort King|
Our newly remodeled 550 sq. ft. Resort King room creates a bold level of comfort 
you would only expect in your wildest dreams.|
Completely re-imagined furnishings including one King Bed, seating for three, 
floor-to-ceiling windows and vibrant naturalistic blue and green accents will 
have you immersed in a blend of relaxing style and deep comfort.`)

const roomCopy42 = formatCopy(`Executive King|
One deluxe King Bed wrapped in smooth linen centers this naturally inviting space.|
Ample work space and an extended area with seating for four allow business and pleasure 
to live in harmony in this Las Vegas Suite. This room is perfectly designed for 
well-earned relaxation.`)

const roomCopy43 = formatCopy(`Delano Scenic Suite|
A masterpiece of visual sensation, the Scenic Suite proposes an all-encompassing view 
of the Las Vegas strip that marks this 741 square foot suite as the “piece de resistance” 
of picturesque escapes.|
Revel in floor to ceiling windows with breathtaking iconic strip, desert and mountain 
scenery. Each suite features Delano's iconic window sheers, simplistically elegant 
white-on-white linens, and oversized tufted headboards, all updated with a crisp, clean, 
and a modern sense of ease.`)

const roomCopy44 = formatCopy(`Moorea Suite|
An exotically appointed suite with room for up to 21 guests.|
Live every moment to the fullest in this exotically appointed suite. With room for up to 21 
guests, this is one suite that’s as accommodating as it is luxurious.`)

const roomCopy45 = formatCopy(`Horizon Suite|
Soak in every angle of Las Vegas from more than 50 floors up with a 180-degree view in our 
contemporary Horizon Suite.|
Celebrate the neon city with your friends and toast the good life.`)

const roomCopy1 = formatCopy(`Bellagio Hotel & Casino|
Water is a centerpiece at Bellagio Resort & Casino. More than its iconic water show, there is 
the underwater story of “O” by Cirque du Soleil, fine dining restaurants, multiple pools, a 
luxury shopping center, and a casino space worthy of its Italian heritage. Book a room overlooking 
the water fountains or choose a quieter, smoke-free room in our spa tower.`)

const roomCopy2 = formatCopy(`Aria Resort & Casino|
There’s the Vegas you’re used to, and then there’s the AAA Five Diamond-awarded ARIA Resort & 
Casino in Las Vegas. Unsurpassed Amenities from our renowned restaurants to the most technologically-advanced 
rooms and suites await you.`)

const roomCopy3 = formatCopy(`MGM Grand Las Vegas|
The Entertainment Authority in Las Vegas, the MGM Grand is the home to the biggest names in music and entertainment. 
But we’re more than concerts. We also have Michelin-starred chefs’ restaurants and over 171,000 square feet of 
casino space. With everything here, there’s hardly a reason to go anywhere else in Las Vegas.`)

const roomCopy4 = formatCopy(`Mandalay Bay|
Mandalay Bay Resort and Casino is a unique destination resort boasting an 11-acre pool paradise. Other resort 
highlights include award-winning dining by celebrity chefs, LIGHT Nightclub, Shark Reef Aquarium, Spa Mandalay, 
Michael Jackson ONE by Cirque du Soleil and an array of rooms and suites sure to inspire.`)

const merchCopy1 = `<p><sup><span style="font-size:
16pt;font-family:SharpSans, arial;"><strong>Bed & Breakfast</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Monday – Friday, 7:30am to 11:00am</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
Breathing fresh air and energy into lower Manhattan’s Financial
District, Keith McNally once again is setting out to reinvigorate one of
NYC’s neighborhoods with the debut of Augustine, his new French Restaurant
located in the renovated historical Beekman Hotel. Serving a thoughtful selection
of modern French dishes, Augustine’s Co-Executive Chefs Shane McBride and Daniel Parilla
have created a menu that strikes the perfect balance of decadent and light, classic and
contemporary all within a bar and dining room whose design complements and enriches each
diner’s experience.</span></sup></p> `

const merchCopy2 = `<p><sup><span style=
"font-size: 16pt;font-family:SharpSans, arial;"><strong>3 PM Late Checkout</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color:
 #908f8f;">You can sleep in and relax with a 3 PM
 late checkout. Late risers and those with inconvenient
 flight times can relax a bit more in their hotel rooms instead of making a
 beeline for the door as more hotels offer very late checkout times for guests.</span></sup></p> `

const merchCopy3 = `<p><sup><span style="font-size:
16pt;font-family:SharpSans, arial;"><strong>Parking</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
You can sleep in and relax with a 3 PM late checkout. Late
risers and those with inconvenient flight times can relax a bit more in
their hotel rooms instead of making a beeline for the door as more hotels offer
 very late checkout times for guests.</span></sup></p>`

const entertainmentCopy1 = formatCopy(`
“O” by Cirque du Soleil|
Cirque du Soleil® weaves an aquatic tapestry of artistry, surrealism and theatrical 
romance in the timeless production, “O”. The international cast of world-class acrobats, 
synchronized swimmers, divers and characters perform in, on and above water to create a 
breathtaking experience in a magnificent theatre reminiscent of a European opera house.|
“O” by Cirque du Soleil® - “You cannot move water, water moves you.” -Gilles Ste-Croix, 
Creative Vice President of Cirque du Soleil|
Ticket prices range from $98.50 (Limited View) - $295.00, plus applicable taxes and fees. 
Our prices are subject to change based on performance demand. Pricing and locations are 
subject to availability. All Will Call tickets must be picked up no later than one hour 
prior to show time. Unclaimed tickets are subject to cancellation.`)

const entertainmentCopy2 = formatCopy(`MICHAEL JACKSON ONE by Cirque du Soleil|
Hailed by Rolling Stone as “A virtual parade of ‘wow’ moments,” Michael Jackson ONE by 
Cirque du Soleil is an electrifying fusion of acrobatics, dance and visuals immersing 
the audience into the world of Michael's music. Driven by his biggest hits heard like 
never before in a riveting, state-of-the-art surround-sound environment – ONE takes the 
audience through a seamless visual and musical montage, at the heart of a world that is 
in turn majestic, playful, magical and heart-warming. Be energized by the cast of 63 dancers 
and performers through aerial performance, driving acrobatics, and vivid choreographies that 
use the urban/hip hop idiom as a springboard for exploration.|
Seating / Range from $69 - $185.14 (plus taxes and fees). Our prices are subject to change 
based on performance demand.  Pricing and locations are subject to availability`)

const entertainmentCopy3 = formatCopy(`Zumanity by Cirque du Soleil|
Zumanity by Cirque du Soleil, is a seductive twist on reality, making the provocative playful and 
the forbidden electrifying! Part burlesque and part cabaret, Zumanity is one full night you'll never 
forget.`)

const entertainmentCopy4 = formatCopy(`Blue Man Group|
Blue Man Group will rock your world, blow your mind, and unleash your spirit. Leave your expectations 
at the door and let three bald and blue men take you on a spectacular journey bursting with music, 
laughter and surprises. 35 million people of all ages, languages and cultures know what Blue Man Group 
is really about. Now it’s your turn. DARE TO LIVE IN FULL COLOR
Tickets starting at $59, plus applicable taxes and fees.`)

export const hotelRewards: Reward[] = [
  {
    id: '100',
    name: 'Free VIP Room Upgrade',
    description: 'When your group books 12 nights',
    threshold: 12,
    thresholdCopy: 'Nights',
    icon: 'https://s3.amazonaws.com/fevo-fuc/assets-thompson/reward_unlock.png'
  },
  {
    id: '101',
    name: 'Steak House Dinner',
    description: 'When your group books 5 nights',
    threshold: 5,
    thresholdCopy: 'Nights',
    icon: 'https://s3.amazonaws.com/fevo-fuc/assets-thompson/reward_unlock.png'
  },
  {
    id: '102',
    name: 'Free Champagne',
    description: 'When your group books 3 nights',
    threshold: 3,
    thresholdCopy: 'Nights',
    icon: 'https://s3.amazonaws.com/fevo-fuc/assets-thompson/reward_unlock.png'
  }
]

export const offerItemMerch2: MerchOfferItem = {
  id: 'yuiyiyasduifyiusadyf123',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Thompson_Addons_1_thumbnail%402x.png',
  title: 'Bed & Breakfast',
  description: 'Breakfast at Augustine for two',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Thompson_Addons_1_hero%402x.png',
  htmlDescription: merchCopy1,
  startingPrice: 60,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerItemMerch: MerchOfferItem = {
  id: 'asdkjfhaksjdhfkjsadhf',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Thompson_Addons_2_thumbnail%402x.png',
  title: '3 PM Late Checkout',
  description: 'Make your stay more enjoyable',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Thompson_Addons_2_hero%402x.png',
  htmlDescription: merchCopy2,
  startingPrice: 150,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] },
  additionalDescription: ''
}

export const offerItemMerch3: MerchOfferItem = {
  id: 'asdkjfhkjsadhfkjsadh',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Thompson_Addons_3_thumbnail%402x.png',
  title: 'Parking',
  description: 'Save up to 15% off Valet Parking',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Thompson_Addons_3_hero%402x.png',
  htmlDescription: merchCopy3,
  startingPrice: 70,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] },
  additionalDescription: ''
}

export const addonOfferParent: MerchOffer = {
  id: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/ticket_thumbnail.png',
  title: 'Add-Ons',
  description: '',
  type: OfferItemType.Merch,
  details: merchCopy2,
  uri: 'extra',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Thompson_Addons_1_hero%402x.png'
  ],
  rewardCopy: '',
  items: [offerItemMerch, offerItemMerch2, offerItemMerch3],
  rewards: hotelRewards
}

export const roomItem11: HotelOfferItem = {
  id: 'cjyuhgn0700b666lsx1vmbafv',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/2_Belagio_ResortTower_1_thumbnail@2x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/2_Belagio_ResortTower_1@2x.png`,
  title: 'Resort Tower King',
  description: 'In high demand',
  startingPrice: 194,
  htmlDescription: roomCopy11,
  type: OfferItemType.Hotel
}
export const roomItem12: HotelOfferItem = {
  id: 'cjyuhgn0700b766lsj7azcaji',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/2_Belagio_Salone_1_thumbnail@2x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/2_Belagio_Salone_1@2x.png`,
  title: 'Salone Suite',
  description: '10 people are looking at this right now',
  startingPrice: 269,
  htmlDescription: roomCopy12,
  type: OfferItemType.Hotel
}
export const roomItem13: HotelOfferItem = {
  id: 'cjyuhgn0700b866lsydfg6od1',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/2_Belagio_Suite_1@2x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/2_Belagio_Suite_1@2x.png',
  title: 'Bellagio Suite',
  description: 'Large luxury room with two queen beds',
  startingPrice: 339,
  htmlDescription: roomCopy13,
  type: OfferItemType.Hotel
}

export const roomItem14: HotelOfferItem = {
  id: 'cjyuhgn0700b966lsjow74jyt',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/2_Belagio_Suite_2@2x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/2_Belagio_Suite_2@2x.png`,
  title: 'Penthouse Fountain View Suite',
  description: 'Spacious luxury suite',
  startingPrice: 569,
  htmlDescription: roomCopy14,
  type: OfferItemType.Hotel
}
export const roomItem21: HotelOfferItem = {
  id: 'cjyuhgn0700ba66lsjxsz1pio',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Aria_DeluxeKing_1_thumbnail@2x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Aria_DeluxeKing_1@2x.png`,
  title: 'Deluxe King Room',
  description: 'In high demand',
  startingPrice: 139,
  htmlDescription: roomCopy21,
  type: OfferItemType.Hotel
}
export const roomItem22: HotelOfferItem = {
  id: 'cjyuhgn0700bb66lsulz95iqm',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Aria_Deluxestrip_1_thumbnail@2x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Aria_Deluxestrip_1@2x.png`,
  title: 'Deluxe Strip View King',
  description: '',
  startingPrice: 159,
  htmlDescription: roomCopy22,
  type: OfferItemType.Hotel
}
export const roomItem23: HotelOfferItem = {
  id: 'cjyuhgn0700bc66lsojsat21r',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Aria_Resort_1_thumbnail@2x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Aria_Resort_1@2x.png',
  title: 'Resort Club Lounge - King Strip View',
  description: '',
  startingPrice: 250,
  htmlDescription: roomCopy23,
  type: OfferItemType.Hotel
}

export const roomItem31: HotelOfferItem = {
  id: 'cjyuhgn0700bd66lsowx8u3mb',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_MGMGrand_GrandKing_1_thumbnail@2x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_MGMGrand_GrandKing_1@2x.png`,
  title: 'Grand King',
  description: 'In high demand',
  startingPrice: 146,
  htmlDescription: roomCopy31,
  type: OfferItemType.Hotel
}
export const roomItem32: HotelOfferItem = {
  id: 'cjyuhgn0700be66lsvk42cc4j',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_MGMGrand_GrandQueen_1_thumbnail@2x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_MGMGrand_GrandQueen_1@2x.png`,
  title: 'Grand Queen Strip View',
  description: '10 people are looking at this right now',
  startingPrice: 176,
  htmlDescription: roomCopy32,
  type: OfferItemType.Hotel
}
export const roomItem33: HotelOfferItem = {
  id: 'cjyuhgn0700bf66ls1em1e4xb',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_MGMGrand_Twobed_1_thumbnail@2x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_MGMGrand_Twobed_1@2x.png',
  title: 'Two Bedroom Marquee Suite',
  description: 'Large luxury room with two queen beds',
  startingPrice: 571,
  htmlDescription: roomCopy33,
  type: OfferItemType.Hotel
}

export const roomItem34: HotelOfferItem = {
  id: 'cjyuhgn0700bg66lssohcomav',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_MGMGrand_Skyline_1_thumbnail@2x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_MGMGrand_Skyline_1@2x.png`,
  title: 'Skyline Terrace Suite',
  description: 'Spacious luxury suite',
  startingPrice: 796,
  htmlDescription: roomCopy34,
  type: OfferItemType.Hotel
}

export const roomItem41: HotelOfferItem = {
  id: 'cjyuhgn0700bh66lsp1x02bg8',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/6_Mandalay_Resort_1_Thumbnail@2x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/6_Mandalay_Resort_1@2x.png`,
  title: 'Resort King',
  description: 'In high demand',
  startingPrice: 196,
  htmlDescription: roomCopy41,
  type: OfferItemType.Hotel
}
export const roomItem42: HotelOfferItem = {
  id: 'cjyuhgn0700bi66ls3gry868u',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/6_Mandalay_Executive_1_thumbnail@2x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/6_Mandalay_Executive_1@2x.png`,
  title: 'Executive King',
  description: '10 people are looking at this right now',
  startingPrice: 246,
  htmlDescription: roomCopy42,
  type: OfferItemType.Hotel
}
export const roomItem43: HotelOfferItem = {
  id: 'cjyuhgn0700bj66lsn957cexg',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/6_Mandalay_Delano_1_thumbnail@2x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/6_Mandalay_Delano_1@2x.png',
  title: 'Delano Scenic Suite',
  description: 'Large luxury room with two queen beds',
  startingPrice: 270,
  htmlDescription: roomCopy43,
  type: OfferItemType.Hotel
}

export const roomItem44: HotelOfferItem = {
  id: 'cjyuhgn0700bk66lseqysalrc',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/6_Mandalay_Moorea_1_thumbnail@2x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/6_Mandalay_Moorea_1@2x.png`,
  title: 'Moorea Suite',
  description: 'Spacious luxury suite',
  startingPrice: 648,
  htmlDescription: roomCopy44,
  type: OfferItemType.Hotel
}
export const roomItem45: HotelOfferItem = {
  id: 'cjyuhgn0700bl66lsg0xw3x41',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/6_Mandalay_Horizon_1_thumbnail@2x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_MGMGrand_Skyline_1@2x.png`,
  title: 'Horizon Suite',
  description: 'Spacious luxury suite',
  startingPrice: 748,
  htmlDescription: roomCopy45,
  type: OfferItemType.Hotel
}
export const roomItem: HotelOfferItem = {
  id: 'cjg8ckfivasdklfji5nnawuwwq6',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Thompson_room_1_thumbanil%402x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Thompson_room_1_hero%402x.png`,
  title: 'Resort Tower King',
  description: 'In high demand',
  startingPrice: 194,
  htmlDescription: roomCopy1,
  type: OfferItemType.Hotel
}
export const roomItem2: HotelOfferItem = {
  id: 'cjg8ckfivsdalkfjklasdjf',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Thompson_room_2_thumbanil%402x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Thompson_room_2_hero%402x.png`,
  title: 'Salone Suite',
  description: '10 people are looking at this right now',
  startingPrice: 269,
  htmlDescription: roomCopy2,
  type: OfferItemType.Hotel
}
export const roomItem3: HotelOfferItem = {
  id: 'klsadjflaksdjflkasjdf',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Thompson_room_3_thumbanil%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Thompson_room_3_hero%402x.png',
  title: 'Bellagio Suite',
  description: 'Large luxury room with two queen beds',
  startingPrice: 339,
  htmlDescription: roomCopy3,
  type: OfferItemType.Hotel
}

export const roomItem4: HotelOfferItem = {
  id: guid(),
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Thompson_room_4_thumbanil%402x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/4_Thompson_room_4_hero%402x.png`,
  title: 'Penthouse Fountain View Suite',
  description: 'Spacious luxury suite',
  startingPrice: 569,
  htmlDescription: roomCopy4,
  type: OfferItemType.Hotel
}

export const hotelOfferListItem1: HotelOfferListItem = {
  id: 'guid()',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets_demo_mgm/2_Belagio_Penthouse_1_thumbnail%402x.png',
  title: 'Bellagio Hotel & Casino',
  description: 'The Entertainment Authority of Las Vegas.',
  address: '',
  startingPrice: 194,
  type: OfferItemType.Hotel,
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets_demo_mgm/2_Belagio_Penthouse_1%402x.png'
  ],
  details: roomCopy1,
  uri: createSlug('Bellagio Hotel & Casino'),
  items: [roomItem11, roomItem12, roomItem13, roomItem14],
  rewards: hotelRewards
}

export const hotelOfferListItem2: HotelOfferListItem = {
  id: 'guid()',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets_demo_mgm/4_Aria_Resort_1_thumbnail%402x.png',
  title: 'Aria Resort & Casino',
  description: 'Iconic Vegas luxury paradise.',
  address: '',
  startingPrice: 139,
  type: OfferItemType.Hotel,
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets_demo_mgm/4_Aria_Resort_1%402x.png'
  ],
  details: roomCopy2,
  uri: createSlug('Aria Resort & Casino'),
  items: [roomItem21, roomItem22, roomItem23],
  rewards: hotelRewards
}

export const hotelOfferListItem3: HotelOfferListItem = {
  id: 'guid()',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_MGMGrand_Twobed_2@2x.png',
  title: 'MGM Grand Las Vegas',
  description: 'Our AAA Five Diamond-awarded Resort & Casino.',
  address: '',
  startingPrice: 299,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_MGMGrand_Twobed_2@2x.png'
  ],
  details: roomCopy3,
  uri: createSlug('MGM Grand Las Vegas'),
  items: [roomItem31, roomItem32, roomItem33, roomItem34],
  rewards: hotelRewards
}
export const hotelOfferListItem4: HotelOfferListItem = {
  id: 'guid()',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/6_Mandalay_Resort_2@2x.png',
  title: 'Mandalay Bay',
  description: 'Unique destination paradise with award-winning dining.',
  address: '',
  startingPrice: 196,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/6_Mandalay_Resort_2@2x.png'
  ],
  details: roomCopy4,
  uri: createSlug('Mandalay Bay'),
  items: [roomItem41, roomItem42, roomItem43, roomItem44, roomItem45],
  rewards: hotelRewards
}

export const activityItem: MerchOfferItem = {
  id: 'cjyuhgn0700ce66lsj0tqd9zm',
  parentId: 'cjg8ckfik00083i5nstq6amr4',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Nightlife_1_thumbnail@2x.png',
  media: `
    https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Nightlife_1@2x.png
    `,
  title: 'General Admission Presale Ticket at Hakkasan Nightclub',
  description: 'Vegas Party Experience',
  htmlDescription: activityCopy,
  startingPrice: 40,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

const activityItem2: MerchOfferItem = {
  id: 'cjyuhgn0700cf66ls5ydeq1wd',
  parentId: 'cjg8ckfik00083i5nstq6amr4',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Nightlife_1_thumbnail@2x.png',
  media: `
    https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Nightlife_1@2x.png
    `,
  title: 'Weekend Package at Hakkasan Nightclub & Wet Republic',
  description: 'Premier Experience Package',
  htmlDescription: activityCopy,
  startingPrice: 55,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

const activityItem3: MerchOfferItem = {
  id: 'cjyuhgn0700cg66lsgp1meodm',
  parentId: 'cjg8ckfik00083i5nstq6amr4',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Nightlife_1_thumbnail@2x.png',
  media: `
    https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Nightlife_1@2x.png
    `,
  title: 'Weekend Package at Hakkasan & OMNIA Nightclubs',
  htmlDescription: activityCopy,
  description: 'Premier Experience Package',
  startingPrice: 75,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

const activityItem4: MerchOfferItem = {
  id: 'cjyuhgn0700ch66lsqfwjio3x',
  parentId: 'cjg8ckfik00083i5nstq6amr4',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Nightlife_1_thumbnail@2x.png',
  media: `
    https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Nightlife_1@2x.png
    `,
  title: `VIP Package with Bar Card at Hakkasan Nightclub`,
  description: 'Includes $100 Bar Card',
  startingPrice: 115,
  htmlDescription: activityCopy,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

const eventOfferItem11: EventOfferItem = {
  id: 'cjyuhgn0700bm66ls5slo11lg',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Single Seat, 7:00pm',
  description: '',
  startingPrice: 86,
  type: OfferItemType.Event
}
const eventOfferItem12: EventOfferItem = {
  id: 'cjyuhgn0700bn66ls2hjf5ce3',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Single Seat, 9:30pm',
  description: '',
  startingPrice: 86,
  type: OfferItemType.Event
}
const eventOfferItem13: EventOfferItem = {
  id: 'cjyuhgn0700bo66lsmcuwk2ip',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Limited View, 7:00pm',
  description: '',
  startingPrice: 107,
  type: OfferItemType.Event
}
const eventOfferItem14: EventOfferItem = {
  id: 'cjyuhgn0700bp66ls7rpao2o2',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Limited View, 9:30pm',
  description: '',
  startingPrice: 107,
  type: OfferItemType.Event
}
const eventOfferItem15: EventOfferItem = {
  id: 'cjyuhgn0700bq66lsakvtjsjo',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Category C, 7:00pm',
  description: '',
  startingPrice: 150,
  type: OfferItemType.Event
}
const eventOfferItem16: EventOfferItem = {
  id: 'cjyuhgn0700br66ls624s5eqr',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Category C, 9:30pm',
  description: '',
  startingPrice: 150,
  type: OfferItemType.Event
}
const eventOfferItem17: EventOfferItem = {
  id: 'cjyuhgn0700bs66ls3sagv9t0',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Category B, 7:00pm',
  description: '',
  startingPrice: 168,
  type: OfferItemType.Event
}
const eventOfferItem18: EventOfferItem = {
  id: 'cjyuhgn0700bt66lsal9onm2l',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Category B, 9:30pm',
  description: '',
  startingPrice: 168,
  type: OfferItemType.Event
}
const eventOfferItem19: EventOfferItem = {
  id: 'cjyuhgn0700bu66lshyqh0fny',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Category B, 7:00pm',
  description: '',
  startingPrice: 179,
  type: OfferItemType.Event
}
const eventOfferItem110: EventOfferItem = {
  id: 'cjyuhgn0700bv66lsfwqi07cy',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Category B, 9:30pm',
  description: '',
  startingPrice: 179,
  type: OfferItemType.Event
}

const eventOfferItem21: EventOfferItem = {
  id: 'cjyuhgn0700bw66lsti6h7seo',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Category E, 7:00pm',
  description: '',
  startingPrice: 75,
  type: OfferItemType.Event
}
const eventOfferItem22: EventOfferItem = {
  id: 'cjyuhgn0700bx66lscgynb7hr',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Category E, 9:30pm',
  description: '',
  startingPrice: 75,
  type: OfferItemType.Event
}
const eventOfferItem23: EventOfferItem = {
  id: 'cjyuhgn0700by66lsrv6oiffl',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Adult, 7:00pm',
  description: '',
  startingPrice: 115,
  type: OfferItemType.Event
}
const eventOfferItem24: EventOfferItem = {
  id: 'cjyuhgn0700bz66ls8ja9udly',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Adult, 9:30pm',
  description: '',
  startingPrice: 115,
  type: OfferItemType.Event
}
const eventOfferItem25: EventOfferItem = {
  id: 'cjyuhgn0700c066lswvujpwhn',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Adult, 7:00pm',
  description: '',
  startingPrice: 155,
  type: OfferItemType.Event
}
const eventOfferItem26: EventOfferItem = {
  id: 'cjyuhgn0700c166lsmo2z6r2k',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Adult, 9:30pm',
  description: '',
  startingPrice: 155,
  type: OfferItemType.Event
}
const eventOfferItem27: EventOfferItem = {
  id: 'cjyuhgn0700c266lswgsop5rj',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Adult, 7:00pm',
  description: '',
  startingPrice: 182,
  type: OfferItemType.Event
}
const eventOfferItem28: EventOfferItem = {
  id: 'cjyuhgn0700c366lsa87y05nb',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Adult, 9:30pm',
  description: '',
  startingPrice: 182,
  type: OfferItemType.Event
}
const eventOfferItem29: EventOfferItem = {
  id: 'cjyuhgn0700c466ls09urjn2k',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Adult, 7:00pm',
  description: '',
  startingPrice: 209,
  type: OfferItemType.Event
}
const eventOfferItem210: EventOfferItem = {
  id: 'cjyuhgn0700c566lszy9sg6df',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Adult, 9:30pm',
  description: '',
  startingPrice: 209,
  type: OfferItemType.Event
}
const eventOfferItem31: EventOfferItem = {
  id: 'cjyuhgn0700c666ls18xyzbtu',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: 'Category D, 7:00pm',
  description: '',
  startingPrice: 75,
  type: OfferItemType.Event
}
const eventOfferItem32: EventOfferItem = {
  id: 'cjyuhgn0700c766ls34cg1kwl',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: 'Category D, 9:30pm',
  description: '',
  startingPrice: 75,
  type: OfferItemType.Event
}
const eventOfferItem33: EventOfferItem = {
  id: 'cjyuhgn0700c866lse2gvdp2i',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: '7:00pm',
  description: '',
  startingPrice: 93,
  type: OfferItemType.Event
}
const eventOfferItem34: EventOfferItem = {
  id: 'cjyuhgn0700c966lsi1qid1pl',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: '9:30pm',
  description: '',
  startingPrice: 93,
  type: OfferItemType.Event
}
const eventOfferItem35: EventOfferItem = {
  id: 'cjyuhgn0700ca66lso1njhmhy',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: 'Category B T5, 7:00pm',
  description: '',
  startingPrice: 122,
  type: OfferItemType.Event
}
const eventOfferItem36: EventOfferItem = {
  id: 'cjyuhgn0700cb66lsjmm68wah',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: 'Category B T5, 9:30pm',
  description: '',
  startingPrice: 122,
  type: OfferItemType.Event
}
const eventOfferItem37: EventOfferItem = {
  id: 'cjyuhgn0700cc66lsksk8lp3l',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: '9:30pm',
  description: '',
  startingPrice: 93,
  type: OfferItemType.Event
}
const eventOfferItem38: EventOfferItem = {
  id: 'cjyuhgn0700cd66ls5w77qkx2',
  parentId: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: '9:30pm',
  description: '',
  startingPrice: 122,
  type: OfferItemType.Event
}

export const entertainmentItem1Date1: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Wednesday, August 7th',
  description: 'BELLAGIO HOTEL & CASINO',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy1,
  uri: createSlug('BELLAGIO HOTEL & CASINO Wednesday, August 7th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1@2x.png'
  ],
  venue: '',
  items: [
    eventOfferItem11,
    eventOfferItem12,
    eventOfferItem13,
    eventOfferItem14
    // eventOfferItem15,
    // eventOfferItem16,
    // eventOfferItem17,
    // eventOfferItem18,
    // eventOfferItem19,
    // eventOfferItem110
  ]
}
export const entertainmentItem1Date2: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Thursday, August 8th',
  description: 'BELLAGIO HOTEL & CASINO',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy1,
  uri: createSlug('BELLAGIO HOTEL & CASINO Thursday, August 8th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1@2x.png'
  ],
  venue: '',
  items: [
    eventOfferItem11,
    eventOfferItem12,
    eventOfferItem13,
    eventOfferItem14
    // eventOfferItem15,
    // eventOfferItem16,
    // eventOfferItem17,
    // eventOfferItem18,
    // eventOfferItem19,
    // eventOfferItem110
  ]
}
export const entertainmentItem1Date3: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Friday, August 9th',
  description: 'BELLAGIO HOTEL & CASINO',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy1,
  uri: createSlug('BELLAGIO HOTEL & CASINO Friday, August 9th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1@2x.png'
  ],
  venue: '',
  items: [
    eventOfferItem11,
    eventOfferItem12,
    eventOfferItem13,
    eventOfferItem14
    // eventOfferItem15,
    // eventOfferItem16,
    // eventOfferItem17,
    // eventOfferItem18,
    // eventOfferItem19,
    // eventOfferItem110
  ]
}
export const entertainmentItem1Date4: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Saturday, August 10th',
  description: 'BELLAGIO HOTEL & CASINO',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy1,
  uri: createSlug('BELLAGIO HOTEL & CASINO Saturday, August 10th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1@2x.png'
  ],
  venue: '',
  items: [
    eventOfferItem11,
    eventOfferItem12,
    eventOfferItem13,
    eventOfferItem14
    // eventOfferItem15,
    // eventOfferItem16,
    // eventOfferItem17,
    // eventOfferItem18,
    // eventOfferItem19,
    // eventOfferItem110
  ]
}
export const entertainmentItem1Date5: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'Sunday, August 11th',
  description: 'BELLAGIO HOTEL & CASINO',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy1,
  uri: createSlug('BELLAGIO HOTEL & CASINO Sunday, August 11th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1@2x.png'
  ],
  venue: '',
  items: [
    eventOfferItem11,
    eventOfferItem12,
    eventOfferItem13,
    eventOfferItem14
    // eventOfferItem15,
    // eventOfferItem16,
    // eventOfferItem17,
    // eventOfferItem18,
    // eventOfferItem19,
    // eventOfferItem110
  ]
}
export const entertainmentItem2Date1: EventOfferListItem = {
  id: 'cjyuderj30001z3lsxl96l2p1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Friday, August 9th',
  description: 'MANDALAY BAY',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy2,
  uri: createSlug('MANDALAY BAY Friday, August 9th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1@2x.png'
  ],
  venue: '',
  items: [
    // eventOfferItem21,
    // eventOfferItem22,
    // eventOfferItem23,
    // eventOfferItem24,
    eventOfferItem25,
    eventOfferItem26
    // eventOfferItem27,
    // eventOfferItem28,
    // eventOfferItem29,
    // eventOfferItem210
  ]
}
export const entertainmentItem2Date2: EventOfferListItem = {
  id: 'cjyudxc350002z3lsbnqre6bq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Saturday, August 10th',
  description: 'MANDALAY BAY',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy2,
  uri: createSlug('MANDALAY BAY Saturday, August 10th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1@2x.png'
  ],
  venue: '',
  items: [
    // eventOfferItem21,
    // eventOfferItem22,
    // eventOfferItem23,
    // eventOfferItem24,
    eventOfferItem25,
    eventOfferItem26
    // eventOfferItem27,
    // eventOfferItem28,
    // eventOfferItem29,
    // eventOfferItem210
  ]
}
export const entertainmentItem2Date3: EventOfferListItem = {
  id: 'cjyudxlvo0003z3ls40wxnhjt',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Sunday, August 11th',
  description: 'MANDALAY BAY',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy2,
  uri: createSlug('MANDALAY BAY Sunday, August 11th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1@2x.png'
  ],
  venue: '',
  items: [
    // eventOfferItem21,
    // eventOfferItem22,
    // eventOfferItem23,
    // eventOfferItem24,
    eventOfferItem25,
    eventOfferItem26
    // eventOfferItem27,
    // eventOfferItem28,
    // eventOfferItem29,
    // eventOfferItem210
  ]
}
export const entertainmentItem2Date4: EventOfferListItem = {
  id: 'cjyudxwqj0004z3lsfhm7ahyy',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'Monday, August 12th',
  description: 'MANDALAY BAY',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy2,
  uri: createSlug('MANDALAY BAY Monday, August 12th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1@2x.png'
  ],
  venue: '',
  items: [
    // eventOfferItem21,
    // eventOfferItem22,
    // eventOfferItem23,
    // eventOfferItem24,
    eventOfferItem25,
    eventOfferItem26
    // eventOfferItem27,
    // eventOfferItem28,
    // eventOfferItem29,
    // eventOfferItem210
  ]
}
export const entertainmentItem3Date1: EventOfferListItem = {
  id: 'cjyugbm970005z3lsgizfh00k',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: 'Tuesday, August 6th',
  description: 'NEW YORK-NEW YORK HOTEL & CASINO',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy3,
  uri: createSlug('NEW YORK-NEW YORK HOTEL & CASINO Tuesday, August 6th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1@2x.png'
  ],
  venue: '',
  items: [
    // eventOfferItem31,
    // eventOfferItem32,
    eventOfferItem33,
    eventOfferItem34
    // eventOfferItem35,
    // eventOfferItem36
    // eventOfferItem37,
    // eventOfferItem38,
  ]
}
export const entertainmentItem3Date2: EventOfferListItem = {
  id: 'cjyugburh0006z3lselmczkmg',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: 'Friday, August 9th',
  description: 'NEW YORK-NEW YORK HOTEL & CASINO',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy3,
  uri: createSlug('NEW YORK-NEW YORK HOTEL & CASINO Friday, August 9th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1@2x.png'
  ],
  venue: '',
  items: [
    // eventOfferItem31,
    // eventOfferItem32,
    eventOfferItem33,
    eventOfferItem34
    // eventOfferItem35,
    // eventOfferItem36
    // eventOfferItem37,
    // eventOfferItem38,
  ]
}
export const entertainmentItem3Date3: EventOfferListItem = {
  id: 'cjyugc3mv0007z3lsrv4kbyn6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: 'Saturday, August 10th',
  description: 'NEW YORK-NEW YORK HOTEL & CASINO',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy2,
  uri: createSlug('NEW YORK-NEW YORK HOTEL & CASINO Saturday, August 10th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1@2x.png'
  ],
  venue: '',
  items: [
    // eventOfferItem31,
    // eventOfferItem32,
    eventOfferItem33,
    eventOfferItem34
    // eventOfferItem35,
    // eventOfferItem36
    // eventOfferItem37,
    // eventOfferItem38,
  ]
}
export const entertainmentItem3Date4: EventOfferListItem = {
  id: 'cjyugce350008z3lsilceoxk7',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: 'Sunday, August 11th',
  description: 'NEW YORK-NEW YORK HOTEL & CASINO',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy3,
  uri: createSlug('NEW YORK-NEW YORK HOTEL & CASINO Sunday, August 11th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1@2x.png'
  ],
  venue: '',
  items: [
    // eventOfferItem31,
    // eventOfferItem32,
    // eventOfferItem33,
    // eventOfferItem34,
    // eventOfferItem35,
    // eventOfferItem36
    eventOfferItem37,
    eventOfferItem38
  ]
}
export const entertainmentItem3Date5: EventOfferListItem = {
  id: 'cjyudxwqj0004z3lsfhm7ahyy',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: 'Monday, August 12th',
  description: 'NEW YORK-NEW YORK HOTEL & CASINO',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy3,
  uri: createSlug('NEW YORK-NEW YORK HOTEL & CASINO Monday, August 12th'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1@2x.png'
  ],
  venue: '',
  items: [
    // eventOfferItem31,
    // eventOfferItem32,
    // eventOfferItem33,
    // eventOfferItem34,
    // eventOfferItem35,
    // eventOfferItem36
    eventOfferItem37,
    eventOfferItem38
  ]
}

export const entertainmentItem1: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: '“O” by Cirque du Soleil',
  description: 'BELLAGIO HOTEL & CASINO',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy1,
  uri: createSlug('“O” by Cirque du Soleil'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1@2x.png'
  ],
  venue: '',
  items: [
    entertainmentItem1Date1,
    entertainmentItem1Date2,
    entertainmentItem1Date3,
    entertainmentItem1Date4,
    entertainmentItem1Date5
  ]
}

export const entertainmentItem2: EventOfferListItem = {
  id: 'cjyudae9o0000z3lswvsek5e0',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1_thumbnail@2x.png',
  title: 'MICHAEL JACKSON ONE by Cirque du Soleil',
  description: 'MANDALAY BAY',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy2,
  uri: createSlug('MICHAEL JACKSON ONE by Cirque du Soleil'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Michael_1@2x.png'
  ],
  venue: '',
  items: [
    entertainmentItem2Date1,
    entertainmentItem2Date2,
    entertainmentItem2Date3,
    entertainmentItem2Date4
  ]
}

export const entertainmentItem3: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
  title: 'Zumanity by Cirque du Soleil',
  description: 'NEW YORK-NEW YORK HOTEL & CASINO',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy3,
  uri: createSlug('Zumanity by Cirque du Soleil'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1@2x.png'
  ],
  venue: '',
  items: [
    entertainmentItem3Date1,
    entertainmentItem3Date2,
    entertainmentItem3Date3,
    entertainmentItem3Date4,
    entertainmentItem3Date5
  ]
}

// export const entertainmentItem4: EventOfferListItem = {
//   id: cuid(),
//   thumbnailImage:
//     'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Zumanity_1_thumbnail@2x.png',
//   title: 'Blue Man Group',
//   description: 'BELLAGIO HOTEL & CASINO',
//   type: OfferItemType.Event,
//   startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
//   endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
//   details: entertainmentCopy4,
//   uri: createSlug('Blue Man Group'),
//   media: [
//     'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/03_tickets_1_hero%402x.png'
//   ],
//   venue: '',
//
//   items: [entertainmentItemDate1]
// }

export const activitiesParent: MerchOffer = {
  id: 'cjg8ckfik00083i5nstq6amr4',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Nightlife_1_thumbnail@2x.png',
  title: 'Nightlife',
  description: 'The Vegas Experience.',
  type: OfferItemType.Merch,
  details: activityCopy,
  uri: createSlug('Nightlife'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/5_Nightlife_1@2x.png'
  ],
  items: [activityItem, activityItem2, activityItem3, activityItem4]
}

export const hotelOfferItemParent: HotelOfferListItem = {
  id: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://fevo-fuc.s3.amazonaws.com/assets_demo_mgm/2_Belagio_Penthouse_1_thumbnail%402x.png',
  title: 'Hotels',
  description: 'Iconic Luxury Resorts & Casinos.',
  type: OfferItemType.Hotel,
  startingPrice: 194,
  address: '',
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets_demo_mgm/2_Belagio_Penthouse_1%402x.png'
  ],
  details: hotelCopy,
  uri: 'mgm-hotels',
  items: [
    hotelOfferListItem3,
    hotelOfferListItem2,
    hotelOfferListItem1,
    hotelOfferListItem4
  ],
  rewards: hotelRewards
}

export const entertainmentList: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1_thumbnail@2x.png',
  title: 'World Class Entertainment',
  description: 'Unforgettable World Class Entertainment.',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: entertainmentCopy1,
  uri: createSlug('Entertainment'),
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/7_Cirque_1@2x.png'
  ],
  venue: '',
  rewardCopy: 'Rewards available for bringing 10 friends',
  items: [
    entertainmentItem1,
    entertainmentItem2,
    entertainmentItem3
    // entertainmentItem4
  ]
}

export const offer: AnyOffer = {
  id: 'cjg8ckfil00093i5nlvm7gmc1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
  title: 'MGM Resorts',
  description: '',
  type: OfferItemType.Mixed,
  media: [
    'https://fevo-fuc.s3.amazonaws.com/assets_demo_mgm/2_Belagio_Penthouse_1%402x.png'
  ],
  details: '',
  uri: 'mgm',
  items: [hotelOfferItemParent, entertainmentList, activitiesParent]
}

export const offerPage: OfferPage = {
  id: guid(),
  brandColor: '#BDA770',
  offer: offer,
  uri: 'mgm',
  treeTitle: `WHO'S GOING (5)`,
  isNeedToShowTax: true,
  shareOrderTitle: 'Get ready for your trip!',
  shareTitle: 'Now share this page with friends',
  confirmationTitleCopy: 'Ready for your trip?',
  emptyCheckoutTitle: 'Pay Separately, Stay Together',
  emptyCheckoutDescription: 'Book your stay, invite friends and earn perks',
  backgroundImage:
    'https://fevo-fuc.s3.amazonaws.com/assets_demo_mgm/1_MGM_landing+page+1%402x.png',
  leaderboardImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/gif_SLS.gif',
  progressImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/8_MGM_Confirmation_reward progress.svg',
  confirmationDetailsImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/8_MGMConfirmation_rewards.svg',
  orderSummaryTitle: 'Booking',
  shareDetailsCopy: `Want more friends to join you? They will see
  your group itinerary and can book their own trip. You’ll get bigger rewards by growing your group!`
}
