import { Axios } from '../../../SharedUtilities/Axios'

export const HANDLE_READ_BUILDINGS_RESPONSE = 'HANDLE_READ_BUILDINGS_RESPONSE'
export const AWAITING_BUILDINGS_RESPONSE = 'AWAITING_BUILDINGS_RESPONSE'
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE'
export const UPDATE_SELECTED_BUILDING_OBJECT = 'UPDATE_SELECTED_BUILDING_OBJECT'

export const awaitingBuildingsResponse = () => ({
  type: AWAITING_BUILDINGS_RESPONSE,
  data: {}
})

export const handleErrorResponse = response => ({
  type: HANDLE_ERROR_RESPONSE,
  data: response.data || response
})

export const handleReadBuildingsResponse = response => ({
  type: HANDLE_READ_BUILDINGS_RESPONSE,
  data: response.data
})

export const updateSelectedObject = event => ({
  type: UPDATE_SELECTED_BUILDING_OBJECT,
  data: event
})

export const readBuildingsByCensusTract = id => dispatch => {
  console.log('******FETCHING BUILDINGS DATA', id)
  dispatch(awaitingBuildingsResponse())
  return Axios.get(`/census-tracts/${id}/buildings`)
    .then(response => {
      dispatch(handleReadBuildingsResponse(response))
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}
