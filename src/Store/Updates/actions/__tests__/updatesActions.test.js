import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import { Axios } from '../../../../SharedUtilities/Axios'

import * as updatesActions from '../index.js'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({ updates: {} })

beforeEach(() => {
  store.clearActions()
  moxios.install(Axios)
})
afterEach(() => {
  moxios.uninstall(Axios)
})

describe('readLastUpdate', () => {
  it('dispatches AWAITING_UPDATES_RESPONSE, HANDLE_READ_UPDATES_RESPONSE on success', async () => {
    const response = { data: { features: [] } }
    moxios.stubRequest('/updates/last', {
      status: 200,
      response: response
    })

    await store.dispatch(updatesActions.readLastUpdate())
    const actions = store.getActions()
    const expectedActions = [
      updatesActions.awaitingUpdatesResponse(),
      updatesActions.handleReadUpdatesResponse({ data: response })
    ]

    expect(actions).toEqual(expectedActions)
  })

  it('dispatches AWAITING_UPDATES_RESPONSE and HANDLE_ERROR_RESPONSE on error', async () => {
    const error = { error: '' }

    moxios.stubRequest('/updates/last', {
      status: 500,
      response: error
    })

    await store.dispatch(updatesActions.readLastUpdate())
    const actions = store.getActions()
    const expectedActions = [
      updatesActions.awaitingUpdatesResponse(),
      updatesActions.handleErrorResponse({ data: error })
    ]

    expect(actions).toEqual(expectedActions)
  })
})
