import { Axios } from '../../../SharedUtilities/Axios'
import {
  SIDEBAR_VIEW_SELECTED_OBJECT,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS,
  setLegendScopeBuildings,
  openLegend,
  changeSidebarScope,
  changeSidebarView,
  activateSidebar,
  previewSidebar
} from '../../AppState/actions'
import store from '../../store'

export const HANDLE_READ_BUILDINGS_RESPONSE = 'HANDLE_READ_BUILDINGS_RESPONSE'
export const AWAITING_BUILDINGS_RESPONSE = 'AWAITING_BUILDINGS_RESPONSE'
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE'
export const UPDATE_SELECTED_BUILDING_OBJECT = 'UPDATE_SELECTED_BUILDING_OBJECT'
export const CLEAR_BUILDINGS = 'CLEAR_BUILDINGS'

export const awaitingBuildingsResponse = () => ({
  type: AWAITING_BUILDINGS_RESPONSE
})

export const handleErrorResponse = response => ({
  type: HANDLE_ERROR_RESPONSE,
  data: response.data || response
})

export const handleReadBuildingsResponse = response => ({
  type: HANDLE_READ_BUILDINGS_RESPONSE,
  data: response.data
})

export const updateSelectedBuildingObject = event => ({
  type: UPDATE_SELECTED_BUILDING_OBJECT,
  data: event
})

export const clearBuildings = () => ({
  type: CLEAR_BUILDINGS
})

export const readBuildingsByScope = (scope, id) => dispatch => {
  if (scope === SCOPE_CENSUS_TRACTS) {
    scope = 'census-tracts'
  }

  // console.log('******FETCHING BUILDINGS DATA', id)
  dispatch(awaitingBuildingsResponse())
  return Axios.get(`/${scope}/${id}/buildings`)
    .then(response => {
      dispatch(handleReadBuildingsResponse(response))
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}

export const readBuildingById = id => dispatch => {
  dispatch(awaitingBuildingsResponse())

  Axios.get(`/buildings/${id}`)
    .then(response => {
      dispatch(handleReadBuildingByIdResponse(response))
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}

export const handleReadBuildingByIdResponse = response => dispatch => {
  dispatch(handleReadBuildingsResponse(response))
  dispatch(setLegendScopeBuildings())
  if (store.getState().appState.landscapeOrientation) dispatch(openLegend())
  dispatch(updateSelectedBuildingObject(response.data.features[0].properties))
  dispatch(changeSidebarScope(SCOPE_BUILDINGS))
  dispatch(changeSidebarView(SIDEBAR_VIEW_SELECTED_OBJECT))
  dispatch(store.getState().appState.landscapeOrientation ? activateSidebar() : previewSidebar())
}
