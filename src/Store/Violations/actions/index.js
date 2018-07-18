import { Axios } from '../../../SharedUtilities/Axios'

export const HANDLE_READ_VIOLATIONS_RESPONSE = 'HANDLE_READ_VIOLATIONS_RESPONSE'
export const AWAITING_VIOLATIONS_RESPONSE = 'AWAITING_CENSUS_TRACT_RESPONSE'
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE'
export const UPDATE_SELECTED_VIOLATION_OBJECT = 'UPDATE_SELECTED_VIOLATION_OBJECT'

export const awaitingViolationsResponse = () => ({
  type: AWAITING_VIOLATIONS_RESPONSE,
  data: {}
})

export const handleErrorResponse = response => ({
  type: HANDLE_ERROR_RESPONSE,
  data: response.data || response
})

export const handleReadViolationsResponse = response => ({
  type: HANDLE_READ_VIOLATIONS_RESPONSE,
  data: response.data
})

export const updateSelectedObject = event => ({
  type: UPDATE_SELECTED_VIOLATION_OBJECT,
  data: event
})

export const readViolationsByBuilding = id => dispatch => {
  console.log('******FETCHING VIOLATIONS DATA for building', id)
  dispatch(awaitingViolationsResponse())
  return Axios.get(`/buildings/${id}/violations`)
    .then(response => {
      dispatch(handleReadViolationsResponse(response))
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}
