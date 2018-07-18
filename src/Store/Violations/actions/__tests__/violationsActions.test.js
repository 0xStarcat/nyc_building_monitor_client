import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import { Axios } from '../../../../SharedUtilities/Axios'

import * as violationsActions from '../index.js'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({ violations: {} })

beforeEach(() => {
  store.clearActions()
  moxios.install(Axios)
})
afterEach(() => {
  moxios.uninstall(Axios)
})

describe('readViolationsByBuilding', () => {
  it('dispatches AWAITING_VIOLATIONS_RESPONSE, HANDLE_READ_VIOLATIONS_RESPONSE on success', async () => {
    const response = { data: { features: [] } }
    moxios.stubRequest('/buildings/1/violations', {
      status: 200,
      response: response
    })

    await store.dispatch(violationsActions.readViolationsByBuilding('1'))
    const actions = store.getActions()
    const expectedActions = [
      violationsActions.awaitingViolationsResponse(),
      violationsActions.handleReadViolationsResponse({ data: response })
    ]

    expect(actions).toEqual(expectedActions)
  })

  it('dispatches AWAITING_VIOLATIONS_RESPONSE and HANDLE_ERROR_RESPONSE on error', async () => {
    const error = { error: '' }

    moxios.stubRequest('/buildings/1/violations', {
      status: 500,
      response: error
    })

    await store.dispatch(violationsActions.readViolationsByBuilding('1'))
    const actions = store.getActions()
    const expectedActions = [
      violationsActions.awaitingViolationsResponse(),
      violationsActions.handleErrorResponse({ data: error })
    ]

    expect(actions).toEqual(expectedActions)
  })
})
