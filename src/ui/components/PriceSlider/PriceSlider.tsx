import * as React from 'react'

import * as Slider from 'rc-slider'
import Tooltip from 'rc-tooltip'
import { css } from 'react-emotion'
import { currencySymbols } from '../../../cart/currency'

import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'

const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

interface PriceSliderProps {
  min: number
  max: number
  step: number
  value: number[]
  className?: string
  onChange: (range: number[]) => void
}

const priceSliderContainerCss = css`
  display: flex;
  align-items: center;
`
const priceSliderLabel = css`
  display: inline-block;
`
// Gah! dealing with 3rd party
const priceSliderCss = css`
  margin: 0 1rem;
`

export const PriceSlider: React.SFC<PriceSliderProps> = ({
  min,
  max,
  step,
  value,
  onChange,
  className
}) => {
  const currency = window['currencyHack'] === 'GBP' ? currencySymbols.GBP : '$'
  return (
    <article className={`${className} ${priceSliderContainerCss}`}>
      <div className={priceSliderLabel}>{`${currency}${min
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`}</div>
      <Range
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        className={priceSliderCss}
        value={value}
        defaultValue={[min, max]}
        allowCross={false}
        count={2}
      />
      <div className={priceSliderLabel}>{`${currency}${max
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`}</div>
    </article>
  )
}
