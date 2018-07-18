import * as reducer from '../index'
import * as ServiceCallsActions from '../../actions'

describe('ServiceCalls reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.serviceCallsReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('AWAITING_SERVICE_CALLS_RESPONSE', () => {
    const expectedState = { ...reducer.initialState, awaitingResponse: true }

    it('sets awaitingResponse to true', () => {
      expect(reducer.serviceCallsReducer(undefined, ServiceCallsActions.awaitingServiceCallsResponse())).toEqual(
        expectedState
      )
    })
  })

  describe('HANDLE_ERROR_RESPONSE', () => {
    ServiceCallsActions.awaitingServiceCallsResponse()

    it('sets awaitingResponse to false', () => {
      const expectedState = { ...reducer.initialState, errors: [{ message: 'hello' }] }
      expect(
        reducer.serviceCallsReducer(
          undefined,
          ServiceCallsActions.handleErrorResponse({ data: { errors: [{ message: 'hello' }] } })
        )
      ).toEqual(expectedState)
    })
  })

  describe('HANDLE_READ_SERVICE_CALLS_RESPONSE', () => {
    const response = { features: [{ serviceCall: 1 }] }
    it('fetches the ServiceCalls if present', () => {
      expect(
        reducer.serviceCallsReducer(undefined, ServiceCallsActions.handleReadServiceCallsResponse({ data: response }))
      ).toEqual({
        ...reducer.initialState,
        ...response
      })
    })
  })

  describe('UPDATE_SELECTED_SERVICE_CALL_OBJECT', () => {
    const object = { properties: {} }
    it('updates the selectedObject with the new object', () => {
      expect(reducer.serviceCallsReducer(undefined, ServiceCallsActions.updateSelectedObject(object))).toEqual({
        ...reducer.initialState,
        selectedObject: object
      })
    })
  })
})
