"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const guid_1 = require("utils/guid");
const merchCopy = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Basic Plan</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style
="font-size: 11pt; color: #908f8f;">
Lose weight with our basic plan.

Easy to follow 4 week plan
Perfectly balanced to put your body in fat-burning mode.

Our special menu
Includes pre-selected meals you’ll love—burgers, pasta and more!

Affordable weight loss
To deliver proven results at our lowest price.
</span></sup></p>`;
const merchCopy2 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Core Plan</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style
="font-size: 11pt; color: #908f8f;">
Choose your own menu or start with Chef’s choice.

Easy to follow 4 week plan
Perfectly balanced to put your body in fat-burning mode.

Our special menu
With flexibility to choose from 100 delicious meals and snacks.

Total convenience
With popular on the-go-foods delivered to your door.

</span></sup></p>`;
const merchCopy3 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Uniquely Yours Plan</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style
="font-size: 11pt; color: #908f8f;">
Lose weight with more variety, Including frozen desserts.

Easy to follow 4 week plan
Perfectly balanced to put your body in fat-burning mode.

Biggest variety
Your choice of 160+ delicious meals and snacks!

Top-rated frozen choices
With freedom to enjoy unlimited frozen and non frozen menu options.

</span></sup></p>`;
const merchCopy4 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Uniquely Yours Plus Plan</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style
="font-size: 11pt; color: #908f8f;">
Lose weight with more variety, including frozen meals.

Easy to follow 4 week plan
Perfectly balanced to put your body in fat-burning mode.

Biggest & best variety
From ice creaM to lunch melts - 160+ menu must haves.

Unlimited menu freedom
With your choice of top rated frozen and non frozen foods.

</span></sup></p>`;
exports.merchRewards = [
    {
        id: '105',
        name: '3 Free Week of Shakes',
        description: 'When your group invite 30 friends',
        threshold: 30,
        thresholdCopy: 'Friends'
    },
    {
        id: '106',
        name: '2 Weeks of Shakes',
        description: 'When your group invite 15 friends',
        threshold: 15,
        thresholdCopy: 'Friends'
    },
    {
        id: '107',
        name: '1 Weeks of Shakes',
        description: 'When your group invite 5 friends',
        threshold: 5,
        thresholdCopy: 'Friends'
    }
];
exports.offerItemMerch = {
    id: 'cjg8ckfis000zxczxuye5py81',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-nutrisystem/nutri_left+pic_1-2.png',
    title: 'Basic',
    description: '',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-nutrisystem/nutri_left+pic_1-2.png',
    htmlDescription: merchCopy,
    startingPrice: 10.18,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] },
    additionalDescription: 'Lowest Price'
};
exports.offerItemMerch2 = {
    id: 'cjg8ckfis000zzxczxczxuye5py81',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-nutrisystem/nutri_left+pic_2-2.png',
    title: 'Core',
    description: '',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-nutrisystem/nutri_left+pic_2-2.png',
    htmlDescription: merchCopy2,
    startingPrice: 11.07,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] },
    additionalDescription: 'Most Popular'
};
exports.offerItemMerch3 = {
    id: 'cjg8ckfis0zxczxcxczxuye5py81',
    parentId: 'cjftxsxt1000bxc8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-nutrisystem/nutri_left+pic_3-2.png',
    title: 'Uniquely Yours',
    description: '',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-nutrisystem/nutri_left+pic_3-2.png',
    htmlDescription: merchCopy3,
    startingPrice: 12.57,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] },
    additionalDescription: 'Top Rated'
};
exports.offerItemMerch4 = {
    id: 'cjg8ckfvcxbvcxsczxczxuye5py81',
    parentId: 'cjftxsxt1000bxc8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-nutrisystem/nutri_left+pic_4-2.png',
    title: 'Uniquely Yours Plus',
    description: '',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-nutrisystem/nutri_left+pic_4-2.png',
    htmlDescription: merchCopy4,
    startingPrice: 13.93,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] },
    additionalDescription: 'Best Plan'
};
exports.merchOfferItemParent = {
    id: 'cjftxsx0001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-nutrisystem/nutri_left+pic_1-2.png',
    title: 'Nutrisystem',
    description: '30 people have this in their cart',
    type: offerTypes_1.OfferItemType.Mixed,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-nutrisystem/nutri_left+pic_1-2.png'
    ],
    details: '',
    rewards: exports.merchRewards,
    uri: 'plans',
    items: [exports.offerItemMerch, exports.offerItemMerch2, exports.offerItemMerch3, exports.offerItemMerch4]
};
exports.offerPage = {
    id: guid_1.default(),
    brandColor: '#F76801',
    offer: exports.merchOfferItemParent,
    treeTitle: `WHO'S Buying (1)`,
    uri: 'nutrisystem',
    isNeedToShowTax: false,
    showBirthday: true,
    groupvizTitle: `Who's buying`,
    shareOrderTitle: 'Get ready for healthy lifestyle!',
    shareTitle: 'Now share this page with friends',
    confirmationTitleCopy: 'Ready for your order?',
    emptyCheckoutTitle: 'Pay Separately, Get Healthy Together',
    emptyCheckoutDescription: 'Buy your plan, invite friends and earn perks',
    shareCopy: `*You’ll receive an email to redeem your digital code`,
    backgroundImage: 'https://s3.amazonaws.com/fevo-fuc/assets-nutrisystem/Nutri_bg_1.png',
    leaderboardImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/gif_WBG.gif',
    progressImage: '',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets-nutrisystem/confirmation.svg',
    orderSummaryTitle: 'Order',
    shareDetailsCopy: `Wanna more friends to play get healthy with you?
They can see what you bought and purchase their own games.`
};
