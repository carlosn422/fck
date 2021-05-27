import * as React from 'react'
import { styles } from './styles'

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

export const dayHeaders = (selectedMonthsDate: Date) => {
  const headers = eachDayOfInterval({
    start: startOfWeek(selectedMonthsDate),
    end: endOfWeek(selectedMonthsDate)
  })

  return headers.map(day => (
    <div key={day.toJSON()} className={styles.dayOfWeek}>
      {format(day, 'dd')}
    </div>
  ))
}
