"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = require("react-emotion");
const variables_1 = require("css/variables");
exports.paymentStyles = {
    paymentStatus: react_emotion_1.css `
    align-self: flex;
    align-items: center;
    position: relative;
    padding: 6rem 1rem 0 1rem;
  `,
    description: react_emotion_1.css `
    font-family: ${variables_1.typography.fontPrimary};
    font-size: 12px;
    line-height: 15px;
    font-size: ${12 / 16}rem;
    margin-bottom: 0.5rem;
    text-align: center;
    color: #858585;
  `,
    paidProgressContainer: react_emotion_1.css `
    position: relative;
    align-self: flex;
    padding-top: 1rem;
  `,
    paidProgressTotal: react_emotion_1.css `
    align-items: left;
    position: absolute;
    height: 8px;
    width: 100%;
    border-radius: 6px;
    background: ${variables_1.colors.brandColorLightest};
  `,
    paidProgress: react_emotion_1.css `
    align-items: left;
    width: 33%;
    border-radius: 6px;
    height: 8px;
    position: absolute;
    background: linear-gradient(
      56deg,
      ${variables_1.colors.brandColor} 0%,
      ${variables_1.colors.brandColorLight} 100%
    );
  `,
    paidProgressDescriptinContainer: react_emotion_1.css `
    display: flex;
    padding: 1rem 0 1rem 0;
    justify-content: space-between;
  `,
    paidPercentage: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    line-height: 16px;
    font-size: ${12 / 16}rem;
  `,
    paidDaysLeft: react_emotion_1.css `
    font-family: ${variables_1.typography.fontSecondary};
    line-height: 16px;
    font-size: ${12 / 16}rem;
  `,
    tooltip: react_emotion_1.css `
    position: absolute;
  `,
    triangle: react_emotion_1.css `
    transform: translateX(-50%);

    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${variables_1.colors.brandColorLight};
  `,
    tooltipText: react_emotion_1.css `
    padding: 10px;
    transform: translateX(-50%);
    position: absolute;
    border-radius: 6px;

    text-align: center;
    z-index: 1;
    bottom: 100%;
    border-color: #2e2e2e transparent transparent transparent;
  `
};
