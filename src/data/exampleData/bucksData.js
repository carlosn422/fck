"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const date_fns_1 = require("date-fns");
const cuid = require("cuid");
const merchCopy = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, a
rial;"><strong>Milwaukee Bucks Hat</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">This New Era Official
Team Color 9FORTY hat is a great way to top off any Milwaukee Bucks game day look.
Its adjustable back closure and raised embroidery on the front panels will make this
lid a staple in your selection of Milwaukee Bucks gear.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Material: 100% Polyester</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Mid Crown</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Structured fit</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Curved bill</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Adjustable hook and loop fastener strap</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Woven team tag sewn-on to back closure strap</span></sup></p>`;
const merchCopy1 = `<p><sup><span style="font-size:
16pt;font-family:SharpSans, arial;"><strong>Milwaukee Bucks Nike T-Shirt</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
Gear up for an exciting NBA season and score some major
Milwaukee Bucks style points when you rock this sweet Nike
Dri-FIT Giannis Antetokounmpo Name and Number T-Shirt. The
authentic team graphics on the front add some Milwaukee Bucks flair
to this moisture-wicking top, while Giannis Antetokounmpo's name and
number ensure you're the #1 fan in every room you enter.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">•
Regular Fit: Not too slim, not too loose. Designed with a
relaxed fit through shoulders, chest and waist.</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Material: 100% Recycled Polyester</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Dri-FIT ® technology wicks away moisture</span></sup></p>`;
const merchCopy2 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Food Voucher for beer/soda + hot dog</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">On Monday,
the Milwaukee Bucks unveiled the new food and concession options
available at the BMO Harris Bradley Center this season, and we got a
behind-the-scenes first look (and taste).</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Last year,
the Bucks rolled out a number of new food offerings, including buffalo
cheese curd fries, Philly nachos, a kale and avocado wrap and the indulgent
"Everything but the Hoop Burger," as well as new and renovated hospitality areas.
This season, the Bucks focused even more heavily on local favorites and unique items
that go beyond the typical stadium fare, featuring new vendors Press Waffle, Milwaukee
Pretzel, Sprecher and Harley-Davidson.</span></sup></p>`;
const merchCopy3 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>BMO Harris Bradley Center Parking</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;"
>Directions are to the BMO Harris Bradley Center Parking
Structure located at 1030 North 6th Street, Milwaukee, WI 53203.
The BMOHBC structure can be accessed from northbound 6th Street only.</span></sup></p> `;
const merchCopy4 = `<p><sup><span style="font-size: 16pt;font-family:
SharpSans, arial;"><strong>Venue Tour</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">The
BMO Harris Bradley Center was built through the generosity of the late
Jane Bradley Pettit in memory of her father, Harry Lynde Bradley, co-founder
and chairman of the Allen-Bradley Company (now Rockwell Automation). The Center
is the only major, public assembly facility in North America with construction underwritten
through the philanthropy of a single family. The Center will close its doors in summer 2018 when
the new Milwaukee Bucks arena opens.</span></sup></p> `;
exports.eventRewards = [
    {
        id: '103',
        name: 'Get On Court Photos',
        description: 'When your group invite 15 friends',
        threshold: 15,
        thresholdCopy: 'Friends'
    },
    {
        id: '104',
        name: 'Get Bucks Ballers',
        description: 'When your group invite 20 friends',
        threshold: 20,
        thresholdCopy: 'Friends'
    },
    {
        id: '105',
        name: 'Get Anthem Buddies',
        description: 'When your group invite 50 friends',
        threshold: 50,
        thresholdCopy: 'Friends'
    }
];
exports.merchRewards = [
    {
        id: '103',
        name: 'Get On Court Photos',
        description: 'When your group invite 15 friends',
        threshold: 15,
        thresholdCopy: 'Friends'
    },
    {
        id: '104',
        name: 'Get Bucks Ballers',
        description: 'When your group invite 20 friends',
        threshold: 20,
        thresholdCopy: 'Friends'
    },
    {
        id: '105',
        name: 'Get Anthem Buddies',
        description: 'When your group invite 50 friends',
        threshold: 50,
        thresholdCopy: 'Friends'
    }
];
exports.eventOfferItem = {
    id: 'cjftxsxt10004ho8e20e200qq',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/ticket_thumbnail.png',
    title: 'Section 207',
    description: '',
    additionalMedia: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/Bucks_Tickets_1_Seatmap%402x.png',
    startingPrice: 21,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem1 = {
    id: 'cjftxsxt10005ho8eb1pjiyqw',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/ticket_thumbnail.png',
    title: 'Section 221',
    additionalMedia: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/Bucks_Tickets_2_Seatmap%402x.png',
    description: '',
    startingPrice: 25,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem2 = {
    id: 'cjftxsxt10006ho8evph6c1qe',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/ticket_thumbnail.png',
    title: 'Section 126',
    description: '',
    additionalMedia: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/Bucks_Tickets_3_Seatmap%402x.png',
    startingPrice: 30,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem3 = {
    id: 'cjftxsxt10006ho8evph6c1qr',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/ticket_thumbnail.png',
    title: 'Section 113',
    additionalMedia: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/Bucks_Tickets_4_Seatmap%402x.png',
    description: '',
    startingPrice: 40,
    type: offerTypes_1.OfferItemType.Event
};
exports.offerItemMerch = {
    id: 'cjftxsxt10007ho8e0cnancqq',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/add+on_thumbnail_1.png',
    title: 'Milwaukee Bucks Hat',
    description: 'Most popular',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/add+on_hero_1%402x.png',
    htmlDescription: merchCopy,
    startingPrice: 15,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerItemMerch2 = {
    id: 'cjftxsxt10008ho8en7lr73qw',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/add+on_thumbnail_2.png',
    title: 'Milwaukee Bucks Nike T-Shirt',
    description: 'Gift Guide',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/add+on_hero_2%402x.png',
    htmlDescription: merchCopy1,
    startingPrice: 35,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerItemMerch3 = {
    id: 'cjftxsxt1000aho8e4ps2xpqe',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/add+on_thumbnail_3.png',
    title: 'Food Voucher for beer/soda + hot dog',
    description: 'Best Value Today',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/add+on_hero_3%402x.png',
    htmlDescription: merchCopy2,
    startingPrice: 15,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerItemMerch4 = {
    id: 'cjftxsxt1000aho8e4ps2xpqr',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/add+on_thumbnail_4.png',
    title: 'BMO Harris Bradley Center Parking',
    description: 'Exclusive Deal',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/add+on_hero_4%402x.png',
    htmlDescription: merchCopy3,
    startingPrice: 18,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.offerItemMerch5 = {
    id: 'cjftxsxt1000aho8e4ps2xpqt',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/160316-Arena-Rendering-04-1024x569.jpg',
    title: 'Venue Tour',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/add+on_hero_5%402x.png',
    htmlDescription: merchCopy4,
    description: 'Private Tour',
    startingPrice: 100,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.addonOfferParent = {
    id: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/ticket_thumbnail.png',
    title: 'Bucks Add-Ons',
    description: '',
    type: offerTypes_1.OfferItemType.Merch,
    details: merchCopy,
    uri: 'add-ons',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/left+pic_2%402x.png'
    ],
    rewards: exports.eventRewards,
    rewardCopy: 'test test',
    items: [
        exports.offerItemMerch,
        exports.offerItemMerch2,
        exports.offerItemMerch3,
        exports.offerItemMerch4,
        exports.offerItemMerch5
    ]
};
exports.eventOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/ticket_thumbnail.png',
    title: 'Bucks vs Hawks - Bucks Night Out',
    description: '',
    type: offerTypes_1.OfferItemType.Mixed,
    details: '',
    uri: 'tickets',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/left+pic_1%402x.png'
    ],
    rewards: exports.eventRewards,
    rewardCopy: '',
    addonOffer: exports.addonOfferParent,
    items: [exports.eventOfferItem, eventOfferItem1, eventOfferItem2, eventOfferItem3]
};
exports.offerPage = {
    id: cuid(),
    brandColor: '#1c461e',
    treeTitle: `WHO'S GOING (5)`,
    confirmationTitleCopy: 'Ready for your Bucks game?',
    backgroundImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/Bucks_landing_3%402x.png',
    location: 'BMO Harris Bradley Center, 1001 N 4th St Milwaukee, Wisconsin 53203',
    startDate: date_fns_1.parse('2019-03-17', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-03-17', 'yyyy-MM-dd', new Date()).toJSON(),
    offer: exports.eventOfferItemParent,
    uri: 'bucks',
    shareTitle: 'Now share this page with friends',
    shareOrderTitle: 'Get ready for Bucks vs Hawks!',
    emptyCheckoutTitle: 'Pay Separately, Get Together',
    emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
    isNeedToShowTax: true,
    leaderboardImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/gif_bucks.gif',
    progressImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/reward+progress.svg',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-bucks/rewards.svg',
    orderSummaryTitle: 'Order',
    shareCopy: `*You'll receive an email to get your ticket`,
    shareDetailsCopy: `Want more friends to go games with you? They can see
  what you bought and purchase their own tickets. You’ll get bigger rewards by growing your group.`
};
