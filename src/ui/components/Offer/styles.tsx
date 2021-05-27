import { css } from 'react-emotion'
import { colors, fonts, spacers } from 'css/variables'

export const styles = {
  description: css`
    font-family: ${fonts.secondaryTitle};
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  selectionContainer:
    'selection-container ' +
    css`
      display: flex;
      position: relative;
      margin-left: 0.5rem;
      padding-bottom: 1rem;
    `,
  titleContainer: css`
    margin: 1.5rem 0;
  `,
  priceSliderContainer: css`
    margin: 1.5rem 0;
  `,
  offerTitle: css`
    margin-bottom: 0.5rem;
  `,
  calendarIcon: css`
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    stroke: ${colors.brandColor};
    margin-right: 0.5rem;
    fill: white;
  `,
  locationIcon: css`
    width: 1rem;
    height: 1rem;
    stroke: white;
    margin-right: 0.5rem;
    fill: ${colors.brandColor};
  `,
  iconAndLocationContainer: css`
    ${fonts.subText};
    display: flex;
    margin-bottom: 0.5rem;
    :last-of-type: {
      margin-bottom: 0;
    }
  `,
  slimOfferContentContainer: css`
    padding: ${spacers.singlePanelPadding}rem;
    background: white;
    position: relative;
    border-top-left-radius: 0.75rem;
    margin-top: -0.375rem;
    min-height: calc(100% - 7.625rem);
  `,
  slimBackgroundTransparentCover: css`
    height: 8rem;
    background: transparent;
  `
}
