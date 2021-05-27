import * as React from 'react'
import { colors, fonts } from '../../css/variables'
import LocationIcon from '../../svg-icons/location.svg'
import CalendarIcon from '../../svg-icons/calendar.svg'
import GamepadIcon from '../../svg-icons/gamepad.svg'
import { styles } from './styles'
import { format } from 'date-fns/esm'
import { OfferPage } from 'custom-typings/offerTypes'
import { parse } from 'date-fns'
interface Props {
  offerPage: OfferPage
}

const DateLocation: React.SFC<Props> = ({ offerPage }) => {
  return (
    <>
      {offerPage.isSony ? (
        <>
          <div className={styles.iconAndLocationContainer}>
            <CalendarIcon className={styles.calendarIcon} />
            Release date: Feb 22, 2019
          </div>

          <div className={styles.iconAndLocationContainer}>
            <GamepadIcon className={styles.locationIcon} />
            Sony Interactive Entertainment
          </div>
        </>
      ) : (
        <div />
      )}
      {offerPage.startDate &&
        offerPage.startDate.length > 0 &&
        offerPage.endDate &&
        offerPage.endDate && (
          <div className={styles.iconAndLocationContainer}>
            <CalendarIcon className={styles.calendarIcon} />
            {offerPage.startDate !== offerPage.endDate
              ? `${format(new Date(offerPage.startDate), 'mmm dd')} -
            ${format(new Date(offerPage.endDate), 'mmm dd')}`
              : `${format(new Date(offerPage.startDate), 'mmm dd')}`}
          </div>
        )}
      {offerPage.location && offerPage.location.length > 0 && (
        <div className={styles.iconAndLocationContainer}>
          <LocationIcon className={styles.locationIcon} />
          {offerPage.location}
        </div>
      )}
    </>
  )
}

export default DateLocation
