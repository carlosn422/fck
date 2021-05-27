import {
  OfferItemType,
  MerchOfferItem,
  HotelOfferItem,
  HotelOfferListItem,
  MerchOffer,
  AnyOffer,
  Reward,
  OfferPage
} from 'custom-typings/offerTypes'
import guid from 'utils/guid'

const activityCopy = `
  <p><sup><span style="font-size: 16pt;font-family:SharpSans,
   arial;"><strong>New York Past and Present</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Nestled
 within Lower Manhattan’s curving colonial-era streets, partake in
  the story of New York’s rise as a prominent port city at the nearby
  South Street Seaport Museum. Take to the seas with a guided historic
  ship tour aboard the museum’s beautifully preserved 1885 cargo ship and 1907
   lightship, the Ambrose then dive back into the present with a contemporary
   view of the neighborhood through the interactive Sea of Lights exhibit.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Finish the day off
right with a sample of the area’s rich culinary treasures such as Delmonico’s
(1837) or The Dead Rabbit before retiring for the evening with a classic nightcap
 at Felice Ristorante off the hotel’s lobby.</span></sup></p>
<p>&nbsp;</p>
 <p><sup><span style="font-size: 11pt; color: #908f8f;">Includes</span></sup></p>
 <p><sup><span style="font-size: 11pt; color: #908f8f;">• Two tickets
 to the South Street Seaport museum</span></sup></p>
 <p><sup><span style="font-size: 11pt; color: #908f8f;">• Two house cocktails at Felice Ristorante</span></sup></p>
`

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

const hotelCopy = `<p><sup><span style="font-size:
16pt;font-family:SharpSans, arial;"><strong>The Beekman, New York</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color:
#908f8f;">Once upon a time. Now. Within the majestic walls of one of New
York City’s most exceptional landmarks, a new paradigm for luxury hotels in
Lower Manhattan has emerged. An architectural gem, hailed for its iconic nine-story
atrium and pyramidal skylight, The Beekman unites some of the world’s greatest talent,
including the sophisticated design of Martin Brudnizki and the culinary cachet of restaurateur
and chef Tom Colicchio. The boutique hotel also features a restaurant by Keith McNally, his first in
the neighborhood.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
Located within the center of Lower Manhattan’s thriving New Downtown,
and nestled between both the East and Hudson Rivers, The Beekman is
surrounded by some of Manhattan’s most cherished attractions, including the Brooklyn Bridge,
the World Trade Center, South Street Seaport and City Hall. </span></sup></p>`

const roomCopy = `<p><sup><span style="font-size: 16pt;font-family:SharpSans,
arial;"><strong>Deluxe King</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• High ceilings, curated
artworks and aged oak floors in 320 square feet</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Custom-designed oak
king bed and leather headboard with luxurious sateen Sferra linens</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Eclectic mix of
bespoke and vintage furnishings</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Exclusive D.S. & Durga bath amenities</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Carrara marble-tiled
 bathroom with state-of-the-art oversized rain shower</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Craft cocktail table and gourmet mini-bar</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• 47” IPTV with personal DVR</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Complimentary Wi-Fi,
 USB charging ports and in-room safe</span></sup></p>  `

const roomCopy2 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Premium King</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">375 sqft</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Larger
luxury room with high ceilings, custom king bed, bespoke
and vintage furnishings, aged oak floors, craft cocktail table,
spacious marble bathroom with rain shower in 375 square feet.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• High
ceilings, curated artworks and aged oak floors in 375 square feet</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
Custom-designed oak king bed and leather headboard with luxurious sateen Sferra linens</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
 Eclectic mix of bespoke and vintage furnishings</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Exclusive D.S. & Durga bath amenities</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
Carrara marble-tiled bathroom with state-of-the-art oversized rain shower</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Craft cocktail table and gourmet mini-bar</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• 47” IPTV with personal DVR</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
Complimentary Wi-Fi, USB charging ports and in-room safe</span></sup></p>`

const roomCopy3 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Double Queen</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">400 sqft</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
Large luxury room with high ceilings, two queen beds, bespoke
 and vintage furnishings, aged oak floors, cocktail table,
 spacious marble bath with tub and rain shower in 400 square feet.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
 High ceilings, curated artworks and aged oak floors in 400 square feet</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
Dual custom-designed oak queen beds and leather headboards with luxurious sateen Sferra linens</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
Eclectic mix of bespoke and vintage furnishings</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
Exclusive D.S. & Durga bath amenities</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
Carrara marble-tiled bathroom with state-of-the-art oversized rain shower</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Craft cocktail table and gourmet mini-bar</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• 47” IPTV with personal DVR</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
 Complimentary Wi-Fi, USB charging ports and in-room safe</span></sup></p>`

const roomCopy4 = `
 <p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>One Bedroom Suite</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">475 sqft</span></sup></p>
<p><sup><span style="font-size: 11pt; color:
#908f8f;">Spacious luxury suite with living room, high
ceilings, king bed, bespoke and vintage furnishings, aged oak
 floors, cocktail table, large marble bathroom with rain shower in 475 square feet.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
Separate living room with television, high ceilings, curated
artworks and aged oak floors in 475 square feet</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
 Bedroom includes second television, custom-designed oak
  king bed and leather headboard with luxurious sateen Sferra linens</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
Eclectic mix of bespoke and vintage furnishings</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Exclusive D.S. & Durga bath amenities</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
Carrara marble-tiled bathroom with state-of-the-art oversized rain shower</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Craft cocktail table and gourmet mini-bar</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Two 55” IPTVs with personal DV</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
 Complimentary Wi-Fi, USB charging ports and in-room safe</span></sup></p>
 `

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

const timedCopy = `
  <p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>The Nest Rooftop
  Bar</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color:
 #908f8f;">The boundaries between nature and nurture are purposefully
  blurred at The Nest, Thompson Seattle’s iconic rooftop bar, cocktail
  lounge, and terrace. Hovering above the urban hustle of Pike Place Market and
  Seattle’s downtown, The Nest embraces the heart-stopping view of Elliott Bay and
   the Olympic Mountain Range beyond—making it the only place that truly captures the
   unfolding drama of the city.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Executive Chef Derek Simcik orients
the hand-crafted cocktail, wine, and small snacks menu toward seasonal produce, highlighting
the ever-evolving Pacific Northwest landscape. And while the plush bar buzzes with activity,
 cozy fire-lit corners hidden amid lush greenery beckon those yearning for more intimate contemplation.</span></sup></p>
`

const timedCopy2 = `
  <p><sup><span style="font-size: 16pt;font-family:SharpSans,
  arial;"><strong>Marsh House, Nashville</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Chef Nathan Duensing
brings an incredible seafood experience to Nashville’s restaurant scene. Amid
the modern decor and spacious setting, guests of the Marsh House can enjoy fresh
seafood, seasonal craft cocktails and an extensive wine list.
</span></sup></p>
`

const timedCopy3 = `
  <p><sup><span style="font-size: 16pt;font-family:SharpSans,
  arial;"><strong>Felice Ristorante, New York</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">A Sophisticated
Tuscan Eatery. Known for its authentic Italian fare and extensive, regionally
focused wine list, Felice Ristorante brings the sophisticated streets of Florence
 and the rustic warmth of the Tuscan countryside to NYC’s Financial District. With warm
  wood paneling and wide-plank floors, this intimate Italian restaurant just off the narrow
  colonial-era streets of Wall Street is also home to an upper-level bar and wine lounge, La Soffitta,
  which offers an ideal ambiance for entertaining or casual after-work drinks.</span></sup></p>
`

const timedCopy4 = `
  <p><sup><span style="font-size: 16pt;font-family:SharpSans,
   arial;"><strong>Allet Car Amateur Theatre</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">This once-hidden
cellar and century-old mechanical room has been transformed into an intimate
lounge that echoes both the eclectic individuality of Tokyo’s secret bars and the
classic American cocktail club. New York’s iconic late-night impresario, Serge Becker,
 known for establishments like The Box, La Esquina, and Miss Lily’s, lends his energizing
 and theatrical charisma to this atmospheric haven, where musicians and renowned DJs drop by to
 share their talents.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Whether you’re after a pre-meal aperitif,
 a light dinner and drinks, or a sneaky nightcap, precision bartenders are on hand to ensure the
 most pleasurable libations. Honkaku shōchū, craft Japanese beer, boutique sake, and a library of
 Japanese whiskey add to an array of cultish concoctions on offer. For those culinary minded and hungry
 folk, the menu offers classic and modern reinterpretations of Japanese Izakaya comfort food.</span></sup></p>
`

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
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/5_Thompson_Addons_1_thumbnail%402x.png',
  title: 'Bed & Breakfast',
  description: 'Breakfast at Augustine for two',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/5_Thompson_Addons_1_hero%402x.png',
  htmlDescription: merchCopy1,
  startingPrice: 60,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerItemMerch: MerchOfferItem = {
  id: 'asdkjfhaksjdhfkjsadhf',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/5_Thompson_Addons_2_thumbnail%402x.png',
  title: '3 PM Late Checkout',
  description: 'Make your stay more enjoyable',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/5_Thompson_Addons_2_hero%402x.png',
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
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/5_Thompson_Addons_3_thumbnail%402x.png',
  title: 'Parking',
  description: 'Save up to 15% off Valet Parking',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/5_Thompson_Addons_3_hero%402x.png',
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
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/5_Thompson_Addons_1_hero%402x.png'
  ],
  rewardCopy: '',
  items: [offerItemMerch, offerItemMerch2, offerItemMerch3],
  rewards: hotelRewards
}

export const roomItem: HotelOfferItem = {
  id: 'cjg8ckfivasdklfji5nnawuwwq6',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/4_Thompson_room_1_thumbanil%402x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/4_Thompson_room_1_hero%402x.png`,
  title: 'Deluxe King',
  description: 'In high demand',
  startingPrice: 299,
  htmlDescription: roomCopy,
  type: OfferItemType.Hotel
}
export const roomItem2: HotelOfferItem = {
  id: 'cjg8ckfivsdalkfjklasdjf',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/4_Thompson_room_2_thumbanil%402x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/4_Thompson_room_2_hero%402x.png`,
  title: 'Premium King ',
  description: '10 people are looking at this right now',
  startingPrice: 380,
  htmlDescription: roomCopy2,
  type: OfferItemType.Hotel
}
export const roomItem3: HotelOfferItem = {
  id: 'klsadjflaksdjflkasjdf',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/4_Thompson_room_3_thumbanil%402x.png',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/4_Thompson_room_3_hero%402x.png',
  title: 'Double Queen',
  description: 'Large luxury room with two queen beds',
  startingPrice: 568,
  htmlDescription: roomCopy3,
  type: OfferItemType.Hotel
}

export const roomitem4: HotelOfferItem = {
  id: 'sadklfjlsakdjfalskdjflksad',
  parentId: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/4_Thompson_room_4_thumbanil%402x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/4_Thompson_room_4_hero%402x.png`,
  title: 'One Bedroom Suite',
  description: 'Spacious luxury suite',
  startingPrice: 768,
  htmlDescription: roomCopy4,
  type: OfferItemType.Hotel
}

export const hotelOfferListItem1: HotelOfferListItem = {
  id: guid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/3_Thompson_hotel_1_thumbnail%402x.png',
  title: 'The Beekman, New York',
  description: '',
  address: '123 Nassau Street, New York, NY 10038',
  startingPrice: 380,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/4_Thompson_room_1_hero%402x.png'
  ],
  details: roomCopy,
  addonOffer: addonOfferParent,
  uri: 'new-york',
  items: [roomItem, roomItem2, roomItem3, roomitem4],
  rewards: hotelRewards
}

export const hotelOfferListItem2: HotelOfferListItem = {
  id: guid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/hotels/Hotel_2_SB.png',
  title: 'Thompson Chicago',
  description: '',
  address: '21 E Bellevue Pl, Chicago, IL 60611',
  startingPrice: 238,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/4_Thompson_room_1_hero%402x.png'
  ],
  details: roomCopy,
  addonOffer: addonOfferParent,
  uri: 'chicago',
  items: [roomItem, roomItem2, roomItem3, roomitem4],
  rewards: hotelRewards
}

export const hotelOfferListItem3: HotelOfferListItem = {
  id: guid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/3_Thompson_hotel_3_thumbnail%402x.png',
  title: 'Thompson Nashville',
  description: '',
  address: '401 11th Ave S, Nashville, TN 37203',
  startingPrice: 299,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/4_Thompson_room_1_hero%402x.png'
  ],
  details: roomCopy,
  addonOffer: addonOfferParent,
  uri: 'nashville',
  items: [roomItem, roomItem2, roomItem3, roomitem4],
  rewards: hotelRewards
}
export const hotelOfferListItem4: HotelOfferListItem = {
  id: guid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/3_Thompson_hotel_4_thumbnail%402x.png',
  title: 'Thompson Seattle',
  description: '',
  address: '110 Stewart St, Seattle, WA 98101',
  startingPrice: 199,
  type: OfferItemType.Hotel,
  addonOffer: addonOfferParent,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/4_Thompson_room_1_hero%402x.png'
  ],
  details: roomCopy,
  uri: 'seattle',
  items: [roomItem, roomItem2, roomItem3, roomitem4],
  rewards: hotelRewards
}

export const activityItem: MerchOfferItem = {
  id: 'asdlkjfhsadkfhaskjd123',
  parentId: 'cjg8ckfik00083i5nstq6amr4',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/7_Thompson_Excursions_1_thumbnail%402x.png',
  media: `
    https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/7_Thompson_Excursions_1_hero%402x.png
    `,
  title: 'New York Past and Present',
  description: 'Package includes accommodations for two',
  htmlDescription: activityCopy,
  startingPrice: 40,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

const activityItem2: MerchOfferItem = {
  id: 'sdakjfhsadkjfh129837',
  parentId: 'cjg8ckfik00083i5nstq6amr4',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/7_Thompson_Excursions_2_thumbnail%402x.png',
  media: `
    https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/7_Thompson_Excursions_2_hero%402x.png
    `,
  title: 'Northwestern Penthouse Package',
  description: 'VIP experience',
  htmlDescription: activityCopy2,
  startingPrice: 120,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

const activityItem3: MerchOfferItem = {
  id: 'asdjkfhsakdjfh129837',
  parentId: 'cjg8ckfik00083i5nstq6amr4',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/7_Thompson_Excursions_3_thumbnail%402x.png',
  media: `
    https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/7_Thompson_Excursions_3_hero%402x.png
    `,
  title: 'Ladies Music City Getaway',
  htmlDescription: activityCopy3,
  description: 'Revel in the good music and southern hospitality',
  startingPrice: 70,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

const activityItem4: MerchOfferItem = {
  id: 'sadkjfhasdkf2198379',
  parentId: 'cjg8ckfik00083i5nstq6amr4',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/7_Thompson_Excursions_4_thumbnail%402x.png',
  media: `
    https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/7_Thompson_Excursions_4_hero%402x.png
    `,
  title: `New Year's Eve at Thompson Nashville`,
  description: 'Ring in 2019 at Thompson Nashville rooftop bar',
  startingPrice: 150,
  htmlDescription: activityCopy4,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}
export const timedOfferItem: MerchOfferItem = {
  id: 'sadklfjsakldfj',
  parentId: 'cjg8ckfim000a3i5n776twm0r',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/6_Thompson_Restaurant_1_thumbnail%402x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/6_Thompson_Restaurant_1_hero%402x.png`,
  title: 'The Nest Rooftop Bar, Seattle',
  description: 'Top-shelf hotel bar with expansive views',
  htmlDescription: timedCopy,
  startingPrice: 30,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

const timedOfferItem2: MerchOfferItem = {
  id: 'asdjkfhsakjdfhjsadk',
  parentId: 'cjg8ckfim000a3i5n776twm0r',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/6_Thompson_Restaurant_2_thumbnail%402x.png',
  media: `https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/6_Thompson_Restaurant_2_hero%402x.png`,
  title: 'Marsh House, Nashville',
  description: 'Elevated, seafood-centric Southern fare',
  htmlDescription: timedCopy2,
  startingPrice: 60,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

const timedOfferItem3: MerchOfferItem = {
  id: 'sadjkfhsadf178238231',
  parentId: 'cjg8ckfim000a3i5n776twm0r',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/spa/SPA_3.png',
  media: `
      https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/6_Thompson_Restaurant_3_hero%402x.png
    `,
  title: 'Felice Ristorante, New York',
  description: 'A traditional Italian cuisine in New York City',
  htmlDescription: timedCopy3,
  startingPrice: 70,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

const timedOfferItem4: MerchOfferItem = {
  id: 'asdfkjhsadkf12893721',
  parentId: 'cjg8ckfim000a3i5n776twm0r',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/6_Thompson_Restaurant_4_thumbnail%402x.png',
  media: `
      https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/6_Thompson_Restaurant_4_hero%402x.png
    `,
  title: 'Alley Cat Amateur Theatre, New York',
  description: 'Moody lounge serving Japanese drinks & bar',
  startingPrice: 30,
  htmlDescription: timedCopy4,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const activitiesParent: MerchOffer = {
  id: 'cjg8ckfik00083i5nstq6amr4',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/2_Thompson_home_3_thumbnail%402x.png',
  title: 'Excursions & Activities',
  description: 'Incredible cultural experience',
  type: OfferItemType.Merch,
  details: activityCopy,
  uri: 'night-life',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/7_Thompson_Excursions_1_hero%402x.png'
  ],
  items: [activityItem, activityItem2, activityItem3, activityItem4]
}

export const hotelOfferItemParent: HotelOfferListItem = {
  id: 'cjg8ckfin000b3i5nqvliryz6',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/2_Thompson_home_1_thumbnail%402x.png',
  title: 'Hotels',
  description: 'Luxury & Boutique Hotels',
  type: OfferItemType.Hotel,
  startingPrice: 260,
  address: '',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/3_Thompson_hotel_1_hero%402x.png'
  ],
  details: hotelCopy,
  uri: 'thompson-hotels',
  addonOffer: addonOfferParent,
  items: [
    hotelOfferListItem1,
    hotelOfferListItem2,
    hotelOfferListItem3,
    hotelOfferListItem4
  ],
  rewards: hotelRewards
}

export const timedOfferList: MerchOffer = {
  id: 'cjg8ckfim000a3i5n776twm0r',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/2_Thompson_home_2_thumbnail%402x.png',
  title: 'Restaurant & Nightlife',
  description: 'World-class chef partners and elevated nightlife',
  type: OfferItemType.Merch,
  details: timedCopy,
  uri: 'restaurants-nightlife',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/6_Thompson_Restaurant_1_hero%402x.png'
  ],
  items: [timedOfferItem, timedOfferItem2, timedOfferItem3, timedOfferItem4]
}

export const offer: AnyOffer = {
  id: 'cjg8ckfil00093i5nlvm7gmc1',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
  title: 'Thompson Hotels',
  description: '',
  type: OfferItemType.Mixed,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/2_Thompson_home_1_hero%402x.png'
  ],
  details: '',
  uri: 'thompson',
  items: [hotelOfferItemParent, timedOfferList, activitiesParent]
}

export const offerPage: OfferPage = {
  id: guid(),
  brandColor: '#E6C613',
  offer: offer,
  uri: 'thompson',
  treeTitle: `WHO'S GOING (5)`,
  isNeedToShowTax: true,
  shareOrderTitle: 'Get ready for your trip!',
  shareTitle: 'Now share this page with friends',
  confirmationTitleCopy: 'Ready for your trip?',
  emptyCheckoutTitle: 'Pay Separately, Stay Together',
  emptyCheckoutDescription: 'Book your stay, invite friends and earn perks',
  backgroundImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/1_Thompson_landing+page%402x.png',
  leaderboardImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/gif_SLS.gif',
  progressImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/8_Thompson_Confirmation_reward+progress.svg',
  confirmationDetailsImage:
    'https://s3.amazonaws.com/fevo-fuc/assets_demo_thompson/8_Thompson_Confirmation_rewards.svg',
  orderSummaryTitle: 'Booking',
  shareDetailsCopy: `Want more friends to join you? They will see
  your group itinerary and can book their own trip. You’ll get bigger rewards by growing your group!`
}
