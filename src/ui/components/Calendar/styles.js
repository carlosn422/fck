"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("css/variables");
const react_emotion_1 = require("react-emotion");
const calendarBaseStyle = react_emotion_1.css `
  position: absolute;
  top: 3rem;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.46);
  padding: 1rem;
  z-index: 1;
  left: 0;
  user-select: none;
`;
exports.styles = {
    dateRangePicker: react_emotion_1.css `
    width: calc(50% - 0.5rem);
  `,
    dateRangePickerCalendars: react_emotion_1.css `
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    ${calendarBaseStyle};
  `,
    calendarArticle: react_emotion_1.css `
    ${calendarBaseStyle};
    width: 100%;
  `,
    summary: react_emotion_1.css `
    text-align: center;
    padding: 0.5rem;
    background: ${variables_1.colors.colorGrayLight};
    cursor: pointer;
    user-select: none;
  `,
    calendar: react_emotion_1.css `
    width: calc(50% - 0.5rem);
    position: relative;
  `,
    datePickerCalendar: react_emotion_1.css `
    width: 14rem;
    margin: 0 auto;
  `,
    header: react_emotion_1.css `
    display: flex;
    position: relative;
    padding: 1rem 0 0.25rem 0;
  `,
    daysHeader: react_emotion_1.css `
    display: flex;
  `,
    daysContent: react_emotion_1.css `
    display: flex;
    flex-wrap: wrap;
  `,
    dayOfWeek: react_emotion_1.css `
    width: 2rem;
    line-height: 2rem;
    text-align: center;
  `,
    day: react_emotion_1.css `
    color: #ccc;
  `,
    availableDay: react_emotion_1.css `
    cursor: pointer;
    color: black;
    :hover {
      background: ${variables_1.colors.colorGrayLight};
    }
  `,
    selectedDay: react_emotion_1.css `
    background: ${variables_1.colors.brandColorLight};
  `,
    dayAsideMonth: react_emotion_1.css `
    visibility: hidden;
  `,
    month: react_emotion_1.css `
    margin: 0 auto;
    text-transform: uppercase;
    display: inline-block;
  `,
    navigate: react_emotion_1.css `
    cursor: pointer;
    border: 0;
    outline: none;
    background: white;
    :disabled {
      color: gray;
    }
    display: inline-block;
    position: absolute;
  `,
    navigatePrevious: react_emotion_1.css `
    transform: rotate(-90deg);
    left: 0;
  `,
    navigateNext: react_emotion_1.css `
    transform: rotate(90deg);
    right: 0;
  `
};
