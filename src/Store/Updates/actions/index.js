import { Axios } from '../../../SharedUtilities/Axios'

export const HANDLE_READ_UPDATES_RESPONSE = 'HANDLE_READ_UPDATES_RESPONSE'
export const AWAITING_UPDATES_RESPONSE = 'AWAITING_UPDATE_RESPONSE'
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE'

export const awaitingUpdatesResponse = () => ({
  type: AWAITING_UPDATES_RESPONSE
})

export const handleErrorResponse = response => ({
  type: HANDLE_ERROR_RESPONSE,
  data: response.data || response
})

export const handleReadUpdatesResponse = response => ({
  type: HANDLE_READ_UPDATES_RESPONSE,
  data: response.data || response
})

export const readLastUpdate = () => dispatch => {
  dispatch(awaitingUpdatesResponse())
  return Axios.get('/updates/last')
    .then(response => {
      dispatch(handleReadUpdatesResponse(response))
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}
