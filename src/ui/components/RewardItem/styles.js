"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("css/variables");
const react_emotion_1 = require("react-emotion");
exports.offerItemStyles = {
    cartImageCss: react_emotion_1.css `
    height: ${44 / 16}rem;
    width: ${67 / 16}rem;
    background-position: center;
    background-size: cover;
    background: ${variables_1.colors.brandColor};
  `,
    cartItemCss: react_emotion_1.css `
    display: flex;
    border-bottom: 1px #f0f0f0 solid;
    padding: 1.5rem 0;
  `,
    avatarItemCss: react_emotion_1.css `
    display: flex;
    align-items: center;
  `,
    cartOfferTitleCss: react_emotion_1.css `
    font-family: ${variables_1.typography.fontPrimary};
    font-size: ${15 / 16}rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  `,
    cartOfferDescription: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${12 / 16}rem;
  `,
    cartOfferQuantityPrice: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${12 / 16}rem;
    width: 1rem;
    margin-right: 0.8rem;
  `,
    priceCtaContainerCss: react_emotion_1.css `
    display: flex;
    flex-direction: column;
  `,
    quantityContainerCss: react_emotion_1.css `
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    margin-left: 3rem;
  `,
    offerContentCss: react_emotion_1.css `
    padding: 0 1rem;
    margin-right: auto;
  `,
    cartTotalCss: react_emotion_1.css `
    display: flex;
    background: #f8f8f8;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
  `,
    cartSplitTotalCss: react_emotion_1.css `
    display: flex;
    background: ${variables_1.colors.brandColor};
    flex-direction: row;
    padding: 1.25rem;
    height: 5.625rem;
  `,
    cartTotalRowCss: react_emotion_1.css `
    display: table-row;
    height: 1.25rem;
    line-height: 1;
  `,
    cartTotalCellCss: react_emotion_1.css `
    display: table-cell;
  `,
    remove: react_emotion_1.css `
    margin-left: 1rem;
    margin-right: 0.7rem;
    width: 1.5rem;
    height: 1.5rem;
  `,
    removeIcon: react_emotion_1.css `
    width: 1rem;
    height: 1rem;
    transform: width 0.25s ease-in-out;
    :hover {
      width: 1.125rem;
      height: 1.125rem;
    }
  `
};
