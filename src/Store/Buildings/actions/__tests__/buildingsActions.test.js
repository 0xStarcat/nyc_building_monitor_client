import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import { Axios } from '../../../../SharedUtilities/Axios'

import * as buildingsActions from '../index.js'
import { SCOPE_NEIGHBORHOODS, SCOPE_CENSUS_TRACTS } from '../../../AppState/actions'

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

describe('readBuildingsByScope', () => {
  describe('with censusTracts scope', () => {
    it('dispatches AWAITING_BUILDINGS_RESPONSE, HANDLE_READ_BUILDINGS_RESPONSE on success', async () => {
      const response = { data: { features: [] } }
      moxios.stubRequest(`/census-tracts/1/buildings`, {
        status: 200,
        response: response
      })

      await store.dispatch(buildingsActions.readBuildingsByScope(SCOPE_CENSUS_TRACTS, '1'))
      const actions = store.getActions()
      const expectedActions = [
        buildingsActions.awaitingBuildingsResponse(),
        buildingsActions.handleReadBuildingsResponse({ data: response })
      ]

      expect(actions).toEqual(expectedActions)
    })

    it('dispatches AWAITING_BUILDINGS_RESPONSE and HANDLE_ERROR_RESPONSE on error', async () => {
      const error = { error: '' }

      moxios.stubRequest(`/census-tracts/1/buildings`, {
        status: 500,
        response: error
      })

      await store.dispatch(buildingsActions.readBuildingsByScope(SCOPE_CENSUS_TRACTS, '1'))
      const actions = store.getActions()
      const expectedActions = [
        buildingsActions.awaitingBuildingsResponse(),
        buildingsActions.handleErrorResponse({ data: error })
      ]

      expect(actions).toEqual(expectedActions)
    })
  })

  describe('with neighborhoods scope', () => {
    it('dispatches AWAITING_BUILDINGS_RESPONSE, HANDLE_READ_BUILDINGS_RESPONSE on success', async () => {
      const response = { data: { features: [] } }
      moxios.stubRequest(`/${SCOPE_NEIGHBORHOODS}/1/buildings`, {
        status: 200,
        response: response
      })

      await store.dispatch(buildingsActions.readBuildingsByScope(SCOPE_NEIGHBORHOODS, '1'))
      const actions = store.getActions()
      const expectedActions = [
        buildingsActions.awaitingBuildingsResponse(),
        buildingsActions.handleReadBuildingsResponse({ data: response })
      ]

      expect(actions).toEqual(expectedActions)
    })

    it('dispatches AWAITING_BUILDINGS_RESPONSE and HANDLE_ERROR_RESPONSE on error', async () => {
      const error = { error: '' }

      moxios.stubRequest(`/${SCOPE_NEIGHBORHOODS}/1/buildings`, {
        status: 500,
        response: error
      })

      await store.dispatch(buildingsActions.readBuildingsByScope(SCOPE_NEIGHBORHOODS, '1'))
      const actions = store.getActions()
      const expectedActions = [
        buildingsActions.awaitingBuildingsResponse(),
        buildingsActions.handleErrorResponse({ data: error })
      ]

      expect(actions).toEqual(expectedActions)
    })
  })
})
