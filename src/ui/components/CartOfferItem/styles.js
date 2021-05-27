"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
exports.cartItemStyles = {
    cartImageCss: react_emotion_1.css `
    height: ${44 / 16}rem;
    width: ${67 / 16}rem;
    background-position: center;
    background-size: cover;
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
  `,
    cartOfferDescription: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${12 / 16}rem;
  `,
    cartItemDetails: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${11 / 16}rem;
    color: ${variables_1.colors.tableHeaderGray};
  `,
    cartOfferQuantityPrice: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${12 / 16}rem;
    margin-top: 1rem;
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
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    width: calc(100% - 14rem);
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
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 1rem;
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
    cartSplitTotalItemBoldCss: react_emotion_1.css `
    font-weight: bold;
  `,
    avatarCss: react_emotion_1.css `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid ${variables_1.colors.brandColor};
  `,
    avatarTitleCss: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${12 / 16}rem;
    color: #908f8f;
  `,
    avatarDetailsCss: react_emotion_1.css `
    font-family: ${variables_1.typography.fontPrimary};
    font-size: ${16 / 16}rem;
    font-weight: bold;
    padding: 5px 5px 0 0;
  `,
    avatarAmountCss: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${12 / 16}rem;
  `
};
exports.cartItemHeaderStyles = {
    headerItemCss: react_emotion_1.css `
    display: flex;
  `,
    image: react_emotion_1.css `
    ${exports.cartItemStyles.cartImageCss};
    height: auto;
  `,
    offerItemTitle: react_emotion_1.css `
    color: #908f8f;
    font-family: ${variables_1.typography.fontSecondary};
    font-size: 10px;
  `,
    removeIcon: react_emotion_1.css `
    margin-right: 2.5rem;
  `
};
