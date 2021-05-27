import * as React from 'react'
import { css } from 'react-emotion'
import { colors } from 'css/variables'

import {
  clickOutsideWrapper,
  InjectedProps
} from 'components/Shared/ClickOutsideWrapper'

import UserSelectionsStore, { TimeSlot } from 'data/UserSelectionsStore'

interface TimeslotsProps {
  timeSlots: TimeSlot[]
  onTimeSelect: (timeSlot: TimeSlot) => void
  selectedTimeSlot: TimeSlot
}

const calendarBaseStyle = css`
  position: absolute;
  top: 3rem;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.46);
  padding: 1rem;
  z-index: 1;
  right: 0;
  user-select: none;
`

const timePickerCalendars = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  ${calendarBaseStyle};
`

const summaryCss = css`
  text-align: center;
  padding: 0.5rem;
  background: ${colors.colorGrayLight};
  cursor: pointer;
  user-select: none;
`

const timeslotPicker = css`
  width: calc(50% - 0.5rem);
  margin-left: 0.5rem;
`

const TimeslotsItem = css`
  padding: 0.625rem 0.5rem 0.625rem 0.5rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  width: 100%;
  &:hover {
    background: ${colors.colorGrayLight};
  }
`
const Timeslots: React.SFC<TimeslotsProps & InjectedProps> = ({
  timeSlots,
  selectedTimeSlot,
  toggleIsOpen,
  isOpen,
  onTimeSelect,
  wrapperRef
}) => {
  const timeSlotSummary = (timeslot?: TimeSlot) => {
    if (!timeslot || !timeslot.date) {
      return 'Timeslot'
    } else {
      return timeslot.date
    }
  }

  const summary = () => {
    return (
      <div className={summaryCss} onClick={toggleIsOpen}>
        {timeSlotSummary(selectedTimeSlot)}
      </div>
    )
  }

  return (
    <article className={timeslotPicker} ref={wrapperRef}>
      {summary()}
      {isOpen && (
        <div className={`${timePickerCalendars}`}>
          {timeSlots.map(t => {
            return (
              <div
                className={TimeslotsItem}
                key={t.date}
                onClick={() => {
                  onTimeSelect(t)
                  toggleIsOpen()
                }}
              >
                {t.date}
              </div>
            )
          })}
        </div>
      )}
    </article>
  )
}

export default clickOutsideWrapper(Timeslots)
