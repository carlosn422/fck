"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const guid_1 = require("utils/guid");
const merchCopy = `<p><sup><span style="font-size: 16pt;font-family:SharpSans, arial;"><strong>The
Last Of Us™ Left Behind Again</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color:
#908f8f;">New light is shed on Ellie's relationship
with Riley, her best friend and sometime mentor from a
military boarding school they grew up in together. After
disappearing for weeks, Riley returns with a surprising
revelation on her whereabouts. Ellie and Riley sneak out of s
chool for the last time, leading to a series of events that will forever change both of their lives.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color:
#908f8f;">The Last of Us: Left Behind combines themes
of survival, loyalty, and love with tense, survival-action gam
eplay in this brand new add-on chapter to the best-selling PS3™ exc
lusive, The Last of Us.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Requires the base game to activate.</span></sup></p> `;
exports.merchRewards = [
    {
        id: '105',
        name: '12" Premium Statue by Project Triforce +SR 1,000 points',
        description: 'When your group invite 30 friends',
        threshold: 30,
        thresholdCopy: 'Friends'
    },
    {
        id: '106',
        name: 'Love Overcomes DLC Pack + SR 500 points',
        description: 'When your group invite 15 friends',
        threshold: 15,
        thresholdCopy: 'Friends'
    },
    {
        id: '107',
        name: 'Full Size Hardcover Artbook by Dark Horse + SR 250 points',
        description: 'When your group invite 5 friends',
        threshold: 5,
        thresholdCopy: 'Friends'
    }
];
exports.offerItemMerch = {
    id: 'cjg8ckfis000j3i5nuye5py81',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony/3_inventory.png',
    title: 'The Last Of Us Part II',
    description: '',
    media: '',
    htmlDescription: '',
    startingPrice: 59.99,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] },
    additionalDescription: 'Rewards available when you invite 5 friends'
};
exports.offerItemMerch1 = {
    id: 'cjg8ckfis000j3i5nuye5py8z',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony/pic+1.png',
    title: 'The Last Of Us™ Left Behind Again',
    description: '',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony/pic+1_Hero%402x.png',
    htmlDescription: merchCopy,
    startingPrice: 9.99,
    type: offerTypes_1.OfferItemType.Merch,
    additionalDescription: 'Best Value Today',
    productDetails: { colors: [], sizes: [] }
};
exports.merchOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/merch/pic_06merch_02.png',
    title: 'The Last of Us Part II',
    description: 'Survival Game \n Release Date: Oct 10, 2018',
    type: offerTypes_1.OfferItemType.Mixed,
    media: ['https://s3.amazonaws.com/fevo-fuc/assets-demo-sony/pic%402x.png'],
    details: '',
    rewards: exports.merchRewards,
    uri: 'last-of-us',
    items: [exports.offerItemMerch, exports.offerItemMerch1]
};
exports.offerPage = {
    id: guid_1.default(),
    brandColor: '#0f44af',
    offer: exports.merchOfferItemParent,
    treeTitle: `WHO'S PLAYING (1)`,
    uri: 'sony-last-of-us',
    isNeedToShowTax: false,
    shareTitle: 'Have Fun with Friends. Earn Rewards',
    shareOrderTitle: 'Get your game on!',
    confirmationTitleCopy: '',
    showBirthday: true,
    isSony: true,
    emptyCheckoutTitle: 'Pay Separately, Game Together',
    emptyCheckoutDescription: 'Buy your games, invite friends and earn perks',
    shareCopy: `*You’ll receive an email to redeem your digital code`,
    backgroundImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony/1_Home.png',
    leaderboardImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony/gif_Sony.gif',
    progressImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony/reward-progress.svg',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sony/gift.svg',
    orderSummaryTitle: 'Order',
    shareDetailsCopy: `Wanna more friends to play games with you?
They can see what you bought and purchase their own games.
You’ll get bigger rewards by growing your group.`
};
