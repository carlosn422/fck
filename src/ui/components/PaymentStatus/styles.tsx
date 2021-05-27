import { css } from 'react-emotion'
import { mediaQueries, typography, colors } from 'css/variables'

import { squareButton } from 'css/buttons'

export const paymentStyles = {
  paymentStatus: css`
    align-self: flex;
    align-items: center;
    position: relative;
    padding: 6rem 1rem 0 1rem;
  `,
  description: css`
    font-family: ${typography.fontPrimary};
    font-size: 12px;
    line-height: 15px;
    font-size: ${12 / 16}rem;
    margin-bottom: 0.5rem;
    text-align: center;
    color: #858585;
  `,
  paidProgressContainer: css`
    position: relative;
    align-self: flex;
    padding-top: 1rem;
  `,
  paidProgressTotal: css`
    align-items: left;
    position: absolute;
    height: 8px;
    width: 100%;
    border-radius: 6px;
    background: ${colors.brandColorLightest};
  `,
  paidProgress: css`
    align-items: left;
    width: 33%;
    border-radius: 6px;
    height: 8px;
    position: absolute;
    background: linear-gradient(
      56deg,
      ${colors.brandColor} 0%,
      ${colors.brandColorLight} 100%
    );
  `,
  paidProgressDescriptinContainer: css`
    display: flex;
    padding: 1rem 0 1rem 0;
    justify-content: space-between;
  `,
  paidPercentage: css`
    font-family: ${typography.fontSecondary};
    line-height: 16px;
    font-size: ${12 / 16}rem;
  `,
  paidDaysLeft: css`
    font-family: ${typography.fontSecondary};
    line-height: 16px;
    font-size: ${12 / 16}rem;
  `,
  tooltip: css`
    position: absolute;
  `,
  triangle: css`
    transform: translateX(-50%);

    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${colors.brandColorLight};
  `,
  tooltipText: css`
    padding: 10px;
    transform: translateX(-50%);
    position: absolute;
    border-radius: 6px;

    text-align: center;
    z-index: 1;
    bottom: 100%;
    border-color: #2e2e2e transparent transparent transparent;
  `
}
