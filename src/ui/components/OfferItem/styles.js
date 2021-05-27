"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("css/variables");
const react_emotion_1 = require("react-emotion");
const buttons_1 = require("css/buttons");
exports.offerItemStyles = {
    offerImageCss: react_emotion_1.css `
    margin-right: 0.75rem;
    height: ${44 / 16}rem;
    width: 3.75rem;
    @media ${variables_1.mediaQueries.bpAboveSinglePanelWidth} {
      margin-right: 1rem;
      height: 85px;
      width: 150px;
    }
    background-position: center;
    background-size: cover;
  `,
    offerItemContainerCss: react_emotion_1.css `
    :hover {
      background: ${variables_1.colors.colorGrayLight};
    }
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${variables_1.colors.colorGrayLight};
  `,
    offerItemCss: 'offerItem ' +
        react_emotion_1.css `
      display: flex;
      align-items: center;
      padding: 0.75rem 0;
      @media ${variables_1.mediaQueries.bpAboveSinglePanelWidth} {
        padding: 0.75rem;
      }
    `,
    facepileSection: react_emotion_1.css `
    display: flex;
  `,
    inventoryLeft: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${12 / 16}rem;
    margin: 0.5rem 0 0 0;
    color: ${variables_1.colors.brandColor};
  `,
    facepileText: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${12 / 16}rem;
    margin: 0.5rem 0 0 0;
    color: #8f8f8f;
  `,
    adjustCtaContainerCss: 'adjustCtaContainer ' +
        react_emotion_1.css `
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      margin: -1rem 0 1rem 0;
      padding: 0.5rem;
    `,
    priceCtaContainerCss: react_emotion_1.css `
    display: flex;
    align-items: center;
    margin-left: auto;
    flex-direction: column;
    ${variables_1.fonts.priceText};
    /* max-width: 3rem; */
    @media ${variables_1.mediaQueries.bpAboveSinglePanelWidth} {
      flex-direction: row;
      /* max-width: 5rem; */
    }
  `,
    offerItemTitleCss: react_emotion_1.css `
    font-family: ${variables_1.typography.fontPrimary};
    font-size: ${15 / 16}rem;
    font-weight: bold;
    color: ${variables_1.colors.standardBlack};
  `,
    offerItemRewardCss: react_emotion_1.css `
    margin-top: 0.5rem;
    color: ${variables_1.colors.brandColor};
    font-family: ${variables_1.typography.fontSecondary};
  `,
    offerItemBrandedDescriptionCss: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    font-size: ${12 / 16}rem;
    color: ${variables_1.colors.brandColor};
  `,
    offerContentCss: 'offerContent ' +
        react_emotion_1.css `
      width: calc(100% - 7.5rem);
      @media ${variables_1.mediaQueries.bpAboveSinglePanelWidth} {
        padding: 0 1rem 0 0;
        width: calc(100% - 10rem);
      }
      color: ${variables_1.colors.secondaryGray};
    `,
    offerSeatmapContentCss: 'offerContent ' +
        react_emotion_1.css `
      width: calc(100% - 7.5rem);
      @media ${variables_1.mediaQueries.bpAboveSinglePanelWidth} {
        padding: 0 1rem 0 0;
        width: calc(100% - 10rem);
      }
      color: ${variables_1.colors.secondaryGray};
    `,
    dropdownCss: react_emotion_1.css `
    margin-left: auto;
  `,
    skuContainerCss: react_emotion_1.css `
    display: flex;
    align-items: center;
    margin-top: 1rem;
  `,
    skuTitleCss: react_emotion_1.css `
    margin-left: 1rem;
  `,
    ctaCss: react_emotion_1.css `
    ${buttons_1.secondaryButton};
    margin: 1rem 0;
  `,
    seatmapCss: react_emotion_1.css `
    display: block;
    text-align: center;
    font-size: ${15 / 16}rem;
    padding: 1rem 1rem 1rem 1rem;
    text-decoration: underline;
  `,
    adjustTitle: react_emotion_1.css `
    margin: 0.5rem auto 0.5rem auto;
    padding-right: 1rem;
  `,
    adjustContianer: react_emotion_1.css `
    display: flex;
    align-self: flex-end;
    margin: -1rem 0 1rem 0;
    padding: 0.5rem;
  `
};
