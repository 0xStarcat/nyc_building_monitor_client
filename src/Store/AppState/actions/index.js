import { readCensusTracts } from '../../CensusTracts/actions'
import { readNeighborhoods } from '../../Neighborhoods/actions'

export const CHECK_ORIENTATION = 'CHECK_ORIENTATION'
export const ALL_LAYERS_LOADED = 'ALL_LAYERS_LOADED'
export const CHANGE_ZOOM_LEVEL = 'CHANGE_ZOOM_LEVEL'
export const ACTIVATE_SIDEBAR = 'ACTIVATE_SIDEBAR'
export const DEACTIVATE_SIDEBAR = 'DEACTIVATE_SIDEBAR'
export const PREVIEW_SIDEBAR = 'PREVIEW_SIDEBAR'

export const CHANGE_SIDEBAR_STATE = 'CHANGE_SIDEBAR_STATE'
export const CHANGE_BASE_LAYER_SCOPE = 'CHANGE_BASE_LAYER_SCOPE'
export const CHANGE_SIDEBAR_SCOPE = 'CHANGE_SIDEBAR_SCOPE'
export const CHANGE_SIDEBAR_VIEW = 'CHANGE_SIDEBAR_VIEW'
export const CHANGE_BASE_LAYER = 'CHANGE_BASE_LAYER'
export const CHANGE_BUILDING_BASE_LAYER = 'CHANGE_BUILDING_BASE_LAYER'

// Sidebar States
export const SIDEBAR_STATE_INACTIVE = 'SIDEBAR_STATE_INACTIVE'
export const SIDEBAR_STATE_PREVIEW = 'SIDEBAR_STATE_PREVIEW'
export const SIDEBAR_STATE_ACTIVE = 'SIDEBAR_STATE_ACTIVE'

// Views
export const SIDEBAR_VIEW_SCOPE_MENU = 'SIDEBAR_VIEW_SCOPE_MENU'
export const SIDEBAR_VIEW_BOUNDARY_LAYER_MENU = 'SIDEBAR_VIEW_BOUNDARY_LAYER_MENU'
export const SIDEBAR_VIEW_BUILDING_LAYER_MENU = 'SIDEBAR_VIEW_BUILDING_LAYER_MENU'
export const SIDEBAR_VIEW_SCOPED_OBJECTS = 'SIDE_VIEW_SCOPED_OBJECTS'
export const SIDEBAR_VIEW_SCOPED_OBJECT = 'SIDE_VIEW_SCOPED_OBJECT'

// Scopes
export const SCOPE_NEIGHBORHOODS = 'neighborhoods'
export const SCOPE_CENSUS_TRACTS = 'censusTracts'
export const SCOPE_BUILDINGS = 'buildings'
export const SCOPE_VIOLATIONS = 'violations'
export const SCOPE_SERVICE_CALLS = 'serviceCalls'

// BaseLayers
export const BASE_LAYER_MEDIAN_INCOME = 'BASE_LAYER_MEDIAN_INCOME'
export const BASE_LAYER_MEDIAN_RENT = 'BASE_LAYER_MEDIAN_RENT'
export const BASE_LAYER_MEDIAN_RENT_CHANGE = 'BASE_LAYER_MEDIAN_RENT_CHANGE'
export const BASE_LAYER_WHITE_POPULATION = 'BASE_LAYER_WHITE_POPULATION'
export const BASE_LAYER_OPEN_311 = 'BASE_LAYER_OPEN_311'
export const BASE_LAYER_BUILDING_CATEGORIES = 'BASE_LAYER_BUILDING_CATEGORIES'
export const BASE_LAYER_TOTAL_VIOLATIONS = 'BASE_LAYER_TOTAL_VIOLATIONS'
export const BASE_LAYER_TOTAL_BUILDING_OPEN_311 = 'BASE_LAYER_TOTAL_BUILDING_OPEN_311'

export const checkOrientation = event => ({
  type: CHECK_ORIENTATION
})

export const allLayersLoaded = event => ({
  type: ALL_LAYERS_LOADED
})

export const changeZoomLevel = event => ({
  type: CHANGE_ZOOM_LEVEL,
  data: event
})

export const activateSidebar = event => ({
  type: ACTIVATE_SIDEBAR
})

export const previewSidebar = event => ({
  type: PREVIEW_SIDEBAR
})

export const changeSidebarState = event => ({
  type: CHANGE_SIDEBAR_STATE,
  data: event
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

export const changeBaseLayer = event => ({
  type: CHANGE_BASE_LAYER,
  data: event
})

export const changeBaseLayerScope = event => ({
  type: CHANGE_BASE_LAYER_SCOPE,
  data: event
})

export const changeBuildingBaseLayer = event => ({
  type: CHANGE_BUILDING_BASE_LAYER,
  data: event
})

export const openBoundaryLayerMenu = event => dispatch => {
  dispatch(changeSidebarView(SIDEBAR_VIEW_BOUNDARY_LAYER_MENU))
  dispatch(previewSidebar())
}

export const openPortraitBuildingLayerMenu = event => dispatch => {
  dispatch(changeSidebarView(SIDEBAR_VIEW_BUILDING_LAYER_MENU))
  dispatch(previewSidebar())
}

export const openLandscapeBuildingLayerMenu = event => dispatch => {
  dispatch(changeSidebarView(SIDEBAR_VIEW_BUILDING_LAYER_MENU))
  dispatch(activateSidebar())
}

export const openScopeMenu = event => dispatch => {
  dispatch(changeSidebarView(SIDEBAR_VIEW_SCOPE_MENU))
  dispatch(previewSidebar())
}

export const switchScopeWithFetch = event => dispatch => {
  const fetchMethod = () => {
    switch (event) {
      case SCOPE_NEIGHBORHOODS:
        return readNeighborhoods
      case SCOPE_CENSUS_TRACTS:
        return readCensusTracts
    }
  }
  dispatch(changeSidebarScope(event))
  dispatch(fetchMethod()())
}
