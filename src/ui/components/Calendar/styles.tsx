import { colors } from 'css/variables'
import { css } from 'react-emotion'

const calendarBaseStyle = css`
  position: absolute;
  top: 3rem;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.46);
  padding: 1rem;
  z-index: 1;
  left: 0;
  user-select: none;
`
export const styles = {
  dateRangePicker: css`
    width: calc(50% - 0.5rem);
  `,
  dateRangePickerCalendars: css`
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    ${calendarBaseStyle};
  `,
  calendarArticle: css`
    ${calendarBaseStyle};
    width: 100%;
  `,

  summary: css`
    text-align: center;
    padding: 0.5rem;
    background: ${colors.colorGrayLight};
    cursor: pointer;
    user-select: none;
  `,
  calendar: css`
    width: calc(50% - 0.5rem);
    position: relative;
  `,
  datePickerCalendar: css`
    width: 14rem;
    margin: 0 auto;
  `,

  header: css`
    display: flex;
    position: relative;
    padding: 1rem 0 0.25rem 0;
  `,
  daysHeader: css`
    display: flex;
  `,
  daysContent: css`
    display: flex;
    flex-wrap: wrap;
  `,
  dayOfWeek: css`
    width: 2rem;
    line-height: 2rem;
    text-align: center;
  `,
  day: css`
    color: #ccc;
  `,
  availableDay: css`
    cursor: pointer;
    color: black;
    :hover {
      background: ${colors.colorGrayLight};
    }
  `,
  selectedDay: css`
    background: ${colors.brandColorLight};
  `,

  dayAsideMonth: css`
    visibility: hidden;
  `,
  month: css`
    margin: 0 auto;
    text-transform: uppercase;
    display: inline-block;
  `,

  navigate: css`
    cursor: pointer;
    border: 0;
    outline: none;
    background: white;
    :disabled {
      color: gray;
    }
    display: inline-block;
    position: absolute;
  `,
  navigatePrevious: css`
    transform: rotate(-90deg);
    left: 0;
  `,
  navigateNext: css`
    transform: rotate(90deg);
    right: 0;
  `
}
