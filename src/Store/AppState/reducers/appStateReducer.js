import * as appStateActions from '../actions'

export const initialState = {
  allLayersLoaded: false,
  selectedLayer: null,
  sidebarActive: false,
  landscapeOrientation: window.matchMedia('(orientation: landscape)').matches
}

export const appStateReducer = (appState = Object.freeze(initialState), action = { data: [] }) => {
  switch (action.type) {
    case appStateActions.ALL_LAYERS_LOADED: {
      return { ...appState, allLayersLoaded: true }
    }
    case appStateActions.UPDATE_SELECTED_LAYER: {
      return { ...appState, selectedLayer: action.data }
    }
    case appStateActions.ACTIVATE_SIDEBAR: {
      return { ...appState, sidebarActive: true }
    }
    case appStateActions.DEACTIVATE_SIDEBAR: {
      return { ...appState, sidebarActive: false }
    }

    default:
      return appState
  }
}
