"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
exports.cartStyles = {
    article: react_emotion_1.css `
    display: flex;
    position: relative;
  `,
    container: react_emotion_1.css `
    display: flex;
    margin: 0 0 0 0.2rem;
    position: absolute;
    top: 0;
    right: 0;
  `,
    icon: react_emotion_1.css `
    margin-left: -0.5rem;
    width: 25px;
    height: 25px;
    background-position: center;
    background-size: cover;
  `,
    bubble: react_emotion_1.css `
    color: white;

    padding: 25%;
    min-width: 25px;

    text-align: center;
    margin: -8px 0 0 3px;
    border-radius: 50%;
    position: absolute;
    background: ${variables_1.colors.brandColor};
  `
};
