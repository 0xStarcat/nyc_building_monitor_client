import { Axios } from '../../../SharedUtilities/Axios'

export const HANDLE_READ_VIOLATIONS_RESPONSE = 'HANDLE_READ_VIOLATIONS_RESPONSE'
export const AWAITING_VIOLATIONS_RESPONSE = 'AWAITING_VIOLATIONS_RESPONSE'
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE'
export const UPDATE_SELECTED_VIOLATION_OBJECT = 'UPDATE_SELECTED_VIOLATION_OBJECT'
export const NEXT_SELECTED_VIOLATION = 'NEXT_SELECTED_VIOLATION'
export const PREV_SELECTED_VIOLATION = 'PREV_SELECTED_VIOLATION'

export const CLEAR_VIOLATIONS = 'CLEAR_VIOLATIONS'

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

export const updateSelectedViolation = event => ({
  type: UPDATE_SELECTED_VIOLATION_OBJECT,
  data: event
})

export const nextSelectedViolation = event => ({
  type: NEXT_SELECTED_VIOLATION
})

export const prevSelectedViolation = event => ({
  type: PREV_SELECTED_VIOLATION
})

export const clearViolations = event => ({
  type: CLEAR_VIOLATIONS
})

export const readViolationsByBuilding = id => dispatch => {
  // console.log('******FETCHING VIOLATIONS DATA for building', id)
  dispatch(awaitingViolationsResponse())
  return Axios.get(`/buildings/${id}/violations`)
    .then(response => {
      dispatch(handleReadViolationsResponse(response))
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}
