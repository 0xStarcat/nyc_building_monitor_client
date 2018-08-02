import { Axios } from '../../../SharedUtilities/Axios'

export const AWAITING_SEARCH_RESPONSE = 'AWAITING_SEARCH_RESPONSE'
export const HANDLE_READ_SEARCH_RESPONSE = 'HANDLE_READ_SEARCH_RESPONSE'
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'
export const SET_SEARCH_TIMEOUT = 'SET_SEARCH_TIMEOUT'
export const awaitingSearchResponse = () => ({
  type: AWAITING_SEARCH_RESPONSE
})

export const handleErrorResponse = response => ({
  type: HANDLE_ERROR_RESPONSE,
  data: response.data || response
})

export const handleReadSearchResponse = response => ({
  type: HANDLE_READ_SEARCH_RESPONSE,
  data: response.data
})
export const clearSearch = () => ({
  type: CLEAR_SEARCH
})

export const setSearchTimeout = event => ({
  type: SET_SEARCH_TIMEOUT,
  data: event
})

export const queryBuildingAddress = data => dispatch => {
  dispatch(awaitingSearchResponse())
  Axios.post('/buildings/search', { query: data })
    .then(response => {
      dispatch(handleReadSearchResponse(response))
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}
