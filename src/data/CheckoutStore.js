"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cuid = require("cuid");
exports.CheckoutDefaults = {
    defaults: {
        payment: {
            purchaserName: '',
            amountOwed: 0,
            stripeToken: '',
            splitPay: {
                isSplitPay: false,
                splitType: 'even',
                friends: [
                    {
                        id: cuid(),
                        name: '',
                        phone: '',
                        email: '',
                        splitAmount: 0,
                        __typename: 'SplitFriend'
                    }
                ],
                __typename: 'SplitPay'
            },
            __typename: 'Payment'
        },
        currentOrder: {
            address: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            groupName: '',
            __typename: 'CurrentOrder'
        }
    }
};
