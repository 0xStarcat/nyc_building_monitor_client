import store from '../../store'
import { Axios } from '../../../SharedUtilities/Axios'
import { clearCensusTracts } from '../../CensusTracts/actions'
import { clearBuildings } from '../../Buildings/actions'

export const HANDLE_READ_NEIGHBORHOODS_RESPONSE = 'HANDLE_READ_NEIGHBORHOODS_RESPONSE'
export const AWAITING_NEIGHBORHOODS_RESPONSE = 'AWAITING_NEIGHBORHOOD_RESPONSE'
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE'
export const UPDATE_SELECTED_NEIGHBORHOOD_OBJECT = 'UPDATE_SELECTED_NEIGHBORHOOD_OBJECT'
export const CLEAR_NEIGHBORHOODS = 'CLEAR_NEIGHBORHOODS'

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

export const updateSelectedNeighborhoodObject = event => ({
  type: UPDATE_SELECTED_NEIGHBORHOOD_OBJECT,
  data: event
})

export const clearNeighborhoods = event => ({
  type: CLEAR_NEIGHBORHOODS
})

export const selectNewSelectedNeighborhoodObject = event => dispatch => {
  if ((store.getState().neighborhoods.selectedObject || {}).id === event.id) return null
  dispatch(updateSelectedNeighborhoodObject(event))
  dispatch(clearBuildings())
}

export const readNeighborhoods = () => dispatch => {
  console.log('******FETCHING NEIGHBORHOODS')
  dispatch(awaitingNeighborhoodsResponse())
  return Axios.get(neighborhoods_url)
    .then(response => {
      dispatch(handleReadNeighborhoodsResponse(response))
      dispatch(clearCensusTracts())
      dispatch(clearBuildings())
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}
