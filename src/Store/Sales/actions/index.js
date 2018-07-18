import { Axios } from '../../../SharedUtilities/Axios'

export const HANDLE_READ_SALES_RESPONSE = 'HANDLE_READ_SALES_RESPONSE'
export const AWAITING_SALES_RESPONSE = 'AWAITING_CENSUS_TRACT_RESPONSE'
export const HANDLE_ERROR_RESPONSE = 'HANDLE_ERROR_RESPONSE'
export const UPDATE_SELECTED_SALE_OBJECT = 'UPDATE_SELECTED_SALE_OBJECT'

export const awaitingSalesResponse = () => ({
  type: AWAITING_SALES_RESPONSE,
  data: {}
})

export const handleErrorResponse = response => ({
  type: HANDLE_ERROR_RESPONSE,
  data: response.data || response
})

export const handleReadSalesResponse = response => ({
  type: HANDLE_READ_SALES_RESPONSE,
  data: response.data
})

export const updateSelectedObject = event => ({
  type: UPDATE_SELECTED_SALE_OBJECT,
  data: event
})

export const readSalesByBuilding = id => dispatch => {
  console.log('******FETCHING SALES DATA for building', id)
  dispatch(awaitingSalesResponse())
  return Axios.get(`/buildings/${id}/sales`)
    .then(response => {
      dispatch(handleReadSalesResponse(response))
    })
    .catch(error => {
      dispatch(handleErrorResponse(error.response || error))
    })
}
