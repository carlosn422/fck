"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const date_fns_1 = require("date-fns");
const cuid = require("cuid");
const roomCopy = `<p><sup><span color="#e19735", style="font-size: 16pt;
font-family:SharpSans, arial; color: #e19735;"><strong>Western Caribbean from Miami, FL</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">With an island for every taste,
the Caribbean is the ultimate place for relaxation. You'll find white sands
and turquoise water throughout the Caribbean Sea and Gulf of Mexico. Some
islands are lush, with rainforests and mountain trails, while others have
desert climates and coral beaches. Wherever you visit, taste regional
specialties such as conch fritters and get out on the water with snorkeling and sailing excursions.</span></sup></p>
<p>&nbsp;</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src=
"https://s3.amazonaws.com/fevo-fuc/assets-cruise/Untitled.png" alt="" width="400" height="170" /></p>
`;
const copy2 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial; color: #e19735;"><strong>Wine County Adventure</strong></span></sup></p>
<p>&nbsp;</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src=
"https://s3.amazonaws.com/fevo-fuc/assets-cruise/Untitled-2.png" alt="" width="200" height="55" /></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">You're then transported in custom-made s
afari vehicles to the take-off point 500 feet above the
beaches of Labadee. Enjoy breathtaking views as you zip down a
flight line more than 2,600 feet long at speeds of 40-50 mph.
Your flight lands at Dragon's Breath Rock.</span></sup></p>`;
exports.hotelRewards = [
    {
        id: '105',
        name: 'Access to Exclusive Lounge',
        description: 'When your group brings 2 nights',
        threshold: 2,
        thresholdCopy: 'Nights'
    },
    {
        id: '104',
        name: 'Muscle-melting Massage',
        description: 'When your group brings 4 nights',
        threshold: 4,
        thresholdCopy: 'Nights'
    },
    {
        id: '103',
        name: 'Upgrade to Suites',
        description: 'When your group books 7 nights',
        threshold: 7,
        thresholdCopy: 'Nights'
    }
];
exports.extraRewards = [
    {
        id: '103',
        name: 'Access to Exclusive Lounge',
        description: 'When your group brings 2 tours',
        threshold: 2,
        thresholdCopy: 'Tours'
    },
    {
        id: '104',
        name: 'Muscle-melting Massage',
        description: 'When your group brings 3 tours',
        threshold: 4,
        thresholdCopy: 'Tours'
    },
    {
        id: '105',
        name: 'Free Cloud 9 Spa Experience  ',
        description: 'When your group books 4 tours',
        threshold: 4,
        thresholdCopy: 'Tours'
    }
];
exports.addonsReward = [
    {
        id: '103',
        name: '50% discount for duty-free',
        description: 'When your group books 5 extras',
        threshold: 5,
        thresholdCopy: 'Extras'
    },
    {
        id: '104',
        name: 'Muscle-melting Massage',
        description: 'When your group brings 3 extras',
        threshold: 3,
        thresholdCopy: 'Extras'
    },
    {
        id: '105',
        name: 'Access to Exclusive Lounge',
        description: 'When your group brings 2 extras',
        threshold: 2,
        thresholdCopy: 'Extras'
    }
];
exports.eventOfferItem1 = {
    id: 'cjftxsxt10004ho8e20evxcvx',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-1%403x.png',
    title: 'Wine County Adventure',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-main%403x.png',
    description: 'Take an ATV ride through the breaktaking landscape',
    startingPrice: 69,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItem2 = {
    id: 'cjftxsxt10004ho8e20e2bzxbzx',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-2%403x.png',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-2-hero_2%403x.png',
    title: 'Baja Bandidos Horseback Trial',
    description: 'What better way to enjoy your day than on a scenic trail ride',
    startingPrice: 45,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItem3 = {
    id: 'cjftxsxt10004ho8e20e20bzb',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-3%403x.png',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-3-hero_2%403x.png',
    title: 'Wine Country Tour',
    description: 'Journey just a few miles northeast of Ensenada to Calafia Valley',
    startingPrice: 33,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItem4 = {
    id: 'cjftxsxt10004ho8e20e20vzvz',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/bahamas-miami%403x.png',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-4-hero_2%403x.png',
    title: 'Hiking',
    description: 'What better way to enjoy your day than on a scenic trail ride',
    startingPrice: 69,
    type: offerTypes_1.OfferItemType.Event
};
exports.addonItem1 = {
    id: 'cjftxsxt10004ho8e20e2lklk',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-1%403x.png',
    title: 'Greeb Eggs and Ham Breakfast',
    description: 'Pack your imagination, but don’t forget ',
    startingPrice: 89,
    type: offerTypes_1.OfferItemType.Event
};
exports.addonItem2 = {
    id: 'cjftxsxt10004ho8e20e2zbbz',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-2%403x.png',
    title: `The Chef's Table`,
    description: 'Treat your taste buds to the experience of a lifetime',
    startingPrice: 69,
    type: offerTypes_1.OfferItemType.Event
};
exports.addonItem3 = {
    id: 'cjftxsxt10004ho8e2aucn',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-3%403x.png',
    title: 'Cherry on Top',
    description: 'A cruise is the perfect time to treat yourself to something sweet',
    startingPrice: 33,
    type: offerTypes_1.OfferItemType.Event
};
exports.addonItem4 = {
    id: 'cjftxsxt10004ho8e20eoaoa',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/bahamas-miami%403x.png',
    title: 'VIP Breakfast',
    description: 'A cruise is the perfect time to treat yourself to something sweet',
    startingPrice: 69,
    type: offerTypes_1.OfferItemType.Event
};
exports.addonOfferParent2 = {
    id: 'cjftxsxt10001ho8e495ushvd',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_4%402.png',
    title: `Add Extra`,
    description: '',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: copy2,
    uri: 'extra',
    media: ['https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-main%403x.png'],
    venue: '',
    rewards: exports.extraRewards,
    rewardCopy: '',
    items: [exports.addonItem1, exports.addonItem2, exports.addonItem3, exports.addonItem4]
};
exports.addonOfferParent = {
    id: 'cjftxsxt10001ho8e495ushvd',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-giants/thumbnail_1_event_4%402.png',
    title: `Explore`,
    description: 'Dec 1, 2019 - Dec 5, 2019',
    type: offerTypes_1.OfferItemType.Event,
    startDate: '',
    endDate: '',
    details: copy2,
    uri: 'explore',
    media: ['https://s3.amazonaws.com/fevo-fuc/assets-cruise/wine-main%403x.png'],
    venue: '',
    rewards: exports.addonsReward,
    rewardCopy: '',
    items: [exports.eventOfferItem1, exports.eventOfferItem2, exports.eventOfferItem3, exports.eventOfferItem4]
};
exports.hotelOfferItem1 = {
    id: 'cjftxsxt10001ho8e49qqqqw',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-1-thumb%403x.png',
    title: 'Interior',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-1-hero_1%403x.png',
    description: '',
    startingPrice: 267,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferItem2 = {
    id: 'cjftxsxt10001ho8e495kaak',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-2-thumb%403x.png',
    title: 'Ocean View',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-2-hero_1%403x.png',
    description: '5 people are looking at this right now. Only 4 rooms left!',
    startingPrice: 390,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferItem3 = {
    id: 'cjftxsxt10001ho8e4pzpzp',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-3-thumb%403x.png',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-3-hero_1%403x.png',
    title: 'Balcony',
    description: '',
    startingPrice: 420,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferItem4 = {
    id: 'cjftxsxt10001ho8e495xcaoe',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-4-thumb%403x.png',
    title: 'Suite',
    description: '15 people are looking at this right now. Only 2 rooms left!',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-4-hero_1%403x.png',
    startingPrice: 610,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferListItem1 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/baja%403x.png',
    title: 'Baja Mexico from Long Beach',
    description: '* Taxes, fees and port expenses are $98.40 additional to the prices displayed. Prices are AVG PP.',
    address: '',
    startingPrice: 169,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-1-hero_1%403x.png'
    ],
    details: roomCopy,
    uri: 'baja-maxico',
    addonOffer: exports.addonOfferParent,
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3, exports.hotelOfferItem4]
};
exports.hotelOfferListItem2 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/western%403x.png',
    title: 'Western Caribbean from Miami, FL',
    description: '',
    address: 'With an island for every taste, the Caribbean is the ultimate place for relaxation. ',
    startingPrice: 169,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-2-hero%403x.png'
    ],
    details: roomCopy,
    uri: 'caribbean-miami',
    addonOffer: exports.addonOfferParent,
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3, exports.hotelOfferItem4]
};
exports.hotelOfferListItem3 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/bahamas-orlando%403x.png',
    title: 'The Bahamas from Orlando',
    address: 'Start: Long Beach (Los Angeles) Catalina Island Ensenada End: Long Beach (Los Angeles)',
    startingPrice: 169,
    description: 'In high demand',
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-3-hero%403x.png'
    ],
    details: roomCopy,
    uri: 'bahamas-orlando',
    addonOffer: exports.addonOfferParent,
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3, exports.hotelOfferItem4]
};
exports.hotelOfferListItem4 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/bahamas-miami%403x.png',
    title: 'The Bahamas from Miami',
    description: '',
    address: '',
    startingPrice: 169,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-4-hero%403x.png'
    ],
    details: roomCopy,
    uri: 'bahamas-miami',
    addonOffer: exports.addonOfferParent,
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3, exports.hotelOfferItem4]
};
exports.hotelOfferListItem5 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/bahamas-ny%403x.png',
    title: 'The Bahamas from New York',
    description: '',
    address: '',
    startingPrice: 169,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-cruise/item-5-hero%403x.png'
    ],
    details: roomCopy,
    uri: 'bahamas-new-york',
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3, exports.hotelOfferItem4]
};
exports.hotelOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushss',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/cruise-main%403x.png',
    title: 'Pick a Cruise',
    description: 'With an island for every taste, the Caribbean is the ultimate place for relaxation.',
    type: offerTypes_1.OfferItemType.Mixed,
    details: '',
    uri: 'hotels',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-cruise/cruise-main%403x.png'
    ],
    items: [
        exports.hotelOfferListItem1,
        exports.hotelOfferListItem2,
        exports.hotelOfferListItem3,
        exports.hotelOfferListItem4,
        exports.hotelOfferListItem5
    ],
    rewards: exports.hotelRewards,
    rewardCopy: 'Rewards available for bringing friends'
};
exports.offerPage = {
    id: cuid(),
    brandColor: '#ED9400',
    treeTitle: `WHO'S GOING (5)`,
    confirmationTitleCopy: 'Ready for your trip?',
    backgroundImage: 'https://s3.amazonaws.com/fevo-fuc/assets-cruise/0-cruise-landing-page.png',
    offer: exports.hotelOfferItemParent,
    uri: 'cruise',
    shareTitle: 'Now share this page with friends',
    shareOrderTitle: 'Get ready for your trip!',
    emptyCheckoutTitle: 'Pay Separately, Get Together',
    emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
    isNeedToShowTax: true,
    leaderboardImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/gif_WBG.gif',
    progressImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/reward_progress.svg',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/travel+bag_2.svg',
    orderSummaryTitle: 'Order',
    shareCopy: `*You'll receive an email to get your ticket`,
    shareDetailsCopy: `Want more friends to go on a trip with you? They can see
  what you bought and purchase their own tickets. You’ll get bigger rewards by growing your group.`
};
