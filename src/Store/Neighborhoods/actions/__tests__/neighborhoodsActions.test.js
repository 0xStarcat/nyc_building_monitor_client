import configureStore from 'redux-mock-store'

import thunk from 'redux-thunk'
import moxios from 'moxios'

import { Axios } from '../../../../SharedUtilities/Axios'
import { clearCensusTracts } from '../../../CensusTracts/actions'
import { clearBuildings } from '../../../Buildings/actions'

import * as neighborhoodsActions from '../index.js'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({ neighborhoods: {} })

beforeEach(() => {
  store.clearActions()
  moxios.install(Axios)
})
afterEach(() => {
  moxios.uninstall(Axios)
})

describe('readNeighborhoods', () => {
  it('dispatches AWAITING_NEIGHBORHOODS_RESPONSE, HANDLE_READ_NEIGHBORHOODS_RESPONSE on success', async () => {
    const response = { data: { features: [] } }
    moxios.stubRequest('/neighborhoods', {
      status: 200,
      response: response
    })

    await store.dispatch(neighborhoodsActions.readNeighborhoods())
    const actions = store.getActions()
    const expectedActions = [
      neighborhoodsActions.awaitingNeighborhoodsResponse(),
      neighborhoodsActions.handleReadNeighborhoodsResponse({ data: response }),
      clearCensusTracts(),
      clearBuildings()
    ]

    expect(actions).toEqual(expectedActions)
  })

  it('dispatches AWAITING_NEIGHBORHOODS_RESPONSE and HANDLE_ERROR_RESPONSE on error', async () => {
    const error = { error: '' }

    moxios.stubRequest('/neighborhoods', {
      status: 500,
      response: error
    })

    await store.dispatch(neighborhoodsActions.readNeighborhoods())
    const actions = store.getActions()
    const expectedActions = [
      neighborhoodsActions.awaitingNeighborhoodsResponse(),
      neighborhoodsActions.handleErrorResponse({ data: error })
    ]

    expect(actions).toEqual(expectedActions)
  })
})

describe('selectNewSelectedNeighborhoodObject', () => {
  describe('when selected object is different than the clicked object', () => {
    it('dispatches UPDATE_NEIGHBORHOOD_OBJECT and CLEAR_BUILDINGS', () => {
      store.dispatch(neighborhoodsActions.selectNewSelectedNeighborhoodObject({ id: 1 }))
      const actions = store.getActions()
      const expectedActions = [neighborhoodsActions.updateSelectedNeighborhoodObject({ id: 1 }), clearBuildings()]

      expect(actions).toEqual(expectedActions)
    })
  })
})
