import { combineReducers } from 'redux'

import { censusTractsReducer } from './CensusTracts/reducers/censusTractsReducer'
import { neighborhoodsReducer } from './Neighborhoods/reducers/neighborhoodsReducer'
import { buildingsReducer } from './Buildings/reducers/buildingsReducer'
import { appStateReducer } from './AppState/reducers/appStateReducer'
export default combineReducers({
  appState: appStateReducer,
  censusTracts: censusTractsReducer,
  neighborhoods: neighborhoodsReducer,
  buildings: buildingsReducer
})
