"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const date_fns_1 = require("date-fns");
const cuid = require("cuid");
const eventCopy = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Season Pass Bring-a-Friend</strong>
</span></sup></p> 
<p>&nbsp;</p>

<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Your friends can enjoy exclusive savings 
on admission when they visit Cedar Point or Cedar Point Shores Waterpark with you as a Season 
or Platinum Passholder. Simply present your Season or Platinum Pass at any open ticket window 
to purchase discounted tickets, or save time and buy online. Cedar Point Shores Bring-A-friend
 discounts are only available to Platinum Passholders.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Wild Card</strong>
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Enjoy unlimited admission to A Place 
Like No Other™ for two months with this exclusive offer. Tackle Steel Vengeance, dance your 
boots off at the new Frontier Festival, rev your adrenaline at Monster Jam Thunder Alley and 
explore the new Forbidden Frontier on Adventure Island.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Daily Admission Tickets</strong>
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Discover the best tickets and biggest 
savings for your visit to Cedar Point! Enjoy all of our world-class rides and attractions
 including Steel Vengeance, the "Best New Ride of 2018."</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Two Day, Any Day Ticket</strong>
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Enjoy two visits to Cedar Point and/or
 Cedar Point Shores any two days the parks are open to the public during the 2019 season for 
 one low price! You can even visit both parks both times you visit.</span></sup></p>

<p>&nbsp;</p>
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Bring A Friend Ticket</strong>
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Share in the fun and thrills any day 
the park is open to the public and take advantage of Passholder perks!</span></sup></p>
`;
const eventCopy1 = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Season Pass Bring-a-Friend</strong>
</span></sup></p> 
<p>&nbsp;</p>

<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Your friends can enjoy exclusive savings 
on admission when they visit Cedar Point or Cedar Point Shores Waterpark with you as a Season 
or Platinum Passholder. Simply present your Season or Platinum Pass at any open ticket window
 to purchase discounted tickets, or save time and buy online. Cedar Point Shores Bring-A-friend
  discounts are only available to Platinum Passholders.</span></sup></p>
`;
const eventCopy2 = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Wild Card</strong>
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Enjoy unlimited admission to A Place 
Like No Other™ for two months with this exclusive offer. Tackle Steel Vengeance, dance your 
boots off at the new Frontier Festival, rev your adrenaline at Monster Jam Thunder Alley and
 explore the new Forbidden Frontier on Adventure Island.</span></sup></p>
`;
const eventCopy3 = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Daily Admission Tickets</strong>
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Discover the best tickets and biggest
 savings for your visit to Cedar Point! Enjoy all of our world-class rides and attractions 
 including Steel Vengeance, the "Best New Ride of 2018."</span></sup></p>
`;
const eventCopy4 = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Two Day, Any Day Ticket</strong>
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Enjoy two visits to Cedar Point and/or
 Cedar Point Shores any two days the parks are open to the public during the 2019 season for 
 one low price! You can even visit both parks both times you visit.</span></sup></p>

`;
const eventCopy5 = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Bring A Friend Ticket</strong>
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Share in the fun and thrills any day 
the park is open to the public and take advantage of Passholder perks!</span></sup></p>
`;
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
`;
const comingSoonCopy1 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>PForbidden Frontier on Adventure Island</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">
There’s a completely new land to discover at Cedar Point, and the story starts with YOU! 
Although a celebration of peace is taking place, is everything what it seems? As the day 
unfolds, you’ll have the opportunity to play a role as big or little as you want in this 
immersive living story, with the power to sway the outcome and the fate of Adventure Island 
depending on the choices you make.</span>
</sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">From mind-bending challenges and 
group competitions to secret missions and simple conversation starting – you’ll have to 
figure out who to side with and who to trust. Or simply sit back, grab some provisions 
and watch the action unfold.</span>
</sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">
It’s time to discover and uncover a new adventure like no other!</span>
</sup></p> 

`;
const merchCopy1 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Peanuts Breakfast Buffet</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Break bread with some of your favorite 
Peanuts characters at this fun breakfast buffet!</span>
</sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Enjoy a breakfast buffet alongside 
Snoopy, Charlie Brown, Lucy and all your favorite PEANUTS characters*! Special discount
 available for Platinum/Season Passholders and guests staying at a Cedar Point hotel 
 property.</span>
</sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Stick around after you've filled 
up on yummy food for a photo op that is sure to be a favorite memory from your family's 
visit to the park!</span>
</sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">*Characters may vary.</span>
</sup></p> 
`;
const merchCopy2 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Cedar Point Tee</strong></span></sup></p> 
<p>&nbsp;</p>

<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Poly / Cotton / Rayon Blend
</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Relaxed Fit</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Designed in USA</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Unisex Style
</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Soft Screenprint</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Crewneck t-shirt</span></sup></p>
`;
const merchCopy3 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>
Cedar Point Drink Bottle</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Double Wall Insulation: Featuring </span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Chill-Lock Technology that locks in 
temperature for 24 hours +</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Best Lid Ever: Built for active use! 
The ultimate combination of wide mouth convenience and narrow mouth drinkability (no more unscrewing 
  the entire lid!)</span>
  </sup></p>
  <p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Leakproof Twist Cap: No more spills
</span>
</sup></p>`;
const merchCopy4 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>
Cedar Point Beanie</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• 100% Wool Classic Beanie</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Made in the USA</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Adult 'one size fits most'</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Ribbed cuff can be worn up or down
</span>
</sup></p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">• Hand wash cold, lay flat to dry</span></sup></p>`;
const comingSoonItemCopy1 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Pre-Sale Tickets</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Be the first to adventure before the official 
opening to the public. </span></sup></p> 
`;
const comingSoonItemCopy2 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Forbidden Frontier Opening Weekend</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Be the first to explore the new frontier. 
There’s a completely new land to discover at Cedar Point, and the story starts with YOU! Although
 a celebration of peace is taking place, is everything what it seems? As the day unfolds, you’ll 
 have the opportunity to play a role as big or little as you want in this immersive living story, 
 with the power to sway the outcome and the fate of Adventure Island depending on the choices you 
 make. </span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">It’s time to discover and uncover a new
 adventure like no other!</span></sup></p> 
`;
const comingSoonItemCopy3 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Forbidden Frontier Festival</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Get transported back in time to the glory 
days of yesteryear at the wildest festival in the Midwest!</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Frontier Festival will be filling the streets 
of Frontier Town this June! Sample tasty vittles and thirst quenching belly washers, enjoy rousin' 
fiddle playing, live bluegrass pickin' and nightly square dancing. Kids craftin', pie eatin', lasso 
learnin', crafters and a ton of hoop-de-doo activities round out this sundown sunflower-inspired 
old west street festival.</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">The festivities begin at 4pm with the daily
 keg tapping on Gossip Gulch Stage. Don't miss a minute of finger-lickin', foot stompin' fun. 
 Frontier Festival runs June 7 - 30, 2019.</span></sup></p> 
`;
const hotelCopy = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Hotels Overview</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Vacationing in one of Cedar Point’s 
hotels comes with more fun, more often. It couldn't be easier.
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Since you're staying at Cedar Point, 
it's just a hop between the parks, fun and your room. Every morning you can breeze into one 
of our three amazing theme parks an hour before other guests†. Plus, guests staying at select 
hotels can skip the regular lines at most popular attractions with FREE Forbidden Frontier A
dventure pass.
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Take a look at all the amazing places 
you can stay.</span></sup></p> 
`;
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
Terrace</strong></span></sup></p> 
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
`;
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
`;
const roomCopy2 = `
<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>Queen Room 
Terrace</strong></span></sup></p> 
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
`;
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
`;
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
`;
const merchAddCopy = `
`;
const merchAddCopy1 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Fast Lane Pass</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Make the most of your day with a Fast 
Lane wristband that allows you to bypass the regular lines on more than 20 rides and attractions 
including Rougarou, Millennium Force, Raptor, and more. Ride as many times as you want all day 
long. The only thing we limit is the number of these exclusive passes we sell!
</span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">*Park admission not included.
</span></sup></p> 
`;
const merchAddCopy2 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, 
arial;"><strong>Daily parking</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">All vehicles entering Cedar 
Point’s parking area during the day to drop off or pick up a guest will be charged 
the full parking fee as they enter. Please let the toll booth cashier know you are 
just dropping off or picking up guests. </span></sup></p> 
`;
const merchAddCopy3 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, 
arial;"><strong>Karaoke & PeanutsTM</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">A magical experience, one that blends 
both the fun and the energy of open karaoke with Peanuts and friends.</span></sup></p> 
`;
const merchAddCopy4 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, 
arial;"><strong>Peanuts  TM   Family Movie & Story 
Time with Snoopy</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">Meet and greet with Peanuts and 
friends for story time with the whole family. </span></sup></p> 
<p>&nbsp;</p>
`;
const comingCoonCopy1 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>Forbidden Frontier on Adventure Island</strong></span></sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">There’s a completely new land to 
discover at Cedar Point, and the story starts with YOU! Although a celebration of peace 
is taking place, is everything what it seems? As the day unfolds, you’ll have the opportunity 
to play a role as big or little as you want in this immersive living story, with the power 
to sway the outcome and the fate of Adventure Island depending on the choices you make.</span>
</sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">From mind-bending challenges and 
group competitions to secret missions and simple conversation starting – you’ll have to 
figure out who to side with and who to trust. Or simply sit back, grab some provisions 
and watch the action unfold.</span>
</sup></p> 
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #B9B7B6;">
It’s time to discover and uncover a new adventure like no other!</span>
</sup></p> 

`;
const eventTicket10 = {
    id: 'cjwrxm1hi000101ml6o8q78c9',
    parentId: 'cjwkx9zc2000001jld3nfgymr',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/02_thumbnail_1.png',
    title: 'Adult',
    description: '',
    startingPrice: 114,
    detailTitleCopy: '',
    detailCopy: 'Season Pass Bring-a-Friend Gate Opening Sale',
    type: offerTypes_1.OfferItemType.Event
};
const eventTicket20 = {
    id: 'cjwrxlzld000001ml4iw70zag',
    parentId: 'cjwkx9zc2000001jld3nfgymr',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/02_thumbnail_1.png',
    title: 'Child',
    description: '',
    startingPrice: 109,
    detailTitleCopy: '',
    detailCopy: 'Season Pass Bring-a-Friend Gate Opening Sale',
    type: offerTypes_1.OfferItemType.Event
};
exports.hotelRewards = [
    {
        id: '100',
        name: 'VIP Lounge Access + 3 Course Dinner',
        description: 'When your group book 10 nights',
        threshold: 10,
        thresholdCopy: 'Course'
    },
    {
        id: '101',
        name: 'Steak House Dinner',
        description: 'When your group books 5 nights',
        threshold: 7,
        thresholdCopy: 'Nights'
    },
    {
        id: '102',
        name: 'Free Champagne',
        description: 'When your group books 3 nights',
        threshold: 3,
        thresholdCopy: 'Nights'
    }
];
exports.eventRewards = [
    {
        id: '103',
        name: 'VIP Fast Entrance',
        description: 'When you bring 15 friends',
        threshold: 15,
        thresholdCopy: 'VIP'
    },
    {
        id: '108',
        name: 'Early Access to Forbidden Frontier Adventure Island',
        description: 'When you bring 20 friends',
        threshold: 20,
        thresholdCopy: 'Access'
    },
    {
        id: '109',
        name: 'Three Night Stay at Hotel Breakers',
        description: 'When you bring 50 friends',
        threshold: 50,
        thresholdCopy: 'Hotel'
    }
];
exports.merchRewards = [
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
];
exports.offerItemMerch = {
    id: 'cjwqsq432000701l55roa3vw5',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/merch_thumb_1.png',
    title: 'Peanuts Breakfast Buffet',
    description: '',
    startingPrice: 28,
    type: offerTypes_1.OfferItemType.Merch,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/merch-hero-1.png',
    htmlDescription: merchCopy1,
    productDetails: {
        sizes: []
    }
};
exports.offerItemMerch2 = {
    id: 'cjwqsq2qa000601l5ax1q95ze',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/merch_thumb_2.png',
    title: 'Cedar Point Tee',
    description: '',
    startingPrice: 34.99,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/merch-hero-2.png',
    htmlDescription: merchCopy2,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: {
        colors: [],
        sizes: [
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
            { value: 'xl', label: 'XL' }
        ]
    }
};
exports.offerItemMerch3 = {
    id: 'cjwqsq12x000501l5huj6e4ki',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/merch_thumb_3.png',
    title: 'Cedar Point Drink Bottle',
    description: '',
    startingPrice: 14.95,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/merch-hero-3.png',
    htmlDescription: merchCopy3,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: {
        colors: [],
        sizes: []
    }
};
exports.offerItemMerch4 = {
    id: 'cjwqspyyv000401l5dc7490ud',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/merch_thumb_4.png',
    title: 'Cedar Point Beanie',
    description: '',
    startingPrice: 24.95,
    type: offerTypes_1.OfferItemType.Merch,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/merch-hero-4.png',
    htmlDescription: merchCopy4,
    productDetails: {
        colors: [],
        sizes: [
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
            { value: 'xl', label: 'XL' }
        ]
    }
};
exports.offerAddOnMerch = {
    id: 'cjwqs6mdl000301l52hx1f04p',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/add-on-thumb-1.png',
    title: 'Fast Lane Pass',
    description: '',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/add-on-hero-1.png',
    htmlDescription: merchAddCopy1,
    startingPrice: 65,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerAddOnMerch2 = {
    id: 'cjwqs6ktg000201l57uavfsve',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/add-on-thumb-2.png',
    title: 'Daily parking',
    description: 'Self-parking after 6 pm for all guests',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/add-on-hero-2.png',
    htmlDescription: merchAddCopy2,
    startingPrice: 25,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerAddOnMerch3 = {
    id: 'cjwqs6j5r000101l571je7mnx',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/add-on-thumb-3.png',
    title: 'Karaoke & PeanutsTM',
    description: 'Karaoke with Peanuts & friends',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/add-on-hero-3.png',
    htmlDescription: merchAddCopy3,
    startingPrice: 45,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerAddOnMerch4 = {
    id: 'cjwqs6h5o000001l537xhbkx9',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/add-on-thumb-4.png',
    title: 'Peanuts Family Movie & Story Time with Snoopy',
    description: 'Premium Section',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/add-on-hero-4.png',
    htmlDescription: merchAddCopy4,
    startingPrice: 18,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.addonOfferParent = {
    id: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/ticket_thumbnail.png',
    title: 'Add-Ons',
    description: '',
    type: offerTypes_1.OfferItemType.Merch,
    details: merchAddCopy1,
    uri: 'add-ons',
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/add-on-hero-1.png'
    ],
    rewardCopy: '',
    items: [exports.offerAddOnMerch, exports.offerAddOnMerch2, exports.offerAddOnMerch3, exports.offerAddOnMerch4]
};
exports.hotelOfferItem1 = {
    id: 'cjv59glyh000901l5egq97nnr',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel-thumb-1.png',
    title: 'King Room Sky',
    description: '',
    startingPrice: 149,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel-room-hero-2.png',
    htmlDescription: roomCopy1,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferItem2 = {
    id: 'cjv5cemrr000001jngv6ebhm6',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel-thumb-2.png',
    title: 'Queen Room Terrace',
    description: '',
    startingPrice: 209,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel-room-hero-3.png',
    htmlDescription: roomCopy2,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferItem3 = {
    id: 'cjv59gxlq000a01l54qplfmdu',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel-thumb-3.png',
    title: 'Queen Room City',
    description: '',
    startingPrice: 269,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel-room-hero-4.png',
    htmlDescription: roomCopy3,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferItem4 = {
    id: 'cjv59h2lq000b01l59delh6k7',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel-thumb-4.png',
    title: 'Bunk Room',
    description: '',
    startingPrice: 119,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel-room-hero-5.png',
    htmlDescription: roomCopy4,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferListItem1 = {
    id: cuid(),
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel_thumbnail_1.png',
    title: 'Hotel Breakers at Cedar Point',
    description: 'On location',
    address: '',
    startingPrice: 119,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel-room-hero-2.png'
    ],
    details: roomCopy1,
    uri: 'Hotel-Breakers-at-Cedar-Point',
    rewards: exports.hotelRewards,
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3, exports.hotelOfferItem4]
};
exports.hotelOfferListItem2 = {
    id: cuid(),
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel_thumbnail_2.png',
    // prettier-ignore
    title: 'Cedar Point\'s Express Hotel',
    description: 'Prime Value Hotels',
    address: '',
    startingPrice: 119,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel-room-hero-2.png'
    ],
    details: roomCopy1,
    uri: 'Cedar-Points-Express-Hotel',
    rewards: exports.hotelRewards,
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3, exports.hotelOfferItem4]
};
exports.hotelOfferListItem3 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/05_hotel_3_thumbnail%402x.png',
    title: 'Baymont by Wyndham Sandusky',
    description: 'Premier Hotels',
    address: '',
    startingPrice: 119,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel-room-hero-2.png'
    ],
    details: roomCopy1,
    uri: 'Baymont-by-Wyndham-Sandusky',
    rewards: exports.hotelRewards,
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3, exports.hotelOfferItem4]
};
exports.hotelOfferListItem4 = {
    id: cuid(),
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel_thumbnail_4.png',
    title: 'Great Wolf Lodge',
    description: '',
    address: '',
    startingPrice: 119,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/hotel-room-hero-2.png'
    ],
    details: roomCopy1,
    uri: 'Great-Wolf-Lodge',
    rewards: exports.hotelRewards,
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3, exports.hotelOfferItem4]
};
// export const eventOfferItem: EventOfferItem = {
//   id: 'cjwkx9zc2000001jld3nfgymr',
//   parentId: 'cjftxsxt10001ho8e495ushvq',
//   thumbnailImage:
//     'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/02_thumbnail_1.png',
//   title: 'Season Pass Bring-a-Friend Gate Opening Sale',
//   description: '',
//   startingPrice: 114,
//   type: OfferItemType.Event,
//   htmlDescription: eventCopy1,
//   media:
//     'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/ticket-hero-1.png'
// }
exports.eventOfferItem = {
    id: 'cjwkx9zc2000001jld3nfgymr',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/02_thumbnail_1.png',
    title: 'Season Pass Gate Opening Sale',
    description: '',
    startingPrice: 114,
    offerItems: [eventTicket10, eventTicket20],
    type: offerTypes_1.OfferItemType.ManyOptions
};
const eventOfferItem1 = {
    id: 'cjwkxa45l000101jl2x8h7fon',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/02_thumbnail_2.png',
    title: 'Wild Card',
    description: '',
    startingPrice: 59.99,
    type: offerTypes_1.OfferItemType.Event,
    htmlDescription: eventCopy2,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/ticket-hero-2.png'
};
const eventOfferItem2 = {
    id: 'cjwkxa84p000201jlgnh52680',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/02_thumbnail_3.png',
    title: 'Daily Admission Tickets',
    description: '',
    startingPrice: 49.99,
    type: offerTypes_1.OfferItemType.Event,
    htmlDescription: eventCopy3,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/ticket-hero-3.png'
};
const eventOfferItem3 = {
    id: 'cjwkxabnf000301jleprucyk6',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/02_thumbnail_4.png',
    title: 'Two Day, Any Day Ticket',
    description: '',
    startingPrice: 79.99,
    type: offerTypes_1.OfferItemType.Event,
    htmlDescription: eventCopy4,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/ticket-hero-4.png'
};
const eventOfferItem4 = {
    id: 'cjv59fk4q000301l5e7sqcaq4',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/02_thumbnail_5.png',
    title: 'Bring A Friend Ticket',
    description: '',
    startingPrice: 39.99,
    type: offerTypes_1.OfferItemType.Event,
    htmlDescription: eventCopy5,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/ticket-hero-5.png'
};
exports.eventOfferItem1Alt = {
    id: 'cjwkxo71o000401jl46ht7bf4',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_ticket_2_thumbnail%402x.png',
    title: 'Bring A Friend Ticket',
    description: '',
    startingPrice: 35,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem2Alt = {
    id: 'cjv5affuf000201migi9s0q9v',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_ticket_3_thumbnail%402x.png',
    title: 'Section 124',
    description: '',
    startingPrice: 54,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem3Alt = {
    id: 'cjv5afc1r000101micivf6y1y',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_ticket_2_thumbnail%402x.png',
    title: 'Section 106',
    description: '',
    startingPrice: 57,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem4Alt = {
    id: 'cjv5aflte000301miga2427s5',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-mancity/03_ticket_4_thumbnail%402x.png',
    title: 'Section 126',
    description: '',
    startingPrice: 64,
    type: offerTypes_1.OfferItemType.Event
};
exports.comingSoonOfferItem1 = {
    id: 'cjwqsqs3d000a01l53ci0h0dr',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/coming-soon_thumb_1.png',
    title: 'Pre-Sale Tickets',
    description: 'Be the first to adventure before the official opening to the public',
    startingPrice: 78,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/comingSoon-hero-1.png',
    type: offerTypes_1.OfferItemType.Merch,
    htmlDescription: comingSoonItemCopy1,
    productDetails: { colors: [], sizes: [] }
};
exports.comingSoonOfferItem2 = {
    id: 'cjwqsqqn9000901l57l759vtw',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/coming-soon_thumb_2.png',
    title: 'Forbidden Frontier Opening Weekend',
    description: '',
    startingPrice: 79,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/comingSoon-hero-2.png',
    type: offerTypes_1.OfferItemType.Merch,
    htmlDescription: comingSoonItemCopy2,
    productDetails: { colors: [], sizes: [] }
};
exports.comingSoonOfferItem3 = {
    id: 'cjwqsqneo000801l5ggckedyl',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/coming-soon_thumb_3.png',
    title: 'Forbidden Frontier Festival',
    description: '',
    startingPrice: 40,
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/comingSoon-hero-3.png',
    type: offerTypes_1.OfferItemType.Merch,
    htmlDescription: comingSoonItemCopy3,
    productDetails: { colors: [], sizes: [] }
};
exports.eventOffer5 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/02_game_5_thumbnail%402x.png',
    title: 'Manchester City v Leicester City',
    description: 'Monday, May 06 @ 8:00 PM',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy,
    uri: 'Manchester-City-v-Leicester-City',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/03_tickets_1_hero%402x.png'
    ],
    venue: '',
    rewards: exports.eventRewards,
    items: [
        exports.eventOfferItem1Alt,
        eventOfferItem2Alt,
        eventOfferItem3Alt,
        eventOfferItem4Alt
    ]
};
exports.eventOfferItemParent = {
    id: cuid(),
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/01_home_thumbnail_1.png',
    title: 'Tickets & Packages',
    description: 'Most popular',
    type: offerTypes_1.OfferItemType.Event,
    startDate: '',
    endDate: '',
    details: eventCopy3,
    uri: 'matches',
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/01_home_hero_2.png'
    ],
    venue: '',
    addonOffer: exports.addonOfferParent,
    rewardCopy: 'Rewards available when you invite 10 friends',
    rewards: exports.eventRewards,
    items: [eventOfferItem2, eventOfferItem1, eventOfferItem3, exports.eventOfferItem]
};
exports.hotelOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/01_home_thumbnail_2.png',
    title: 'Hotels',
    description: '',
    type: offerTypes_1.OfferItemType.Hotel,
    address: '',
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/01_home_hero_2.png'
    ],
    details: hotelCopy,
    uri: 'hotels',
    items: [
        exports.hotelOfferListItem1,
        exports.hotelOfferListItem2,
        exports.hotelOfferListItem3,
        exports.hotelOfferListItem4
    ],
    rewards: exports.hotelRewards,
    // prettier-ignore
    rewardCopy: 'Best Value Today'
};
exports.merchOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/01_home_thumbnail_3.png',
    title: 'Cedar Point Marina Shop',
    description: '',
    // startingPrice: 25,
    type: offerTypes_1.OfferItemType.Merch,
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/01_home_hero_3.png'
    ],
    details: merchCopy1,
    uri: 'official-merch',
    items: [exports.offerItemMerch, exports.offerItemMerch2, exports.offerItemMerch3, exports.offerItemMerch4]
};
exports.comingSoonOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvd',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/01_home_thumbnail_4.png',
    title: 'Forbidden Frontier on Adventure Island Coming in 2019',
    description: '',
    // startingPrice: 25,
    type: offerTypes_1.OfferItemType.Merch,
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/01_home_hero_5.png'
    ],
    details: comingCoonCopy1,
    uri: 'coming-soon',
    items: [exports.comingSoonOfferItem1, exports.comingSoonOfferItem2, exports.comingSoonOfferItem3]
};
exports.offer = {
    id: 'cjftxsxt10001ho8e495ushve',
    thumbnailImage: '',
    title: 'Cedar Point',
    description: '',
    type: offerTypes_1.OfferItemType.Mixed,
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/01_home_hero_1.png'
    ],
    details: '',
    uri: 'offers',
    rewards: exports.eventRewards,
    items: [
        exports.eventOfferItemParent,
        exports.hotelOfferItemParent,
        exports.merchOfferItemParent,
        exports.comingSoonOfferItemParent
    ]
};
exports.offerPage = {
    id: cuid(),
    brandColor: '#004DA4',
    treeTitle: `WHO'S GOING (5)`,
    confirmationTitleCopy: 'Ready for your trip?',
    backgroundImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-cedar-point/00_Landing_page.png',
    location: '1 Cedar Point Drive, Sandusky, OH 44870',
    startDate: '',
    endDate: '',
    offer: exports.offer,
    uri: 'cedar-point',
    shareTitle: 'Now share this page with friends',
    shareOrderTitle: 'Get ready for your trip!',
    emptyCheckoutTitle: 'Pay Separately, Get Together',
    emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
    isNeedToShowTax: true,
    leaderboardImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/09_leaderboard_NYCFC.gif',
    progressImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/10_reward_progress.svg',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/10_reward_illustration.svg',
    orderSummaryTitle: 'Booking',
    shareDetailsCopy: `Want more friends to join you? They will see
  your group itinerary and can book their own trip. You’ll get bigger rewards by growing your group!`
};
