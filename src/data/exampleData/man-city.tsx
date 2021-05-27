import {
  OfferItemType,
  MerchOfferItem,
  EventOfferItem,
  HotelOfferItem,
  EventOfferListItem,
  HotelOffer,
  HotelOfferListItem,
  MerchOfferListItem,
  Offer,
  AnyOffer,
  EventOffer,
  Reward,
  OfferPage,
  MerchOffer
} from 'custom-typings/offerTypes'
import { parse } from 'date-fns'
import * as cuid from 'cuid'
import { currencySymbols } from 'cart/currency'

const eventCopy = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>HOW TO PURCHASE TICKETS</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Tickets for all matches are
available to purchase online at mancity.com/tickets.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Tickets purchased on line will
 be subject to a £1.50 booking fee per ticket, excluding Seasoncard holders & Cityzens
 Matchday members.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Please note: For tickets
purchased online, supporters will be allocated a Print@Home ticket and are reminded
to print their ticket(s) on white A4 plain paper prior to leaving for the match.
</span></sup></p>

`

const eventCopy2 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Tickets should only be purchased direct from the Club or through an authorised
seller.</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Tickets for all matches are
available to purchase online at mancity.com/tickets.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Tickets purchased on line will
 be subject to a £1.50 booking fee per ticket, excluding Seasoncard holders & Cityzens
  Matchday members.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Please note: For tickets purchased
online, supporters will be allocated a Print@Home ticket and are reminded to print their
ticket(s) on white A4 plain paper prior to leaving for the match. </span></sup></p>
`

const merchCopy = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>Light Blue 2019 On
Field 39THIRTY Flex Hat</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Make your New York City FC fandom the
center of attention every time you put on this On Field 39THIRTY flex hat from New Era. The
 bold logo on the front of this cap will shout out your team pride with ease.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Material: 100% Polyester</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Mid Crown</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Structured fit</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Curved bill</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Embroidered fabric applique</span>
</sup></p>

<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>Navy Iconic
Diamond Scroll T-Shirt</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Send your favorite team some good
vibes on game day with this epic New York City FC Iconic Diamond Scroll T-shirt from F
anatics Branded. You'll love representing your beloved New York City FC in this top-notch
piece of gear everywhere you go!</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Material: 65% Polyester/35%
Cotton</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Rib-knit collar</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Back neck taping</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Heathered fabric</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Screen print graphics</span>
</sup></p>
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>2019 Primary
Authentic Jersey</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Show everyone how much you love
rocking with New York City FC by picking up this 2019 Primary Authentic Jersey from
adidas. This jersey features bold team graphics and climalite technology that will
keep you as cool as can be when New York City FC takes the pitch.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Material: 100%
Polyester</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• climalite ® technology
conducts sweat and heat away from the body</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Heat-sealed team crest on
left chest</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Tagless collar for added
comfort</span></sup></p>

<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>New York
City FC Action Backpack</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Show off your unwavering New
York City FC enthusiasm when you get this Action backpack. It features crisp New York
City FC graphics on the front and has multiple pockets for easy storage.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Material: 100% Polyester –
Shell and Lining</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Inner laptop compartment
</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Two mesh side pockets</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Padded top handle, back, and
straps</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Surface Washable
</span></sup></p>
`

const merchCopy1 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Manchester City Home Stadium Shirt 2018-19</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">After 2017-18 saw a Blue Moon
rise to the pinnacle of the Premier League, show support for the Citizens in defence
of their crown with the official Manchester City Home Stadium Shirt 2018-19.</span>
</sup></p>
 <p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">With Pep’s Shark Team tearing
their way through the record books, another exciting season at the Etihad awaits; and
fans can be a part of it in this re-designed take on the team’s traditional colours.
</span></sup></p>
</span></sup></p>
`
const merchCopy2 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Manchester City Home Stadium Shorts 2018-19</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">The Manchester City Home Stadium
Shorts 2018-19 offer authentic MCFC details, with Nike Breathe fabric to help keep you
cool and dry and an elastic waistband with drawcord securing the shorts’ fit.</span>
</sup></p>
 <p>&nbsp;</p>
 <p><sup><span style="font-size: 11pt; color: #B9B7B6;">• MCFC crest and colours
 show your team pride</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Elastic waistband with
drawcord secures the fit</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Nike Breathe fabric helps
you stay dry and cool</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• 100% polyester</span>
</sup></p>

`
const merchCopy3 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Manchester City Squad Cap - Light Blue</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Show off your Citizen support
with the Manchester City Squad Snap Back Cap.</span></sup></p>
 <p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">A classic snap back style cap
with a flat peak and adjustable closure. It features Dri-Fit synthetic fabric for sweat
wicking comfort. On the front is a twill patch with the Manchester City crest.had awaits;
and fans can be a part of it in this re-designed take on the team’s traditional colours.
</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Dri-Fit wool-like fabric</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Twill patch Manchester City club
crest</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• High definition Nike swoosh</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• 100% polyester</span></sup></p


`
const merchCopy4 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Manchester City Ultra Duffel Bag</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Take the love for your team on
your travels. Whether it's long or short haul, this is the perfect item to store your
belongings when away from home.</span></sup></p>`

const hotelCopy = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Editors' Picks: Our Favorite Boutique Hotels in New York</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Travel in style and book your
stay at one of the best boutique hotels NYC has to offer. From Soho to Williamsburg,
these historic and design-centric inns offer guests an array of the finer things in
life, including but certainly not limited to full-service spas in NYC, afternoon tea,
Parisian gardens, mixology classes, bespoke magic shows and rooftop bars with Insta
-worthy views of the New York City skyline. A select few will even give you special
access to notoriously exclusive locales like Bergdorf Goodmanand Gramercy Park.
</span></sup></p>
`

const roomCopy = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>King Room Sky</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Get cozy in our King bedded city
view rooms measuring just over 160 square feet. The thoughtful, contemporary design
combines modern technology like 42-inch LED TVs, Bluetooth radio, and bedside USB charging
stations, with warm walnut furnishings.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• 162 square feet (15 sq meters)
</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• King bed</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Skyline views</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Located on upper floors</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• ADA accessible room available
</span></sup></p>

<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>Queen Room
Terracey</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">The city looks different when you
look at it from your private terrace. These queen-bedded rooms have their own private,
furnished terrace giving an elevated view over the Manhattan cityscape. The efficient
 design integrates modern tech like Bluetooth radio and bedside USB charging stations
 into the warm walnut furnishings.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• 150 square foot guestroom with
a 150+ square foot private terrace (14 sq meter guestroom, 14+ sq meter private terrace)
</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Queen bed</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• City views</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Located on lower floors</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• ADA accessible room available
</span></sup></p>

<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>Queen Room
City</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Highlighting Manhattan’s busy urban
landscape, these high floor queen-bedded rooms look out over the city. Warm walnut furniture,
 rain showers and handmade porcelain tiles give the room an inviting touch, and tech-
 friendly features like free fiber WiFi, Bluetooth radio and bedside USB charging stations,
 insure it’s fit for the modern traveler.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• 150 square feet (14 sq meters)</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Queen bed</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• City views</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• ADA accessible room available</span>
</sup></p>

<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>Bunk Room</strong>
</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">The Twin Bunk Room is perfect for when
you’re traveling with friends or family, and everyone wants their own bed. It comes with views
of the city surrounds and warm walnut furnishings. The design features a glass-enclosed rain
shower, individual 32-inch LED TVs at the foot of each bed, and mini-fridges for all of your
leftovers.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• 155 square feet (14 sq meters)</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Twin bunk beds</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• City views</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Located on lower floors</span></sup>
</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• ADA accessible room available</span>
</sup></p>
`
const roomCopy1 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Guest room</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Our entry-level rooms are
cosy and full of character. Ideal for short stays and solo trips, they are located
across the four buildings that make up the hotel.
</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Bathrooms include Elemis
toiletries and Principal bathrobes. </span></sup></p>
`
const roomCopy2 = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>Superior room
</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Superior rooms are ideal for longer
stays or as an affordable upgrade, and include a table and chair. You'll find them located
across the four buildings that make up the hotel.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Bathrooms include Elemis toiletries
and Principal bathrobes. </span></sup></p>
`
const roomCopy3 = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>Deluxe room
</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">More spacious that our Superior
 rooms, Deluxe rooms are some of the best in the house, with double-heighted ceilings
 and period detailing. All rooms have a larger working space with two chairs and a
 table.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Bathrooms include Elemis toiletries
and Principal bathrobes. </span></sup></p>
`
const roomCopy4 = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>Suites
</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Suites at The Principal
Manchester have listed interior details and bags of space in which to settle
down and make yourself at home. Junior suites are open-plan, with a generous
seating area, whilst Signature have separate bedrooms and living rooms, with
lots of carefully considered finishing touches.</span></sup></p>

`

const merchAddCopy = `
`
const merchAddCopy1 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Etihad Stadium Parking</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Etihad Stadium is home of
Manchester City Football Club and is the eighth largest stadium in the UK. The Stadium
was originally built for the 2002 Commonwealth Games but has since not only hosted football
games, but also the 2008 UEFA Cup Final, a 2015 Rugby World Cup game, various rugby and
music concerts.</span></sup></p>
`

const merchAddCopy2 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Drinks Vocher</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">We have a large range of food and
beverage offerings in 2019 across the stadium including:</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Healthy Kids Packs</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Gluten Free Food</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Gluten Free Beer</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Vegetarian Options</span></sup></p>

`

const merchAddCopy3 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Manchester City Home Stadium Shirt 2018-19</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">After 2017-18 saw a Blue Moon rise 
to the pinnacle of the Premier League, show support for the Citizens in defence of their 
crown with the official Manchester City Home Stadium Shirt 2018-19.</span></sup></p> 
 <p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">With Pep’s Shark Team tearing their 
way through the record books, another exciting season at the Etihad awaits; and fans can 
be a part of it in this re-designed take on the team’s traditional colours.</span></sup></p>
</span></sup></p> 


`
const merchAddCopy4 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Manchester City Home Stadium Shorts 2018-19</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">The Manchester City Home Stadium 
Shorts 2018-19 offer authentic MCFC details, with Nike Breathe fabric to help keep you 
cool and dry and an elastic waistband with drawcord securing the shorts’ fit.</span>
</sup></p> 
 <p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• MCFC crest and colours show your 
team pride</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Elastic waistband with drawcord 
secures the fit</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Nike Breathe fabric helps you 
stay dry and cool</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• 100% polyester</span></sup></p>

`

export const hotelRewards: Reward[] = [
  {
    id: '100',
    name: 'Grand Day Spa Retreat Package',
    description: 'When your group books 7 nights',
    threshold: 7,
    thresholdCopy: 'Nights'
  },
  {
    id: '101',
    name: 'Steak House Dinner',
    description: 'When your group books 5 nights',
    threshold: 5,
    thresholdCopy: 'Nights'
  },
  {
    id: '102',
    name: 'Free Champagne',
    description: 'When your group books 3 nights',
    threshold: 3,
    thresholdCopy: 'Nights'
  }
]

export const eventRewards: Reward[] = [
  {
    id: '103',
    name: 'Get On Field Photos',
    description: 'When your group invite 10 friends',
    threshold: 10,
    thresholdCopy: 'Photos'
  },
  {
    id: '108',
    name: 'Food & Drinks Voucher',
    description: 'When your group invite 15 friends',
    threshold: 15,
    thresholdCopy: 'Drinks'
  },
  {
    id: '109',
    name: 'VIP Lounge Access',
    description: 'When your group invite 50 friends',
    threshold: 50,
    thresholdCopy: 'Lounge'
  }
]

export const merchRewards: Reward[] = [
  {
    id: '105',
    name: 'San Diego Attraction Pass',
    description: 'When your group buy 25 items',
    threshold: 25,
    thresholdCopy: 'Items'
  },
  {
    id: '106',
    name: 'San Diego Zoo Ticket',
    description: 'When your group buy 20 items',
    threshold: 20,
    thresholdCopy: 'Items'
  },
  {
    id: '107',
    name: 'Mission Beach Surf Rentals',
    description: 'When your group buy 10 items',
    threshold: 10,
    thresholdCopy: 'Items'
  }
]

export const offerItemMerch: MerchOfferItem = {
  id: 'cjv4kq0w8000f01lfgjk4e376',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/07_merch_1_thumbnail%402x.png',
  title: 'Manchester City Home Stadium Shirt 2018-19',
  description: '',
  startingPrice: 74,
  type: OfferItemType.Merch,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/07_merch_1_hero%402x.png',
  htmlDescription: merchCopy1,

  productDetails: {
    sizes: [
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' }
    ]
  }
}

export const offerItemMerch2: MerchOfferItem = {
  id: 'cjv4kqila000g01lfdl1m6bb4',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/07_merch_2_thumbnail%402x.png',
  title: 'Manchester City Home Stadium Shorts 2018-19',
  description: '',
  startingPrice: 24,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/07_merch_2_hero%402x.png',
  htmlDescription: merchCopy2,
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

export const offerItemMerch3: MerchOfferItem = {
  id: 'cjv4kqnnk000h01lf41o0fjcp',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/07_merch_3_thumbnail%402x.png',
  title: 'Manchester City Squad Cap - Light Blue',
  description: '',
  startingPrice: 12,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/07_merch_3_hero%402x.png',
  htmlDescription: merchCopy3,
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
  id: 'cjv4kqr0b000i01lf9ym95lbf',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/07_merch_4_thumbnail%402x.png',
  title: 'Manchester City Ultra Duffel Bag',
  description: '',
  startingPrice: 35,
  type: OfferItemType.Merch,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/07_merch_4_hero%402x.png',
  htmlDescription: merchCopy4,
  productDetails: { colors: [], sizes: [] }
}

export const offerAddOnMerch: MerchOfferItem = {
  id: 'cjv4kdqnw000501lffe17ccr7',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/04_addons_1_thumbnail%402x.png',
  title: 'Etihad Stadium Parking',
  description: '',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/04_addons_1_hero%402x.png',
  htmlDescription: merchAddCopy1,
  startingPrice: 10,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerAddOnMerch2: MerchOfferItem = {
  id: 'cjv4kepba000701lfc4zze2ss',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/04_addons_2_thumbnail%402x.png',
  title: 'Drinks Vocher',
  description: '',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/04_addons_2_hero%402x.png',
  htmlDescription: merchAddCopy2,
  startingPrice: 5,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerAddOnMerch3: MerchOfferItem = {
  id: 'cjv4kexn4000801lfaf0ae8i3',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/04_addons_3_thumbnail%402x.png',
  title: 'Manchester City Home Stadium Shirt 2018-2019',
  description: '',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/04_addons_3_hero%402x.png',
  htmlDescription: merchAddCopy3,
  startingPrice: 74,
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

export const offerAddOnMerch4: MerchOfferItem = {
  id: 'cjv4kf63j000a01lf0r9b7537',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/04_addons_4_thumbnail%402x.png',
  title: 'Manchester City Home Stadium Shorts 2018-19',
  description: '',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/04_addons_4_hero%402x.png',
  htmlDescription: merchAddCopy4,
  startingPrice: 24,
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

export const addonOfferParent: MerchOffer = {
  id: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/ticket_thumbnail.png',
  title: 'Add-Ons',
  description: '',
  type: OfferItemType.Merch,
  details: merchAddCopy1,
  uri: 'add-ons',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/04_addons_1_hero%402x.png'
  ],
  rewardCopy: '',
  items: [offerAddOnMerch, offerAddOnMerch2, offerAddOnMerch3, offerAddOnMerch4]
}

export const hotelOfferItem1: HotelOfferItem = {
  id: 'cjv4kicwr000b01lfcogp0sd5',
  parentId: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/06_room_1_thumbnail%402x.png',
  title: 'Guest room',
  description: '',
  startingPrice: 204,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/06_room_1_hero%402x.png',
  htmlDescription: roomCopy1,
  type: OfferItemType.Hotel
}
export const hotelOfferItem2: HotelOfferItem = {
  id: 'cjv4kimex000c01lfd9ft15dx',
  parentId: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/06_room_2_thumbnail%402x.png',
  title: 'Superior room',
  description: '',
  startingPrice: 234,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/06_room_2_hero.png',
  htmlDescription: roomCopy2,
  type: OfferItemType.Hotel
}
export const hotelOfferItem3: HotelOfferItem = {
  id: 'cjv4kitca000d01lf0erscv4m',
  parentId: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/06_room_3_thumbnail%402x.png',
  title: 'Deluxe room',
  description: '',
  startingPrice: 254,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/06_room_3_hero.png',
  htmlDescription: roomCopy3,
  type: OfferItemType.Hotel
}
export const hotelOfferItem4: HotelOfferItem = {
  id: 'cjv4kizxn000e01lf5t0udllq',
  parentId: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/06_room_4_thumbnail%402x.png',
  title: 'Suites',
  description: '',
  startingPrice: 484,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/06_room_4_hero.png',
  htmlDescription: roomCopy4,
  type: OfferItemType.Hotel
}

export const hotelOfferListItem1: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/05_hotel_1_thumbnail%402x.png',
  title: 'King Street Townhouse',
  description: '',
  address: '10 Booth Street',
  startingPrice: 165,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/06_room_1_hero%402x.png'
  ],
  details: roomCopy1,
  uri: 'King-Street-Townhouse',
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3, hotelOfferItem4]
}

export const hotelOfferListItem2: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/05_hotel_2_thumbnail%402x.png',
  title: 'The Principal Manchester',
  description: '',
  address: 'Oxford Street',
  startingPrice: 85,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/06_room_1_hero%402x.png'
  ],
  details: roomCopy1,
  uri: 'The-Principal-Manchester',
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3, hotelOfferItem4]
}

export const hotelOfferListItem3: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/05_hotel_3_thumbnail%402x.png',
  title: 'Radisson Blu Edwardian Manchester',
  description: 'Modern luxury and style',
  address: '',
  startingPrice: 75,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/06_room_1_hero%402x.png'
  ],
  details: roomCopy1,
  uri: 'Radisson-Blu-Edwardian-Manchester',
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3]
}
export const hotelOfferListItem4: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/05_hotel_4_thumbnail%402x.png',
  title: 'Princess St. Hotel',
  description: '',
  address: '18-24 Princess Street',
  startingPrice: 65,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/06_room_1_hero%402x.png'
  ],
  details: roomCopy1,
  uri: 'Princess-St-Hotel',
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3, hotelOfferItem4]
}

export const eventOfferItem: EventOfferItem = {
  id: 'cjftxsxt10004ho8e20e200ew',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_ticket_1_thumbnail%402x.png',
  title: 'Section 303',
  description: '',
  startingPrice: 59,
  type: OfferItemType.Event
}

const eventOfferItem1: EventOfferItem = {
  id: 'cjv4k6uyt000001lf6upy6lvt',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_ticket_2_thumbnail%402x.png',
  title: 'Section 101',
  description: '',
  startingPrice: 59,
  type: OfferItemType.Event
}

const eventOfferItem2: EventOfferItem = {
  id: 'cjv4k7u4w000101lfhr1bd0t1',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_ticket_3_thumbnail%402x.png',
  title: 'Section 137',
  description: '',
  startingPrice: 59,
  type: OfferItemType.Event
}
const eventOfferItem3: EventOfferItem = {
  id: 'cjv4kaj03000401lfg3hch918',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_ticket_4_thumbnail%402x.png',
  title: 'Section 135',
  description: '',
  startingPrice: 59,
  type: OfferItemType.Event
}
export const eventOfferItem1Alt: EventOfferItem = {
  id: 'cjv5ay4ro000401miadbghdy6',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_ticket_1_thumbnail%402x.png',
  title: 'Section 303',
  description: '',
  startingPrice: 59,
  type: OfferItemType.Event
}

const eventOfferItem2Alt: EventOfferItem = {
  id: 'cjv5ay9gu000501mi3aizfry2',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_ticket_2_thumbnail%402x.png',
  title: 'Section 101',
  description: '',
  startingPrice: 59,
  type: OfferItemType.Event
}

const eventOfferItem3Alt: EventOfferItem = {
  id: 'cjv5ayd0j000601miee4986eg',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_ticket_3_thumbnail%402x.png',
  title: 'Section 137',
  description: '',
  startingPrice: 59,
  type: OfferItemType.Event
}
const eventOfferItem4Alt: EventOfferItem = {
  id: 'cjv5aygo3000701midbswg9hp',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_ticket_4_thumbnail%402x.png',
  title: 'Section 135',
  description: '',
  startingPrice: 59,
  type: OfferItemType.Event
}

export const eventOffer1: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/02_game_1_thumbnail%402x.png',
  title: 'Manchester City vs Leicester City',
  description: 'Mon, 06 May, 15:00',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy2,
  uri: 'NYCFC-vs-FC-Cincinnati',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_tickets_1_hero%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  addonOffer: addonOfferParent,
  items: [eventOfferItem1, eventOfferItem2, eventOfferItem3, eventOfferItem]
}
export const eventOffer2: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/02_game_2_thumbnail%402x.png',
  title: 'Manchester City vs Brighton',
  description: 'Sun, 12 May, 10:00',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy2,
  uri: 'NYCFC-vs-Philadelphia-Union',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/02_game_1_hero%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  addonOffer: addonOfferParent,
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}
export const eventOffer3: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/02_game_3_thumbnail%402x.png',
  title: 'Manchester City vs Watford',
  description: 'Sat, 18 May, 12:00',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy2,
  uri: 'NYCFC-vs-Seattle-Sounders',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/02_game_1_hero%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  addonOffer: addonOfferParent,
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}
export const eventOffer4: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/02_game_4_thumbnail%402x.png',
  title: 'Manchester City vs Yokohama FM',
  description: 'Sat, Jul 27, TBD',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy2,
  uri: 'NYCFC-vs-Portland-Timbers',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/02_game_1_hero%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  addonOffer: addonOfferParent,
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}
export const eventOffer5: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/02_game_5_thumbnail%402x.png',
  title: 'NYCFC vs FC Cincinnati',
  description: 'Thu, Jun 06, 20:00',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy,
  uri: 'Manchester-City-v-Leicester-City',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_tickets_1_hero%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  items: [
    eventOfferItem1Alt,
    eventOfferItem2Alt,
    eventOfferItem3Alt,
    eventOfferItem4Alt
  ]
}

export const eventOfferItemParent: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/01_home_1_thumbnail%402x.png',
  title: 'Upcoming Matches',
  // prettier-ignore
  description: 'Men\'s team tickets',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy,
  uri: 'matches',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/02_game_1_hero%402x.png'
  ],
  venue: '',
  addonOffer: addonOfferParent,
  rewardCopy: 'Rewards available for bringing 10 friends',
  items: [eventOffer1, eventOffer2, eventOffer3, eventOffer4, eventOffer5]
}

export const hotelOfferItemParent: HotelOffer = {
  id: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/01_home_3_thumbnail%402x.png',
  title: 'Manchester City Hotels',
  description: 'Enjoy your experience in Manchester',
  type: OfferItemType.Hotel,
  address: '',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/05_hotel_1_hero%402x.png'
  ],
  details: hotelCopy,
  uri: 'hotels',
  items: [
    hotelOfferListItem1,
    hotelOfferListItem2,
    hotelOfferListItem3,
    hotelOfferListItem4
  ],
  // prettier-ignore
  rewardCopy: 'Editors\' Picks'
}

export const merchOfferItemParent: MerchOfferListItem = {
  id: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/01_home_2_thumbnail%402x.png',
  title: 'Official Store',
  description: 'T-shirts, hats, and more',
  // startingPrice: 25,
  type: OfferItemType.Merch,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/07_merch_1_hero%402x.png'
  ],
  details: merchCopy1,
  uri: 'official-merch',
  items: [offerItemMerch, offerItemMerch2, offerItemMerch3, offerItemMerch4]
}

export const offer: AnyOffer = {
  id: 'cjftxsxt10001ho8e495ushve',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
  title: 'Manchester City F.C.',
  description: '',
  type: OfferItemType.Mixed,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/01_home_1_hero%402x.png'
  ],
  details: '',
  uri: 'offers',
  items: [
    eventOfferItemParent,
    eventOffer5,
    merchOfferItemParent,
    hotelOfferItemParent
  ]
}

export const offerPage: OfferPage = {
  id: cuid(),
  brandColor: '#8DBDE4',
  treeTitle: `WHO'S GOING (5)`,
  confirmationTitleCopy: 'Ready for your trip?',
  backgroundImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/00_Landing+page%402x.png',
  location: 'Etihad Stadium, Manchester, England',
  startDate: parse('2019-05-01', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-07-31', 'yyyy-MM-dd', new Date()).toJSON(),
  offer: offer,
  currency: 'GBP',
  uri: 'man-city',
  shareTitle: 'Now share this page with friends',
  shareOrderTitle: 'Get ready for your trip!',
  emptyCheckoutTitle: 'Pay Separately, Get Together',
  emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
  isNeedToShowTax: true,
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
