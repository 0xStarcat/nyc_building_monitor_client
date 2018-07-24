import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import { Axios } from '../../../../SharedUtilities/Axios'
import { clearNeighborhoods } from '../../../Neighborhoods/actions'
import { clearBuildings } from '../../../Buildings/actions'

import * as censusTractsActions from '../index.js'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({ censusTracts: {} })

beforeEach(() => {
  store.clearActions()
  moxios.install(Axios)
})
afterEach(() => {
  moxios.uninstall(Axios)
})

describe('readCensusTracts', () => {
  it('dispatches AWAITING_CENSUS_TRACTS_RESPONSE, HANDLE_READ_CENSUS_TRACTS_RESPONSE on success', async () => {
    const response = { data: { features: [] } }
    moxios.stubRequest('/census-tracts', {
      status: 200,
      response: response
    })

    await store.dispatch(censusTractsActions.readCensusTracts())
    const actions = store.getActions()
    const expectedActions = [
      censusTractsActions.awaitingCensusTractsResponse(),
      censusTractsActions.handleReadCensusTractsResponse({ data: response }),
      clearNeighborhoods(),
      clearBuildings()
    ]

    expect(actions).toEqual(expectedActions)
  })

  it('dispatches AWAITING_CENSUS_TRACTS_RESPONSE and HANDLE_ERROR_RESPONSE on error', async () => {
    const error = { error: '' }

    moxios.stubRequest('/census-tracts', {
      status: 500,
      response: error
    })

    await store.dispatch(censusTractsActions.readCensusTracts())
    const actions = store.getActions()
    const expectedActions = [
      censusTractsActions.awaitingCensusTractsResponse(),
      censusTractsActions.handleErrorResponse({ data: error })
    ]

    expect(actions).toEqual(expectedActions)
  })

  describe('selectNewSelectedCTObject', () => {
    describe('when selected object is different than the clicked object', () => {
      it('dispatches UPDATE_CENSUS_TRACT_OBJECT and CLEAR_BUILDINGS', () => {
        store.dispatch(censusTractsActions.selectNewSelectedCTObject({ id: 1 }))
        const actions = store.getActions()
        const expectedActions = [censusTractsActions.updateSelectedCTObject({ id: 1 }), clearBuildings()]

        expect(actions).toEqual(expectedActions)
      })
    })
  })
})
