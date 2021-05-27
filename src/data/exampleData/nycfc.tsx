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

const eventCopy = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>2019 Single Match tickets are now on sale. Purchase your tickets below.</strong>
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">NYCFC’s ticket plan prices 
incorporate both variable and dynamic pricing models.</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Starting in the 2019 season,
 New York City FC’s ticket plan prices will incorporate both variable and dynamic 
 pricing models, with the goal of ensuring that City Members always receive the 
 best pricing and value.</span></sup></p>`

const eventCopy2 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>2019 Single Match tickets are now on sale. Purchase your tickets below.</strong>
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">NYCFC’s ticket plan prices incorporate 
both variable and dynamic pricing models. Click here to learn more.</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>What is Variable 
& Dynamic Pricing?</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Dynamic pricing, which has been in 
place since the 2015 season, responds to changing factors that affect market demand. As a 
result, individual game and group ticket prices may change throughout the season.</span>
</sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Variable pricing takes multiple 
factors into consideration when determining match grades, such as opponent, day of week, 
time of season, promotional giveaway and more.</span></sup></p> `

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
<strong>Light Blue 2019 On Field 39THIRTY Flex Hat</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Make your New York City FC fandom 
the center of attention every time you put on this On Field 39THIRTY flex hat from New Era. 
The bold logo on the front of this cap will shout out your team pride with ease.</span>
</sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Material: 100% Polyester</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Mid Crown</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Structured fit</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Curved bill</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Embroidered fabric applique</span>
</sup></p>`
const merchCopy2 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Navy Iconic Diamond Scroll T-Shirt</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Send your favorite team some good 
vibes on game day with this epic New York City FC Iconic Diamond Scroll T-shirt from Fanatics 
Branded. You'll love representing your beloved New York City FC in this top-notch piece of 
gear everywhere you go!</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Material: 65% Polyester/35% Cotton
</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Rib-knit collar</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Back neck taping</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Heathered fabric</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Screen print graphics</span></sup></p>
`
const merchCopy3 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>
2019 Primary Authentic Jersey</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Show everyone how much you love rocking 
with New York City FC by picking up this 2019 Primary Authentic Jersey from adidas. This jersey 
features bold team graphics and climalite technology that will keep you as cool as can be when 
New York City FC takes the pitch.</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Material: 100% Polyester</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• climalite ® technology conducts sweat 
and heat away from the body</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Heat-sealed team crest on left chest</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Tagless collar for added comfort</span>
</sup></p>`
const merchCopy4 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>New 
York City FC Action Backpack</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Show off your unwavering New York City FC 
enthusiasm when you get this Action backpack. It features crisp New York City FC graphics on the 
front and has multiple pockets for easy storage.</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Material: 100% Polyester – Shell and 
Lining</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Inner laptop compartment</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Two mesh side pockets</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Padded top handle, back, and straps</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Surface Washable</span></sup></p>`

const hotelCopy = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Editors' Picks: Our Favorite Boutique Hotels in New York</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Travel in style and book your 
stay at one of the best boutique hotels NYC has to offer. From Soho to Williamsburg, 
these historic and design-centric inns offer guests an array of the finer things in 
life, including but certainly not limited to full-service spas in NYC, afternoon tea, 
Parisian gardens, mixology classes, bespoke magic shows and rooftop bars with Insta
access to notoriously exclusive locales like Bergdorf Goodmanand Gramercy Park.
-worthy views of the New York City skyline. A select few will even give you special 
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
`
const roomCopy2 = `
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
`
const roomCopy3 = `
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
`
const roomCopy4 = `
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

const merchAddCopy = `
`
const merchAddCopy1 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Yankee Stadium Parking</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">The Yankees neither control nor
 operate the parking lots and garages surrounding the Stadium and are not responsible 
 for setting parking lot rates, refund policies, rules and/or procedures. City Parking 
 was granted those rights, including responsibility for establishing and controlling 
 parking rates, refund policies, rules and/or procedures, by New York City. Prepaid
  individual-game parking must be obtained from City Parking. For more information, 
  please visit City Parking at https://cityparking.nyc/yankee-stadium/events or call 
  City Parking at (718) 588-7817. For Yankees Season Ticket Licensees, full- and 
  partial-season parking packages can be purchased at a discount off the game-day 
  parking rate. Licensees should contact their Yankees representative at (212) 
  YANKEES for more information.</span></sup></p> 
`

const merchAddCopy2 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, 
arial;"><strong>Drinks Vocher</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">***Available only in 
Yankee Stadium*** NY Pinstripe Pilsner (Blue Point Bleachers Bar - Section 
  237): Uniquely crafted by New York's Blue Point Brewing Company and available 
  exclusively at Yankee Stadium. Brewed with a generous amount of Pilsner malt and
   Motueka hops. Crisp, clean and balanced with a hint of lime aroma from the hop 
   bill.</span></sup></p> 
 <p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• MCFC crest and colours 
show your team pride</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Elastic waistband 
with drawcord secures the fit</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Nike Breathe fabric helps 
you stay dry and cool</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• 100% polyester</span>
</sup></p>

`

const merchAddCopy3 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, 
arial;"><strong>Light Blue 2019 On Field 39THIRTY Flex Hat</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Make your New York City FC 
fandom the center of attention every time you put on this On Field 39THIRTY flex 
hat from New Era. The bold logo on the front of this cap will shout out your team 
pride with ease.</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Material: 100% Polyester
</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Mid Crown</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Structured fit</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Curved bill</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Embroidered fabric applique
</span></sup></p>
`
const merchAddCopy4 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, 
arial;"><strong>2019 Primary Authentic Jersey</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Show everyone how much you 
love rocking with New York City FC by picking up this 2019 Primary Authentic Jersey 
from adidas. This jersey features bold team graphics and climalite technology that will 
keep you as cool as can be when New York City FC takes the pitch.</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Material: 100% Polyester</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• climalite ® technology conducts 
sweat and heat away from the body</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Heat-sealed team crest on left 
chest</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Tagless collar for added comfort
</span></sup></p>`

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
  id: 'cjv59hebi000c01l5hca0416j',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/07_merch_1_thumbnail%402x.png',
  title: 'Light Blue 2019 On Field 39THIRTY Flex Hat',
  description: 'Limited Stock',
  startingPrice: 32,
  type: OfferItemType.Merch,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/07_merch_1_hero%402x.png',
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
  id: 'cjv59hjc4000d01l51ama7j0f',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/07_merch_2_thumbnail%402x.png',
  title: 'Navy Iconic Diamond Scroll T-Shirt',
  description: '',
  startingPrice: 32,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/07_merch_2_hero%402x.png',
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
  id: 'cjv59hnhk000e01l587qa5ayp',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/07_merch_3_thumbnail%402x.png',
  title: '2019 Primary Authentic Jersey',
  description: '',
  startingPrice: 120,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/07_merch_3_hero%402x.png',
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
  id: 'cjv59hqy3000f01l5cy4yhq0r',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/07_merch_4_thumbnail%402x.png',
  title: 'New York City FC Action Backpack',
  description: '',
  startingPrice: 45,
  type: OfferItemType.Merch,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/07_merch_4_hero%402x.png',
  htmlDescription: merchCopy4,
  productDetails: { colors: [], sizes: [] }
}

export const offerAddOnMerch: MerchOfferItem = {
  id: 'cjv59fpnh000401l5fpt5acj0',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/04_addons_1_thumbnail%402x.png',
  title: 'Yankee Stadium Parking',
  description: '',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/04_addons_1_hero%402x.png',
  htmlDescription: merchAddCopy1,
  startingPrice: 25,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerAddOnMerch2: MerchOfferItem = {
  id: 'cjv59fwma000501l59felb2uj',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/04_addons_2_thumbnail%402x.png',
  title: 'Drinks Vocher',
  description: '',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/04_addons_2_hero%402x.png',
  htmlDescription: merchAddCopy2,
  startingPrice: 8,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerAddOnMerch3: MerchOfferItem = {
  id: 'cjv59g4xy000601l5euthetmo',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/04_addons_3_thumbnail%402x.png',
  title: 'Light Blue 2019 On Field 39THIRTY Flex Hat',
  description: '',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/04_addons_3_hero%402x.png',
  htmlDescription: merchAddCopy3,
  startingPrice: 32,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const offerAddOnMerch4: MerchOfferItem = {
  id: 'cjv59gchm000701l5c3l733ck',
  parentId: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/04_addons_4_thumbnail%402x.png',
  title: '2019 Primary Authentic Jersey',
  description: '',
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/04_addons_4_hero%402x.png',
  htmlDescription: merchAddCopy4,
  startingPrice: 120,
  type: OfferItemType.Merch,
  productDetails: { colors: [], sizes: [] }
}

export const addonOfferParent: MerchOffer = {
  id: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/ticket_thumbnail.png',
  title: 'NYCFC Add-Ons',
  description: '',
  type: OfferItemType.Merch,
  details: merchAddCopy1,
  uri: 'add-ons',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/04_addons_1_hero%402x.png'
  ],
  rewardCopy: '',
  items: [offerAddOnMerch, offerAddOnMerch2, offerAddOnMerch3, offerAddOnMerch4]
}

export const hotelOfferItem1: HotelOfferItem = {
  id: 'cjv59glyh000901l5egq97nnr',
  parentId: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/06_room_1_thumbnail%402x.png',
  title: 'King Room Sky',
  description: '',
  startingPrice: 149,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/06_room_1_hero%402x.png',
  htmlDescription: roomCopy1,
  type: OfferItemType.Hotel
}
export const hotelOfferItem2: HotelOfferItem = {
  id: 'cjv5cemrr000001jngv6ebhm6',
  parentId: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/06_room_2_thumbnail%402x.png',
  title: 'Queen Room Terrace',
  description: '',
  startingPrice: 209,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/06_room_2_hero%402x.png',
  htmlDescription: roomCopy2,
  type: OfferItemType.Hotel
}
export const hotelOfferItem3: HotelOfferItem = {
  id: 'cjv59gxlq000a01l54qplfmdu',
  parentId: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/06_room_3_thumbnail%402x.png',
  title: 'Queen Room City',
  description: '',
  startingPrice: 269,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/06_room_3_hero%402x.png',
  htmlDescription: roomCopy3,
  type: OfferItemType.Hotel
}
export const hotelOfferItem4: HotelOfferItem = {
  id: 'cjv59h2lq000b01l59delh6k7',
  parentId: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/06_room_4_thumbnail%402x.png',
  title: 'Bunk Room',
  description: '',
  startingPrice: 119,
  media:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/06_room_4_hero%402x.png',
  htmlDescription: roomCopy4,
  type: OfferItemType.Hotel
}

export const hotelOfferListItem1: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/05_hotel_1_thumbnail%402x.png',
  title: 'Arlo Nomad',
  description: 'Midtown',
  address: '',
  startingPrice: 197,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/05_hotel_1_hero%402x.png'
  ],
  details: roomCopy1,
  uri: 'Arlo-Nomad',
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3, hotelOfferItem4]
}

export const hotelOfferListItem2: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/05_hotel_2_thumbnail%402x.png',
  title: 'The Nolitan',
  description: 'Lower Manhattan',
  address: '',
  startingPrice: 205,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/05_hotel_1_hero%402x.png'
  ],
  details: roomCopy1,
  uri: 'The-Nolitan',
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3, hotelOfferItem4]
}

export const hotelOfferListItem3: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/05_hotel_3_thumbnail%402x.png',
  title: 'The James Hotel',
  description: 'SOHO',
  address: '',
  startingPrice: 263,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/05_hotel_1_hero%402x.png'
  ],
  details: roomCopy1,
  uri: 'The-James-Hotel',
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3, hotelOfferItem4]
}
export const hotelOfferListItem4: HotelOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/05_hotel_4_thumbnail%402x.png',
  title: 'The Bowery Hotel',
  description: 'NOHO',
  address: 'NOHO',
  startingPrice: 395,
  type: OfferItemType.Hotel,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/05_hotel_1_hero%402x.png'
  ],
  details: roomCopy1,
  uri: 'The-Bowery-Hotel',
  items: [hotelOfferItem1, hotelOfferItem2, hotelOfferItem3, hotelOfferItem4]
}

export const eventOfferItem: EventOfferItem = {
  id: 'cjv59f3kq000001l5hb8l8npw',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_ticket_1_thumbnail%402x.png',
  title: 'Section 113',
  description: '',
  startingPrice: 35,
  type: OfferItemType.Event
}
const eventOfferItem1: EventOfferItem = {
  id: 'cjv59ffal000201l5f6r8edua',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_ticket_3_thumbnail%402x.png',
  title: 'Section 124',
  description: '',
  startingPrice: 54,
  type: OfferItemType.Event
}
const eventOfferItem2: EventOfferItem = {
  id: 'cjv59fan2000101l5g7o9e4m4',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_ticket_2_thumbnail%402x.png',
  title: 'Section 106',
  description: '',
  startingPrice: 57,
  type: OfferItemType.Event
}
const eventOfferItem3: EventOfferItem = {
  id: 'cjv59fk4q000301l5e7sqcaq4',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_ticket_4_thumbnail%402x.png',
  title: 'Section 126',
  description: '',
  startingPrice: 64,
  type: OfferItemType.Event
}
export const eventOfferItem1Alt: EventOfferItem = {
  id: 'cjv5af5ue000001mig6un2hgi',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_ticket_2_thumbnail%402x.png',
  title: 'Section 113',
  description: '',
  startingPrice: 35,
  type: OfferItemType.Event
}
const eventOfferItem2Alt: EventOfferItem = {
  id: 'cjv5affuf000201migi9s0q9v',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_ticket_3_thumbnail%402x.png',
  title: 'Section 124',
  description: '',
  startingPrice: 54,
  type: OfferItemType.Event
}
const eventOfferItem3Alt: EventOfferItem = {
  id: 'cjv5afc1r000101micivf6y1y',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_ticket_2_thumbnail%402x.png',
  title: 'Section 106',
  description: '',
  startingPrice: 57,
  type: OfferItemType.Event
}
const eventOfferItem4Alt: EventOfferItem = {
  id: 'cjv5aflte000301miga2427s5',
  parentId: 'cjftxsxt10001ho8e495ushvq',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_ticket_4_thumbnail%402x.png',
  title: 'Section 126',
  description: '',
  startingPrice: 64,
  type: OfferItemType.Event
}
export const eventOffer1: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/02_game_1_thumbnail%402x.png',
  title: 'NYCFC vs FC Cincinnati',
  description: 'Thursday, June 6 @ 7:00 PM',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy2,
  uri: 'NYCFC-vs-FC-Cincinnati',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_tickets_1_hero%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  addonOffer: addonOfferParent,
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}
export const eventOffer2: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/02_game_2_thumbnail%402x.png',
  title: 'NYCFC vs Philadelphia Union',
  description: 'Saturday, June 29 @ 7:00 PM',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy2,
  uri: 'NYCFC-vs-Philadelphia-Union',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_tickets_1_hero%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  addonOffer: addonOfferParent,
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}
export const eventOffer3: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/02_game_3_thumbnail%402x.png',
  title: 'NYCFC vs Seattle Sounders',
  description: 'Wednesday, Jul 3 @ 7:00 PM',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy2,
  uri: 'NYCFC-vs-Seattle-Sounders',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_tickets_1_hero%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  addonOffer: addonOfferParent,
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}
export const eventOffer4: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/02_game_4_thumbnail%402x.png',
  title: 'NYCFC vs Portland Timbers',
  description: 'Wednesday, Jul 7 @ 7:00 PM',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy2,
  uri: 'NYCFC-vs-Portland-Timbers',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_tickets_1_hero%402x.png'
  ],
  venue: '',
  rewards: eventRewards,
  addonOffer: addonOfferParent,
  items: [eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
}
export const eventOffer5: EventOfferListItem = {
  id: cuid(),
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/02_game_5_thumbnail%402x.png',
  title: 'Manchester City v Leicester City',
  description: 'Monday, May 06 @ 8:00 PM',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy,
  uri: 'Manchester-City-v-Leicester-City',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_tickets_1_hero%402x.png'
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
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/01_home_1_thumbnail%402x.png',
  title: '2019 Single Match tickets',
  description: 'Most popular',
  type: OfferItemType.Event,
  startDate: parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
  details: eventCopy,
  uri: 'matches',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_tickets_1_hero%402x.png'
  ],
  venue: '',
  addonOffer: addonOfferParent,
  rewardCopy: 'Rewards available for bringing 10 friends',
  items: [eventOffer1, eventOffer2, eventOffer3, eventOffer4, eventOffer5]
}

export const hotelOfferItemParent: HotelOffer = {
  id: 'cjftxsxt10001ho8e495ushvr',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/01_home_3_thumbnail%402x.png',
  title: 'NYC Hotels',
  description: 'Midtown, Lower Manhattan, Midtown and more',
  type: OfferItemType.Hotel,
  address: 'New York, NY',
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/05_hotel_1_hero%402x.png'
  ],
  details: hotelCopy,
  uri: 'hotels',
  items: [
    hotelOfferListItem1,
    hotelOfferListItem2,
    hotelOfferListItem3,
    hotelOfferListItem4
  ],
  rewards: hotelRewards,
  // prettier-ignore
  rewardCopy: 'Editors\' Picks'
}

export const merchOfferItemParent: MerchOfferListItem = {
  id: 'cjftxsxt10001ho8e495ushvw',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/01_home_2_thumbnail%402x.png',
  title: 'Official Store',
  description: 'T-shirts, hats, and more',
  // startingPrice: 25,
  type: OfferItemType.Merch,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/07_merch_1_hero%402x.png'
  ],
  details: merchCopy1,
  uri: 'official-merch',
  items: [offerItemMerch, offerItemMerch2, offerItemMerch3, offerItemMerch4]
}

export const offer: AnyOffer = {
  id: 'cjftxsxt10001ho8e495ushve',
  thumbnailImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
  title: 'NYCFC',
  description: '',
  type: OfferItemType.Mixed,
  media: [
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/01_home_1_hero%402x.png'
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
  brandColor: '#6caddf',
  treeTitle: `WHO'S GOING (5)`,
  confirmationTitleCopy: 'Ready for your trip?',
  backgroundImage:
    'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/00_Landing+page%402x.png',
  location: 'Yankee Stadium, Bronx, NY',
  startDate: parse('2019-05-01', 'yyyy-MM-dd', new Date()).toJSON(),
  endDate: parse('2019-07-31', 'yyyy-MM-dd', new Date()).toJSON(),
  offer: offer,
  uri: 'nycfc',
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
