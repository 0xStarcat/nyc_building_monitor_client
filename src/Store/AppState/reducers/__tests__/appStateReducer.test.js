import * as reducer from '../appStateReducer'
import * as AppStateActions from '../../actions'

describe('AppState reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.appStateReducer(undefined, {})).toEqual(reducer.initialState)
  })

  describe('ALL_LAYERS_LOADED', () => {
    const expectedState = { ...reducer.initialState, allLayersLoaded: true }

    it('sets allLayersLoaded to true', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.allLayersLoaded())).toEqual(expectedState)
    })
  })

  describe('ACTIVATE_SIDEBAR', () => {
    const expectedState = { ...reducer.initialState, sidebarActive: true }

    it('sets sidebarActive to true', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.activateSidebar())).toEqual(expectedState)
    })
  })

  describe('DEACTIVATE_SIDEBAR', () => {
    const expectedState = { ...reducer.initialState, sidebarActive: false }

    it('sets sidebarActive to true', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.deactivateSidebar())).toEqual(expectedState)
    })
  })

  describe('CHANGE_SIDEBAR_SCOPE', () => {
    const expectedState = { ...reducer.initialState, sidebarScope: AppStateActions.SIDEBAR_SCOPE_BUILDINGS }

    it('sets sidebarScope to the specific value', () => {
      expect(
        reducer.appStateReducer(undefined, AppStateActions.changeSidebarScope(AppStateActions.SIDEBAR_SCOPE_BUILDINGS))
      ).toEqual(expectedState)
    })
  })
})
