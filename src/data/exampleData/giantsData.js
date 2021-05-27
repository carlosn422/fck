"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const date_fns_1 = require("date-fns");
const cuid = require("cuid");
const eventCopy = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Details</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Join the San Francisco Giants for a fun-filled outing at
AT&T Park on June 18th as the Giants take on the Miami Marlins. </span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Get tickets for $5.01 for
upcoming games. Brought to you by Levi's®.
More Info - Limit of 8 tickets per order. Offer valid Tuesday, May 1st 10AM PT to 10PM PT. Subject to availability.
 </span></sup></p>`;
const merchCopy1 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;">
<strong>San Francisco Giants Hat</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Celebrate that team that's
always had a special place in your heart with this one-of-a-kind Authentic Collection
 On Field low profile 59FIFTY fitted hat from New Era. You'll feel like the most die-hard
 San Francisco Giants supporter when you promote them in this incredible cap all season long!</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Material: 100% Polyester</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Mid Crown</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Structured fit</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Curved bill</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Adjustable hook and loop fastener strap</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Woven team tag sewn-on to back closure strap</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Six panel construction
with embroidered eyelets</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Raised embroidery</span></sup></p>`;
const merchCopy2 = `<p><sup><span style=
"font-size: 16pt;font-family:SharpSans, arial;"><strong>San Francisco Giants Jersey</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color:
#908f8f;">• Material: 100% Polyester</span></sup></p>
<p><sup><span style="font-size: 11pt; color:
#908f8f;">• Cool Base ® technology is made with
interlocking moisture-wicking fabric for a lightweight, breathable feel</span></sup></p>
<p><sup><span style="font-size: 11pt; color:
#908f8f;">• Customized with stitched twill graphics</span></sup></p>
<p><sup><span style="font-size: 11pt; color:
#908f8f;">• Due to MLB regulations items cannot
be customized with retired/former players, player nicknames/full names,
fictional characters or team announcers/staff</span></sup></p>
<p><sup><span style="font-size: 11pt; color:
#908f8f;">• Heat-sealed MLB Authentic Collection jock tag about left hem</span></sup></p>`;
const merchCopy3 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Food Voucher for beer/soda + hot dog</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">AT&T
Park in San Francisco has the top-rated hot dog out of all of the Major
League Baseball stadiums, according to our new research about fan experience.
Why? Because the park offers a variety of different hot dogs – from fancy, bacon-wrapped
hot dogs to the most basic ones. </span></sup></p>`;
const merchCopy4 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>AT&T Park Parking</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Pier 48 - $40 (cash only)</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Pier 48 - Oversize Bus Stalls $80 (cash only)</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Lot C - $40 (cash only)</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Pier 30 - $40 (cash only)</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">*all
rates are regular season only and are subject to change for the postseason</span></sup></p>
`;
exports.eventRewards = [
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
];
exports.merchRewards = [
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
];
exports.eventOfferItem = {
    id: 'cjftxsxt10004ho8e20e200zz',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_2_event+tickets.png',
    title: 'Section 207',
    description: '',
    startingPrice: 21,
    additionalMedia: `https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Giants_Tickets_1_Seatmap%402x.png`,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem1 = {
    id: 'cjftxsxt10005ho8eb1pjiyzx',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_2_event+tickets.png',
    title: 'Section 221',
    description: '',
    startingPrice: 25,
    additionalMedia: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Giants_Tickets_2_Seatmap%402x.png',
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem2 = {
    id: 'cjftxsxt10006ho8evph6c1zc',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_2_event+tickets.png',
    title: 'Section 126',
    additionalMedia: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Giants_Tickets_3_Seatmap%402x.png',
    description: '',
    startingPrice: 30,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem3 = {
    id: 'cjftxsxt10006ho8evph6c1zv',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_2_event+tickets.png',
    title: 'Section 106',
    description: '',
    additionalMedia: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Giants_Tickets_4_Seatmap%402x.png',
    startingPrice: 40,
    type: offerTypes_1.OfferItemType.Event
};
exports.offerItemMerch = {
    id: 'cjftxsxt10007ho8e0cnancqq',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_3_addons_1.png',
    title: 'San Francisco Giants Hat',
    description: 'Most popular',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Addons_1_Hero%402x.png',
    htmlDescription: merchCopy1,
    startingPrice: 15,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerItemMerch2 = {
    id: 'cjftxsxt10008ho8en7lr73qw',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_3_addons_2.png',
    title: 'San Francisco Giants Jersey',
    description: 'Gift Guide',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Addons_2_Hero%402x.png',
    htmlDescription: merchCopy2,
    startingPrice: 35,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] },
    additionalDescription: ''
};
exports.offerItemMerch3 = {
    id: 'cjftxsxt1000aho8e4ps2xpqe',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_3_addons_3.png',
    title: 'Food Voucher for beer/soda + hot dog',
    description: 'Best Value Today',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Addons_3_Hero%402x.png',
    htmlDescription: merchCopy3,
    startingPrice: 15,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] },
    additionalDescription: ''
};
exports.offerItemMerch4 = {
    id: 'cjftxsxt1000aho8e4ps2xpqr',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_3_addons_4.png',
    title: 'AT&T Park Parking',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Addons_4_Hero%402x.png',
    htmlDescription: merchCopy4,
    description: 'Exclusive Deal',
    startingPrice: 18,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.addonOfferParent = {
    id: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/ticket_thumbnail.png',
    title: 'Giants Add-Ons',
    description: '',
    type: offerTypes_1.OfferItemType.Merch,
    details: merchCopy1,
    uri: 'add-ons',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Addons_1_Hero%402x.png'
    ],
    rewards: exports.eventRewards,
    rewardCopy: 'test test',
    items: [exports.offerItemMerch, exports.offerItemMerch2, exports.offerItemMerch3, exports.offerItemMerch4]
};
exports.eventOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_1%402.png',
    title: `San Francisco Giants vs Miami Marlins - Levi's 501`,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy,
    uri: 'tickets',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/left+pic_2_event%402x.png'
    ],
    venue: '',
    rewards: exports.eventRewards,
    addonOffer: exports.addonOfferParent,
    rewardCopy: '',
    items: [exports.eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
};
exports.eventOfferItemParent1 = {
    id: 'cjftxsxt10001ho8e495ushva',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_2%402.png',
    title: `San Francisco vs Cincinnati Reds - Levi's 501`,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy,
    uri: 'tickets',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/left+pic_2_event%402x.png'
    ],
    venue: '',
    rewards: exports.eventRewards,
    addonOffer: exports.addonOfferParent,
    rewardCopy: '',
    items: [exports.eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
};
exports.eventOfferItemParent2 = {
    id: 'cjftxsxt10001ho8e495ushvs',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_3%402.png',
    title: `San Francisco Giants vs Arizona Diamondbacks - Levi's 501`,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy,
    uri: 'tickets',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/left+pic_2_event%402x.png'
    ],
    venue: '',
    rewards: exports.eventRewards,
    addonOffer: exports.addonOfferParent,
    rewardCopy: '',
    items: [exports.eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
};
exports.eventOfferItemParent3 = {
    id: 'cjftxsxt10001ho8e495ushvd',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_4%402.png',
    title: `San Francisco Giants vs San Diego Padres - Levi's 501`,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy,
    uri: 'tickets',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/left+pic_2_event%402x.png'
    ],
    venue: '',
    rewards: exports.eventRewards,
    addonOffer: exports.addonOfferParent,
    rewardCopy: '',
    items: [exports.eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
};
exports.eventOfferItemParent4 = {
    id: 'cjftxsxt10001ho8e495ushvf',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_1%402.png',
    title: `San Francisco Vs Colorado Rockies - Levi's 501`,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy,
    uri: 'tickets',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/left+pic_2_event%402x.png'
    ],
    venue: '',
    rewards: exports.eventRewards,
    addonOffer: exports.addonOfferParent,
    rewardCopy: '',
    items: [exports.eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
};
exports.offer = {
    id: 'cjg8ckfil00093i5nlvm7gmc1',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
    title: `San Francisco Giants Summer Schedule`,
    description: '',
    type: offerTypes_1.OfferItemType.Mixed,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/left+pic_1_discovery%402x.png'
    ],
    details: '',
    uri: 'games',
    items: [
        exports.eventOfferItemParent,
        exports.eventOfferItemParent1,
        exports.eventOfferItemParent2,
        exports.eventOfferItemParent3,
        exports.eventOfferItemParent4
    ]
};
exports.offerPage = {
    id: cuid(),
    brandColor: '#ec5829',
    treeTitle: `WHO'S GOING (5)`,
    confirmationTitleCopy: 'Ready for Giants game?',
    backgroundImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/Landing+page_SF+Giants%402x.png',
    location: 'AT&T Park, 24 Willie Mays Plaza San Francisco, California 94107',
    startDate: date_fns_1.parse('2019-06-01', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-08-31', 'yyyy-MM-dd', new Date()).toJSON(),
    offer: exports.offer,
    uri: 'giants',
    shareTitle: 'Now share this page with friends',
    shareOrderTitle: 'Get ready for Giants game!',
    emptyCheckoutTitle: 'Pay Separately, Get Together',
    emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
    isNeedToShowTax: true,
    leaderboardImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/gif_giants.gif',
    progressImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/reward+progress.svg',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/rewards.svg',
    orderSummaryTitle: 'Order',
    shareCopy: `*You'll receive an email to get your ticket`,
    shareDetailsCopy: `Want more friends to go games with you? They can see
  what you bought and purchase their own tickets. You’ll get bigger rewards by growing your group.`
};
