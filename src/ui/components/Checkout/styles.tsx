import { css } from 'react-emotion'
import { mediaQueries, colors, typography } from 'css/variables'
import { buttonGradient } from 'css/buttons'

export const formStyles = {
  sectionContainer: css`
    display: flex;
    align-items: center;
  `
}

export const splitPayStyles = {
  friendsContainer: css`
    display: flex;
    flex-direction: column;
  `,
  sonyTitle: css`
    padding-top: 0.5rem;
    font-weight: bold;
    color: ${colors.brandColor};
  `,
  friend: css`
    display: flex;
    margin-top: 1.5rem;
    :first-of-type {
      margin: 0;
    }
  `,
  friendAmount: css`
    margin-left: auto;
    display: flex;
    align-self: flex-start;
  `,
  mainContainer: css`
    height: 100%;
  `,
  friendInfo: css`
    width: 50%;
    display: flex;
    align-items: center;
  `,
  avatar: css`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 1rem;
  `,
  friendDetails: css`
    flex-grow: 1;
  `,
  remove: css`
    align-self: flex-end;
    margin-left: 1rem;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  `,
  tree: css`
    margin: 2rem 5rem 5rem 5rem;
    background-position: center;
    background-size: contain;
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
  addContainer: css`
    display: flex;
    align-items: center;
    margin: 1rem 0 0 auto;
  `,
  add: css`
    ${buttonGradient};
    margin-right: 1rem;
    padding: 0 0 0.125rem 0.125rem;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
  `,
  nameTitle: css`
    padding-top: 2rem;
    padding-bottom: 0.5rem;
  `,
  offerTitle: css`
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    font-weight: bold;
  `,
  sectionHeader: css`
    position: absolute;
    font-family: ${typography.fontSecondary};
    font-size: ${11 / 16}rem;
    color: ${colors.tableHeaderGray};
    z-index: 1;
    text-align: left;
  `
}

export const paymentMethodStyles = {
  paymentContainerCss: css`
    margin-top: 3rem;
  `,
  paymentMethodInputsCss: css`
    display: flex;
    margin-top: 1rem;
  `,
  paymentMethodLabelCss: css`
    width: calc(50% - 1rem);
    cursor: pointer;
    user-select: none;
  `,
  paymentMethodInputCss: css`
    margin-right: 0.75rem;
  `,
  friendsList: css`
    margin-top: 3rem;
  `
}
