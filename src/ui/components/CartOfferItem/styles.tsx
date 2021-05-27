import { css } from 'react-emotion'
import { mediaQueries, typography, colors } from 'css/variables'

export const cartItemStyles = {
  cartImageCss: css`
    height: ${44 / 16}rem;
    width: ${67 / 16}rem;
    background-position: center;
    background-size: cover;
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
  `,
  cartOfferDescription: css`
    font-family: ${typography.fontSecondary};
    font-size: ${12 / 16}rem;
  `,
  cartItemDetails: css`
    font-family: ${typography.fontSecondary};
    font-size: ${11 / 16}rem;
    color: ${colors.tableHeaderGray};
  `,
  cartOfferQuantityPrice: css`
    font-family: ${typography.fontSecondary};
    font-size: ${12 / 16}rem;
    margin-top: 1rem;
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
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    width: calc(100% - 14rem);
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
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 1rem;
  `,
  removeIcon: css`
    width: 1rem;
    height: 1rem;
    transform: width 0.25s ease-in-out;
    :hover {
      width: 1.125rem;
      height: 1.125rem;
    }
  `,
  cartSplitTotalItemBoldCss: css`
    font-weight: bold;
  `,
  avatarCss: css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid ${colors.brandColor};
  `,
  avatarTitleCss: css`
    font-family: ${typography.fontSecondary};
    font-size: ${12 / 16}rem;
    color: #908f8f;
  `,
  avatarDetailsCss: css`
    font-family: ${typography.fontPrimary};
    font-size: ${16 / 16}rem;
    font-weight: bold;
    padding: 5px 5px 0 0;
  `,
  avatarAmountCss: css`
    font-family: ${typography.fontSecondary};
    font-size: ${12 / 16}rem;
  `
}

export const cartItemHeaderStyles = {
  headerItemCss: css`
    display: flex;
  `,
  image: css`
    ${cartItemStyles.cartImageCss};
    height: auto;
  `,
  offerItemTitle: css`
    color: #908f8f;
    font-family: ${typography.fontSecondary};
    font-size: 10px;
  `,
  removeIcon: css`
    margin-right: 2.5rem;
  `
}
