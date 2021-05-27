"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
const ClickOutsideWrapper_1 = require("components/Shared/ClickOutsideWrapper");
const calendarBaseStyle = react_emotion_1.css `
  position: absolute;
  top: 3rem;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.46);
  padding: 1rem;
  z-index: 1;
  right: 0;
  user-select: none;
`;
const timePickerCalendars = react_emotion_1.css `
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  ${calendarBaseStyle};
`;
const summaryCss = react_emotion_1.css `
  text-align: center;
  padding: 0.5rem;
  background: ${variables_1.colors.colorGrayLight};
  cursor: pointer;
  user-select: none;
`;
const timeslotPicker = react_emotion_1.css `
  width: calc(50% - 0.5rem);
  margin-left: 0.5rem;
`;
const TimeslotsItem = react_emotion_1.css `
  padding: 0.625rem 0.5rem 0.625rem 0.5rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  width: 100%;
  &:hover {
    background: ${variables_1.colors.colorGrayLight};
  }
`;
const Timeslots = ({ timeSlots, selectedTimeSlot, toggleIsOpen, isOpen, onTimeSelect, wrapperRef }) => {
    const timeSlotSummary = (timeslot) => {
        if (!timeslot || !timeslot.date) {
            return 'Timeslot';
        }
        else {
            return timeslot.date;
        }
    };
    const summary = () => {
        return (React.createElement("div", { className: summaryCss, onClick: toggleIsOpen }, timeSlotSummary(selectedTimeSlot)));
    };
    return (React.createElement("article", { className: timeslotPicker, ref: wrapperRef },
        summary(),
        isOpen && (React.createElement("div", { className: `${timePickerCalendars}` }, timeSlots.map(t => {
            return (React.createElement("div", { className: TimeslotsItem, key: t.date, onClick: () => {
                    onTimeSelect(t);
                    toggleIsOpen();
                } }, t.date));
        })))));
};
exports.default = ClickOutsideWrapper_1.clickOutsideWrapper(Timeslots);
