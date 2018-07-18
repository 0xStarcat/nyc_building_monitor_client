import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import { Axios } from '../../../../SharedUtilities/Axios'

import * as salesActions from '../index.js'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({ sales: {} })

beforeEach(() => {
  store.clearActions()
  moxios.install(Axios)
})
afterEach(() => {
  moxios.uninstall(Axios)
})

describe('readSalesByBuilding', () => {
  it('dispatches AWAITING_SALES_RESPONSE, HANDLE_READ_SALES_RESPONSE on success', async () => {
    const response = { data: { features: [] } }
    moxios.stubRequest('/buildings/1/sales', {
      status: 200,
      response: response
    })

    await store.dispatch(salesActions.readSalesByBuilding('1'))
    const actions = store.getActions()
    const expectedActions = [
      salesActions.awaitingSalesResponse(),
      salesActions.handleReadSalesResponse({ data: response })
    ]

    expect(actions).toEqual(expectedActions)
  })

  it('dispatches AWAITING_SALES_RESPONSE and HANDLE_ERROR_RESPONSE on error', async () => {
    const error = { error: '' }

    moxios.stubRequest('/buildings/1/sales', {
      status: 500,
      response: error
    })

    await store.dispatch(salesActions.readSalesByBuilding('1'))
    const actions = store.getActions()
    const expectedActions = [salesActions.awaitingSalesResponse(), salesActions.handleErrorResponse({ data: error })]

    expect(actions).toEqual(expectedActions)
  })
})
