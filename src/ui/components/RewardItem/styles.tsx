import { colors, typography, fonts } from 'css/variables'
import { css } from 'react-emotion'
import { secondaryButton } from 'css/buttons'

export const offerItemStyles = {
  cartImageCss: css`
    height: ${44 / 16}rem;
    width: ${67 / 16}rem;
    background-position: center;
    background-size: cover;
    background: ${colors.brandColor};
  `,
  cartItemCss: css`
    display: flex;
    border-bottom: 1px #f0f0f0 solid;
    padding: 1.5rem 0;
  `,
  avatarItemCss: css`
    display: flex;
    align-items: center;
  `,
  cartOfferTitleCss: css`
    font-family: ${typography.fontPrimary};
    font-size: ${15 / 16}rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  `,
  cartOfferDescription: css`
    font-family: ${typography.fontSecondary};
    font-size: ${12 / 16}rem;
  `,
  cartOfferQuantityPrice: css`
    font-family: ${typography.fontSecondary};
    font-size: ${12 / 16}rem;
    width: 1rem;
    margin-right: 0.8rem;
  `,
  priceCtaContainerCss: css`
    display: flex;
    flex-direction: column;
  `,
  quantityContainerCss: css`
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    margin-left: 3rem;
  `,
  offerContentCss: css`
    padding: 0 1rem;
    margin-right: auto;
  `,
  cartTotalCss: css`
    display: flex;
    background: #f8f8f8;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
  `,
  cartSplitTotalCss: css`
    display: flex;
    background: ${colors.brandColor};
    flex-direction: row;
    padding: 1.25rem;
    height: 5.625rem;
  `,
  cartTotalRowCss: css`
    display: table-row;
    height: 1.25rem;
    line-height: 1;
  `,
  cartTotalCellCss: css`
    display: table-cell;
  `,
  remove: css`
    margin-left: 1rem;
    margin-right: 0.7rem;
    width: 1.5rem;
    height: 1.5rem;
  `,
  removeIcon: css`
    width: 1rem;
    height: 1rem;
    transform: width 0.25s ease-in-out;
    :hover {
      width: 1.125rem;
      height: 1.125rem;
    }
  `
}
