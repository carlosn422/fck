import { css } from 'react-emotion'

import { typography } from 'css/variables'

export const trademarkStyles = {
  sonyContainer: css`
    align-items: left;
    margin: auto 0;
  `,
  container: css`
    display: row;
    align-items: left;
    margin: auto 0;
  `,
  title: css`
    color: white;
    font-family: ${typography.fontSecondary};
    font-size: ${10 / 16}rem;
  `,
  sonyTitle: css`
    margin: 0.1rem 0 0 0rem;
    color: white;
    font-family: ${typography.fontSecondary};
    font-size: ${12 / 16}rem;
  `,
  logoImage: css`
    width: 60px;
    height: 27px;
    background-position: center;
  `
}
