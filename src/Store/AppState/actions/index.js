export const CHECK_ORIENTATION = 'CHECK_ORIENTATION'
export const ALL_LAYERS_LOADED = 'ALL_LAYERS_LOADED'
export const ACTIVATE_SIDEBAR = 'ACTIVATE_SIDEBAR'
export const DEACTIVATE_SIDEBAR = 'DEACTIVATE_SIDEBAR'
export const CHANGE_SIDEBAR_SCOPE = 'CHANGE_SIDEBAR_SCOPE'
export const CHANGE_SIDEBAR_VIEW = 'CHANGE_SIDEBAR_VIEW'
// Views
export const SIDEBAR_VIEW_MENU = 'SIDEBAR_VIEW_MENU'
export const SIDEBAR_VIEW_SCOPED_OBJECTS = 'SIDE_VIEW_SCOPED_OBJECTS'
export const SIDEBAR_VIEW_SCOPED_OBJECT = 'SIDE_VIEW_SCOPED_OBJECT'

// Scopes
export const SIDEBAR_NEIGHBORHOOD_INFO = 'neighborhoods'
export const SIDEBAR_SCOPE_CENSUS_TRACTS = 'censusTracts'
export const SIDEBAR_SCOPE_BUILDINGS = 'buildings'
export const SIDEBAR_SCOPE_VIOLATIONS = 'violations'
export const SIDEBAR_SCOPE_SERVICE_CALLS = 'serviceCalls'

export const checkOrientation = event => ({
  type: CHECK_ORIENTATION
})

export const allLayersLoaded = event => ({
  type: ALL_LAYERS_LOADED
})

export const activateSidebar = event => ({
  type: ACTIVATE_SIDEBAR
})

export const deactivateSidebar = event => ({
  type: DEACTIVATE_SIDEBAR
})

export const changeSidebarScope = event => ({
  type: CHANGE_SIDEBAR_SCOPE,
  data: event
})

export const changeSidebarView = event => ({
  type: CHANGE_SIDEBAR_VIEW,
  data: event
})
