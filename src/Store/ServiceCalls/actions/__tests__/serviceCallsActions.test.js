import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import { Axios } from '../../../../SharedUtilities/Axios'

import * as serviceCallsActions from '../index.js'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({ serviceCalls: {} })

beforeEach(() => {
  store.clearActions()
  moxios.install(Axios)
})
afterEach(() => {
  moxios.uninstall(Axios)
})

describe('readServiceCallsByBuilding', () => {
  it('dispatches AWAITING_SERVICE_CALLS_RESPONSE, HANDLE_READ_SERVICE_CALLS_RESPONSE on success', async () => {
    const response = { data: { features: [] } }
    moxios.stubRequest('/buildings/1/service-calls', {
      status: 200,
      response: response
    })

    await store.dispatch(serviceCallsActions.readServiceCallsByBuilding('1'))
    const actions = store.getActions()
    const expectedActions = [
      serviceCallsActions.awaitingServiceCallsResponse(),
      serviceCallsActions.handleReadServiceCallsResponse({ data: response })
    ]

    expect(actions).toEqual(expectedActions)
  })

  it('dispatches AWAITING_SERVICE_CALLS_RESPONSE and HANDLE_ERROR_RESPONSE on error', async () => {
    const error = { error: '' }

    moxios.stubRequest('/buildings/1/service-calls', {
      status: 500,
      response: error
    })

    await store.dispatch(serviceCallsActions.readServiceCallsByBuilding('1'))
    const actions = store.getActions()
    const expectedActions = [
      serviceCallsActions.awaitingServiceCallsResponse(),
      serviceCallsActions.handleErrorResponse({ data: error })
    ]

    expect(actions).toEqual(expectedActions)
  })
})
