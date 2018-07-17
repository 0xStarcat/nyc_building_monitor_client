import * as reducer from '../buildingsReducer'
import * as BuildingsActions from '../../actions'

describe('Buildings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.buildingsReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('AWAITING_BUILDINGS_RESPONSE', () => {
    const expectedState = { ...reducer.initialState, awaitingResponse: true }

    it('sets awaitingResponse to true', () => {
      expect(reducer.buildingsReducer(undefined, BuildingsActions.awaitingBuildingsResponse())).toEqual(expectedState)
    })
  })

  describe('HANDLE_ERROR_RESPONSE', () => {
    BuildingsActions.awaitingBuildingsResponse()

    it('sets awaitingResponse to false', () => {
      const expectedState = { ...reducer.initialState, errors: [{ message: 'hello' }] }
      expect(
        reducer.buildingsReducer(
          undefined,
          BuildingsActions.handleErrorResponse({ data: { errors: [{ message: 'hello' }] } })
        )
      ).toEqual(expectedState)
    })
  })

  describe('HANDLE_READ_BUILDINGS_RESPONSE', () => {
    const response = { features: [] }
    it('fetches the Buildings if present', () => {
      expect(
        reducer.buildingsReducer(undefined, BuildingsActions.handleReadBuildingsResponse({ data: response }))
      ).toEqual({
        ...reducer.initialState,
        initialFetchCompleted: true
      })
    })
  })
})
