import { Axios } from '../../../SharedUtilities/Axios'

export const HANDLE_READ_SERVICE_CALLS_RESPONSE = 'HANDLE_READ_SERVICE_CALLS_RESPONSE'
export const AWAITING_SERVICE_CALLS_RESPONSE = 'AWAITING_CENSUS_TRACT_RESPONSE'
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE'
export const UPDATE_SELECTED_SERVICE_CALL_OBJECT = 'UPDATE_SELECTED_SERVICE_CALL_OBJECT'

export const awaitingServiceCallsResponse = () => ({
  type: AWAITING_SERVICE_CALLS_RESPONSE,
  data: {}
})

export const handleErrorResponse = response => ({
  type: HANDLE_ERROR_RESPONSE,
  data: response.data || response
})

export const handleReadServiceCallsResponse = response => ({
  type: HANDLE_READ_SERVICE_CALLS_RESPONSE,
  data: response.data
})

export const updateSelectedObject = event => ({
  type: UPDATE_SELECTED_SERVICE_CALL_OBJECT,
  data: event
})

export const readServiceCallsByBuilding = id => dispatch => {
  console.log('******FETCHING SERVICE_CALLS DATA for building', id)
  dispatch(awaitingServiceCallsResponse())
  return Axios.get(`/buildings/${id}/service-calls`)
    .then(response => {
      dispatch(handleReadServiceCallsResponse(response))
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}
