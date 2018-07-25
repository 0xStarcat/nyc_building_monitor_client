import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { readCensusTracts } from '../../../CensusTracts/actions'
import { readNeighborhoods } from '../../../Neighborhoods/actions'
import * as appStateActions from '../index.js'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({ buildings: {} })

afterEach(() => {
  store.clearActions()
})

describe('openBoundaryLayerMenu', () => {
  it('dispatches AWAITING_BUILDINGS_RESPONSE, ACTIVATE_SIDEBAR on success', () => {
    store.dispatch(appStateActions.openBoundaryLayerMenu())
    const actions = store.getActions()
    const expectedActions = [
      appStateActions.changeSidebarView(appStateActions.SIDEBAR_VIEW_BOUNDARY_LAYER_MENU),
      appStateActions.activateSidebar()
    ]

    expect(actions).toEqual(expectedActions)
  })
})

describe('openScopeMenu', () => {
  it('dispatches CHANGE_SIDEBAR_VIEW, PREVIEW_SIDEBAR on success', () => {
    store.dispatch(appStateActions.openScopeMenu())
    const actions = store.getActions()
    const expectedActions = [
      appStateActions.changeSidebarView(appStateActions.SIDEBAR_VIEW_SCOPE_MENU),
      appStateActions.previewSidebar()
    ]

    expect(actions).toEqual(expectedActions)
  })
})
