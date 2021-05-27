import * as React from 'react'
import { QuantityAdjust } from 'components/Shared/QuantityAdjust'
import { css } from 'react-emotion'
import { colors } from 'css/variables'
import {
  clickOutsideWrapper,
  InjectedProps
} from 'components/Shared/ClickOutsideWrapper'
import { RoomPreferences } from 'data/UserSelectionsStore'

const filterCss = css`
  border: 1px solid ${colors.colorGrayLight};
  padding: 1.5rem;
  width: calc(50% - 0.5rem);
  border: 1px solid #efefef;
  padding: 1.5rem;
  position: absolute;
  z-index: 1;
  background: white;
`

const hotelRoomFiltercontainerCss = css`
  width: calc(50% - 0.5rem);
  user-select: none;
  margin-left: auto;
`

const quantityAdjustContainerCss = css`
  display: flex;
  align-items: center;
`
const quantityAdjustCss = css`
  margin-left: auto;
`
const summaryCss = css`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${colors.colorGrayLight};
  justify-content: center;
  cursor: pointer;
`

interface HotelRoomFilterProps {
  onChange: (quantities: Partial<RoomPreferences>) => any
  className?: string
  numRooms: number
  numAdults: number
  numChildren: number
}

const HotelRoomFilterComponent: React.SFC<
  HotelRoomFilterProps & InjectedProps
> = ({
  numRooms,
  numAdults,
  numChildren,
  onChange,
  className,
  isOpen,
  toggleIsOpen,
  wrapperRef
}) => {
  const numGuestsText = numAdults + numChildren > 1 ? 'guests' : 'guest'
  const numRoomsText = numRooms > 1 ? 'rooms' : 'room'
  return (
    <article className={hotelRoomFiltercontainerCss} ref={wrapperRef}>
      <section className={summaryCss} onClick={toggleIsOpen}>
        <div className="summary-item">
          {numRooms} {numRoomsText}, &nbsp;
        </div>
        <div className="summary-item">
          {numAdults + numChildren} {numGuestsText}
        </div>
      </section>

      {isOpen && (
        <section className={filterCss}>
          <section className={quantityAdjustContainerCss}>
            Rooms:
            <QuantityAdjust
              onAdd={() => {
                onChange({
                  numRooms: numRooms + 1
                })
              }}
              onRemove={() => {
                onChange({ numRooms: numRooms - 1 })
              }}
              removeButtonDisabled={numRooms <= 0}
              addButtonDisabled={false}
              quantity={numRooms}
              className={quantityAdjustCss}
            />
          </section>

          <section className={quantityAdjustContainerCss}>
            Adults:
            <QuantityAdjust
              onAdd={() => {
                onChange({ numAdults: numAdults + 1 })
              }}
              onRemove={() => {
                onChange({ numAdults: numAdults - 1 })
              }}
              removeButtonDisabled={numAdults <= 0}
              addButtonDisabled={false}
              quantity={numAdults}
              className={quantityAdjustCss}
            />
          </section>

          <section className={quantityAdjustContainerCss}>
            Children:
            <QuantityAdjust
              onAdd={() => {
                onChange({ numChildren: numChildren + 1 })
              }}
              onRemove={() => {
                onChange({ numChildren: numChildren - 1 })
              }}
              removeButtonDisabled={numChildren <= 0}
              addButtonDisabled={false}
              quantity={numChildren}
              className={quantityAdjustCss}
            />
          </section>
        </section>
      )}
    </article>
  )
}

export const HotelRoomFilter = clickOutsideWrapper(HotelRoomFilterComponent)
