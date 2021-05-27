"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
const buttons_1 = require("css/buttons");
exports.confirmationStyles = {
    confirmation: react_emotion_1.css `
    display: flex;
    align-items: center;
  `,
    confirmationContainer: react_emotion_1.css `
    padding: 1.75rem;
  `,
    luggageIcon: react_emotion_1.css `
    height: ${180 / 16}rem;
    width: ${270 / 16}rem;
    background-size: contain;
    margin: 2rem auto 3rem auto;
  `,
    sonyLuggageIcon: react_emotion_1.css `
    height: ${150 / 16}rem;
    width: ${270 / 16}rem;
    background-size: contain;
    margin: 3rem auto 3rem auto;
  `,
    title: react_emotion_1.css `
    font-family: ${variables_1.typography.fontPrimary};
    font-size: ${25 / 16}rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: center;
  `,
    description: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    font-size: 14px;
    line-height: 1.2rem;
    padding: 0 2rem;
    text-align: center;
  `,
    grid: react_emotion_1.css `
    align-items: center;
  `,
    ctaCss: react_emotion_1.css `
    ${buttons_1.primaryButton};
    height: 3rem;
    width: 265px;
    margin: 1.75rem 8rem 1rem 8rem;
  `,
    groupCta: react_emotion_1.css `
    margin: 2rem 8rem 0 8rem;
    ${buttons_1.primaryButton};
    background: white;
    color: ${variables_1.colors.brandColor};

    width: 265px;
    height: 3rem;

    &:hover {
      background: ${variables_1.colors.brandColorLightest};
    }

    border: 1px solid ${variables_1.colors.brandColor};
  `,
    nameTitle: react_emotion_1.css `
    padding-bottom: 0.5rem;
  `,
    offerTitle: react_emotion_1.css `
    padding-top: 0.5rem;
    padding-bottom: 2rem;
    font-weight: bold;
  `,
    sonyTitle: react_emotion_1.css `
    padding-top: 0.5rem;
    font-weight: bold;
    color: ${variables_1.colors.brandColor};
  `,
    progress: react_emotion_1.css `
    height: ${175 / 16}rem;
    width: 100%;
    margin: 4rem 0;
  `,
    tree: react_emotion_1.css `
    margin: 2rem 0 3rem 3rem;
    background-position: center;
    background-size: contain;
  `,
    sectionHeader: react_emotion_1.css `
    position: relative;
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${11 / 16}rem;
    color: ${variables_1.colors.tableHeaderGray};
    z-index: 1;
    overflow: hidden;
    text-align: left;
    text-transform: uppercase;

    :after {
      position: absolute;
      top: 45%;
      overflow: hidden;
      width: 80%;
      margin-left: 10px;
      height: 1px;
      content: '\a0';
      background-color: ${variables_1.colors.colorGrayLight};
    }
  `,
    sectionSeparator: react_emotion_1.css `
    display: inline-block;
    vertical-align: middle;
  `
};
exports.orderSummaryStyles = {
    container: react_emotion_1.css `
    margin: 1.5rem 0 2.5rem 0;
  `,
    content: react_emotion_1.css `
    display: flex;
    margin-top: 1rem;
    font-size: 0.6875rem;
    color: ${variables_1.colors.secondaryBlack};
  `,
    bookingContent: react_emotion_1.css ``,
    contentItem: react_emotion_1.css `
    display: flex;
    padding-top: 0.25rem;
    :first-of-type: {
      padding-top: 0;
    }
  `,
    contentItemTitle: react_emotion_1.css `
    width: 7rem;
  `,
    paymentContent: react_emotion_1.css `
    margin-left: auto;
  `,
    orderNumber: react_emotion_1.css `
    color: ${variables_1.colors.brandColor};
  `
};
