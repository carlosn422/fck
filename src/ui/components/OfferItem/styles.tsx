import { colors, typography, fonts, mediaQueries } from 'css/variables'
import { css } from 'react-emotion'
import { secondaryButton } from 'css/buttons'

export const offerItemStyles = {
  offerImageCss: css`
    margin-right: 0.75rem;
    height: ${44 / 16}rem;
    width: 3.75rem;
    @media ${mediaQueries.bpAboveSinglePanelWidth} {
      margin-right: 1rem;
      height: 85px;
      width: 150px;
    }
    background-position: center;
    background-size: cover;
  `,
  offerItemContainerCss: css`
    :hover {
      background: ${colors.colorGrayLight};
    }
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${colors.colorGrayLight};
  `,
  offerItemCss:
    'offerItem ' +
    css`
      display: flex;
      align-items: center;
      padding: 0.75rem 0;
      @media ${mediaQueries.bpAboveSinglePanelWidth} {
        padding: 0.75rem;
      }
    `,
  facepileSection: css`
    display: flex;
  `,
  inventoryLeft: css`
    font-family: ${typography.fontSecondary};
    font-size: ${12 / 16}rem;
    margin: 0.5rem 0 0 0;
    color: ${colors.brandColor};
  `,
  facepileText: css`
    font-family: ${typography.fontSecondary};
    font-size: ${12 / 16}rem;
    margin: 0.5rem 0 0 0;
    color: #8f8f8f;
  `,
  adjustCtaContainerCss:
    'adjustCtaContainer ' +
    css`
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      margin: -1rem 0 1rem 0;
      padding: 0.5rem;
    `,
  priceCtaContainerCss: css`
    display: flex;
    align-items: center;
    margin-left: auto;
    flex-direction: column;
    ${fonts.priceText};
    /* max-width: 3rem; */
    @media ${mediaQueries.bpAboveSinglePanelWidth} {
      flex-direction: row;
      /* max-width: 5rem; */
    }
  `,
  offerItemTitleCss: css`
    font-family: ${typography.fontPrimary};
    font-size: ${15 / 16}rem;
    font-weight: bold;
    color: ${colors.standardBlack};
  `,
  offerItemRewardCss: css`
    margin-top: 0.5rem;
    color: ${colors.brandColor};
    font-family: ${typography.fontSecondary};
  `,
  offerItemBrandedDescriptionCss: css`
    font-family: ${typography.fontSecondary};
    font-size: ${12 / 16}rem;
    color: ${colors.brandColor};
  `,
  offerContentCss:
    'offerContent ' +
    css`
      width: calc(100% - 7.5rem);
      @media ${mediaQueries.bpAboveSinglePanelWidth} {
        padding: 0 1rem 0 0;
        width: calc(100% - 10rem);
      }
      color: ${colors.secondaryGray};
    `,
  offerSeatmapContentCss:
    'offerContent ' +
    css`
      width: calc(100% - 7.5rem);
      @media ${mediaQueries.bpAboveSinglePanelWidth} {
        padding: 0 1rem 0 0;
        width: calc(100% - 10rem);
      }
      color: ${colors.secondaryGray};
    `,
  dropdownCss: css`
    margin-left: auto;
  `,
  skuContainerCss: css`
    display: flex;
    align-items: center;
    margin-top: 1rem;
  `,
  skuTitleCss: css`
    margin-left: 1rem;
  `,
  ctaCss: css`
    ${secondaryButton};
    margin: 1rem 0;
  `,
  seatmapCss: css`
    display: block;
    text-align: center;
    font-size: ${15 / 16}rem;
    padding: 1rem 1rem 1rem 1rem;
    text-decoration: underline;
  `,
  adjustTitle: css`
    margin: 0.5rem auto 0.5rem auto;
    padding-right: 1rem;
  `,
  adjustContianer: css`
    display: flex;
    align-self: flex-end;
    margin: -1rem 0 1rem 0;
    padding: 0.5rem;
  `
}
