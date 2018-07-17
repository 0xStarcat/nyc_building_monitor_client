import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import { Axios } from '../../../../SharedUtilities/Axios'

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
      neighborhoodsActions.handleReadNeighborhoodsResponse({ data: response })
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
