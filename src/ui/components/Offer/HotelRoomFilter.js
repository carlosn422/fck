"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const QuantityAdjust_1 = require("components/Shared/QuantityAdjust");
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
const ClickOutsideWrapper_1 = require("components/Shared/ClickOutsideWrapper");
const filterCss = react_emotion_1.css `
  border: 1px solid ${variables_1.colors.colorGrayLight};
  padding: 1.5rem;
  width: calc(50% - 0.5rem);
  border: 1px solid #efefef;
  padding: 1.5rem;
  position: absolute;
  z-index: 1;
  background: white;
`;
const hotelRoomFiltercontainerCss = react_emotion_1.css `
  width: calc(50% - 0.5rem);
  user-select: none;
  margin-left: auto;
`;
const quantityAdjustContainerCss = react_emotion_1.css `
  display: flex;
  align-items: center;
`;
const quantityAdjustCss = react_emotion_1.css `
  margin-left: auto;
`;
const summaryCss = react_emotion_1.css `
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${variables_1.colors.colorGrayLight};
  justify-content: center;
  cursor: pointer;
`;
const HotelRoomFilterComponent = ({ numRooms, numAdults, numChildren, onChange, className, isOpen, toggleIsOpen, wrapperRef }) => {
    const numGuestsText = numAdults + numChildren > 1 ? 'guests' : 'guest';
    const numRoomsText = numRooms > 1 ? 'rooms' : 'room';
    return (React.createElement("article", { className: hotelRoomFiltercontainerCss, ref: wrapperRef },
        React.createElement("section", { className: summaryCss, onClick: toggleIsOpen },
            React.createElement("div", { className: "summary-item" },
                numRooms,
                " ",
                numRoomsText,
                ", \u00A0"),
            React.createElement("div", { className: "summary-item" },
                numAdults + numChildren,
                " ",
                numGuestsText)),
        isOpen && (React.createElement("section", { className: filterCss },
            React.createElement("section", { className: quantityAdjustContainerCss },
                "Rooms:",
                React.createElement(QuantityAdjust_1.QuantityAdjust, { onAdd: () => {
                        onChange({
                            numRooms: numRooms + 1
                        });
                    }, onRemove: () => {
                        onChange({ numRooms: numRooms - 1 });
                    }, removeButtonDisabled: numRooms <= 0, addButtonDisabled: false, quantity: numRooms, className: quantityAdjustCss })),
            React.createElement("section", { className: quantityAdjustContainerCss },
                "Adults:",
                React.createElement(QuantityAdjust_1.QuantityAdjust, { onAdd: () => {
                        onChange({ numAdults: numAdults + 1 });
                    }, onRemove: () => {
                        onChange({ numAdults: numAdults - 1 });
                    }, removeButtonDisabled: numAdults <= 0, addButtonDisabled: false, quantity: numAdults, className: quantityAdjustCss })),
            React.createElement("section", { className: quantityAdjustContainerCss },
                "Children:",
                React.createElement(QuantityAdjust_1.QuantityAdjust, { onAdd: () => {
                        onChange({ numChildren: numChildren + 1 });
                    }, onRemove: () => {
                        onChange({ numChildren: numChildren - 1 });
                    }, removeButtonDisabled: numChildren <= 0, addButtonDisabled: false, quantity: numChildren, className: quantityAdjustCss }))))));
};
exports.HotelRoomFilter = ClickOutsideWrapper_1.clickOutsideWrapper(HotelRoomFilterComponent);
