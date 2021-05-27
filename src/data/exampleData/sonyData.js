"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const guid_1 = require("utils/guid");
const merchCopy = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>HOPE NEVER DIES</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style
="font-size: 11pt; color: #908f8f;">
At its core, Days Gone is about survivors and what
makes them human: desperation, loss, madness, betrayal,
friendship, brotherhood, regret, love – and hope. It’s about how even when
 confronted with such enormous tragedy they find a reason to live. Hope never dies.</span></sup></p> `;
exports.merchRewards = [
    {
        id: '105',
        name: '12" Premium Statue by Project Triforce & SR 1,000 points',
        description: 'When your group invite 30 friends',
        threshold: 30,
        thresholdCopy: 'Friends'
    },
    {
        id: '106',
        name: 'Hope Never Dies DLC & 500 SR Points',
        description: 'When your group invite 15 friends',
        threshold: 15,
        thresholdCopy: 'Friends'
    },
    {
        id: '107',
        name: 'Exclusive Long Gone LMG Skin & 250 SR Points',
        description: 'When your group invite 5 friends',
        threshold: 5,
        thresholdCopy: 'Friends'
    }
];
exports.offerItemMerch = {
    id: 'cjg8ckfis000j3i5nuye5py81',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony-2/01_inventory_thumbnail_01%402x.png',
    title: 'Days Gone',
    description: '',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony-2/01_inventory_hero_01%402x.png',
    htmlDescription: '',
    startingPrice: 59.99,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] },
    additionalDescription: 'Rewards available when you invite 5 friends'
};
exports.merchOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony-2/01_inventory_thumbnail_02%402x.png',
    title: 'Days Gone',
    description: '30 people have this in their cart',
    type: offerTypes_1.OfferItemType.Mixed,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony-2/01_inventory_hero_01%402x.png'
    ],
    details: '',
    rewards: exports.merchRewards,
    uri: 'days-gone',
    items: [exports.offerItemMerch]
};
exports.offerPage = {
    id: guid_1.default(),
    brandColor: '#0E4DB8',
    offer: exports.merchOfferItemParent,
    treeTitle: `WHO'S PLAYING (1)`,
    uri: 'sony-days-gone',
    isNeedToShowTax: false,
    shareTitle: 'The bigger your group, the better it gets!',
    shareOrderTitle: 'Get your game on!',
    confirmationTitleCopy: '',
    showBirthday: true,
    isSony: true,
    emptyCheckoutTitle: 'Pay Separately, Game Together',
    emptyCheckoutDescription: 'Buy your games, invite friends and earn perks',
    shareCopy: `*You’ll receive an email to redeem your digital code`,
    backgroundImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony-2/00_Sony_daysgone_landing+page%401x.png',
    leaderboardImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony/gif_Sony.gif',
    progressImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony-2/sony_days+gone_reward+progress.svg',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony-2/sony_days+gone_confirmation%402x.png',
    orderSummaryTitle: 'Order',
    shareDetailsCopy: `Wanna more friends to play games with you?
They can see what you bought and purchase their own games.`
};
