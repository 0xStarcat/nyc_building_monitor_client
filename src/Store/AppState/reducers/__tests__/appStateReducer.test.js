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
    const expectedState = { ...reducer.initialState, sidebarState: AppStateActions.SIDEBAR_STATE_ACTIVE }

    it('sets sidebarState to SIDEBAR_STATE_ACTIVE', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.activateSidebar())).toEqual(expectedState)
    })
  })

  describe('PREVIEW_SIDEBAR', () => {
    const expectedState = { ...reducer.initialState, sidebarState: AppStateActions.SIDEBAR_STATE_PREVIEW }

    it('sets sidebarState to SIDEBAR_STATE_PREVIEW', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.previewSidebar())).toEqual(expectedState)
    })
  })

  describe('DEACTIVATE_SIDEBAR', () => {
    const expectedState = { ...reducer.initialState, sidebarState: AppStateActions.SIDEBAR_STATE_INACTIVE }

    it('sets sidebarState to SIDEBAR_STATE_INACTIVE', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.deactivateSidebar())).toEqual(expectedState)
    })
  })

  describe('CHANGE_SIDEBAR_SCOPE', () => {
    const expectedState = { ...reducer.initialState, sidebarScope: AppStateActions.SCOPE_BUILDINGS }

    it('sets sidebarScope to the specific value', () => {
      expect(
        reducer.appStateReducer(undefined, AppStateActions.changeSidebarScope(AppStateActions.SCOPE_BUILDINGS))
      ).toEqual(expectedState)
    })
  })

  describe('CHANGE_BASE_LAYER', () => {
    const newValue = 'new_base_layer'
    const expectedState = { ...reducer.initialState, baseLayer: newValue }

    it('sets baseLayer to the specific value', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.changeBaseLayer(newValue))).toEqual(expectedState)
    })
  })

  describe('CHANGE_BASE_LAYER_SCOPE', () => {
    const newValue = 'new_base_layer_scope'
    const expectedState = { ...reducer.initialState, baseLayerScope: newValue }

    it('sets baseLayerScope to the specific value', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.changeBaseLayerScope(newValue))).toEqual(expectedState)
    })
  })

  describe('CHANGE_BUILDING_BASE_LAYER', () => {
    const newValue = 'new_building_base_layer_scope'
    const expectedState = { ...reducer.initialState, buildingBaseLayer: newValue }

    it('sets buildingBaseLayer to the specific value', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.changeBuildingBaseLayer(newValue))).toEqual(
        expectedState
      )
    })
  })

  describe('CHANGE_INFORMATION_CONTENT_CODE', () => {
    const newValue = 'new_code'
    const expectedState = { ...reducer.initialState, informationContentCode: newValue }

    it('sets informationContentCode to the specific value', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.changeInformationContentCode(newValue))).toEqual(
        expectedState
      )
    })
  })

  describe('SET_LEGEND_SCOPE_BOUNDARIES', () => {
    const expectedState = { ...reducer.initialState, legendScopeBoundaries: true }

    it('sets legendScopeBoundaries to true', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.setLegendScopeBoundaries())).toEqual(expectedState)
    })
  })

  describe('SET_LEGEND_SCOPE_BUILDINGS', () => {
    const expectedState = { ...reducer.initialState, legendScopeBoundaries: false }

    it('sets legendScopeBoundaries to false', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.setLegendScopeBuildings())).toEqual(expectedState)
    })
  })

  describe('OPEN_LEGEND', () => {
    const expectedState = { ...reducer.initialState, legendOpen: true }

    it('sets legendOpen to true', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.openLegend())).toEqual(expectedState)
    })
  })

  describe('CLOSE_LEGEND', () => {
    const expectedState = { ...reducer.initialState, legendOpen: false }

    it('sets legendOpen to false', () => {
      expect(reducer.appStateReducer(undefined, AppStateActions.closeLegend())).toEqual(expectedState)
    })
  })
})
