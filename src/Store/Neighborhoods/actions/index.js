import { Axios } from '../../../SharedUtilities/Axios'

export const HANDLE_READ_NEIGHBORHOODS_RESPONSE = 'HANDLE_READ_NEIGHBORHOODS_RESPONSE'
export const AWAITING_NEIGHBORHOODS_RESPONSE = 'AWAITING_NEIGHBORHOOD_RESPONSE'
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE'

const neighborhoods_url = '/neighborhoods'

export const awaitingNeighborhoodsResponse = () => ({
  type: AWAITING_NEIGHBORHOODS_RESPONSE,
  data: {}
})

export const handleErrorResponse = response => ({
  type: HANDLE_ERROR_RESPONSE,
  data: response.data || response
})

export const handleReadNeighborhoodsResponse = response => ({
  type: HANDLE_READ_NEIGHBORHOODS_RESPONSE,
  data: response.data
})

export const readNeighborhoods = () => dispatch => {
  console.log('******FETCHING NEIGHBORHOODS')
  dispatch(awaitingNeighborhoodsResponse())
  return Axios.get(neighborhoods_url)
    .then(response => {
      dispatch(handleReadNeighborhoodsResponse(response))
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}
