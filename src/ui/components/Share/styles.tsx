import { css } from 'react-emotion'

import { typography, colors } from 'css/variables'

export const shareStyles = {
  container: css`
    display: row;
    align-items: left;
    width: 345px;
    height: 300px;
    margin: 0.5rem 5rem 0 5rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  `,
  title: css`
    font-family: ${typography.fontPrimary};
    font-size: ${16 / 16}rem;
    font-weight: bold;
    line-height: 21px;
    text-align: center;
    padding: 24px 52px 24px 52px;
  `,
  sendInviteTitle: css`
    font-family: ${typography.fontSecondary};
    font-size: ${14 / 16}rem;
    font-weight: bold;
    line-height: 18px;
    text-align: center;
    padding: 28px 52px 18px 52px;
  `,
  inputContainer: css`
    display: flex;
    margin: 0 23px 0 23px;
    height: 33px;
    margin-bottom: 16px;
  `,
  button: css`
    background: ${colors.brandColor};
    color: white;
    font-family: ${typography.fontSecondary};
    font-size: ${12 / 16}rem;
    width: 66px;
    cursor: pointer;
  `,
  input: css`
    width: 100%;
    display: block;
    padding: 10px;
  `,
  socialContainer: css`
    display: flex;
    margin: 0 23px 0 23px;
    height: 33px;
  `,
  socialButton: css`
    height: 100%;
    width: 100%;
    display: block;
  `,
  socialButtonTwitter: css`
    margin: 0 5px 0 5px;
    height: 100%;
    width: 100%;
    display: block;
  `
}
