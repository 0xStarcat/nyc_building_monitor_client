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

  describe('UPDATE_SELECTED_LAYER', () => {
    const expectedState = { ...reducer.initialState, selectedLayer: { properties: {} } }

    it('sets passes layer data to selectedLayer', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.updateSelectedLayer({ properties: {} }))).toEqual(
        expectedState
      )
    })
  })

  describe('ACTIVATE_SIDEBAR', () => {
    const expectedState = { ...reducer.initialState, sidebarActive: true }

    it('sets sidebarActive to true', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.activateSideBar())).toEqual(expectedState)
    })
  })

  describe('DEACTIVATE_SIDEBAR', () => {
    const expectedState = { ...reducer.initialState, sidebarActive: false }

    it('sets sidebarActive to true', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.deactivateSideBar())).toEqual(expectedState)
    })
  })

  describe('CHANGE_SIDEBAR_MODE', () => {
    const expectedState = { ...reducer.initialState, sidebarMode: AppStateActions.SIDEBAR_BUILDING_INFO }

    it('sets sidebarMode to the specific value', () => {
      expect(
        reducer.appStateReducer(undefined, AppStateActions.changeSidebarMode(AppStateActions.SIDEBAR_BUILDING_INFO))
      ).toEqual(expectedState)
    })
  })
})
