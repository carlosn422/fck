"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const date_fns_1 = require("date-fns");
const cuid = require("cuid");
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
arial;font-weight:bold;margin-bottom: .5em;">${item}</p>`;
    }
    else {
        return `<div style="font-size: 11pt; color: #908f8f;">
<p>${item}</p>
<p>&nbsp;</p></div>`;
    }
})
    .join('');
const eventCopy1 = formatCopy(`New York Yankees vs New York Mets|In the history of 
baseball there have been 14 "SUBWAY SERIES" between New York's baseball teams for 
THE WORLD CHAMPIONSHIP. The "Golden Era" of the Subway Series took place between 1947 
and 1956 when New York's teams - the Dodgers, Yankees & Giants - were among the best 
in baseball and there were 7 Subway Series. This is the most definitive show ever done 
about the historic Subway World Series played in New York. It started in 1889, when 
Brooklyn faced New York, and the last subway series was in 2000, when the Mets played 
the Yankees.`);
const eventCopy2 = formatCopy(`LA Rams vs Seattle Seahawks|Receivers Robert Woods, 
Brandin Cooks and Cooper Kupp appear to have recaptured the synchronicity that sparked 
the passing game in 2018. With tight end Gerald Everett sidelined for a second 
consecutive game because of a knee injury, Tyler Higbee could again be a preferred 
target after enjoying a career-best performance against the Cardinals. The Seahawks 
defense is anchored by linebackers Bobby Wagner and K.J. Wright, who are in their eighth 
and ninth seasons, respectively. The Seahawks lead the NFL with 16 forced fumbles.
`);
const eventCopy3 = formatCopy(`LA Lakers vs Toronto Raptors|The Raptors said their 
practice facility has been renamed the the OVO Athletic Centre. It's a nod to the 
team's partnership with Grammy award-winner Drake. The Toronto-born rapper has been 
involved with the Raptors since being named the team's 'global ambassador' in 
September 2013. OVO is an acronym for October's Very Own, Drake's record label and 
clothing line.`);
const eventCopy4 = formatCopy(`Membership|Executive Members earn an annual 2% Reward 
on qualifying purchases at Costco, Costco.com, and Costco Travel. Plus, additional 
benefits are available on our suite of Costco Services. We offer a 100% satisfaction 
guarantee and will cancel and refund membership fees in full at any time if a member 
is dissatisfied.|
Additional values are available to Executive Members such as lower prices on check 
printing, auto buying, one-year free roadside assistance for vehicles covered through 
the Auto Insurance program and additional travel benefits. View our full list of Costco 
Services. Executive Members also receive a monthly edition of The Costco Connection 
magazine.|
Costco membership is $60 a year. An Executive Membership is an additional $60 upgrade 
fee a year. Each includes a free Household Card. Please include sales tax in all applicable 
states. (Business Members also pay an additional $60 for each additional cardholder - purchases 
  made by the additional cardholders do not contribute towards the 2% Reward.) Members who 
  upgrade for a partial year will be charged a prorated upgrade fee.`);
exports.eventRewards = [
    {
        id: '100',
        name: 'Get a scoreboard message',
        description: 'When your group invite 5 friends',
        threshold: 10,
        thresholdCopy: 'Friend'
    },
    {
        id: '101',
        name: 'High five tunnel pre-game',
        description: 'When your group invite 25 friends',
        threshold: 25,
        thresholdCopy: 'Friends'
    }
];
exports.eventOfferItem11 = {
    id: 'ck54am27k0001vsls4og0i60u',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
    title: 'Section 101',
    description: '',
    startingPrice: 0,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItem12 = {
    id: 'ck54am27k0002vsls27vxkg4l',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
    title: 'Section 202',
    description: '',
    startingPrice: 0,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItem13 = {
    id: 'ck54am27k0003vslsrek6rdgg',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
    title: 'Section 303',
    description: '',
    startingPrice: 0,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItem21 = {
    id: 'ck54am27k0004vslsr6fv2kj3',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
    title: 'Section 101',
    description: '',
    startingPrice: 0,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItem22 = {
    id: 'ck54am27k0005vslskot8km03',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
    title: 'Section 202',
    description: '',
    startingPrice: 0,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItem23 = {
    id: 'ck54am27k0006vsls4blpxhp4',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
    title: 'Section 303',
    description: '',
    startingPrice: 0,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItem31 = {
    id: 'ck54am27k0007vslsfr1n6ubd',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
    title: 'Section 101',
    description: '',
    startingPrice: 0,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItem32 = {
    id: 'ck54am27k0008vslslyp030vz',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
    title: 'Section 202',
    description: '',
    startingPrice: 0,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItem33 = {
    id: 'ck54am27k0009vslsbyqrskw4',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
    title: 'Section 303',
    description: '',
    startingPrice: 0,
    type: offerTypes_1.OfferItemType.Event
};
exports.addOnEventOfferItem11 = {
    id: 'ck54am27k000avsls5terdrkl',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
    title: 'Section 101',
    description: '',
    startingPrice: 100,
    type: offerTypes_1.OfferItemType.Event
};
exports.addOnEventOfferItem12 = {
    id: 'ck54am27k000bvslsqpy60o5a',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
    title: 'Section 202',
    description: '',
    startingPrice: 50,
    type: offerTypes_1.OfferItemType.Event
};
exports.addOnEventOfferItem13 = {
    id: 'ck54am27k000cvslsoparcy9z',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
    title: 'Section 303',
    description: '',
    startingPrice: 25,
    type: offerTypes_1.OfferItemType.Event
};
exports.addOnEventOfferItem21 = {
    id: 'ck54am27k000dvslse9gyedck',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
    title: 'Section 101',
    description: '',
    startingPrice: 100,
    type: offerTypes_1.OfferItemType.Event
};
exports.addOnEventOfferItem22 = {
    id: 'ck54am27k000evslstyjgi2oj',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
    title: 'Section 202',
    description: '',
    startingPrice: 50,
    type: offerTypes_1.OfferItemType.Event
};
exports.addOnEventOfferItem23 = {
    id: 'ck54am27k000fvsls141t2cbd',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
    title: 'Section 303',
    description: '',
    startingPrice: 25,
    type: offerTypes_1.OfferItemType.Event
};
exports.addOnEventOfferItem31 = {
    id: 'ck54am27k000gvsls8ehmqj71',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
    title: 'Section 101',
    description: '',
    startingPrice: 100,
    type: offerTypes_1.OfferItemType.Event
};
exports.addOnEventOfferItem32 = {
    id: 'ck54am27k000hvslscwvr97p7',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
    title: 'Section 202',
    description: '',
    startingPrice: 50,
    type: offerTypes_1.OfferItemType.Event
};
exports.addOnEventOfferItem33 = {
    id: 'ck54am27k000ivsls3bviglxw',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
    title: 'Section 303',
    description: '',
    startingPrice: 25,
    type: offerTypes_1.OfferItemType.Event
};
exports.addOnMemberShip1 = {
    id: 'cjftxsxt10005ho8eb1pjiyul',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Costco+Live+Exclusive+for+Members+V1%402x.png',
    title: 'Gold',
    description: '',
    startingPrice: 60,
    type: offerTypes_1.OfferItemType.Event
};
exports.addOnMemberShip2 = {
    id: 'xcvbnsdfgdsfgdsfg',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Costco+Live+Exclusive+for+Members+V1%402x.png',
    title: 'Executive',
    description: '',
    startingPrice: 120,
    type: offerTypes_1.OfferItemType.Event
};
exports.addOfferItemParent1 = {
    id: cuid(),
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
    title: `New York Yankees vs New York Mets `,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy1,
    uri: createSlug(`New York Yankees vs New York Mets add ons`),
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Yankess+vs+Mets+V1%402x.png'
    ],
    venue: '',
    rewardCopy: '',
    rewards: exports.eventRewards,
    items: [exports.addOnEventOfferItem11, exports.addOnEventOfferItem12, exports.addOnEventOfferItem13]
};
exports.addOfferItemParent2 = {
    id: cuid(),
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
    title: `LA Rams vs Seattle Seahawks`,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy2,
    uri: createSlug(`LA Rams vs Seattle Seahawks add ons`),
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Seahawks+vs+Rams+V1%402x.png'
    ],
    venue: '',
    rewardCopy: '',
    rewards: exports.eventRewards,
    items: [exports.addOnEventOfferItem21, exports.addOnEventOfferItem22, exports.addOnEventOfferItem23]
};
exports.addOfferItemParent3 = {
    id: cuid(),
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
    title: `LA Lakers vs Toronto Raptors`,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy3,
    uri: createSlug(`LA Lakers vs Toronto Raptors add ons`),
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Lakers+vs+Raptors+V1%402x.png'
    ],
    venue: '',
    rewardCopy: '',
    rewards: exports.eventRewards,
    items: [exports.addOnEventOfferItem31, exports.addOnEventOfferItem32, exports.addOnEventOfferItem33]
};
exports.addOfferItemParent4 = {
    id: cuid(),
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Costco+Live+Exclusive+for+Members+V1%402x.png',
    title: `Membership`,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy4,
    uri: createSlug(`Membership add ons`),
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Costco+Live+Exclusive+for+Members+V1%402x.png'
    ],
    venue: '',
    rewardCopy: '',
    rewards: exports.eventRewards,
    items: [exports.addOnMemberShip1, exports.addOnMemberShip2]
};
exports.AddOnOffer = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
    title: `Get Discounts on Great Games!`,
    description: 'Introducing Costco Live! A ticket marketplace exclusively for Coscto Members',
    type: offerTypes_1.OfferItemType.Mixed,
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Costco+Live+Exclusive+for+Members+V1%402x.png'
    ],
    details: '',
    uri: createSlug(`Get Discounts on Great Games`),
    rewards: exports.eventRewards,
    items: [
        exports.addOfferItemParent1,
        exports.addOfferItemParent2,
        exports.addOfferItemParent3,
        exports.addOfferItemParent4
    ]
};
exports.eventOfferItemParent1 = {
    id: cuid(),
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Yankess+vs+Mets+V1%402x.png',
    title: `New York Yankees vs New York Mets`,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy1,
    uri: createSlug(`New York Yankees vs New York Mets`),
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Yankess+vs+Mets+V1%402x.png'
    ],
    venue: '',
    addonOffer: exports.AddOnOffer,
    rewardCopy: '',
    rewards: exports.eventRewards,
    items: [exports.eventOfferItem11, exports.eventOfferItem12, exports.eventOfferItem13]
};
exports.eventOfferItemParent2 = {
    id: cuid(),
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Seahawks+vs+Rams+V1%402x.png',
    title: `LA Rams vs Seattle Seahawks`,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy2,
    uri: createSlug(`LA Rams vs Seattle Seahawks`),
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Seahawks+vs+Rams+V1%402x.png'
    ],
    venue: '',
    addonOffer: exports.AddOnOffer,
    rewardCopy: '',
    rewards: exports.eventRewards,
    items: [exports.eventOfferItem21, exports.eventOfferItem22, exports.eventOfferItem23]
};
exports.eventOfferItemParent3 = {
    id: cuid(),
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Thumbnail-Lakers+vs+Raptors+V1%402x.png',
    title: `LA Lakers vs Toronto Raptors`,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy3,
    uri: createSlug(`LA Lakers vs Toronto Raptors`),
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Lakers+vs+Raptors+V1%402x.png'
    ],
    venue: '',
    addonOffer: exports.AddOnOffer,
    rewardCopy: '',
    rewards: exports.eventRewards,
    items: [exports.eventOfferItem31, exports.eventOfferItem32, exports.eventOfferItem33]
};
exports.offer = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
    title: `Claim Your Free Tickets`,
    description: 'Introducing Costco Live! A ticket marketplace exclusively for Coscto Members',
    type: offerTypes_1.OfferItemType.Mixed,
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-costco/Carousel-Costco+Live+Exclusive+for+Members+V1%402x.png'
    ],
    details: '',
    uri: 'games',
    rewards: exports.eventRewards,
    items: [exports.eventOfferItemParent1, exports.eventOfferItemParent2, exports.eventOfferItemParent3]
};
exports.offerPage = {
    id: cuid(),
    brandColor: '#0160A9',
    treeTitle: `WHO'S GOING (5)`,
    confirmationTitleCopy: 'Ready for Giants game?',
    backgroundImage: 'https://fevo-fuc.s3.amazonaws.com/assets-costco/Costco+Landing+Page+%402x.png',
    offer: exports.offer,
    uri: 'costco',
    shareTitle: 'Now share this page with friends',
    shareOrderTitle: 'Get ready for Giants game!',
    emptyCheckoutTitle: 'Pay Separately, Get Together',
    emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
    isNeedToShowTax: true,
    leaderboardImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/09_leaderboard_NYCFC.gif',
    progressImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/10_reward_progress.svg',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-nycfc/10_reward_illustration.svg',
    orderSummaryTitle: 'Order',
    shareCopy: `*You'll receive an email to get your ticket`,
    shareDetailsCopy: `Want more friends to go games with you? They can see
  what you bought and purchase their own tickets. You’ll get bigger rewards by growing your group.`
};
