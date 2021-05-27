"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const guid_1 = require("utils/guid");
const date_fns_1 = require("date-fns");
const cuid = require("cuid");
const createSlug = title => title
    .toLowerCase()
    .replace(/"|“|”/g, '')
    .replace(/,/g, '')
    .replace(/ /g, '-')
    .replace('&-', '');
exports.reward = [
    {
        id: '100',
        name: 'Get your friends to do a free 7-day trial',
        description: 'Everyone gets Disney+ free for the first 3 months',
        threshold: 25,
        thresholdCopy: 'Nights'
    }
];
exports.offer1 = {
    id: 'ck2qrt3c1005pbmlsdv6mmnb4',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-disney/Thumbnail-+Disney%2B%402x.png',
    title: 'Disney+ Free Trial',
    description: 'Stream on your favorite screen -  Try 7 days free, then $14.99/month',
    startingPrice: 0,
    type: offerTypes_1.OfferItemType.Event
};
exports.hboOffer = {
    id: cuid(),
    thumbnailImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-disney/Thumbnail-+Disney%2B%402x.png',
    title: 'Watch With Friends',
    description: 'Stream on your favorite screen -  Try 7 days free, then $14.99/month',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: `
    <img src="https://fevo-fuc.s3.amazonaws.com/assets-demo-disney/Disney%2B+Leaderboard%402x%402x.png">`,
    uri: 'Manchester-City-v-Leicester-City',
    media: [
        'https://fevo-fuc.s3.amazonaws.com/assets-demo-disney/Carousel-Disney%2B%402x.png'
    ],
    venue: '',
    rewards: exports.reward,
    items: [exports.offer1]
};
exports.offerPage = {
    id: guid_1.default(),
    brandColor: '#0E1F4E',
    offer: exports.hboOffer,
    uri: 'disney',
    treeTitle: `WHO'S GOING (5)`,
    isNeedToShowTax: true,
    shareOrderTitle: 'Get ready to watch!',
    shareTitle: 'Now share this page with friends',
    confirmationTitleCopy: 'Ready for to watch?',
    emptyCheckoutTitle: 'Pay Separately, Watch Together',
    emptyCheckoutDescription: 'Subscribe for Disney+, invite friends and earn perks',
    backgroundImage: 'https://fevo-fuc.s3.amazonaws.com/assets-demo-disney/Disney%2B+Landing+Page%402x.png',
    leaderboardImage: 'https://fevo-fuc.s3.amazonaws.com/assets-virgin/Leaderboard.png',
    progressImage: 'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/8_MGM_Confirmation_reward progress.svg',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets_demo_mgm/8_MGMConfirmation_rewards.svg',
    orderSummaryTitle: 'Booking',
    shareDetailsCopy: `Want more friends to join you? They will see
  your group itinerary and can book their own trip. You’ll get bigger rewards by growing your group!`
};
