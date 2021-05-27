"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hotelUserSelectionsQuery_gql_1 = require("./clientQueries/hotelUserSelectionsQuery.gql");
const eventUserSelectionsQuery_gql_1 = require("./clientQueries/eventUserSelectionsQuery.gql");
const merchUserSelectionsQuery_gql_1 = require("./clientQueries/merchUserSelectionsQuery.gql");
const timedUserSelectionsQuery_gql_1 = require("./clientQueries/timedUserSelectionsQuery.gql");
const offerItemUserSelectionsQuery_gql_1 = require("./clientQueries/offerItemUserSelectionsQuery.gql");
const UserSelectionsStore = {
    hotelUserSelections: {
        query: hotelUserSelectionsQuery_gql_1.default
    },
    merchUserSelections: {
        query: merchUserSelectionsQuery_gql_1.default
    },
    eventUserSelections: {
        query: eventUserSelectionsQuery_gql_1.default
    },
    offerItemUserSelections: {
        query: offerItemUserSelectionsQuery_gql_1.default
    },
    timedUserSelections: {
        query: timedUserSelectionsQuery_gql_1.default
    }
};
const now = new Date();
exports.UserSelectionsResolverAndDefaults = {
    defaults: {
        hotelUserSelections: {
            priceRange: {
                lowerBound: null,
                upperBound: null,
                __typename: 'PriceRange'
            },
            travelDates: {
                startDate: new Date().toJSON(),
                endDate: new Date().toJSON(),
                selectedMonthsDate: new Date().toJSON(),
                __typename: 'TravelDates'
            },
            timeslot: { date: '11:35 AM', __typename: 'Timeslot' },
            roomPreferences: {
                numAdults: 1,
                numChildren: 0,
                numRooms: 1,
                __typename: 'RoomPreferences'
            },
            __typename: 'HotelUserSelections'
        },
        eventUserSelections: {
            priceRange: {
                lowerBound: null,
                upperBound: null,
                __typename: 'PriceRange'
            },
            __typename: 'EventUserSelections'
        },
        merchUserSelections: {
            priceRange: {
                lowerBound: null,
                upperBound: null,
                __typename: 'PriceRange'
            },
            __typename: 'MerchUserSelections'
        },
        timedUserSelections: {
            chosenTime: {
                selectedMonthsDate: now.toJSON(),
                selectedTimeSlot: now.toJSON(),
                __typename: 'ChosenTime'
            },
            priceRange: {
                lowerBound: null,
                upperBound: null,
                __typename: 'PriceRange'
            },
            __typename: 'TimedUserSelections'
        },
        offerItemUserSelections: {
            selectedOfferItem: {
                id: null,
                type: null,
                media: null,
                htmlDescription: null,
                additionalMedia: null,
                additionalDescription: null,
                parentId: null,
                title: null,
                thumbnailImage: null,
                description: null,
                startingPrice: null,
                __typename: 'OfferItem'
            },
            selectedAdditionalOfferItem: {
                id: null,
                type: null,
                media: null,
                htmlDescription: null,
                additionalMedia: null,
                additionalDescription: null,
                parentId: null,
                title: null,
                thumbnailImage: null,
                description: null,
                startingPrice: null,
                __typename: 'OfferItem'
            },
            __typename: 'OfferItemUserSelections'
        }
    }
};
exports.default = UserSelectionsStore;
