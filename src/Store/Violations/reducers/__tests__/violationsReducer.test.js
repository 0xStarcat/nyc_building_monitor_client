import * as reducer from '../index'
import * as ViolationsActions from '../../actions'

describe('Violations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.violationsReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('AWAITING_VIOLATIONS_RESPONSE', () => {
    const expectedState = { ...reducer.initialState, awaitingResponse: true }

    it('sets awaitingResponse to true', () => {
      expect(reducer.violationsReducer(undefined, ViolationsActions.awaitingViolationsResponse())).toEqual(
        expectedState
      )
    })
  })

  describe('HANDLE_ERROR_RESPONSE', () => {
    ViolationsActions.awaitingViolationsResponse()

    it('sets awaitingResponse to false', () => {
      const expectedState = { ...reducer.initialState, errors: [{ message: 'hello' }] }
      expect(
        reducer.violationsReducer(
          undefined,
          ViolationsActions.handleErrorResponse({ data: { errors: [{ message: 'hello' }] } })
        )
      ).toEqual(expectedState)
    })
  })

  describe('HANDLE_READ_VIOLATIONS_RESPONSE', () => {
    const response = { features: [{ properties: { index: 0, id: 1 } }] }
    it('fetches the Violations if present', () => {
      expect(
        reducer.violationsReducer(undefined, ViolationsActions.handleReadViolationsResponse({ data: response }))
      ).toEqual({
        ...reducer.initialState,
        ...response
      })
    })
  })

  describe('UPDATE_SELECTED_VIOLATION_OBJECT', () => {
    const object = { properties: {} }
    it('updates the selectedObject with the new object', () => {
      expect(reducer.violationsReducer(undefined, ViolationsActions.updateSelectedViolation(object))).toEqual({
        ...reducer.initialState,
        selectedObject: object
      })
    })
  })
})
