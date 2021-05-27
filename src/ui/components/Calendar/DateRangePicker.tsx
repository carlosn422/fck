import * as React from 'react'
import { styles } from './styles'

import { flowRight } from 'lodash'
import {
  clickOutsideWrapper,
  InjectedProps
} from 'components/Shared/ClickOutsideWrapper'
import {
  addMonths,
  format,
  eachDayOfInterval,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isEqual,
  isAfter,
  isWithinInterval,
  isSameDay
} from 'date-fns/esm'
import { dayHeaders } from 'components/Calendar/utils'

interface DateRangePickerProps {
  isRangeEnabled: boolean
  chooseStart: (date: Date) => void
  chooseEnd: (date: Date) => void
  gotoPreviousMonth: () => void
  gotoNextMonth: () => void
  canGotoNextMonth: boolean
  canGotoPreviousMonth: boolean
  selectedMonthsDate: Date
  startDate?: Date
  endDate?: Date
}

const checkIfDaySelected = (day: Date, startDate?: Date, endDate?: Date) => {
  if (startDate && endDate) {
    return isWithinInterval(day, { start: startDate, end: endDate })
  } else if (startDate) {
    return isSameDay(startDate, day)
  } else if (endDate) {
    return isSameDay(endDate, day)
  } else {
    return false
  }
}

const dateRangePickerSummary = (startDate?: Date, endDate?: Date) => {
  if (!startDate && !endDate) {
    return 'Dates'
  } else {
    if (startDate === endDate) {
      return endDate ? format(endDate, 'EEE MMM d') : ''
    }

    return (
      (startDate ? `${format(startDate, 'EEE MMM d')} - ` : '') +
      (endDate ? format(endDate, 'EEE MMM d') : '')
    )
  }
}

const days = (
  selectedMonthsDate: Date,
  chooseStart: (date: any) => void,
  chooseEnd: (date: any) => void,
  toggleIsOpen: () => void,
  startDate?: Date,
  endDate?: Date,
  isRangeEnabled: boolean = true
) => {
  const monthStartDate = flowRight(
    startOfWeek,
    startOfMonth
  )(selectedMonthsDate)
  const monthEndDate = flowRight(
    endOfWeek,
    endOfMonth
  )(selectedMonthsDate)
  const daysToShow = eachDayOfInterval({
    start: monthStartDate,
    end: monthEndDate
  })

  return daysToShow.map(day => {
    const belongsToAsideMonth = !isSameMonth(day, selectedMonthsDate)

    const isDaySelected = checkIfDaySelected(day, startDate, endDate)
    const now = new Date()

    // this might want to look at offerDate or some other criterion
    const isAvailable = isAfter(day, now) || isEqual(day, now)

    const classes = `${styles.dayOfWeek} ${styles.day} ${
      isAvailable ? styles.availableDay : ''
    } ${belongsToAsideMonth ? styles.dayAsideMonth : ''} ${
      isDaySelected ? styles.selectedDay : ''
    }`
    // `

    const onClick = () => {
      if (isAvailable) {
        if (!isRangeEnabled) {
          chooseEnd(day)
          chooseStart(day)
          toggleIsOpen()
        } else if (startDate && !endDate) {
          chooseEnd(day)
          toggleIsOpen()
        } else {
          chooseStart(day)
        }
      }
    }

    return (
      <div key={day.toJSON()} className={classes} onClick={onClick}>
        {format(day, 'd')}
      </div>
    )
  })
}

const DateRangePicker: React.SFC<DateRangePickerProps & InjectedProps> = ({
  startDate,
  endDate,
  chooseStart,
  chooseEnd,
  selectedMonthsDate,
  gotoPreviousMonth,
  gotoNextMonth,
  canGotoNextMonth,
  canGotoPreviousMonth,
  toggleIsOpen,
  isOpen,
  wrapperRef,
  isRangeEnabled = true
}) => {
  const calendarArticle = (
    calendarSelectedMonthsDate,
    orientation: 'left' | 'right'
  ) => (
    <article className={styles.datePickerCalendar}>
      <section className={styles.header}>
        {orientation === 'left' && (
          <button
            disabled={!canGotoPreviousMonth}
            className={`${styles.navigate} ${
              styles.navigatePrevious
            } icon-arrow-thick`}
            onClick={gotoPreviousMonth}
          >
            prev
          </button>
        )}
        <div className={styles.month}>
          {format(calendarSelectedMonthsDate, 'MMMM YYYY')}
        </div>
        {orientation === 'right' && (
          <button
            disabled={!canGotoNextMonth}
            className={`${styles.navigate} ${
              styles.navigateNext
            } icon-arrow-thick`}
            onClick={gotoNextMonth}
          >
            next
          </button>
        )}
      </section>
      <article className="calendar__days-container">
        <header className={styles.daysHeader}>
          {dayHeaders(calendarSelectedMonthsDate)}
        </header>
        <section className={styles.daysContent}>
          {days(
            calendarSelectedMonthsDate,
            chooseStart,
            chooseEnd,
            toggleIsOpen,
            startDate,
            endDate,
            isRangeEnabled
          )}
        </section>
      </article>
    </article>
  )

  const summary = () => {
    return (
      <div className={styles.summary} onClick={toggleIsOpen}>
        {dateRangePickerSummary(startDate, endDate)}
      </div>
    )
  }

  return (
    <article className={styles.dateRangePicker} ref={wrapperRef}>
      {summary()}
      {isOpen && (
        <div className={`${styles.dateRangePickerCalendars}`}>
          {calendarArticle(selectedMonthsDate, 'left')}
          {calendarArticle(addMonths(selectedMonthsDate, 1), 'right')}
        </div>
      )}
    </article>
  )
}
export default clickOutsideWrapper(DateRangePicker)
