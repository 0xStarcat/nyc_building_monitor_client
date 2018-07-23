import * as appStateActions from '../actions'

export const initialState = {
  allLayersLoaded: false,
  selectedLayer: null,
  sidebarActive: false,
  sidebarView: appStateActions.SIDEBAR_VIEW_MENU,
  sidebarScope: appStateActions.SIDEBAR_SCOPE_CENSUS_TRACTS,
  landscapeOrientation: window.matchMedia('(orientation: landscape)').matches
}

export const appStateReducer = (appState = Object.freeze(initialState), action = { data: [] }) => {
  switch (action.type) {
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

    default:
      return appState
  }
}
