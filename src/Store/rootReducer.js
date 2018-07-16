import { combineReducers } from 'redux'

import { censusTractsReducer } from './CensusTracts/reducers/censusTractsReducer'
import { neighborhoodsReducer } from './Neighborhoods/reducers/neighborhoodsReducer'
import { appStateReducer } from './AppState/reducers/appStateReducer'
export default combineReducers({
  appState: appStateReducer,
  censusTracts: censusTractsReducer,
  neighborhoods: neighborhoodsReducer
})
