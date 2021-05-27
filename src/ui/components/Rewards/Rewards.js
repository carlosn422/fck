"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("css/variables");
const React = require("react");
const react_emotion_1 = require("react-emotion");
const WithState_1 = require("utils/WithState");
const styles_1 = require("./styles");
exports.rewardsStyles = {
    rewards: react_emotion_1.css `
    display: flex;
    position: relative;
  `,
    prefixElement: react_emotion_1.css `
    @media ${variables_1.mediaQueries.bpAboveSlimWidth} {
      background: ${variables_1.colors.brandColorDark};
      width: 1.75rem;
      height: 5.625rem;

      position: relative;
      margin-left: -1.75rem;
      border-radius: 0.5rem 0 0 0;
    }
  `,
    prefixTop: react_emotion_1.css `
    @media ${variables_1.mediaQueries.bpAboveSlimWidth} {
      position: absolute;
      height: 0.9375rem;
      top: -1rem;
      width: 1.75rem;
      border-right: 1.75rem solid ${variables_1.colors.brandColorDarker};
      border-top: 1.25rem solid transparent;
      left: -1.75rem;
    }
  `,
    singlePanelLayout: react_emotion_1.css `
    margin-bottom: 2rem;
    width: calc(100% + ${2 * variables_1.spacers.singlePanelPadding}rem);
    margin-left: -${variables_1.spacers.singlePanelPadding}rem;
    /* @media ${variables_1.mediaQueries.bpAboveSinglePanelWidth} {
      width: calc(100% + ${2 * variables_1.spacers.twoPanelLayoutPadding}rem);
      margin-left: ${-1 * variables_1.spacers.twoPanelLayoutPadding}rem;
    } */
  `
};
const componentStyles = (displayColor, nextColor, isSelected) => {
    // const openRewardWidth = '24rem'
    // const closedRewardWidth = '6rem'
    // const lastRewardWidthOffset = '1rem'
    const selectedRewardDelta = react_emotion_1.css `
    padding: 1rem;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    background: white;
    color: ${displayColor};
    text-align: center;
    margin-right: 1rem;
    line-height: 1.8;
  `;
    return {
        reward: 'reward ' +
            react_emotion_1.css `
        color: white;
        height: 5.625rem;
        background: ${displayColor};
        position: relative;
        flex: 1 0 auto;
        width: ${isSelected ? '64%' : 'auto'};
        display: flex;
        padding-left: 1rem;
        padding-right: 0.8rem;
        align-items: center;
        z-index: 1;
        margin-left: -0.375rem;
        border-radius: 0.5rem 0 0 0;
        cursor: pointer;
        :after {
          position: absolute;
          content: ' ';
          display: block;
          right: 0.375rem;
          top: 0.3125rem;
          border-left: 1.25rem solid ${displayColor};
          border-bottom: 5.3125rem solid ${nextColor};
        }

        :last-of-type:after {
          display: none;
        }
        :last-of-type {
          width: ${isSelected ? '56%' : 'auto'};
        }
      `,
        content: react_emotion_1.css ``,
        rewardDelta: react_emotion_1.css `
      display: flex;
      flex-direction: column;
      ${variables_1.fonts.primaryTitle};
      text-align: center;
      ${isSelected ? selectedRewardDelta : undefined};
    `
    };
};
const RewardComponent = ({ reward, index, isSelected, onSelect }) => {
    const { name, description, threshold, thresholdCopy } = reward;
    const elemColors = [
        variables_1.colors.brandColorDark,
        variables_1.colors.brandColor,
        variables_1.colors.brandColorLight
    ];
    const styles = componentStyles(elemColors[index % 3], elemColors[(index + 1) % 3], isSelected);
    const delta = (React.createElement("div", null,
        React.createElement("div", { className: styles.rewardDelta },
            " ",
            threshold),
        !isSelected && React.createElement("div", { className: "delta-copy" }, thresholdCopy)));
    return (React.createElement("article", { className: styles.reward, onClick: () => onSelect(reward.id) },
        delta,
        isSelected && (React.createElement("section", { className: styles.content },
            React.createElement("div", { className: styles_1.rewardStyles.title }, name),
            React.createElement("div", { className: styles_1.rewardStyles.description }, description)))));
};
const Rewards = ({ rewards, selectedRewardId, setState, className }) => {
    const onSelect = (id) => setState({ selectedRewardId: id });
    const rewardElems = rewards.map((reward, i) => {
        return (React.createElement(RewardComponent, { key: reward.id, reward: reward, index: i, isSelected: selectedRewardId ? reward.id === selectedRewardId : i === 0, onSelect: onSelect }));
    });
    return (React.createElement("article", { className: `${exports.rewardsStyles.rewards} ${className}` },
        React.createElement("div", { className: exports.rewardsStyles.prefixTop }),
        React.createElement("div", { className: exports.rewardsStyles.prefixElement }),
        rewardElems));
};
exports.default = WithState_1.default({})(Rewards);
