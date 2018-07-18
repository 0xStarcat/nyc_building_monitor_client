export const ALL_LAYERS_LOADED = 'ALL_LAYERS_LOADED'
export const UPDATE_SELECTED_LAYER = 'UPDATE_SELECTED_LAYER'
export const ACTIVATE_SIDEBAR = 'ACTIVATE_SIDEBAR'
export const DEACTIVATE_SIDEBAR = 'DEACTIVATE_SIDEBAR'
export const CHANGE_SIDEBAR_MODE = 'CHANGE_SIDEBAR_MODE'

export const SIDEBAR_BOUNDARY_INFO = 'SIDEBAR_BOUNDARY_INFO'
export const SIDEBAR_BUILDING_INFO = 'SIDEBAR_BUILDING_INFO'

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

export const changeSidebarMode = event => ({
  type: CHANGE_SIDEBAR_MODE,
  data: event
})
