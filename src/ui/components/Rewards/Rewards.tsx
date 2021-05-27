import { colors, fonts, mediaQueries, spacers } from 'css/variables'
import * as React from 'react'
import { css } from 'react-emotion'
import { Reward } from 'custom-typings/offerTypes'
import WithState, { MutateStateProps } from 'utils/WithState'
import { rewardStyles } from './styles'

interface RewardProps {
  reward: Reward
  index: number
  isSelected: boolean
  onSelect: (id: string) => any
}

interface RewardsState {
  selectedRewardId?: string
}

interface RewardsProps {
  rewards: Reward[]
  className?: string
}

export const rewardsStyles = {
  rewards: css`
    display: flex;
    position: relative;
  `,
  prefixElement: css`
    @media ${mediaQueries.bpAboveSlimWidth} {
      background: ${colors.brandColorDark};
      width: 1.75rem;
      height: 5.625rem;

      position: relative;
      margin-left: -1.75rem;
      border-radius: 0.5rem 0 0 0;
    }
  `,
  prefixTop: css`
    @media ${mediaQueries.bpAboveSlimWidth} {
      position: absolute;
      height: 0.9375rem;
      top: -1rem;
      width: 1.75rem;
      border-right: 1.75rem solid ${colors.brandColorDarker};
      border-top: 1.25rem solid transparent;
      left: -1.75rem;
    }
  `,
  singlePanelLayout: css`
    margin-bottom: 2rem;
    width: calc(100% + ${2 * spacers.singlePanelPadding}rem);
    margin-left: -${spacers.singlePanelPadding}rem;
    /* @media ${mediaQueries.bpAboveSinglePanelWidth} {
      width: calc(100% + ${2 * spacers.twoPanelLayoutPadding}rem);
      margin-left: ${-1 * spacers.twoPanelLayoutPadding}rem;
    } */
  `
}
const componentStyles = (
  displayColor: string,
  nextColor: string,
  isSelected: boolean
) => {
  // const openRewardWidth = '24rem'
  // const closedRewardWidth = '6rem'
  // const lastRewardWidthOffset = '1rem'

  const selectedRewardDelta = css`
    padding: 1rem;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    background: white;
    color: ${displayColor};
    text-align: center;
    margin-right: 1rem;
    line-height: 1.8;
  `
  return {
    reward:
      'reward ' +
      css`
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
    content: css``,
    rewardDelta: css`
      display: flex;
      flex-direction: column;
      ${fonts.primaryTitle};
      text-align: center;
      ${isSelected ? selectedRewardDelta : undefined};
    `
  }
}

const RewardComponent: React.SFC<RewardProps> = ({
  reward,
  index,
  isSelected,
  onSelect
}) => {
  const { name, description, threshold, thresholdCopy } = reward

  const elemColors = [
    colors.brandColorDark,
    colors.brandColor,
    colors.brandColorLight
  ]

  const styles = componentStyles(
    elemColors[index % 3],
    elemColors[(index + 1) % 3],
    isSelected
  )
  const delta = (
    <div>
      <div className={styles.rewardDelta}> {threshold}</div>
      {!isSelected && <div className="delta-copy">{thresholdCopy}</div>}
    </div>
  )
  return (
    <article className={styles.reward} onClick={() => onSelect(reward.id)}>
      {delta}
      {isSelected && (
        <section className={styles.content}>
          <div className={rewardStyles.title}>{name}</div>
          <div className={rewardStyles.description}>{description}</div>
        </section>
      )}
    </article>
  )
}

const Rewards: React.SFC<
  RewardsProps & RewardsState & MutateStateProps<RewardsState>
> = ({ rewards, selectedRewardId, setState, className }) => {
  const onSelect = (id: string) => setState({ selectedRewardId: id })
  const rewardElems = rewards.map((reward, i) => {
    return (
      <RewardComponent
        key={reward.id}
        reward={reward}
        index={i}
        isSelected={selectedRewardId ? reward.id === selectedRewardId : i === 0}
        onSelect={onSelect}
      />
    )
  })
  return (
    <article className={`${rewardsStyles.rewards} ${className}`}>
      <div className={rewardsStyles.prefixTop} />
      <div className={rewardsStyles.prefixElement} />
      {rewardElems}
    </article>
  )
}
export default WithState<RewardsProps, RewardsState>({})(Rewards)
