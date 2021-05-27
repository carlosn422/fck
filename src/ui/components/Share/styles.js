"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
exports.shareStyles = {
    container: react_emotion_1.css `
    display: row;
    align-items: left;
    width: 345px;
    height: 300px;
    margin: 0.5rem 5rem 0 5rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  `,
    title: react_emotion_1.css `
    font-family: ${variables_1.typography.fontPrimary};
    font-size: ${16 / 16}rem;
    font-weight: bold;
    line-height: 21px;
    text-align: center;
    padding: 24px 52px 24px 52px;
  `,
    sendInviteTitle: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${14 / 16}rem;
    font-weight: bold;
    line-height: 18px;
    text-align: center;
    padding: 28px 52px 18px 52px;
  `,
    inputContainer: react_emotion_1.css `
    display: flex;
    margin: 0 23px 0 23px;
    height: 33px;
    margin-bottom: 16px;
  `,
    button: react_emotion_1.css `
    background: ${variables_1.colors.brandColor};
    color: white;
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${12 / 16}rem;
    width: 66px;
    cursor: pointer;
  `,
    input: react_emotion_1.css `
    width: 100%;
    display: block;
    padding: 10px;
  `,
    socialContainer: react_emotion_1.css `
    display: flex;
    margin: 0 23px 0 23px;
    height: 33px;
  `,
    socialButton: react_emotion_1.css `
    height: 100%;
    width: 100%;
    display: block;
  `,
    socialButtonTwitter: react_emotion_1.css `
    margin: 0 5px 0 5px;
    height: 100%;
    width: 100%;
    display: block;
  `
};
