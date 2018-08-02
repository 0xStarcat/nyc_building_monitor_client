import { combineReducers } from 'redux'

import { censusTractsReducer } from './CensusTracts/reducers'
import { neighborhoodsReducer } from './Neighborhoods/reducers'
import { buildingsReducer } from './Buildings/reducers'
import { violationsReducer } from './Violations/reducers'
import { serviceCallsReducer } from './ServiceCalls/reducers'
import { searchReducer } from './Search/reducers'
import { appStateReducer } from './AppState/reducers/appStateReducer'
export default combineReducers({
  appState: appStateReducer,
  search: searchReducer,
  censusTracts: censusTractsReducer,
  neighborhoods: neighborhoodsReducer,
  buildings: buildingsReducer,
  violations: violationsReducer,
  serviceCalls: serviceCallsReducer
})
