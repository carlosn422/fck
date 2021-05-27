import { css } from 'react-emotion'

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
    }

export const colors = {
  colorWhiteOpacity: 'rgba(250,250,250, 0.97)',
  standardBlack: '#141920',
  secondaryBlack: '#21201F',
  ...brandColors,
  disabledGray: '#D8D8D8',
  placeholderGray: '#908f8f',
  secondaryGray: '#868686',
  tableHeaderGray: '#908f8f',
  colorGrayLight: '#F8F8F8',
  navGray: '#908F8F',
  colorGrayStandard: '#E5E5E5',
  grayDark: '#585654',
  brandRed: '#E1001A'
}

export const typography = {
  fontPrimary: 'SharpSans, arial',
  fontSecondary: 'MarkOT, arial'
}

export const panel = {
  primaryRemWidth: 37.5,
  secondaryRemWidth: 34.37,
  secondaryMinRemWidth: 23.5
}
export const mqSizes = {
  md: '35.5rem',
  lg: '52rem',
  singlePanel: `${panel.primaryRemWidth}rem`,
  twoPanel: `${panel.primaryRemWidth + panel.secondaryMinRemWidth}rem`,
  fullTwoPanel: `${panel.primaryRemWidth + panel.secondaryRemWidth}rem`
}

export const mediaQueries = {
  bpMd: `only screen and (min-width: ${mqSizes.md} )`,
  bpLg: `only screen and (min-width: ${mqSizes.fullTwoPanel} )`,
  bpUptoSinglePanelWidth: `only screen and (max-width: ${mqSizes.singlePanel})`,
  bpUptoSlimWidth: `only screen and (max-width: ${mqSizes.twoPanel})`,
  bpAboveSinglePanelWidth: `only screen and (min-width: ${
    mqSizes.singlePanel
  } )`,
  bpAboveSlimWidth: `only screen and (min-width: ${mqSizes.twoPanel} )`,
  bpAboveTwoPanelFullWidth: `only screen and (min-width: ${
    mqSizes.fullTwoPanel
  })`
}

export const fonts = {
  mainHeading: css`
    font-family: ${typography.fontPrimary};
    font-weight: bold;
    font-size: 2.25rem;
  `,
  primaryTitle: css`
    font-family: ${typography.fontPrimary};
    font-weight: bold;
    font-size: 1.125rem;
  `,
  // e.g. ticketTitle
  secondaryTitle: css`
    font-family: ${typography.fontPrimary};
    font-size: 1rem;
  `,
  priceText: css`
    font-size: 1rem;
  `,
  nav: css`
    text-transform: uppercase;
    color: ${colors.navGray};
    font-size: 0.625rem;
    cursor: pointer;
  `,
  subText: css`
    font-size: 0.75rem;
  `
}

export const spacers = {
  singlePanelPadding: 1.5,
  twoPanelLayoutPadding: 2.25
}
