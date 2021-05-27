import hotelUserSelectionsQuery from './clientQueries/hotelUserSelectionsQuery.gql'
import eventUserSelectionsQuery from './clientQueries/eventUserSelectionsQuery.gql'
import merchUserSelectionsQuery from './clientQueries/merchUserSelectionsQuery.gql'
import timedUserSelectionsQuery from './clientQueries/timedUserSelectionsQuery.gql'
import offerItemUserSelectionsQuery from './clientQueries/offerItemUserSelectionsQuery.gql'

export interface PriceRange {
  lowerBound?: number
  upperBound?: number
  __typename: string
}

export interface TimeSlot {
  date: string
  __typename: string
}

export interface DateRange {
  startDate?: Date
  endDate?: Date
  selectedMonthsDate: Date
  __typename: string
}

export interface RoomPreferences {
  numRooms: number
  numAdults: number
  numChildren: number
  __typename: string
}

const UserSelectionsStore = {
  hotelUserSelections: {
    query: hotelUserSelectionsQuery
  },
  merchUserSelections: {
    query: merchUserSelectionsQuery
  },
  eventUserSelections: {
    query: eventUserSelectionsQuery
  },
  offerItemUserSelections: {
    query: offerItemUserSelectionsQuery
  },
  timedUserSelections: {
    query: timedUserSelectionsQuery
  }
}
const now = new Date()
export const UserSelectionsResolverAndDefaults = {
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
}

export default UserSelectionsStore
