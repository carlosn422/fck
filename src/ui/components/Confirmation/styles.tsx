import { css } from 'react-emotion'
import { mediaQueries, typography, colors, fonts } from 'css/variables'

import { squareButton, primaryButton, buttonGradient } from 'css/buttons'

export const confirmationStyles = {
  confirmation: css`
    display: flex;
    align-items: center;
  `,
  confirmationContainer: css`
    padding: 1.75rem;
  `,
  luggageIcon: css`
    height: ${180 / 16}rem;
    width: ${270 / 16}rem;
    background-size: contain;
    margin: 2rem auto 3rem auto;
  `,
  sonyLuggageIcon: css`
    height: ${150 / 16}rem;
    width: ${270 / 16}rem;
    background-size: contain;
    margin: 3rem auto 3rem auto;
  `,
  title: css`
    font-family: ${typography.fontPrimary};
    font-size: ${25 / 16}rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: center;
  `,
  description: css`
    font-family: ${typography.fontSecondary};
    font-size: 14px;
    line-height: 1.2rem;
    padding: 0 2rem;
    text-align: center;
  `,
  grid: css`
    align-items: center;
  `,
  ctaCss: css`
    ${primaryButton};
    height: 3rem;
    width: 265px;
    margin: 1.75rem 8rem 1rem 8rem;
  `,
  groupCta: css`
    margin: 2rem 8rem 0 8rem;
    ${primaryButton};
    background: white;
    color: ${colors.brandColor};

    width: 265px;
    height: 3rem;

    &:hover {
      background: ${colors.brandColorLightest};
    }

    border: 1px solid ${colors.brandColor};
  `,
  nameTitle: css`
    padding-bottom: 0.5rem;
  `,
  offerTitle: css`
    padding-top: 0.5rem;
    padding-bottom: 2rem;
    font-weight: bold;
  `,
  sonyTitle: css`
    padding-top: 0.5rem;
    font-weight: bold;
    color: ${colors.brandColor};
  `,
  progress: css`
    height: ${175 / 16}rem;
    width: 100%;
    margin: 4rem 0;
  `,
  tree: css`
    margin: 2rem 0 3rem 3rem;
    background-position: center;
    background-size: contain;
  `,
  sectionHeader: css`
    position: relative;
    font-family: ${typography.fontSecondary};
    font-size: ${11 / 16}rem;
    color: ${colors.tableHeaderGray};
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
      background-color: ${colors.colorGrayLight};
    }
  `,
  sectionSeparator: css`
    display: inline-block;
    vertical-align: middle;
  `
}

export const orderSummaryStyles = {
  container: css`
    margin: 1.5rem 0 2.5rem 0;
  `,
  content: css`
    display: flex;
    margin-top: 1rem;
    font-size: 0.6875rem;
    color: ${colors.secondaryBlack};
  `,
  bookingContent: css``,
  contentItem: css`
    display: flex;
    padding-top: 0.25rem;
    :first-of-type: {
      padding-top: 0;
    }
  `,
  contentItemTitle: css`
    width: 7rem;
  `,
  paymentContent: css`
    margin-left: auto;
  `,
  orderNumber: css`
    color: ${colors.brandColor};
  `
}
