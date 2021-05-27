"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("./variables");
const emotion_1 = require("emotion");
const baseButton = emotion_1.css `
  font-weight: bold;
  vertical-align: middle;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 13px 2px 13px 2px;
  transition: 0.1s;
  transition-duration: 0.1s;
  transition-property: border, background, color;
  transform: translateZ(0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  border: none;
  padding: 0.125rem 1.5rem 0 1.5rem;
  display: inline-block;
`;
exports.buttonGradient = emotion_1.css `
  ${baseButton};
  color: white;
  background: linear-gradient(
    56deg,
    ${variables_1.colors.brandColor} 0%,
    ${variables_1.colors.brandColorLight} 100%
  );
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.3);
  }
  &[disabled] {
    background: ${variables_1.colors.disabledGray};
    border-color: ${variables_1.colors.disabledGray};
    cursor: not-allowed;
  }
`;
exports.primaryButton = emotion_1.css `
  ${baseButton};
  font-family: ${variables_1.typography.fontSecondary}, arial;
  text-transform: uppercase;
  font-size: ${15 / 16}rem;
  letter-spacing: 2px;
  line-height: 3rem;

  position: relative;

  ${exports.buttonGradient};
`;
exports.promoButton = emotion_1.css `
  ${exports.primaryButton};
  background: white;
  color: ${variables_1.colors.brandColor};
  box-shadow: none;
  align-items: center;

  font-family: ${variables_1.typography.fontSecondary}, arial;
  font-size: ${8 / 16}rem;
  line-height: 0.8rem;

  border: 1px solid ${variables_1.colors.brandColor};
  &:hover {
    box-shadow: none;
  }
`;
exports.secondaryButton = emotion_1.css `
  ${baseButton};
  font-family: ${variables_1.typography.fontSecondary}, arial;
  text-transform: uppercase;
  font-size: ${13 / 16}rem;
  letter-spacing: 1px;
  line-height: 2rem;
  position: relative;

  color: white;
  background: ${variables_1.colors.brandColor};

  &:hover {
    background: ${variables_1.colors.brandColorDark};
  }

  &[disabled] {
    background: ${variables_1.colors.disabledGray};
    border-color: ${variables_1.colors.disabledGray};
  }
`;
exports.squareButton = emotion_1.css `
  font-family: ${variables_1.typography.fontSecondary}, arial;
  text-transform: uppercase;
  font-size: ${12 / 16}rem;
  letter-spacing: 1px;
  line-height: 2rem;
  position: relative;

  color: white;
  background: ${variables_1.colors.brandColor};

  &:hover {
    background: ${variables_1.colors.brandColorDark};
  }

  &[disabled] {
    background: ${variables_1.colors.disabledGray};
    border-color: ${variables_1.colors.disabledGray};
  }
`;
/** @component */
exports.facebookButton = emotion_1.css `
  background-color: #3b5998;
  text-shadow: 0 -1px 0 #354c8c;
  color: white;
  position: relative;
  padding: ${3 / 16}rem 1.5rem 0 3.5rem;
  border: 1px solid #3b5998;
  line-height: ${42 / 16}rem;
  font-family: ${variables_1.typography.fontPrimary}, arial;

  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 3px;
  min-width: 17rem;

  &::before {
    content: '\f110';
    font-size: 1.75rem;
    font-family: fontcustom;
    box-sizing: border-box;
    position: absolute;
    left: 0.125rem;
    top: 0;
    width: 3rem;
    height: 100%;
  }

  @media ${variables_1.mediaQueries.bpMd} {
    &::before {
      width: 5.5rem;
      left: 0;
    }
  }

  &:hover,
  &:focus {
    background-color: #5b7bd5;
    #gradient.vertical(#5b7bd5, #4864b1);
    cursor: pointer;
  }
`;
