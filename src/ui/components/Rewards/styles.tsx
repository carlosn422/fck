import { css } from 'react-emotion'

import { typography } from 'css/variables'

export const rewardStyles = {
  link: css`
    color: white;
    font-size: 9px;
    font-family: ${typography.fontSecondary};
    text-decoration: underline;
  `,
  description: css`
    color: white;
    font-family: ${typography.fontSecondary};
    font-size: 12px;
  `,
  title: css`
    color: white;
    font-family: ${typography.fontPrimary};
    font-size: 15px;
    font-weight: bold;
  `
}
