import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as appStateActions from '../index.js'
import { readBuildingsByScope } from '../../../Buildings/actions'
import { selectNewSelectedCTObject } from '../../../CensusTracts/actions'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({ buildings: {} })

afterEach(() => {
  store.clearActions()
})

describe('openInformationBox', () => {
  it('dispatches CHANGE_INFORMATION_CONTENT_CODE, CHANGE_SIDEBAR_VIEW, ACTIVATE_SIDEBAR on success', () => {
    const code = 'A'
    store.dispatch(appStateActions.openInformationBox(code))
    const actions = store.getActions()
    const expectedActions = [
      appStateActions.changeInformationContentCode(code),
      appStateActions.changeSidebarView(appStateActions.SIDEBAR_VIEW_INFORMATION),
      appStateActions.activateSidebar()
    ]

    expect(actions).toEqual(expectedActions)
  })
})

describe('openBoundaryLayerMenu', () => {
  it('dispatches CHANGE_SIDEBAR_VIEW, PREVIEW_SIDEBAR', () => {
    const code = 'A'
    store.dispatch(appStateActions.openBoundaryLayerMenu(code))
    const actions = store.getActions()
    const expectedActions = [
      appStateActions.changeSidebarView(appStateActions.SIDEBAR_VIEW_MAP_DETAILS_MENU),
      appStateActions.previewSidebar()
    ]

    expect(actions).toEqual(expectedActions)
  })
})

describe('onRegionClick', () => {
  it('dispatches CHANGE_SIDEBAR_VIEW, PREVIEW_SIDEBAR', () => {
    const event = { target: { feature: { properties: { id: 1 } } } }
    store.dispatch(appStateActions.onRegionClick(event))
    const actions = store.getActions()
    const expectedActions = [
      appStateActions.setLegendScopeBuildings(),
      appStateActions.changeSidebarScope(undefined),
      appStateActions.changeSidebarView(appStateActions.SIDEBAR_VIEW_SELECTED_OBJECT),
      appStateActions.previewSidebar(),
      { type: 'AWAITING_BUILDINGS_RESPONSE' },
      { data: { id: 1 }, type: 'UPDATE_SELECTED_CENSUS_TRACT_OBJECT' },
      { type: 'CLEAR_BUILDINGS' }
    ]

    expect(actions).toEqual(expectedActions)
  })
})
