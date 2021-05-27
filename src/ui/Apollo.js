"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_boost_1 = require("apollo-boost");
const apollo_boost_2 = require("apollo-boost");
const apollo_link_state_1 = require("apollo-link-state");
const apollo_link_http_1 = require("apollo-link-http");
const apollo_link_1 = require("apollo-link");
const lodash_1 = require("lodash");
const UserSelectionsStore_1 = require("data/UserSelectionsStore");
const PanelLayout_1 = require("components/Panel/PanelLayout");
const CheckoutStore_1 = require("data/CheckoutStore");
const httpLink = new apollo_link_http_1.HttpLink({
    // @ts-ignore
    uri: window.httpLinkUrl,
    credentials: 'same-origin'
});
const cache = new apollo_boost_2.InMemoryCache({
    dataIdFromObject: (o) => o.cId || o.id
});
const stateLink = apollo_link_state_1.withClientState(Object.assign({ cache, resolvers: {
        Mutation: {}
    } }, lodash_1.merge(PanelLayout_1.PanelResolverAndDefaults, UserSelectionsStore_1.UserSelectionsResolverAndDefaults, CheckoutStore_1.CheckoutDefaults)));
const link = apollo_link_1.ApolloLink.from([stateLink, httpLink]);
const client = new apollo_boost_1.ApolloClient({
    link,
    cache,
    connectToDevTools: true
});
exports.default = client;
