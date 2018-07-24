import { Axios } from '../../../SharedUtilities/Axios'
import { clearNeighborhoods } from '../../Neighborhoods/actions'

export const HANDLE_READ_CENSUS_TRACTS_RESPONSE = 'HANDLE_READ_CENSUS_TRACTS_RESPONSE'
export const AWAITING_CENSUS_TRACTS_RESPONSE = 'AWAITING_CENSUS_TRACT_RESPONSE'
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE'
export const UPDATE_SELECTED_CENSUS_TRACT_OBJECT = 'UPDATE_SELECTED_CENSUS_TRACT_OBJECT'
export const CLEAR_CENSUS_TRACTS = 'CLEAR_CENSUS_TRACTS'

const url = '/census-tracts'

export const awaitingCensusTractsResponse = () => ({
  type: AWAITING_CENSUS_TRACTS_RESPONSE
})

export const handleErrorResponse = response => ({
  type: HANDLE_ERROR_RESPONSE,
  data: response.data || response
})

export const handleReadCensusTractsResponse = response => ({
  type: HANDLE_READ_CENSUS_TRACTS_RESPONSE,
  data: response.data || response
})

export const updateSelectedCTObject = event => ({
  type: UPDATE_SELECTED_CENSUS_TRACT_OBJECT,
  data: event
})

export const clearCensusTracts = event => ({
  type: CLEAR_CENSUS_TRACTS
})

export const readCensusTracts = () => dispatch => {
  console.log('******FETCHING CENSUS TRACTS')
  dispatch(awaitingCensusTractsResponse())
  return Axios.get(url)
    .then(response => {
      dispatch(handleReadCensusTractsResponse(response))
      dispatch(clearNeighborhoods())
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}
