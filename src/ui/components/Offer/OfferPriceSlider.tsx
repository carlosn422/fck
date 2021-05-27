import * as React from 'react'
import { AnyOffer } from 'custom-typings/offerTypes'
import { PriceSlider } from 'components/PriceSlider/PriceSlider'
import { calcMinPrice, calcMaxPrice } from 'components/Offer/helpers'

interface OfferPriceSliderProps {
  offer: AnyOffer
  className?: string
  userSelectedLowerBound?: number
  userSelectedUpperBound?: number
  onChange: (range: number[]) => void
}

const OfferPriceSlider: React.SFC<OfferPriceSliderProps> = ({
  offer,
  className,
  userSelectedLowerBound,
  userSelectedUpperBound,
  onChange
}) => {
  const minPrice = calcMinPrice(offer.items)

  const maxPrice = calcMaxPrice(offer.items)
  return (
    <>
      {minPrice !== maxPrice && (
        <PriceSlider
          min={minPrice}
          max={maxPrice}
          className={className}
          step={1}
          value={[
            userSelectedLowerBound ? userSelectedLowerBound : minPrice,
            userSelectedUpperBound ? userSelectedUpperBound : maxPrice
          ]}
          onChange={onChange}
        />
      )}
    </>
  )
}
export default OfferPriceSlider
