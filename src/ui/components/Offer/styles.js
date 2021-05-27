"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
exports.styles = {
    description: react_emotion_1.css `
    font-family: ${variables_1.fonts.secondaryTitle};
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
    selectionContainer: 'selection-container ' +
        react_emotion_1.css `
      display: flex;
      position: relative;
      margin-left: 0.5rem;
      padding-bottom: 1rem;
    `,
    titleContainer: react_emotion_1.css `
    margin: 1.5rem 0;
  `,
    priceSliderContainer: react_emotion_1.css `
    margin: 1.5rem 0;
  `,
    offerTitle: react_emotion_1.css `
    margin-bottom: 0.5rem;
  `,
    calendarIcon: react_emotion_1.css `
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    stroke: ${variables_1.colors.brandColor};
    margin-right: 0.5rem;
    fill: white;
  `,
    locationIcon: react_emotion_1.css `
    width: 1rem;
    height: 1rem;
    stroke: white;
    margin-right: 0.5rem;
    fill: ${variables_1.colors.brandColor};
  `,
    iconAndLocationContainer: react_emotion_1.css `
    ${variables_1.fonts.subText};
    display: flex;
    margin-bottom: 0.5rem;
    :last-of-type: {
      margin-bottom: 0;
    }
  `,
    slimOfferContentContainer: react_emotion_1.css `
    padding: ${variables_1.spacers.singlePanelPadding}rem;
    background: white;
    position: relative;
    border-top-left-radius: 0.75rem;
    margin-top: -0.375rem;
    min-height: calc(100% - 7.625rem);
  `,
    slimBackgroundTransparentCover: react_emotion_1.css `
    height: 8rem;
    background: transparent;
  `
};
