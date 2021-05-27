import { css } from 'react-emotion'
import { colors, fonts } from 'css/variables'

export const styles = {
  ctaContainerCss: css`
    display: flex;
    align-items: center;
    background: ${colors.colorWhiteOpacity};
    padding: 1.25rem;
    height: 5.625rem;
    position: relative;
  `,

  keepShopping: css`
    margin-left: auto;
  `,

  checkoutButtonDisabled: css`
    margin-left: auto;
  `,
  checkoutInfoHeader: css`
    ${fonts.primaryTitle};
    color: ${colors.brandColor};
  `,

  confirmBtn: css`
    margin-left: auto;
  `,
  checkoutButtonEnabled: css`
    margin-left: 1rem;
  `
}
