import { keyBy } from 'lodash'

import { offerPage as aclOfferPage } from './aclData'
import { offerPage as slsOfferPage } from './slsData'
import { offerPage as fanaticsBleachPage } from './fanatics-bleach'
import { offerPage as fanaticsPage } from './fanatics-2'
import { offerPage as fanaticsPage2 } from './fanatics'
import { offerPage as nutrisystem } from './nutrisystem'
import { offerPage as fandangoPage } from './fandango'
import { offerPage as cruiseOfferPage } from './cruise'
import { offerPage as sonyOfferPage } from './sonyData'
import { offerPage as sonyOfferPage2 } from './sonyData-2'
import { offerPage as bucksOfferPage } from './bucksData'
import { offerPage as giantsOfferPage } from './giantsData'
import { offerPage as giantsBleach } from './giants-bleach'
import { offerPage as nycfc } from './nycfc'
import { offerPage as manCity } from './man-city'
import { offerPage as cedarPoint } from './cedar-point'
import { offerPage as worldBeachOfferPage } from './worldBeachGamesData'
import { offerPage as thompsonPage } from './thompson'
import { offerPage as mgm } from './mgm'
import { offerPage as blizzard } from './blizzard'
import { offerPage as virgin } from './virgin'
import { offerPage as hbo } from './hbo'
import { offerPage as disney } from './disney'
import { offerPage as hulu } from './hulu'
import { offerPage as alabama } from './alabama'
import { offerPage as whiteSoxAddOns } from './whiteSoxAddOns'
import { offerPage as costco } from './costco'
export const offerPages = keyBy(
  [
    aclOfferPage,
    slsOfferPage,
    thompsonPage,
    mgm,
    costco,
    blizzard,
    virgin,
    hbo,
    disney,
    hulu,
    alabama,
    fanaticsBleachPage,
    fanaticsPage,
    fanaticsPage2,
    nutrisystem,
    fandangoPage,
    sonyOfferPage,
    bucksOfferPage,
    sonyOfferPage2,
    giantsOfferPage,
    giantsBleach,
    nycfc,
    manCity,
    cedarPoint,
    cruiseOfferPage,
    worldBeachOfferPage,
    whiteSoxAddOns
  ],
  'uri'
)
