"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuantityAdjust_1 = require("components/Shared/QuantityAdjust");
const React = require("react");
exports.OfferItemQuantityAdjust = ({ offerItem, setOfferItemData, offerItemData }) => {
    return (React.createElement(QuantityAdjust_1.QuantityAdjust, { onAdd: () => {
            setOfferItemData({
                offerItemId: offerItem.id,
                quantity: offerItemData ? offerItemData.quantity + 1 : 1
            });
        }, onRemove: () => {
            if (offerItemData &&
                offerItemData.quantity &&
                offerItemData.quantity > 0) {
                setOfferItemData({
                    offerItemId: offerItem.id,
                    quantity: offerItemData.quantity - 1
                });
            }
        }, removeButtonDisabled: !offerItemData || !offerItemData.quantity, addButtonDisabled: false, quantity: offerItemData ? offerItemData.quantity : 0 }));
};
