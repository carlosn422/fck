"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
const buttons_1 = require("css/buttons");
exports.formStyles = {
    sectionContainer: react_emotion_1.css `
    display: flex;
    align-items: center;
  `
};
exports.splitPayStyles = {
    friendsContainer: react_emotion_1.css `
    display: flex;
    flex-direction: column;
  `,
    sonyTitle: react_emotion_1.css `
    padding-top: 0.5rem;
    font-weight: bold;
    color: ${variables_1.colors.brandColor};
  `,
    friend: react_emotion_1.css `
    display: flex;
    margin-top: 1.5rem;
    :first-of-type {
      margin: 0;
    }
  `,
    friendAmount: react_emotion_1.css `
    margin-left: auto;
    display: flex;
    align-self: flex-start;
  `,
    mainContainer: react_emotion_1.css `
    height: 100%;
  `,
    friendInfo: react_emotion_1.css `
    width: 50%;
    display: flex;
    align-items: center;
  `,
    avatar: react_emotion_1.css `
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 1rem;
  `,
    friendDetails: react_emotion_1.css `
    flex-grow: 1;
  `,
    remove: react_emotion_1.css `
    align-self: flex-end;
    margin-left: 1rem;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  `,
    tree: react_emotion_1.css `
    margin: 2rem 5rem 5rem 5rem;
    background-position: center;
    background-size: contain;
  `,
    removeIcon: react_emotion_1.css `
    width: 1rem;
    height: 1rem;
    transform: width 0.25s ease-in-out;
    :hover {
      width: 1.125rem;
      height: 1.125rem;
    }
  `,
    addContainer: react_emotion_1.css `
    display: flex;
    align-items: center;
    margin: 1rem 0 0 auto;
  `,
    add: react_emotion_1.css `
    ${buttons_1.buttonGradient};
    margin-right: 1rem;
    padding: 0 0 0.125rem 0.125rem;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
  `,
    nameTitle: react_emotion_1.css `
    padding-top: 2rem;
    padding-bottom: 0.5rem;
  `,
    offerTitle: react_emotion_1.css `
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    font-weight: bold;
  `,
    sectionHeader: react_emotion_1.css `
    position: absolute;
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${11 / 16}rem;
    color: ${variables_1.colors.tableHeaderGray};
    z-index: 1;
    text-align: left;
  `
};
exports.paymentMethodStyles = {
    paymentContainerCss: react_emotion_1.css `
    margin-top: 3rem;
  `,
    paymentMethodInputsCss: react_emotion_1.css `
    display: flex;
    margin-top: 1rem;
  `,
    paymentMethodLabelCss: react_emotion_1.css `
    width: calc(50% - 1rem);
    cursor: pointer;
    user-select: none;
  `,
    paymentMethodInputCss: react_emotion_1.css `
    margin-right: 0.75rem;
  `,
    friendsList: react_emotion_1.css `
    margin-top: 3rem;
  `
};
