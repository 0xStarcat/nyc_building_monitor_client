import * as reducer from '../index'
import * as censusTractsActions from '../../actions'

describe('censusTracts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.censusTractsReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('AWAITING_CENSUS_TRACTS_RESPONSE', () => {
    const expectedState = { ...reducer.initialState, awaitingResponse: true }

    it('sets awaitingResponse to true', () => {
      expect(reducer.censusTractsReducer(undefined, censusTractsActions.awaitingCensusTractsResponse())).toEqual(
        expectedState
      )
    })
  })

  describe('HANDLE_ERROR_RESPONSE', () => {
    censusTractsActions.awaitingCensusTractsResponse()

    it('sets awaitingResponse to false', () => {
      const expectedState = { ...reducer.initialState, errors: [{ message: 'hello' }] }
      expect(
        reducer.censusTractsReducer(
          undefined,
          censusTractsActions.handleErrorResponse({ data: { errors: [{ message: 'hello' }] } })
        )
      ).toEqual(expectedState)
    })
  })

  describe('HANDLE_READ_CENSUS_TRACTS_RESPONSE', () => {
    const response = { features: [] }
    it('fetches the censusTracts if present', () => {
      expect(
        reducer.censusTractsReducer(undefined, censusTractsActions.handleReadCensusTractsResponse({ data: response }))
      ).toEqual({
        ...reducer.initialState,
        initialFetchCompleted: true
      })
    })
  })

  describe('UPDATE_SELECTED_CENSUS_TRACT_OBJECT', () => {
    const object = { properties: {} }
    it('updates the selectedObject with the new object', () => {
      expect(reducer.censusTractsReducer(undefined, censusTractsActions.updateSelectedCTObject(object))).toEqual({
        ...reducer.initialState,
        selectedObject: object
      })
    })
  })
})
