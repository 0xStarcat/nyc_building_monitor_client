import * as reducer from '../index'
import * as SalesActions from '../../actions'

describe('Sales reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.salesReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('AWAITING_SERVICE_CALLS_RESPONSE', () => {
    const expectedState = { ...reducer.initialState, awaitingResponse: true }

    it('sets awaitingResponse to true', () => {
      expect(reducer.salesReducer(undefined, SalesActions.awaitingSalesResponse())).toEqual(expectedState)
    })
  })

  describe('HANDLE_ERROR_RESPONSE', () => {
    SalesActions.awaitingSalesResponse()

    it('sets awaitingResponse to false', () => {
      const expectedState = { ...reducer.initialState, errors: [{ message: 'hello' }] }
      expect(
        reducer.salesReducer(undefined, SalesActions.handleErrorResponse({ data: { errors: [{ message: 'hello' }] } }))
      ).toEqual(expectedState)
    })
  })

  describe('HANDLE_READ_SERVICE_CALLS_RESPONSE', () => {
    const response = { features: [{ sale: 1 }] }
    it('fetches the Sales if present', () => {
      expect(reducer.salesReducer(undefined, SalesActions.handleReadSalesResponse({ data: response }))).toEqual({
        ...reducer.initialState,
        ...response
      })
    })
  })

  describe('UPDATE_SELECTED_SERVICE_CALL_OBJECT', () => {
    const object = { properties: {} }
    it('updates the selectedObject with the new object', () => {
      expect(reducer.salesReducer(undefined, SalesActions.updateSelectedObject(object))).toEqual({
        ...reducer.initialState,
        selectedObject: object
      })
    })
  })
})
