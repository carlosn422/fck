"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
// const brandColor = window['primaryBrandColor'] || '#FF7676'
const brandColors = window['brandColors']
    ? JSON.parse(window['brandColors'])
    : {
        brandColor: '#FF7676',
        brandColorDark: '#ff4343',
        brandColorDarker: '#ff1010',
        brandColorLight: '#ffa9a9',
        brandColorLighter: '#ffdcdc',
        brandColorLightest: '#fff5f5'
    };
exports.colors = Object.assign({ colorWhiteOpacity: 'rgba(250,250,250, 0.97)', standardBlack: '#141920', secondaryBlack: '#21201F' }, brandColors, { disabledGray: '#D8D8D8', placeholderGray: '#908f8f', secondaryGray: '#868686', tableHeaderGray: '#908f8f', colorGrayLight: '#F8F8F8', navGray: '#908F8F', colorGrayStandard: '#E5E5E5', grayDark: '#585654', brandRed: '#E1001A' });
exports.typography = {
    fontPrimary: 'SharpSans, arial',
    fontSecondary: 'MarkOT, arial'
};
exports.panel = {
    primaryRemWidth: 37.5,
    secondaryRemWidth: 34.37,
    secondaryMinRemWidth: 23.5
};
exports.mqSizes = {
    md: '35.5rem',
    lg: '52rem',
    singlePanel: `${exports.panel.primaryRemWidth}rem`,
    twoPanel: `${exports.panel.primaryRemWidth + exports.panel.secondaryMinRemWidth}rem`,
    fullTwoPanel: `${exports.panel.primaryRemWidth + exports.panel.secondaryRemWidth}rem`
};
exports.mediaQueries = {
    bpMd: `only screen and (min-width: ${exports.mqSizes.md} )`,
    bpLg: `only screen and (min-width: ${exports.mqSizes.fullTwoPanel} )`,
    bpUptoSinglePanelWidth: `only screen and (max-width: ${exports.mqSizes.singlePanel})`,
    bpUptoSlimWidth: `only screen and (max-width: ${exports.mqSizes.twoPanel})`,
    bpAboveSinglePanelWidth: `only screen and (min-width: ${exports.mqSizes.singlePanel} )`,
    bpAboveSlimWidth: `only screen and (min-width: ${exports.mqSizes.twoPanel} )`,
    bpAboveTwoPanelFullWidth: `only screen and (min-width: ${exports.mqSizes.fullTwoPanel})`
};
exports.fonts = {
    mainHeading: react_emotion_1.css `
    font-family: ${exports.typography.fontPrimary};
    font-weight: bold;
    font-size: 2.25rem;
  `,
    primaryTitle: react_emotion_1.css `
    font-family: ${exports.typography.fontPrimary};
    font-weight: bold;
    font-size: 1.125rem;
  `,
    // e.g. ticketTitle
    secondaryTitle: react_emotion_1.css `
    font-family: ${exports.typography.fontPrimary};
    font-size: 1rem;
  `,
    priceText: react_emotion_1.css `
    font-size: 1rem;
  `,
    nav: react_emotion_1.css `
    text-transform: uppercase;
    color: ${exports.colors.navGray};
    font-size: 0.625rem;
    cursor: pointer;
  `,
    subText: react_emotion_1.css `
    font-size: 0.75rem;
  `
};
exports.spacers = {
    singlePanelPadding: 1.5,
    twoPanelLayoutPadding: 2.25
};
