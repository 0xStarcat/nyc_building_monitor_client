import { readCensusTracts, selectNewSelectedCTObject } from '../../CensusTracts/actions'
import { readNeighborhoods, selectNewSelectedNeighborhoodObject } from '../../Neighborhoods/actions'
import { readBuildingsByScope } from '../../Buildings/actions'

import store from '../../store'

export const CHECK_ORIENTATION = 'CHECK_ORIENTATION'
export const ALL_LAYERS_LOADED = 'ALL_LAYERS_LOADED'
export const ACTIVATE_SIDEBAR = 'ACTIVATE_SIDEBAR'
export const DEACTIVATE_SIDEBAR = 'DEACTIVATE_SIDEBAR'
export const PREVIEW_SIDEBAR = 'PREVIEW_SIDEBAR'

export const CHANGE_SIDEBAR_STATE = 'CHANGE_SIDEBAR_STATE'
export const CHANGE_BASE_LAYER_SCOPE = 'CHANGE_BASE_LAYER_SCOPE'
export const CHANGE_SIDEBAR_SCOPE = 'CHANGE_SIDEBAR_SCOPE'
export const CHANGE_SIDEBAR_VIEW = 'CHANGE_SIDEBAR_VIEW'
export const CHANGE_BASE_LAYER = 'CHANGE_BASE_LAYER'
export const CHANGE_BUILDING_BASE_LAYER = 'CHANGE_BUILDING_BASE_LAYER'
export const CHANGE_INFORMATION_CONTENT_CODE = 'CHANGE_INFORMATION_CONTENT_CODE'
export const SET_LEGEND_SCOPE_BOUNDARIES = 'SET_LEGEND_SCOPE_BOUNDARIES'
export const SET_LEGEND_SCOPE_BUILDINGS = 'SET_LEGEND_SCOPE_BUILDINGS'
export const OPEN_LEGEND = 'OPEN_LEGEND'
export const CLOSE_LEGEND = 'CLOSE_LEGEND'

// Sidebar States
export const SIDEBAR_STATE_INACTIVE = 'SIDEBAR_STATE_INACTIVE'
export const SIDEBAR_STATE_PREVIEW = 'SIDEBAR_STATE_PREVIEW'
export const SIDEBAR_STATE_ACTIVE = 'SIDEBAR_STATE_ACTIVE'

// Views
export const SIDEBAR_VIEW_LINKS_MENU = 'SIDEBAR_VIEW_LINKS_MENU'
export const SIDEBAR_VIEW_MAP_DETAILS_MENU = 'SIDEBAR_VIEW_MAP_DETAILS_MENU'
export const SIDEBAR_VIEW_SELECTED_OBJECT = 'SIDEBAR_VIEW_SELECTED_OBJECT'
export const SIDEBAR_VIEW_SCOPED_OBJECTS = 'SIDE_VIEW_SCOPED_OBJECT'
export const SIDEBAR_VIEW_INFORMATION = 'SIDEBAR_VIEW_INFORMATION'

// Scopes
export const SCOPE_NEIGHBORHOODS = 'neighborhoods'
export const SCOPE_CENSUS_TRACTS = 'censusTracts'
export const SCOPE_BUILDINGS = 'buildings'
export const SCOPE_VIOLATIONS = 'violations'
export const SCOPE_SERVICE_CALLS = 'serviceCalls'

// BaseLayers
export const BASE_LAYER_BOUNDARY_BLANK = 'BASE_LAYER_BOUNDARY_BLANK'
export const BASE_LAYER_BOUNDARY_MEDIAN_INCOME = 'BASE_LAYER_BOUNDARY_MEDIAN_INCOME'
export const BASE_LAYER_BOUNDARY_MEDIAN_RENT = 'BASE_LAYER_BOUNDARY_MEDIAN_RENT'
export const BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE = 'BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE'
export const BASE_LAYER_BOUNDARY_WHITE_POPULATION = 'BASE_LAYER_BOUNDARY_WHITE_POPULATION'
export const BASE_LAYER_BOUNDARY_OPEN_311 = 'BASE_LAYER_BOUNDARY_OPEN_311'
export const BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311 = 'BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311'
export const BASE_LAYER_BUILDING_CATEGORIES = 'BASE_LAYER_BUILDING_CATEGORIES'
export const BASE_LAYER_BUILDING_TOTAL_VIOLATIONS = 'BASE_LAYER_BUILDING_TOTAL_VIOLATIONS'
export const BASE_LAYER_BUILDING_OPEN_311 = 'BASE_LAYER_BUILDING_OPEN_311'
export const BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311 = 'BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311'

export const checkOrientation = event => ({
  type: CHECK_ORIENTATION
})

export const allLayersLoaded = event => ({
  type: ALL_LAYERS_LOADED
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

export const changeInformationContentCode = event => ({
  type: CHANGE_INFORMATION_CONTENT_CODE,
  data: event
})

export const setLegendScopeBoundaries = () => ({
  type: SET_LEGEND_SCOPE_BOUNDARIES
})

export const setLegendScopeBuildings = () => ({
  type: SET_LEGEND_SCOPE_BUILDINGS
})

export const openLegend = () => ({
  type: OPEN_LEGEND
})

export const closeLegend = () => ({
  type: CLOSE_LEGEND
})

export const openInformationBox = event => dispatch => {
  dispatch(changeInformationContentCode(event))
  dispatch(changeSidebarView(SIDEBAR_VIEW_INFORMATION))
  dispatch(activateSidebar())
}

export const openBoundaryLayerMenu = event => dispatch => {
  dispatch(changeSidebarView(SIDEBAR_VIEW_MAP_DETAILS_MENU))
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

const getSelectedObjectFunction = event => {
  switch (store.getState().appState.baseLayerScope) {
    case SCOPE_NEIGHBORHOODS:
      return selectNewSelectedNeighborhoodObject(event.target.feature.properties)
    default:
      return selectNewSelectedCTObject(event.target.feature.properties)
  }
}

export const onRegionClick = event => dispatch => {
  const layerProperties = event.target.feature.properties
  const selectedObject = (store.getState()[store.getState().appState.baseLayerScope] || {}).selectedObject
  dispatch(setLegendScopeBuildings())
  dispatch(openLegend())
  if (!store.getState().appState.buildingBaseLayer) dispatch(changeBuildingBaseLayer(BASE_LAYER_BUILDING_CATEGORIES))
  dispatch(changeSidebarScope(store.getState().appState.baseLayerScope))
  dispatch(changeSidebarView(SIDEBAR_VIEW_SELECTED_OBJECT))
  dispatch(store.getState().appState.landscapeOrientation ? activateSidebar : previewSidebar)
  if (layerProperties.id !== (selectedObject || {}).id) {
    dispatch(readBuildingsByScope(store.getState().appState.baseLayerScope, layerProperties.id))
  }
  dispatch(getSelectedObjectFunction(event))
}
