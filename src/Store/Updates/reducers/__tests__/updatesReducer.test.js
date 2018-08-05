import * as reducer from '../index'
import * as updatesActions from '../../actions'

describe('updates reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.updatesReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('AWAITING_UPDATES_RESPONSE', () => {
    const expectedState = { ...reducer.initialState, awaitingResponse: true }

    it('sets awaitingResponse to true', () => {
      expect(reducer.updatesReducer(undefined, updatesActions.awaitingUpdatesResponse())).toEqual(expectedState)
    })
  })

  describe('HANDLE_ERROR_RESPONSE', () => {
    updatesActions.awaitingUpdatesResponse()

    it('sets awaitingResponse to false', () => {
      const expectedState = { ...reducer.initialState, errors: [{ message: 'hello' }] }
      expect(
        reducer.updatesReducer(
          undefined,
          updatesActions.handleErrorResponse({ data: { errors: [{ message: 'hello' }] } })
        )
      ).toEqual(expectedState)
    })
  })

  describe('HANDLE_READ_UPDATES_RESPONSE', () => {
    const response = { features: [] }
    it('fetches the updates if present', () => {
      expect(reducer.updatesReducer(undefined, updatesActions.handleReadUpdatesResponse({ data: response }))).toEqual({
        ...reducer.initialState,
        initialFetchCompleted: true
      })
    })
  })
})
