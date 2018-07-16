import { Axios } from '../../../SharedUtilities/Axios'

export const HANDLE_READ_CENSUS_TRACTS_RESPONSE = 'HANDLE_READ_CENSUS_TRACTS_RESPONSE'
export const AWAITING_CENSUS_TRACTS_RESPONSE = 'AWAITING_CENSUS_TRACT_RESPONSE'
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE'

const sectionUrl = '/tracts'

export const awaitingCensusTractsResponse = () => ({
  type: AWAITING_CENSUS_TRACTS_RESPONSE,
  data: {}
})

export const handleErrorResponse = response => ({
  type: HANDLE_ERROR_RESPONSE,
  data: response.data || response
})

export const handleReadCensusTractsResponse = response => ({
  type: HANDLE_READ_CENSUS_TRACTS_RESPONSE,
  data: response.data
})

export const readCensusTracts = () => dispatch => {
  console.log('******FETCHING CENSUS TRACTS')
  dispatch(awaitingCensusTractsResponse())
  return Axios.get(sectionUrl)
    .then(response => {
      dispatch(handleReadCensusTractsResponse(response))
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}
