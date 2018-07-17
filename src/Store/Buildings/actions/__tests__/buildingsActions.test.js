import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import { Axios } from '../../../../SharedUtilities/Axios'

import * as buildingsActions from '../index.js'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({ buildings: {} })

beforeEach(() => {
  store.clearActions()
  moxios.install(Axios)
})
afterEach(() => {
  moxios.uninstall(Axios)
})

describe('readBuildingsByCensusTract', () => {
  it('dispatches AWAITING_BUILDINGS_RESPONSE, HANDLE_READ_BUILDINGS_RESPONSE on success', async () => {
    const response = { data: { features: [] } }
    moxios.stubRequest('/buildings/census-tract/1', {
      status: 200,
      response: response
    })

    await store.dispatch(buildingsActions.readBuildingsByCensusTract('1'))
    const actions = store.getActions()
    const expectedActions = [
      buildingsActions.awaitingBuildingsResponse(),
      buildingsActions.handleReadBuildingsResponse({ data: response })
    ]

    expect(actions).toEqual(expectedActions)
  })

  it('dispatches AWAITING_BUILDINGS_RESPONSE and HANDLE_ERROR_RESPONSE on error', async () => {
    const error = { error: '' }

    moxios.stubRequest('/buildings/census-tract/1', {
      status: 500,
      response: error
    })

    await store.dispatch(buildingsActions.readBuildingsByCensusTract('1'))
    const actions = store.getActions()
    const expectedActions = [
      buildingsActions.awaitingBuildingsResponse(),
      buildingsActions.handleErrorResponse({ data: error })
    ]

    expect(actions).toEqual(expectedActions)
  })
})
