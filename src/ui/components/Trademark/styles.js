"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
exports.trademarkStyles = {
    sonyContainer: react_emotion_1.css `
    align-items: left;
    margin: auto 0;
  `,
    container: react_emotion_1.css `
    display: row;
    align-items: left;
    margin: auto 0;
  `,
    title: react_emotion_1.css `
    color: white;
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${10 / 16}rem;
  `,
    sonyTitle: react_emotion_1.css `
    margin: 0.1rem 0 0 0rem;
    color: white;
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${12 / 16}rem;
  `,
    logoImage: react_emotion_1.css `
    width: 60px;
    height: 27px;
    background-position: center;
  `
};
