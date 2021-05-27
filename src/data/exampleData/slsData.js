"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offerTypes_1 = require("custom-typings/offerTypes");
const guid_1 = require("utils/guid");
const nightLifeCopy = `<p><sup><span <span style="font-size: 16pt; font-family:SharpSans,
arial;">Hyde at AmericanAirlines Arena
</span></sup>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">
A chic, intimate getaway for nightlife connoisseurs,
Hyde AmericanAirlines is the ultimate in exclusive socializing.
It gives new meaning to home-court advantage with gourmet fare, vibrant
mixology, inspired design and impeccable service.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span <span style="font-size: 12pt; font-family:SharpSans,
arial;">Highlights
</span></sup></p>
<p>&nbsp;</p>
<ul>
<li style="font-size: 11pt; color: #908f8f;"><sup><span style="font-size: 11pt; color: #908f8f;">An Exclusive 250-Person
Venue with Multiple Bars, Lounge Seating and a Private Dining Room</span></sup></li>
<li style="font-size: 11pt; color: #908f8f;"><sup><span style="font-size: 11pt; color: #908f8f;">A Menu Composed by
sbe&rsquo;s Award-Winning Chefs</span></sup></li>
<li style="font-size: 11pt; color: #908f8f;"><sup><span style="font-size: 11pt; color: #908f8f;">A Branded Cocktail
Program Featuring Beverages Made with the Freshest Ingredients</span></sup></li>
</ul>`;
const spaCopy = `<p><sup><span <span style="font-size: 16pt; font-family:SharpSans,
arial;">Ciel Spa by Pearl Recovery Retreat and Wellness
</span></sup>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;"><br /></span><span
style="font-size: 11pt; color: #908f8f;">Our mission is simple&hellip; to pamper
your every need and create an exceptional relaxation experience that exceeds your expectations.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Committed to providing a haven
of tranquility, Ciel Spa by Pearl Recovery Retreat and Wellness at the SLS
Hotel, a Luxury Collection Hotel, Beverly Hills, offers luxurious spa treatments
by some of the finest therapists in the world. Designed to indulge your every whim,
our spa services include endermologie, massages, facials, body treatments, couple&rsquo;s
treatments, hair care, nail care, waxing, and makeup application. Furthermore, Ciel Spa is one
of the only spas in Los Angeles to offer exclusive Biologique Recherche facial and anti-aging
treatments.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Ciel Spa has everything you need to immerse yourself in
refined relaxation. &nbsp;Our 5,000 square-foot Philippe Starck-designed spa boasts a soothing white
d&eacute;cor of billowing curtains, comfy chairs and clean lines to keep you feeling serene and peaceful.
Indulge in our relaxation lounge, couples massage suite, herbal steam rooms, over-sized experience showers,
and custom massage beds. At Ciel, we promise you will have the best spa experience you have ever had!</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">We look forward to indulging you so you can
#spalikesocialtes at Ciel Spa!</span></sup></p>`;
const hotelCopy = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>About SLS Hotels</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">The brainchild of Sam Nazarian,
founder and CEO of global lifestyle hospitality company sbe, SLS Hotels has created a new paradigm
in the luxury hotel experience that speaks to a global, sophisticated audience, and presents an
alternative concept of luxury that revels in an unabashedly cheeky, modern spirit. SLS dares to
dream a modern day playground &ndash; a place of enchantment, delight and elegance founded on the
principles of incredible service, world class cuisine and design.</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">SLS hotels are currently open in Beverly Hills,
South Beach, Brickell, Las Vegas, and The Bahamas. With more hotels and residences in development,
the dream is expanding and evolving, and continues to be reinterpreted through the creative visions
of a diverse ensemble of leading designers, architects and chefs.</span></sup></p>`;
const roomCopy = `<p><sup><span style="font-size: 16pt;
font-family:SharpSans, arial;"><strong>Simply Luxurious Stays</strong></span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">262-sq-foot (24-sq-meter) room with bay views</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">1 King Bed (Extra beds available: Crib)</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Room sleeps 3 guests (up to 2 children)</span></sup></p>
<p>&nbsp;</p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Free Cancellation (until Wed, Sep 25)</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Breakfast Included</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Free Internet</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">Special Deal</span></sup></p>
<p><sup><span style="font-size: 11pt; color: #908f8f;">No Expedia booking or credit card fees</span>
<span style="font-size: 11pt; color: #908f8f;"><br /></span><span style="font-size: 11pt; color: #908f8f;"><br />
</span><span style="font-size: 11pt; color: #908f8f;">A f&ecirc;te extraordinaire. Service standards you
would expect from a Los Angeles luxury hotel with a serious injection of boutique style,
creativity and fun. Fantastical interiors by Philippe Starck and culinary arts from the
imagination of Chef Jos&eacute; Andr&eacute;s. Once you experience it, you know. This is SLS
Hotel, a Luxury Collection Hotel, Beverly Hills</span></sup></p>`;
exports.hotelRewards = [
    {
        id: '100',
        name: 'Free Large Cabana Upgrade',
        description: 'When you bring 20 friends',
        threshold: 20,
        thresholdCopy: 'Friends'
    },
    {
        id: '101',
        name: 'Steak House Dinner',
        description: 'When your group books 5 nights',
        threshold: 5,
        thresholdCopy: 'Friends'
    },
    {
        id: '102',
        name: 'Free Champagne',
        description: 'When your group books 3 nights',
        threshold: 3,
        thresholdCopy: 'Friends'
    }
];
exports.spaRewards = [
    {
        id: '1003',
        name: 'Fresh Ciel Manicure and Hand Massage',
        description: 'When you bring 15 friends',
        threshold: 15,
        thresholdCopy: 'Friends'
    },
    {
        id: '1004',
        name: 'Creme Biofixine',
        description: 'When you bring 10 friends',
        threshold: 10,
        thresholdCopy: 'Friends'
    },
    {
        id: '1005',
        name: 'Ciel Spa Body Lotion',
        description: 'When you bring 5 friends',
        threshold: 5,
        thresholdCopy: 'Friends'
    }
];
exports.nightLifeRewards = [
    {
        id: '1105',
        name: 'Grey Goose Magnum Vodka',
        description: 'When you bring 20 friends',
        threshold: 20,
        thresholdCopy: 'Friends'
    },
    {
        id: '1106',
        name: 'Signature Cocktails',
        description: 'When you bring 12 friends',
        threshold: 12,
        thresholdCopy: 'Friends'
    },
    {
        id: '1107',
        name: 'Spicy Tuna Rolls',
        description: 'When your group buy 6 items',
        threshold: 6,
        thresholdCopy: 'Friends'
    }
];
exports.smlHotelOfferItem = {
    id: 'cjg8ckfiv000l3i5nnawuwwq6',
    parentId: 'cjg8ckfin000b3i5nqvliryz6',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/rooms/Room1_Super.png',
    title: 'Superior, King Bed',
    description: 'In high demand',
    startingPrice: 550,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.smlHotelOfferItem1 = {
    id: 'cjg8ckfiv000m3i5n4znpx91o',
    parentId: 'cjg8ckfin000b3i5nqvliryz6',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/rooms/Room2_Premier.png',
    title: 'Premier, King Bed ',
    description: '10 people are looking at this right now',
    startingPrice: 588,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.smlHotelOfferItem2 = {
    id: 'cjg8ckfis000i3i5nittntgbj',
    parentId: 'cjg8ckfin000b3i5nqvliryz6',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/rooms/Room3_Studio.png',
    title: 'Studio Suite, King Bed',
    description: 'Free cancellation until 48 hours before',
    startingPrice: 649,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.smlHotelOfferItem3 = {
    id: 'cjg8ckfis000i3i5nittntgbx',
    parentId: 'cjg8ckfin000b3i5nqvliryz6',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/rooms/Room4_Terrace.png',
    title: 'Terrace Room, King Bed',
    description: '5 people are looking at this right now',
    startingPrice: 618,
    type: offerTypes_1.OfferItemType.Hotel
};
exports.hotelOfferListItem1 = {
    id: guid_1.default(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/hotels/Hotel_1_BH.png',
    title: 'Beverly Hills',
    description: '',
    address: '465 S. La Cienega Blvd. Los Angeles, CA 90048',
    startingPrice: 350,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/rooms/Room0_Hero%402x.png'
    ],
    details: roomCopy,
    uri: 'Beverly-Hills',
    items: [
        exports.smlHotelOfferItem,
        exports.smlHotelOfferItem1,
        exports.smlHotelOfferItem2,
        exports.smlHotelOfferItem3
    ]
};
exports.hotelOfferListItem2 = {
    id: guid_1.default(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/hotels/Hotel_2_SB.png',
    title: 'South Beach',
    description: '',
    address: '1701 Collins Ave. Miami Beach, FL 33139',
    startingPrice: 250,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/rooms/Room0_Hero%402x.png'
    ],
    details: roomCopy,
    uri: 'South-Beach',
    items: [exports.smlHotelOfferItem, exports.smlHotelOfferItem1, exports.smlHotelOfferItem2]
};
exports.hotelOfferListItem3 = {
    id: guid_1.default(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/hotels/Hotel_3_LV.png',
    title: 'Las Vegas',
    description: '',
    address: '2535 S Las Vegas Blvd Las Vegas, NV 89109',
    startingPrice: 90,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/rooms/Room0_Hero%402x.png'
    ],
    details: roomCopy,
    uri: 'Las-Vegas',
    items: [exports.smlHotelOfferItem, exports.smlHotelOfferItem1, exports.smlHotelOfferItem2]
};
exports.hotelOfferListItem4 = {
    id: guid_1.default(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/hotels/Hotel_4_Brickell.png',
    title: 'Brickell',
    description: '',
    address: '1300 South Miami Avenue, Miami, FL 33130',
    startingPrice: 180,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/rooms/Room0_Hero%402x.png'
    ],
    details: hotelCopy,
    uri: 'Brickell',
    items: [exports.smlHotelOfferItem, exports.smlHotelOfferItem1, exports.smlHotelOfferItem2]
};
exports.hotelOfferListItem5 = {
    id: guid_1.default(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/hotels/Hotel_5_LB.png',
    title: 'Lux Brickell',
    description: '',
    address: '1300 South Miami Avenue, Miami, FL 33130',
    startingPrice: 180,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/rooms/Room0_Hero%402x.png'
    ],
    details: hotelCopy,
    uri: 'Brickell',
    items: [exports.smlHotelOfferItem, exports.smlHotelOfferItem1, exports.smlHotelOfferItem2]
};
exports.hotelOfferListItem6 = {
    id: guid_1.default(),
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/hotels/Hotel_6_BM.png',
    title: 'Baha Mar',
    description: '',
    address: '1 Baha Mar Blvd. Nassau, The Bahamas',
    startingPrice: 415,
    type: offerTypes_1.OfferItemType.Hotel,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/rooms/Room0_Hero%402x.png'
    ],
    details: hotelCopy,
    uri: 'Baha-Mar',
    items: [exports.smlHotelOfferItem, exports.smlHotelOfferItem1, exports.smlHotelOfferItem2]
};
exports.nightLifeOfferItem = {
    id: 'cjg8ckfiq000h3i5nhxn9rp0o',
    parentId: 'cjg8ckfik00083i5nstq6amr4',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/nightlife/Nightlife_1.png',
    title: 'Premier Seats at Hyde Lounge at STAPLES Center ',
    description: 'Accommodate up to 6 guests, 2 bottles',
    startingPrice: 245,
    type: offerTypes_1.OfferItemType.Timed
};
const nightLifeOfferItem1 = {
    id: 'cjg8ckfiq000g3i5nw3tzbi79',
    parentId: 'cjg8ckfik00083i5nstq6amr4',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/nightlife/Nightlife_2.png',
    title: 'Exclusive Lounge at Hyde Lounge, STAPLES Center',
    description: 'Accommodate up to 10 guests',
    startingPrice: 1200,
    type: offerTypes_1.OfferItemType.Timed
};
const nightLifeOfferItem2 = {
    id: 'cjg8ckfip000f3i5noyq0gk8y',
    parentId: 'cjg8ckfik00083i5nstq6amr4',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/nightlife/Nightlife_3.png',
    title: 'Main Room Table at Hyde American Airlines',
    description: 'Accommodate up to 6 guests, 2 bottles',
    startingPrice: 800,
    type: offerTypes_1.OfferItemType.Timed
};
const nightLifeOfferItem3 = {
    id: 'cjg8ckfip000f3i5noyq0gk8z',
    parentId: 'cjg8ckfik00083i5nstq6amr4',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/nightlife/Nightlife_4.png',
    title: 'Private Suites at Hyde Sunset Kitchen + Cocktails',
    description: 'Accommodate up to 10 guests, 4 bottles',
    startingPrice: 1200,
    type: offerTypes_1.OfferItemType.Timed
};
exports.spaLifeOfferItem = {
    id: 'cjg8ckfio000e3i5n7o5xgn6m',
    parentId: 'cjg8ckfim000a3i5n776twm0r',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/spa/SPA_1.png',
    title: 'Ciel Signature Massage at SLS Beverly Hills',
    description: 'Relax the body and de-stress the mind',
    startingPrice: 185,
    type: offerTypes_1.OfferItemType.Timed
};
const spaLifeOfferItem1 = {
    id: 'cjg8ckfio000d3i5nw52a4nki',
    parentId: 'cjg8ckfim000a3i5n776twm0r',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/spa/SPA_2.png',
    title: 'Ciel Custom Facial at SLS Beverly Hills',
    description: 'Personalized treatment around your specific needs ',
    startingPrice: 200,
    type: offerTypes_1.OfferItemType.Timed
};
const spaLifeOfferItem2 = {
    id: 'cjg8ckfio000c3i5nbvoyf4d6',
    parentId: 'cjg8ckfim000a3i5n776twm0r',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/spa/SPA_3.png',
    title: 'Spa Packages at SLS Beverly Hills',
    description: 'Great Value Today',
    startingPrice: 500,
    type: offerTypes_1.OfferItemType.Timed
};
const spaLifeOfferItem3 = {
    id: 'cjg8ckfio000c3i5nbvoyf4d9',
    parentId: 'cjg8ckfim000a3i5n776twm0r',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/spa/SPA_4.png',
    title: 'So Long Soreness at SLS Brickell',
    description: 'Ultimate sensation of harmony and relaxation',
    startingPrice: 159,
    type: offerTypes_1.OfferItemType.Timed
};
const spaLifeOfferItem4 = {
    id: 'cjg8ckfio000c3i5nbvoyf4d0',
    parentId: 'cjg8ckfim000a3i5n776twm0r',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/spa/SPA_5.png',
    title: 'Serenity Lift Spirits at SLS Brickell',
    description: 'Himalayan salt scrub, Followed by a serene 60 minute Swedish massage',
    startingPrice: 340,
    type: offerTypes_1.OfferItemType.Timed
};
exports.nightLifeOfferItemParent = {
    id: 'cjg8ckfik00083i5nstq6amr4',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/home/SLS_2_Nightlife.png',
    title: 'Night Life',
    description: 'Upscale Nightlife Experience',
    type: offerTypes_1.OfferItemType.Timed,
    details: nightLifeCopy,
    uri: 'night-life',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/nightlife/Nightlife_0_hero%402x.png'
    ],
    rewards: exports.nightLifeRewards,
    rewardCopy: 'Rewards available for bringing friends',
    items: [
        exports.nightLifeOfferItem,
        nightLifeOfferItem1,
        nightLifeOfferItem2,
        nightLifeOfferItem3
    ]
};
exports.hotelOfferItemParent = {
    id: 'cjg8ckfin000b3i5nqvliryz6',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/home/SLS_1_Hotel.png',
    title: 'Hotels',
    description: 'Luxury Hotel Experience',
    type: offerTypes_1.OfferItemType.Hotel,
    address: '',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/hotels/Hotel_0_Hero%402x.png'
    ],
    details: hotelCopy,
    uri: 'hotels',
    items: [
        exports.hotelOfferListItem1,
        exports.hotelOfferListItem2,
        exports.hotelOfferListItem3,
        exports.hotelOfferListItem4,
        exports.hotelOfferListItem5,
        exports.hotelOfferListItem6
    ],
    rewards: exports.hotelRewards,
    rewardCopy: 'Rewards available for bringing friends'
};
exports.spaOfferItemParent = {
    id: 'cjg8ckfim000a3i5n776twm0r',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/home/SLS_3_Spa.png',
    title: 'Spa Treatment',
    description: 'Recharge the inner spirit and enhance physical well-being',
    type: offerTypes_1.OfferItemType.Timed,
    details: spaCopy,
    uri: 'spa',
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/spa/SPA_0_Hero%402x.png'
    ],
    rewards: exports.spaRewards,
    rewardCopy: 'Rewards available for bringing friends',
    items: [
        exports.spaLifeOfferItem,
        spaLifeOfferItem1,
        spaLifeOfferItem2,
        spaLifeOfferItem3,
        spaLifeOfferItem4
    ]
};
exports.offer = {
    id: 'cjg8ckfil00093i5nlvm7gmc1',
    thumbnailImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo/images/home/pic_01home_01.png',
    title: 'SLS Hotel',
    description: 'Luxury',
    type: offerTypes_1.OfferItemType.Mixed,
    media: [
        'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/home/SLS_0_Hero%402x.png'
    ],
    details: '',
    uri: 'sls',
    items: [exports.hotelOfferItemParent, exports.nightLifeOfferItemParent, exports.spaOfferItemParent]
};
exports.offerPage = {
    id: guid_1.default(),
    brandColor: '#d8a200',
    offer: exports.offer,
    uri: 'sls',
    treeTitle: `WHO'S GOING (5)`,
    isNeedToShowTax: true,
    shareOrderTitle: 'Get ready for your trip!',
    shareTitle: 'Now share this page with friends',
    confirmationTitleCopy: 'Ready for your trip?',
    emptyCheckoutTitle: 'Pay Separately, Get Together',
    emptyCheckoutDescription: 'Buy your tickets, invite friends and earn perks',
    backgroundImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/background.png',
    leaderboardImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/gif_SLS.gif',
    progressImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/confirmation_reward+progress.svg',
    confirmationDetailsImage: 'https://s3.amazonaws.com/fevo-fuc/assets-demo-sls/images/travel+bag.svg',
    orderSummaryTitle: 'Booking',
    shareDetailsCopy: `Want more friends to join you? They will see
  your group itinerary and can book their own trip. You’ll get bigger rewards by growing your group!`
};
