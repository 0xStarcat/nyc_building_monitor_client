import * as appStateActions from '../actions'

export const initialState = {
  allLayersLoaded: false,
  baseLayer: appStateActions.BASE_LAYER_MEDIAN_INCOME,
  baseLayerScope: appStateActions.SCOPE_CENSUS_TRACTS,
  selectedLayer: null,
  sidebarActive: false,
  sidebarView: appStateActions.SIDEBAR_VIEW_MENU,
  sidebarScope: null,
  landscapeOrientation: window.matchMedia('(orientation: landscape)').matches
}

export const appStateReducer = (appState = Object.freeze(initialState), action = { data: [] }) => {
  switch (action.type) {
    case appStateActions.CHECK_ORIENTATION: {
      return { ...appState, landscapeOrientation: window.matchMedia('(orientation: landscape)').matches }
    }
    case appStateActions.ALL_LAYERS_LOADED: {
      return { ...appState, allLayersLoaded: true }
    }
    case appStateActions.ACTIVATE_SIDEBAR: {
      return { ...appState, sidebarActive: true }
    }
    case appStateActions.DEACTIVATE_SIDEBAR: {
      return { ...appState, sidebarActive: false }
    }
    case appStateActions.CHANGE_SIDEBAR_VIEW: {
      return { ...appState, sidebarView: action.data }
    }
    case appStateActions.CHANGE_SIDEBAR_SCOPE: {
      return { ...appState, sidebarScope: action.data }
    }
    case appStateActions.CHANGE_BASE_LAYER: {
      return { ...appState, baseLayer: action.data }
    }
    case appStateActions.CHANGE_BASE_LAYER_SCOPE: {
      return { ...appState, baseLayerScope: action.data }
    }

    default:
      return appState
  }
}
