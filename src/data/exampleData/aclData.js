"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const date_fns_1 = require("date-fns");
const cuid = require("cuid");
const eventCopy = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>All Tickets Include</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• (Platinum) Closer viewing of the American Express main stage
from the shaded viewing deck within the Platinum Lounge</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• (Platinum) Two private entries into the Festival
grounds with shuttle transportation to the Platinum Lounge</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• (Platinum)  Platinum Bar offering complimentary
beer and wine located at Rock Island within the main Festival grounds</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• (VIP) Shaded viewing deck with exceptional sightlines
of the American Express main stage (Viewing deck capacity is limited)</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• (VIP)  VIP Bar offering complimentary beer and wine
located at Rock Island within the main Festival grounds</span></sup></p>`;
const merchCopy = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Description</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">One of ACL Fest's raddest items of all time!
This retro-style satin
bomber jacket will have your friends green with envy. An intricately embroidered rainbow is radiating over austin.
Small lightning bolt details lay on the sleeves with ACL Fest proudly embroidered on the front pocket. </span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Fits true to size </span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Dry clean only </span></sup></p>`;
const hotelCopy = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>All Hotel Packages Include</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">3 night stay at the JW Marriott Austin
Downtown, Friday, October 5th – Monday, October 8th, 2018  (**Must be 21+ to Check-In to this hotel)</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 13pt;
font-family:SharpSans, arial;"><strong>2018 Festival Merchandise Package</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• One Commemorative RFID-enabled wristband
per person</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• 3-days of access to over 125 performances on 8 stages from 11 am to 10 pm each day</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Welcome amenity (hotel choice) on the first night of
stay</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• One (1) complimentary drink voucher per person at
arrival</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">• Two (2) complimentary bottles
of water in guest room </span></sup></p>`;
const roomCopy1 = `<p><sup><span style="font-size: 16pt;font-family:SharpSans,
arial;"><strong>Superior, King Bed</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">In addition to modern
amenities and contemporary interior, these resort-like accommodations
feature a shared third-floor patio overlooking Lady Bird Lake. </span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Shared patio access, separated by planters for privacy</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Serene views of Downtown Austin and Lady Bird Lake</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• 55” flat screen TV with cable/satellite channels</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Speakman shower heads</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Hair Dryer, iron and ironing board</span></sup></p>`;
const roomCopy2 = `<p><sup><span style="font-size:
16pt;font-family:SharpSans, arial;"><strong>Premier, King Bed</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color:
#908f8f;">Serene views of Lady Bird Lake enhance the contemporary interiors of our downtown accommodations.
Features include Hyatt Grand Bed® and
luxurious bathroom.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Shared patio access, separated by planters for privacy</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Serene views of Downtown Austin and Lady Bird Lake</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• 55” flat screen TV with cable/satellite channels</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Speakman shower heads</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Hair Dryer, iron and ironing board</span></sup></p>`;
const roomCopy3 = `<p><sup><span style="font-size:
16pt;font-family:SharpSans, arial;"><strong>Studio Suite, King Bed</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color:
#908f8f;">This ADA-compliant guestroom includes one king-sized Hyatt Grand Bed®,
accessible bathtub with hand rails, and
numerous ADA-compliant amenities and features. </span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Shared patio access, separated by planters for privacy</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Serene views of Downtown Austin and Lady Bird Lake</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• 55” flat screen TV with cable/satellite channels</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Speakman shower heads</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Hair Dryer, iron and ironing board</span></sup></p>`;
const roomCopy4 = `<p><sup><span
style="font-size: 16pt;font-family:SharpSans, arial;"><strong>Terrace Room, King Bed</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
Among the most luxurious accommodations
in the city, our River View Suites offer sweeping
views and include a private bedroom and separate sitting area.
This is a standard suite. See World of Hyatt
program terms for upgrade eligibility.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Shared patio access, separated by planters for privacy</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Serene views of Downtown Austin and Lady Bird Lake</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• 55” flat screen TV with cable/satellite channels</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Speakman shower heads</span></sup></p>
<p><sup><span style="font-size: 11pt;
color: #908f8f;">• Hair Dryer, iron and ironing board</span></sup></p>`;
const merchCopy2 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>ACL Flags Lineup Tank</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
Remember ACL's breathtaking scenery in this nautical-inspired flag design on a white tank. </span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
Get tickets for $5.01 for
upcoming games. Brought to you by Levi's®. More Info -
Limit of 8 tickets per order. Offer valid Tuesday, May 1st
10AM PT to 10PM PT. Subject to availability. </span></sup></p>`;
const merchCopy3 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>2017 Yellow Rose Feedstore Hat ACL</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
The 2017 Howler Bros x ACL Festival Yellow Rose Collection is back!
This year's selection again features the all-mesh
Feedstore Hat, this time in a cream and yellow combo.
These are sure to sell out quickly, so don't sit on
your hands on this one! </span></sup></p> `;
const merchCopy4 = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>3 Day ACL Lockers </strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
Do you want a safe and secure place to store your things while you enjoy ACL Fest
and be able to keep your phone charged? We offer 3-day
and 1-day rental lockers with phone chargers available near the Barton Spring entrance,
so you can free up your hands and avoid losing any
personal items during the show.</span></sup></p> `;
exports.hotelRewards = [
    {
        id: '100',
        name: 'Free Champagne',
        description: 'When your group brings 7 friends',
        threshold: 7,
        thresholdCopy: 'Friends'
    },
    {
        id: '101',
        name: 'Steak House Dinner',
        description: 'When your group brings 5 friends',
        threshold: 5,
        thresholdCopy: 'Friends'
    },
    {
        id: '102',
        name: 'Free Champagne',
        description: 'When your group brings 3 friends',
        threshold: 3,
        thresholdCopy: 'Friends'
    }
];
exports.eventRewards = [
    {
        id: '105',
        name: 'Two Free Drinks',
        description: 'When your group brings 5 friends',
        threshold: 5,
        thresholdCopy: 'Friends'
    },
    {
        id: '123',
        name: 'Muscle-melting Massage',
        description: 'When your group brings 15 friends',
        threshold: 15,
        thresholdCopy: 'Friends'
    },
    {
        id: '153',
        name: 'Access to ACL Exclusive Lounge',
        description: 'When your group brings 50 friends',
        threshold: 50,
        thresholdCopy: 'Friends'
    }
];
exports.merchRewards = [
    {
        id: '105',
        name: 'Toms Sunglasses',
        description: 'When your group buy 25 items',
        threshold: 25,
        thresholdCopy: 'Items'
    },
    {
        id: '106',
        name: '$35 ACL Music Festival eGift Card',
        description: 'When your group buy 20 items',
        threshold: 20,
        thresholdCopy: 'Items'
    },
    {
        id: '107',
        name: 'Commemorative ACL Festival Artist Poster',
        description: 'When your group buy 5 items',
        threshold: 5,
        thresholdCopy: 'Items'
    }
];
exports.hotelOfferItem1 = {
    id: 'cjftxsxt100cc1ho8e495ushv1',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/4-1_thumbnail_room%402x.png',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/4_Hero_Room%402x.png',
    title: 'Superior, King Bed',
    htmlDescription: roomCopy1,
    description: 'In high demand',
    startingPrice: 259,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferItem2 = {
    id: 'cjftxsxt10002hovvh97zsnty',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/4-2_thumbnail_room%402x.png',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/4-1-2_Hero_room%402x.png',
    title: 'Premier, King Bed',
    htmlDescription: roomCopy2,
    description: '10 people are looking at this right now',
    startingPrice: 279,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferItem3 = {
    id: 'cjftxsxtvv003ho8eeldywgkk',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/4-3_thumbnail_room%402x.png',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/4-2_Hero_room%402x.png',
    title: 'Studio Suite, King Bed',
    htmlDescription: roomCopy3,
    description: 'Free cancellation until 48 hours before',
    startingPrice: 332,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferItem4 = {
    id: 'cjftxsxt10bb3ho8eeldywgkm',
    parentId: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/4-4_thumbnail_room%402x.png',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/4-3_Hero_room%402x.png',
    title: 'Terrace Room, King Bed',
    description: '5 people are looking at this right now',
    htmlDescription: roomCopy4,
    startingPrice: 779,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferListItem1 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/3-1_thumbnail_hotel%402x.png',
    title: 'Hilton Austin Downtown',
    description: '',
    address: '500 E 4th St, Austin, TX 78701',
    startingPrice: 280,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/4_Hero_Room%402x.png'
    ],
    details: roomCopy1,
    uri: 'hilton-austin-downtown',
    items: [exports.hotelOfferItem1, exports.hotelOfferItem2, exports.hotelOfferItem3, exports.hotelOfferItem4]
};
exports.hotelOfferListItem2 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/3-2_thumbnail_hotel%402x.png',
    title: 'Hyatt Ragency Austin',
    description: '',
    address: '208 Barton Springs Rd, Austin, TX 78704',
    startingPrice: 280,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/4_Hero_Room%402x.png'
    ],
    details: roomCopy2,
    uri: 'hyatt-ragency-austin',
    items: [exports.hotelOfferItem2, exports.hotelOfferItem3, exports.hotelOfferItem4]
};
exports.hotelOfferListItem3 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/3-3_thumbnail_hotel%402x.png',
    title: 'Kona Kai Resort & Spa',
    description: '',
    address: '101 Red River St, Austin, TX 78701',
    startingPrice: 303,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/4_Hero_Room%402x.png'
    ],
    details: roomCopy3,
    uri: 'Kona-Kai-Resort-Spa',
    items: [exports.hotelOfferItem3, exports.hotelOfferItem4]
};
exports.hotelOfferListItem4 = {
    id: cuid(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/3-4_thumbnail_hotel%402x.png',
    title: 'Fairmont Austin',
    description: '',
    address: '101 Red River St, Austin, TX 78701',
    startingPrice: 400,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/4_Hero_Room%402x.png'
    ],
    details: roomCopy4,
    uri: 'fairmont-austin',
    items: [exports.hotelOfferItem4]
};
exports.eventOfferItem = {
    id: 'cjftxsxt10004ho8ecce200kk',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/1-1_thumbnail_tickets%402.png',
    title: 'Week One: General Admission Ticket',
    description: 'Most popular',
    startingPrice: 255,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem1 = {
    id: 'cjftxsxt10005ho8eb1pjiybb',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/1-1_thumbnail_tickets%402.png',
    title: 'Week One: VIP Ticket',
    description: 'Exceptional sightlines of the American Express main stage',
    startingPrice: 1100,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem2 = {
    id: 'cjftxsxt10006ho8evph6c1vv',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/1-1_thumbnail_tickets%402.png',
    title: 'Week One: Platinum Ticket',
    description: 'Exclusive access to the Platinum Lounge',
    startingPrice: 3600,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem3 = {
    id: 'cjvvtxsxt10006ho8evph6ccc6',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/1-1_thumbnail_tickets%402.png',
    title: 'Week Two: General Admission Ticket',
    description: 'Exclusive access to the Platinum Lounge',
    startingPrice: 255,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem4 = {
    id: 'cjftxsxv0z06ho8evph6c1zz',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/1-1_thumbnail_tickets%402.png',
    title: 'Week Two: VIP Ticket',
    description: 'Exceptional sightlines of the American Express main stage',
    startingPrice: 1100,
    type: offerTypes_1.OfferItemType.Event
};
const eventOfferItem5 = {
    id: 'cjftxsxv0z06ho8evph6c1xx',
    parentId: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/1-1_thumbnail_tickets%402.png',
    title: 'Week Two: Platinum Ticket',
    description: 'Exclusive access to the Platinum Lounge',
    startingPrice: 3600,
    type: offerTypes_1.OfferItemType.Event
};
exports.eventOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvq',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/1-1_thumbnail_tickets%402.png',
    title: 'Tickets',
    description: 'Most Popular',
    type: offerTypes_1.OfferItemType.Event,
    startDate: date_fns_1.parse('2019-05-14', 'yyyy-MM-dd', new Date()).toJSON(),
    endDate: date_fns_1.parse('2019-10-15', 'yyyy-MM-dd', new Date()).toJSON(),
    details: eventCopy,
    uri: 'games',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/2_Hero_tickets%402x.png'
    ],
    venue: '',
    rewards: exports.eventRewards,
    rewardCopy: 'Rewards available when you bring 5 friends',
    items: [
        exports.eventOfferItem,
        eventOfferItem1,
        eventOfferItem2,
        eventOfferItem3,
        eventOfferItem4,
        eventOfferItem5
    ]
};
exports.hotelOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvr',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/1-2_thumbnail_hotels%402.png',
    title: 'Hotels',
    description: 'From $250',
    type: offerTypes_1.OfferItemType.Hotel,
    address: '',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/3_Hero_Hotels%402x.png'
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
    rewardCopy: 'Exclusive Hotel Packages'
};
exports.offerItemMerch2 = {
    id: 'cjftxsxt10007ho8e0cvvnc4h',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/5-2_thumbnail_merch%402x.png',
    title: 'ACL Flags Lineup Tank',
    description: '',
    startingPrice: 20,
    htmlDescription: merchCopy2,
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/5-2_hero_merch%402x.png',
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: {
        colors: [
            { value: 'abc', label: 'Red' },
            { value: 'sdf', label: 'Blue' },
            { value: 'g', label: 'Green' }
        ],
        sizes: [
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
            { value: 'xl', label: 'XL' }
        ]
    }
};
exports.offerItemMerch = {
    id: 'cjftxsxt10008hobbn7lr73db',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/5-1_thumbnail_merch%402x.png',
    title: 'Rainbow Bomber Jacket',
    description: 'Editor’s Choice',
    startingPrice: 100,
    htmlDescription: merchCopy,
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/5-1_hero_merch%402x.png',
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
    id: 'cjftxsxbb1000aho8e4ps2xp1o',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/5-3_thumbnail_merch%402x.png',
    title: '2017 Yellow Rose Feedstore Hat',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/5-3_hero_merch%402x.png',
    description: '10 Left',
    startingPrice: 35,
    type: offerTypes_1.OfferItemType.Merch,
    htmlDescription: merchCopy3,
    productDetails: { colors: [], sizes: [] }
};
exports.offerItemMerch4 = {
    id: 'cjftxsxt1000aho8e4bb2zz1o',
    parentId: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/5-4_thumbnail_merch%402x.png',
    media: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/5-4_hero_merch%402x.png',
    title: '3 Day ACL Lockers',
    description: 'MUST HAVE!',
    startingPrice: 45,
    htmlDescription: merchCopy4,
    type: offerTypes_1.OfferItemType.Merch,
    productDetails: { colors: [], sizes: [] }
};
exports.merchOfferItemParent = {
    id: 'cjftxsxt10001ho8e495ushvw',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/5-1_thumbnail_merch%402x.png',
    title: 'Official Merchandise',
    description: '',
    startingPrice: 20,
    type: offerTypes_1.OfferItemType.Merch,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/5-1_hero_merch%402x.png'
    ],
    details: merchCopy,
    rewards: exports.merchRewards,
    uri: 'official-merch',
    items: [exports.offerItemMerch, exports.offerItemMerch2, exports.offerItemMerch3, exports.offerItemMerch4]
};
exports.offer = {
    id: 'cjftxsxt10001ho8e495ushve',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
    title: '2018 Austin City Limits Music Festival',
    description: 'Fri, October 5 – Sun, October 14\nZilker Park, 2100 Barton Springs Rd, Austin, TX 78704',
    type: offerTypes_1.OfferItemType.Mixed,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/1_Hero_home%402x.png'
    ],
    details: '',
    uri: 'acl',
    items: [exports.eventOfferItemParent, exports.hotelOfferItemParent, exports.merchOfferItemParent]
};
exports.offerPage = {
    id: cuid(),
    brandColor: '#df633a',
    treeTitle: `WHO'S GOING (5)`,
    confirmationTitleCopy: 'Ready for your trip?',
    backgroundImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/0_ACL_landing+page%402x.png',
    location: 'Zilker Park, 2100 Barton Springs Rd, Austin, TX 78704 ',
    startDate: new Date(2019, 9, 10).toJSON(),
    endDate: new Date(2019, 9, 15).toJSON(),
    offer: exports.offer,
    uri: 'acl',
    shareTitle: 'Now share this page with friends',
    shareOrderTitle: 'Get ready for your trip!',
    emptyCheckoutTitle: 'Pay Separately, Get Together',
    emptyCheckoutDescription: 'Go with friends, pay separately and get rewarded',
    isNeedToShowTax: true,
    leaderboardImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/gif_ACL.gif',
    progressImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/reward+progress.svg',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-acl/confirmation.svg',
    orderSummaryTitle: 'Booking',
    shareDetailsCopy: `Want more friends to join you? They will see
  your group itinerary and can book their own trip. You’ll get bigger rewards by growing your group!`
};
