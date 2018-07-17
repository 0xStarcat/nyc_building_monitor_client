import * as reducer from '../neighborhoodsReducer'
import * as NeighborhoodsActions from '../../actions'

describe('Neighborhoods reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.neighborhoodsReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('AWAITING_NEIGHBORHOODS_RESPONSE', () => {
    const expectedState = { ...reducer.initialState, awaitingResponse: true }

    it('sets awaitingResponse to true', () => {
      expect(reducer.neighborhoodsReducer(undefined, NeighborhoodsActions.awaitingNeighborhoodsResponse())).toEqual(
        expectedState
      )
    })
  })

  describe('HANDLE_ERROR_RESPONSE', () => {
    NeighborhoodsActions.awaitingNeighborhoodsResponse()

    it('sets awaitingResponse to false', () => {
      const expectedState = { ...reducer.initialState, errors: [{ message: 'hello' }] }
      expect(
        reducer.neighborhoodsReducer(
          undefined,
          NeighborhoodsActions.handleErrorResponse({ data: { errors: [{ message: 'hello' }] } })
        )
      ).toEqual(expectedState)
    })
  })

  describe('HANDLE_READ_NEIGHBORHOODS_RESPONSE', () => {
    const response = { features: [] }
    it('fetches the Neighborhoods if present', () => {
      expect(
        reducer.neighborhoodsReducer(
          undefined,
          NeighborhoodsActions.handleReadNeighborhoodsResponse({ data: response })
        )
      ).toEqual({
        ...reducer.initialState,
        initialFetchCompleted: true
      })
    })
  })
})
