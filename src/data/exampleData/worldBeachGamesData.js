"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const date_fns_1 = require("date-fns");
const cuid = require("cuid");
const eventCopy = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Day Pass Details</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Access to all events for the entire day. </span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>15 Sports, 17 Disciplines</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">3 stadium venues</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">2K- 5K spectators</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">1 stadium for all rounds of beach soccer and beach volleyball</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">1 stadium for the finals of all the other sports</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">1 stadium for Action Games</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Water sports field of play within easy view</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Large screens to follow live feed in the stadium</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Opening Ceremony at Petco Park estimated 35K</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">Cutting edge technology integration including virtual reality</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">Global meets local artistic and culinary extravaganza</span></sup></p>`;
const merchCopy = `<p><sup><span <span style="font-size: 16pt; font-family:SharpSans,
arial;">Anoc World Beach Games Hat Details
</span></sup>
<p>&nbsp;</p>
<sup><span style="font-size: 11pt; color: #908f8f;">
The ANOC World Beach Games Hat offers a comfortable fit
and exceptional airflow on the course with stretch fabric and laser-cut perforations
on the side and back panels.</span></sup><br /><br />
<sup><span style="font-size: 16pt; font-family:SharpSans,
arial;">Benefits</span></sup><br /><br />
<sup><span style="font-size: 11pt; color: #908f8f;">
Six-panel design with interior taping for comfort and durability</sup><br />
<sup><span style="font-size: 11pt; color: #908f8f;">
Perforations on side and back panels enhance ventilation</span></sup><br /><sup>
<span style="font-size: 11pt; color: #908f8f;">Fitted
profile and stretch fabric for a snug, comfortable fit</span></sup><br /><br /><sup>
<span style="font-size: 16pt; font-family:SharpSans,
arial;">Product
Details</span></sup><br /><br /><sup><span style="font-size: 11pt; color: #908f8f;">
Fabric: Body: 88% polyester/12% spandex. Back of front panel:
90% polyester, 10% cotton.</span></sup><br /><sup><span style="font-size: 11pt; color: #908f8f;">
Hand wash</span></sup><br /><sup><span style="font-size: 11pt; color: #908f8f;">Imported</span></sup><br />
<sup><span style="font-size: 11pt; color: #908f8f;">Shown: Blue Fury/Anthracite/White</span
></sup><br /><sup><span style="font-size: 11pt; color: #908f8f;">
Style: 803330-486</span></sup></p>`;
const hotelCopy = `<p><sup><span style="font-size: 16pt; font-family:SharpSans, arial;
">ANOC Exclusive Hotel Offers</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">The ANOC World Beach Games San Diego 2019 will
 take place in temporary venues
at a single consolidated site at Mission Beach, San Diego. It is anticipated that
approximately 1,300 athletes will compete across six days of competition.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
Most of the properties on this list have special upgrades and amenities that
can be secured at no additional cost to you ONLY through an exclusive offer from ANOC
world beach games.
<p>&nbsp;</p>
<img src="https://s3.amazonaws.com/fevo-fuc/assets-demo/images/WBG_sponsors.png"
alt="sponsors" width="770" height="110" />
</span></sup></p>`;
const roomCopy = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>ANOC exclusive hotel offers.</strong></span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">262-sq-foot (24-sq-meter) room with bay views</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">1 King Bed (Extra beds available: Crib)</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Room sleeps 3 guests (up to 2 children)</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Featuring views
of the San Diego Bay, Coronado Island, Downtown San Diego and Petco Park, this room has a f
lat-screen TV, coffee-making facilities and a work desk.</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Free Cancellation (until Wed, Sep 25)</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Breakfast Included</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Free Internet</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Special Deal</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">No Expedia booking or credit card fees</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">This property is 1 minute
 walk from the beach. Overlooking San Diego Bay, this waterfront hotel is next to the San Diego
  Convention Center and PETCO Park, home of the San Diego Padres professional baseball team. It features
  a full-service spa.</span></sup></p>`;
exports.hotelRewards = [
    {
        id: '100',
        name: 'Grand Day Spa Retreat Package',
        description: 'When your group books 7 nights',
        threshold: 7,
        thresholdCopy: 'Nights'
    },
    {
        id: '101',
        name: 'Steak House Dinner',
        description: 'When your group books 5 nights',
        threshold: 5,
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
        name: 'Opening Ceremony Ticket',
        description: 'When your group buys 15 tickets',
        threshold: 15,
        thresholdCopy: 'Friends'
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
exports.hotelOfferItem1 = {
    id: 'cjftxsxt10001ho8e495ushv1',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/hotel/pic_04room_02.png',
    title: 'Premium Corner King Room',
    description: '5 people are looking at this right now. Only 4 rooms left!',
    startingPrice: 150,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferItem2 = {
    id: 'cjftxsxt10002ho8eh97zsnty',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/hotel/pic_04room_03.png',
    title: 'Port View King Room',
    description: 'In high demand',
    startingPrice: 180,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferItem3 = {
    id: 'cjftxsxt10003ho8eeldywgkk',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/hotel/pic_04room_04.png',
    title: 'City/Bay View Queen Room',
    description: 'Free cancellation until 48 hours before',
    startingPrice: 200,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferListItem1 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/hotel/pic_03hotel_02.png',
    title: 'Fairmont Grand Del Mar',
    description: '',
    address: '998 W Mission Bay Dr, San Diego, CA 92109',
    startingPrice: 425,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/hotel/pic_04room_00_hero.png'
    ],
    details: roomCopy,
    uri: 'Fairmont-Grand-Del-Mar',
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3]
};
exports.hotelOfferListItem2 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/hotel/pic_03hotel_03.png',
    title: 'Hilton San Diego Bayfront',
    description: '',
    address: '1 Park Boulevard, San Diego, CA 92101',
    startingPrice: 330,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/hotel/pic_04room_00_hero.png'
    ],
    details: roomCopy,
    uri: 'Hilton-San-Diego-Bayfront',
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3]
};
exports.hotelOfferListItem3 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/hotel/pic_03hotel_04.png',
    title: 'Kona Kai Resort & Spa',
    description: '',
    address: '1710 W Mission Bay Dr, San Diego, CA 92109',
    startingPrice: 230,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/hotel/pic_04room_00_hero.png'
    ],
    details: roomCopy,
    uri: 'Kona-Kai-Resort-Spa',
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3]
};
exports.hotelOfferListItem4 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/hotel/pic_03hotel_05.png',
    title: 'La Valencia Hotel',
    description: '',
    address: '1132 Prospect St, La Jolla, CA 92037',
    startingPrice: 180,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [''],
    details: hotelCopy,
    uri: 'La-Valencia-Hotel',
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3]
};
exports.eventOfferItem = {
    id: 'cjftxsxt10004ho8e20e200ew',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/WBG_ticket.png',
    title: '1 Day Pass',
    description: 'Opening Ceremony Ticket when you bring 15 friends',
    startingPrice: 30,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem1 = {
    id: 'cjftxsxt10005ho8eb1pjiyul',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/WBG_ticket.png',
    title: '2 Day Pass',
    description: 'Opening Ceremony Ticket when you bring 15 friends',
    startingPrice: 60,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem2 = {
    id: 'cjftxsxt10006ho8evph6c1a6',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/WBG_ticket.png',
    title: '3 Day Pass',
    description: 'Opening Ceremony Ticket when you bring 15 friends',
    startingPrice: 90,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
    title: 'All Games',
    description: 'Access to all events for all days',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy,
    uri: 'games',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/pic_02daypass_00_hero.png'
    ],
    venue: '',
    rewards: exports.eventRewards,
    rewardCopy: 'Bring 30 friends and get VIP Lounge Pass',
    items: [exports.eventOfferItem, eventOfferItem1, eventOfferItem2]
};
exports.hotelOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/hotel/pic_03hotel_03.png',
    title: 'Hotels',
    description: 'Accommodation close the event',
    type: offerTypes_1.OfferItemType.Hotel,
    address: 'San Diego, CA',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/hotel/pic_03hotel_00_hero.png'
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
    rewardCopy: 'Rewards available for bringing friends'
};
exports.offerItemMerch = {
    id: 'cjftxsxt10007ho8e0cnanc4h',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/merch/pic_06merch_03.png',
    title: 'Anoc World Beach Games Hats',
    description: 'Limited Stock',
    startingPrice: 25,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: {
        colors: [
            { value: 'abc', label: 'Red' },
            { value: 'sdf', label: 'Blue' },
            { value: 'g', label: 'Green' }
        ]
    }
};
exports.offerItemMerch2 = {
    id: 'cjftxsxt10008ho8en7lr73db',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/merch/pic_06merch_02.png',
    title: 'Anoc World Beach Games T-shirt',
    description: '',
    startingPrice: 35,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: {
        colors: [
            { value: 'abc', label: 'Red' },
            { value: 'sdf', label: 'White' },
            { value: 'g', label: 'Yellow' }
        ],
        sizes: [
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
            { value: 'xl', label: 'XL' }
        ]
    }
};
exports.offerItemMerch3 = {
    id: 'cjftxsxt1000aho8e4ps2xp1o',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/merch/pic_06merch_04.png',
    title: 'Anoc World Beach Water Bottle',
    description: '',
    startingPrice: 35,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.merchOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/merch/pic_06merch_02.png',
    title: 'Official Merchandise',
    description: 'T-shirts, Hats, shorts and more',
    // startingPrice: 25,
    type: offerTypes_1.OfferItemType.Merch,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/merch/pic_06merch_00_hero.png'
    ],
    details: merchCopy,
    rewards: exports.merchRewards,
    uri: 'official-merch',
    items: [exports.offerItemMerch, exports.offerItemMerch2, exports.offerItemMerch3]
};
exports.offer = {
    id: 'cjftxsxt10001ho8e495ushve',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
    title: 'World Beach Games 2019',
    description: 'October 10 - 15, 2019\nSan Diego, CA',
    type: offerTypes_1.OfferItemType.Mixed,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_00_hero.png'
    ],
    details: '',
    uri: 'beachgames',
    items: [exports.eventOfferItemParent, exports.hotelOfferItemParent, exports.merchOfferItemParent]
};
exports.offerPage = {
    id: cuid(),
    brandColor: '#E96E20',
    treeTitle: `WHO'S GOING (5)`,
    confirmationTitleCopy: 'Ready for your trip?',
    backgroundImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/WBG_bg.jpg',
    location: 'South Mission Beach, San Diego, CA',
    startDate: date_fns_1.parse('2019-10-10', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    offer: exports.offer,
    uri: 'beachgames',
    shareTitle: 'Now share this page with friends',
    shareOrderTitle: 'Get ready for your trip!',
    emptyCheckoutTitle: 'Pay Separately, Get Together',
    emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
    isNeedToShowTax: true,
    leaderboardImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/gif_WBG.gif',
    progressImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/reward_progress.svg',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/travel+bag_2.svg',
    orderSummaryTitle: 'Booking',
    shareDetailsCopy: `Want more friends to join you? They will see
  your group itinerary and can book their own trip. You’ll get bigger rewards by growing your group!`
};
