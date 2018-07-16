export const ALL_LAYERS_LOADED = 'ALL_LAYERS_LOADED'
export const UPDATE_SELECTED_LAYER = 'UPDATE_SELECTED_LAYER'
export const ACTIVATE_SIDEBAR = 'ACTIVATE_SIDEBAR'
export const DEACTIVATE_SIDEBAR = 'DEACTIVATE_SIDEBAR'

export const allLayersLoaded = event => ({
  type: ALL_LAYERS_LOADED
})

export const updateSelectedLayer = event => ({
  type: UPDATE_SELECTED_LAYER,
  data: event
})

export const activateSideBar = event => ({
  type: ACTIVATE_SIDEBAR
})

export const deactivateSideBar = event => ({
  type: DEACTIVATE_SIDEBAR
})
