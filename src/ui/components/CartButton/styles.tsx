import { css } from 'react-emotion'
import { colors, typography } from 'css/variables'
export const cartStyles = {
  article: css`
    display: flex;
    position: relative;
  `,
  container: css`
    display: flex;
    margin: 0 0 0 0.2rem;
    position: absolute;
    top: 0;
    right: 0;
  `,
  icon: css`
    margin-left: -0.5rem;
    width: 25px;
    height: 25px;
    background-position: center;
    background-size: cover;
  `,
  bubble: css`
    color: white;

    padding: 25%;
    min-width: 25px;

    text-align: center;
    margin: -8px 0 0 3px;
    border-radius: 50%;
    position: absolute;
    background: ${colors.brandColor};
  `
}
