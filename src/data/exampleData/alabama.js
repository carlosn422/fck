"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const guid_1 = require("utils/guid");
const createSlug = title => title
    .toLowerCase()
    .replace(/"|“|”/g, '')
    .replace(/,/g, '')
    .replace(/ /g, '-')
    .replace('&-', '');
const formatCopy = copy => copy
    .split('|')
    .filter(Boolean)
    .map((item, i) => {
    if (i === 0) {
        return `<p style="font-size: 16pt;font-family:SharpSans,
arial;font-weight:bold;margin-bottom: .5em;color:#A60D35;">${item}</p>`;
    }
    else {
        return `<div">
<p>${item}</p>
<p>&nbsp;</p>
`;
    }
})
    .join('');
const formatCopyWithList = (copy, details) => copy
    .split('|')
    .filter(Boolean)
    .map((item, i) => {
    if (i === 0) {
        const [title, rest] = item.split('[');
        const [quote, person] = rest.split('-');
        return `<p style="font-size: 16pt;font-family:SharpSans,
arial;font-weight:bold;margin-bottom: .5em;color:#A60D35;">${title}</p>
<div style="display: flex; align-items: flex-start;margin-bottom: 1rem;">
  
  <img src="https://fevo-fuc.s3.amazonaws.com/assets-virgin/person.png" 
  style="width: 50px;margin-right: 1rem;"/>
  
  <p style="margin: 0;">
    “${quote}”<small 
    style="color:#5a5f73;white-space: nowrap;"> – ${person}</small>
  </p>
</div>`;
    }
    else {
        return `<div style="font-size: 11pt; color: #908f8f;">
<p>${item}</p>
<p>&nbsp;</p>
`;
    }
})
    .join('').concat(`
    <div style="display:flex;font-size: 11pt; color: #908f8f;">
    ${details}
  </div>
    `);
const offerLandingCopy = formatCopy(`<h2 style="color: #A60D35;">Crimson Tide Foundation</h2>
<p>Alabama Athletics is committed to providing the highest quality game-day experience for 
everyone attending an event at Bryant-Denny Stadium. Every renovation or expansion of Bryant-Denny 
has provided additional opportunities for an enhanced game-day experience.</p>
<p>&nbsp;</p>
<p>Bryant-Denny Stadium is one of the most iconic facilities on The University of Alabama campus 
and, as such, will be among the featured capital projects in The Crimson Standard.</p>
<p>&nbsp;</p>
<div style="display:flex; color: #A60D35;">
  <img src="https://fevo-fuc.s3.amazonaws.com/assets-alabama/Coach+dude.png" style="align-self: flex-start;">
  <p style="margin: 0 1em;">"To reinvest in the players and the programs here, to make Alabama's 
  athletic programs continue to be great in the future is a sacrifice that we all need to make. 
  We all want to have success, and we can't get complacent about what we've been able to accomplish 
  in the past. We have to look forward to what we need to do in the future." -- Nick Saban</p>
</div>
<p>&nbsp;</p>
<p>Enhancements to Bryant-Denny Stadium will include:</p>
<p>&nbsp;</p>
<ul style="list-style-type: disc;padding-left: 20px;">
<li>Renovation and expansion of multiple seating areas to include three new club areas and the 
addition of 3,826 new premium seats</li>
<li>The addition of Loge Boxes, new skyboxes on the east U1 level and west side Founders Suites, 
as well as a complete renovation of all existing skyboxes</li>
<li>A relocated press box</li>
<li>Improvements to all team areas including the locker room and tunnel</li>
<li>Renovated recruiting areas</li>
<li>Expanded concourses to allow for better traffic flow as all fans enter and exit the stadium</li>
<li>Renovated concession areas and main concourses to provide an improved game-day experience for 
fans at Bryant-Denny Stadium</li>
</ul>
`);
const logeCopy = formatCopy(`<h2 style="color: #A60D35;">Loge Box</h2>
<p>&nbsp;</p>
<p>Fifty-four loge boxes on the west U1 level of Bryant-Denny Stadium will offer a semi-private 
gameday experience with ample room for entertaining guests. Each loge box will seat four and offers 
sideline views from the end zones to 15-yard lines. The loge boxes are the only seating option in 
Bryant-Denny Stadium that includes all-inclusive in-seat food and beverage service.</p>
<p>&nbsp;</p>

<h3>Amenities</h3>
<ul style="list-style-type: disc;padding-left: 20px;">
<li>Covered outdoor seating for four</li>
<li>Comfortable, rolling chairs</li>
<li>In-seat upscale food &amp; beverage service</li>
<li>Dedicated hospitality attendant</li>
<li>In-box televisions &amp; beverage well</li>
<li>Access to the Terrace Club patio lounge &amp; point-of-sale alcohol</li>
<li>Private restrooms</li>
<li>Designated stadium entry</li>
<li>Reserved parking (location determined by Tide Totals priority points)</li>
</ul>
<p>&nbsp;</p>

<p><i>Renderings are conceptual and subject to change. All projects are subject to approval of The 
University of Alabama Board of Trustees, presidential approval and fundraising success.</i></p>
`);
const championsCopy = formatCopy(`<h2 style="color: #A60D35;">Champions Club</h2>
<p>&nbsp;</p>
<p>The Champions Club will be located on the U2 level on the west side of Bryant-Denny Stadium 
and offer sideline views from the end zone to 25-yard lines. Champions Club patrons will enjoy 
an all-inclusive catered buffet in the enclosed, air-conditioned club. Ticket holders will have
 access to alcohol storage lockers and a pouring room inside the club.</p>
 <p>&nbsp;</p>
 <h3>Amenities</h3>
 <ul style="list-style-type: disc;padding-left: 20px;">
<li>Covered, outdoor stadium seating</li>
<li>Cushioned, chairback seats</li>
<li>Access to climate-controlled club with dining seating</li>
<li>All-inclusive catered buffet &amp; non-alcoholic beverages</li>
<li>Alcohol storage lockers &amp; pouring room</li>
<li>Private restrooms</li>
<li>Designated stadium entry</li>
<li>Reserved parking (location determined by Tide Totals priority points)</li>
<li>Renderings are conceptual and subject to change.</li>
</ul>
<p>&nbsp;</p>
<p><em>All projects are subject to approval of The University of Alabama Board of Trustees, 
presidential approval and fundraising success.</em></p>
`);
const terraceCopy = formatCopy(`<h2 style="color: #A60D35;">Terrace Club</h2>
<p>&nbsp;</p>
<p>The Terrace Club will be located on the U1 level on the west side of Bryant-Denny Stadium. 
Terrace Club patrons will enjoy covered stadium seating with sideline views from the 15- to 
25-yard lines and access to an open-air patio with point-of-sale alcohol, modern lounge seating,
 and all-inclusive premium concessions.</p>
 <p>&nbsp;</p>
<h2>Amenities</h2>
<ul style="list-style-type: disc;padding-left: 20px;">
<li>Covered outdoor stadium seating</li>
<li>Cushioned chairback seats</li>
<li>Access to open-air patio club with lounge seating</li>
<li>All-inclusive premium concessions &amp; non-alcoholic beverages</li>
<li>Point-of-sale alcohol</li>
<li>Private restrooms</li>
<li>Designated stadium entry</li>
<li>Reserved parking (location determined by Tide Totals priority points)</li>
</ul>
<p>&nbsp;</p>
<p><em>Renderings are conceptual and subject to change. All projects are subject to approval of 
The University of Alabama Board of Trustees, presidential approval and fundraising success.</em></p>
`);
const northFieldCopy = formatCopy(`<h2 style="color: #A60D35;">North Field Club</h2>
<p>&nbsp;</p>
<p>North Field Club access offers each pass holder a unique game-day experience in the 
north end zone of Bryant-Denny Stadium with the nearest proximity to the action on the 
field. The field-level patio places each North Field Club member in the heart of the 
action and provides an unparalleled field-level view. The climate-controlled club 
provides premium food and beverage options, including access to alcohol, with covered 
seating and access to the field-level patio. Club members have the opportunity to enjoy
 the hospitality of the North Field Club throughout game day. Member-only access extends 
 from pre-game, throughout the game and even post-game to celebrate Crimson Tide victories 
 at field level. North Field Club membership can be added to your season ticket regardless 
 of your seat location in Bryant-Denny Stadium, turning any seat into a premium experience.</p>
<p>&nbsp;</p>
<p>Season tickets with TIDE PRIDE membership is required to add North Field Club membership.</p>
<p>&nbsp;</p>
<p><em>Renderings are conceptual and subject to change. All projects are subject to approval of 
The University of Alabama Board of Trustees, presidential approval and fundraising success.</em></p>

`);
const scholarshipCopy = formatCopy(`
The Crimson Tide Scholarship Fund (CTSF)|
The Crimson Tide Scholarship Fund (CTSF) provides UA Athletics with annual scholarship support
 for our student-athletes. UA Athletics currently funds approximately $19 million annually for 
 more than 500 student-athlete scholarships in 21 sports. Funds raised through the CTSF go 
 directly to student-athlete scholarships, thereby offsetting the overall scholarship funding 
 needed for the Athletics Department. Until such time that the scholarship endowment is fully 
 funded, the CTSF is imperative to helping fund our student-athletes' scholarships.|
While some costs are paid with funds generated from ticket sales, sales of licensed merchandise, 
media rights, and other event-driven revenue, private funding of scholarships is necessary to 
provide our student-athletes with the best opportunities for learning and personal growth at The 
University of Alabama. For every dollar contributed to this fund, UA Athletics is able to direct 
revenue to other priority areas of need for the Department to maximize our competitive advantage 
on and off the playing field.|
Your contributions to the Crimson Tide Scholarship Fund can help provide a student-athlete a 
once-in-a-lifetime opportunity to become a member of the Crimson Tide. Costs associated with tuition, 
fees, books and room and board continue to rise. For the University of Alabama to maintain its ranking 
among the elite collegiate athletic programs, it is vital to build a healthy annual scholarship fund. 
Please consider supporting our student-athletes through the Crimson Tide Scholarship Fund.
`);
const introCopy = formatCopy(`
Crimson Tide Foundation|
Alabama Athletics has a legendary reputation for excellence and championship programs. In order to 
maintain and build upon this reputation and to ensure the Crimson Tide remains at the forefront of 
collegiate athletics, Alabama Athletics is embarking on a ten-year, $600 million initiative.|
The Crimson Standard: A Capital Initiative for Alabama Athletics will transform our facilities and 
provide the environment necessary to recruit and train the best student-athletes and position our 
programs as nationally competitive in the future.|
Nearly every facility within the Athletics Department will be enhanced and some will be completely 
renovated and modernized. Three of the highlights of The Crimson Standard will be Bryant-Denny Stadium, 
Coleman Coliseum and the Mal M. Moore Athletic Facility.|
In addition to significant capital improvements, emphasis will be placed on the Crimson Tide Scholarship 
Fund (the annual scholarship fund) and scholarship endowment. Securing scholarship support will be vital 
to the financial health of Alabama Athletics.|
All projects are subject to approval of The University of Alabama Board of Trustees, presidential approval 
and fundraising success.
`);
exports.offerItem1 = {
    id: 'ck34whgk40001mflsq8j0rxzr',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_loge_Capital%402x.png',
    title: 'Loge Box Capital Gift',
    description: '4 Seats | Payable up to 5 years',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_loge_Capital%402x.png',
    htmlDescription: logeCopy,
    startingPrice: 150000,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerItem2 = {
    id: 'ck34whgk40002mflsjve1ikxk',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_loge+Tide%402x.png',
    title: 'Loge Box Tide Pride Commitment',
    description: '4 Seats | 5 Year Term',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_loge+Tide%402x.png',
    htmlDescription: logeCopy,
    startingPrice: 16000,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerItem3 = {
    id: 'ck34whgk40003mflsxhmalxj1',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_Champions_Capital%402x.png',
    title: 'Champions Club Capital Gift',
    description: 'Per Seat | Payable up to 5 years',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_Champions_Capital%402x.png',
    htmlDescription: championsCopy,
    startingPrice: 10000,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerItem4 = {
    id: 'ck34whgk40004mfls6lvt898i',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_Champions_Tide%402x.png',
    title: 'Champions Club Tide Pride Commitment',
    description: 'Per seat | 5 Year Term',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_Champions_Tide%402x.png',
    htmlDescription: championsCopy,
    startingPrice: 3500,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerItem5 = {
    id: 'ck34whgk40005mflslwh3rxx5',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_Hero_Terrace_Capital%402x.png',
    title: 'Terrace Club Capital Gift',
    description: 'Per Seat | Payable up to 5 years',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_Hero_Terrace_Capital%402x.png',
    htmlDescription: terraceCopy,
    startingPrice: 10000,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerItem6 = {
    id: 'ck34whgk40006mflsuvgxgnw7',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_Hero_Terrace_Tide%402x.png',
    title: 'Terrace Club Tide Pride Commitment',
    description: 'Per seat | Payable Annually',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_Hero_Terrace_Tide%402x.png',
    htmlDescription: terraceCopy,
    startingPrice: 2750,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerItem7 = {
    id: 'ck34whgk40007mflsn3rs0wqy',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_Hero_NorthField_Tide%402x.png',
    title: ' North Field Club Tide Pride Commitment',
    description: 'Per Pass | Payable Annually',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_Hero_NorthField_Tide%402x.png',
    htmlDescription: northFieldCopy,
    startingPrice: 2250,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.donationItem1 = {
    id: 'ck3eyzebi0000gsls0hrzcssx',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    title: 'Crimson Tide Scholarship Contribution',
    description: '',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    htmlDescription: scholarshipCopy,
    startingPrice: 25,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.donationItem2 = {
    id: 'ck3eyzebi0001gsls9x196bfi',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    title: 'Crimson Tide Scholarship Contribution',
    description: '',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    htmlDescription: scholarshipCopy,
    startingPrice: 50,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.donationItem3 = {
    id: 'ck3eyzebi0002gsls0kh86gt9',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    title: 'Crimson Tide Scholarship Contribution',
    description: '',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    htmlDescription: scholarshipCopy,
    startingPrice: 100,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.donationItem4 = {
    id: 'ck3eyzebi0003gslsc725hfcg',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    title: 'Crimson Tide Scholarship Contribution',
    description: '',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    htmlDescription: scholarshipCopy,
    startingPrice: 500,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.donationItem5 = {
    id: 'ck3eyzebi0004gslsesa190at',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    title: 'Crimson Tide Scholarship Contribution',
    description: '',
    media: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    htmlDescription: scholarshipCopy,
    startingPrice: 1000,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.capital = {
    id: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    title: 'Boxes',
    description: 'Premium seating for game-day',
    type: offerTypes_1.OfferItemType.Merch,
    details: offerLandingCopy,
    uri: createSlug('capital'),
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png'
    ],
    items: [
        exports.offerItem1,
        exports.offerItem2,
        exports.offerItem3,
        exports.offerItem4,
        exports.offerItem5,
        exports.offerItem6,
        exports.offerItem7
    ]
};
exports.donations = {
    id: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    title: 'Donations',
    description: 'Annual scholarship support for our student-athletes',
    type: offerTypes_1.OfferItemType.Merch,
    details: scholarshipCopy,
    uri: createSlug('donations'),
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png'
    ],
    items: [
        exports.donationItem1,
        exports.donationItem2,
        exports.donationItem3,
        exports.donationItem4,
        exports.donationItem5
    ]
};
exports.offer = {
    id: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png',
    title: 'Crimson Tide Foundation',
    description: '',
    type: offerTypes_1.OfferItemType.Merch,
    details: introCopy,
    uri: createSlug('Crimson Tide Foundation'),
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_hero_landing%402x.png'
    ],
    items: [exports.donations, exports.capital]
};
exports.offerPage = {
    id: guid_1.default(),
    brandColor: '#A60D35',
    offer: exports.offer,
    uri: createSlug('Crimson Tide Foundation'),
    treeTitle: `WHO'S GOING (5)`,
    isNeedToShowTax: true,
    shareOrderTitle: 'Get ready for your trip!',
    shareTitle: 'Now share this page with friends',
    confirmationTitleCopy: 'Ready for your trip?',
    emptyCheckoutTitle: 'Donate Together, Grow Together.',
    emptyCheckoutDescription: 'Contribute to the Crimson Tide Foundation.',
    backgroundImage: 'https://fevo-fuc.s3.amazonaws.com/assets-alabama/1_Crimson_background_image%402x.png',
    leaderboardImage: 'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Leaderboard.png',
    progressImage: 'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/8_MGM_Confirmation_reward progress.svg',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/8_MGMConfirmation_rewards.svg',
    orderSummaryTitle: 'Booking',
    shareDetailsCopy: `Want more friends to join you? They will see
  your group itinerary and can book their own trip. You’ll get bigger rewards by growing your group!`
};
