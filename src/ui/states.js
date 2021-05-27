"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OfferPresenter_1 = require("./OfferPresenter");
const ConfirmationPresenter_1 = require("./ConfirmationPresenter");
const CheckoutPresenter_1 = require("./CheckoutPresenter");
const OfferPage_1 = require("./OfferPage");
var Fuc;
(function (Fuc) {
    Fuc["OfferPage"] = "offerPage";
    Fuc["Offer"] = "offerPage.offer";
    Fuc["Checkout"] = "offerPage.checkout";
    Fuc["Confirm"] = "offerPage.confirm";
})(Fuc = exports.Fuc || (exports.Fuc = {}));
exports.app = {
    name: Fuc.OfferPage,
    component: OfferPage_1.default,
    url: '/offer/:offerPageUri',
    redirectTo: Fuc.Offer
};
exports.offer = {
    name: Fuc.Offer,
    component: OfferPresenter_1.default,
    url: '/:offerUri',
    params: {
        offerUri: null
    }
};
exports.checkout = {
    name: Fuc.Checkout,
    component: CheckoutPresenter_1.default,
    url: '/order/:orderId'
};
exports.confirm = {
    name: Fuc.Confirm,
    component: ConfirmationPresenter_1.default,
    url: '/confirm/:orderId'
};
exports.states = [exports.app, exports.offer, exports.checkout, exports.confirm];
