export const ALL_LAYERS_LOADED = 'ALL_LAYERS_LOADED'
export const ACTIVATE_SIDEBAR = 'ACTIVATE_SIDEBAR'
export const DEACTIVATE_SIDEBAR = 'DEACTIVATE_SIDEBAR'
export const CHANGE_SIDEBAR_MODE = 'CHANGE_SIDEBAR_MODE'

// Match store keys
export const SIDEBAR_CENSUS_TRACT_INFO = 'censusTracts'
export const SIDEBAR_BUILDING_INFO = 'buildings'
export const SIDEBAR_VIOLATION_INFO = 'violations'
export const SIDEBAR_SERVICE_CALL_INFO = 'serviceCalls'
export const SIDEBAR_SERVICE_CALL_OPEN_INFO = 'serviceCalls'
export const SIDEBAR_SALE_INFO = 'sales'

export const allLayersLoaded = event => ({
  type: ALL_LAYERS_LOADED
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
