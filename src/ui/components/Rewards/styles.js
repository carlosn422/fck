"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
exports.rewardStyles = {
    link: react_emotion_1.css `
    color: white;
    font-size: 9px;
    font-family: ${variables_1.typography.fontSecondary};
    text-decoration: underline;
  `,
    description: react_emotion_1.css `
    color: white;
    font-family: ${variables_1.typography.fontSecondary};
    font-size: 12px;
  `,
    title: react_emotion_1.css `
    color: white;
    font-family: ${variables_1.typography.fontPrimary};
    font-size: 15px;
    font-weight: bold;
  `
};
