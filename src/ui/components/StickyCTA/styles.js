"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
exports.styles = {
    ctaContainerCss: react_emotion_1.css `
    display: flex;
    align-items: center;
    background: ${variables_1.colors.colorWhiteOpacity};
    padding: 1.25rem;
    height: 5.625rem;
    position: relative;
  `,
    keepShopping: react_emotion_1.css `
    margin-left: auto;
  `,
    checkoutButtonDisabled: react_emotion_1.css `
    margin-left: auto;
  `,
    checkoutInfoHeader: react_emotion_1.css `
    ${variables_1.fonts.primaryTitle};
    color: ${variables_1.colors.brandColor};
  `,
    confirmBtn: react_emotion_1.css `
    margin-left: auto;
  `,
    checkoutButtonEnabled: react_emotion_1.css `
    margin-left: 1rem;
  `
};
