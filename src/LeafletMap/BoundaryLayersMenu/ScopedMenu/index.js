import React from 'react'
import PropTypes from 'prop-types'
import { LayersControl, TileLayer, Pane } from 'react-leaflet'
import GeoJsonBoundaryGroup from '../../GeoJsonBoundaryGroup'

import {
  incomeMedianLayerStyle,
  rentMedianLayerStyle,
  rentChangeLayerStyle,
  racePercentWhite2010,
  serviceCallsPercentOpenOneMonth,
  averageDaysToResolveServiceCalls,
  boundaryStyle
} from '../../GeoJsonBoundaryStyles'

import {
  activateSidebar,
  previewSidebar,
  openLegend,
  setLegendScopeBuildings,
  changeSidebarScope,
  changeSidebarView,
  changeBuildingBaseLayer,
  SIDEBAR_VIEW_SELECTED_OBJECT,
  BASE_LAYER_BUILDING_CATEGORIES,
  BASE_LAYER_BOUNDARY_BLANK,
  BASE_LAYER_BOUNDARY_MEDIAN_INCOME,
  BASE_LAYER_BOUNDARY_MEDIAN_RENT,
  BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE,
  BASE_LAYER_BOUNDARY_WHITE_POPULATION,
  BASE_LAYER_BOUNDARY_OPEN_311,
  BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS
} from '../../../Store/AppState/actions'

import { selectNewSelectedCTObject } from '../../../Store/CensusTracts/actions'
import { selectNewSelectedNeighborhoodObject } from '../../../Store/Neighborhoods/actions'
import { readBuildingsByScope } from '../../../Store/Buildings/actions'

const { BaseLayer, Overlay } = LayersControl

const ScopedMenu = props => {
  const getSelectedObjectFunction = event => {
    switch (props.baseLayerScope) {
      case SCOPE_NEIGHBORHOODS:
        return selectNewSelectedNeighborhoodObject(event.target.feature.properties)
      case SCOPE_CENSUS_TRACTS:
        return selectNewSelectedCTObject(event.target.feature.properties)
    }
  }
  const onClick = event => {
    const layerProperties = event.target.feature.properties
    props.setViewCoordinates(layerProperties.representativePoint, props.scope === SCOPE_NEIGHBORHOODS ? 14 : 15)
    props.dispatch(setLegendScopeBuildings())
    props.dispatch(openLegend())
    if (!props.buildingBaseLayer) props.dispatch(changeBuildingBaseLayer(BASE_LAYER_BUILDING_CATEGORIES))
    props.dispatch(changeSidebarScope(props.baseLayerScope))
    props.dispatch(changeSidebarView(SIDEBAR_VIEW_SELECTED_OBJECT))
    props.dispatch(props.landscapeOrientation ? activateSidebar : previewSidebar)
    if (layerProperties.id !== props.getSelectedObjectId()) {
      props.dispatch(readBuildingsByScope(props.baseLayerScope, layerProperties.id))
    }
    props.dispatch(getSelectedObjectFunction(event))
  }
  return (
    <LayersControl collapsed={true} ref={props.layerControlRef} position={props.position}>
      <Overlay checked name="Street and Landmark Labels">
        <Pane style={{ zIndex: 430 }}>
          <TileLayer
            onLoad={props.tileLayerLoadComplete}
            url="https://api.mapbox.com/styles/v1/starcat/cjk7pxxpx4f492rpemzfn2blk/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3RhcmNhdCIsImEiOiJjamlpYmlsc28wbjlmM3FwbXdwaXozcWEzIn0.kLmWiUbmdqNLA1atmnTXXA"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
        </Pane>
      </Overlay>
      <BaseLayer checked={props.baseLayer === BASE_LAYER_BOUNDARY_BLANK} name="Median Income, 2017">
        <GeoJsonBoundaryGroup
          onClick={onClick}
          onLoad={props.layerLoaded}
          interactive={true}
          features={props.features}
          style={boundaryStyle}
        />
      </BaseLayer>
      <BaseLayer checked={props.baseLayer === BASE_LAYER_BOUNDARY_MEDIAN_INCOME} name="Median Income, 2017">
        <GeoJsonBoundaryGroup
          onClick={onClick}
          onLoad={props.layerLoaded}
          interactive={true}
          features={props.features}
          style={incomeMedianLayerStyle}
        />
      </BaseLayer>
      <BaseLayer checked={props.baseLayer === BASE_LAYER_BOUNDARY_MEDIAN_RENT} name="Median Rent, 2017">
        <GeoJsonBoundaryGroup
          onClick={onClick}
          onLoad={props.layerLoaded}
          interactive={true}
          features={props.features}
          style={rentMedianLayerStyle}
        />
      </BaseLayer>
      <BaseLayer checked={props.baseLayer === BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE} name="Rent Change, 2011 - 2017">
        <GeoJsonBoundaryGroup
          onClick={onClick}
          onLoad={props.layerLoaded}
          interactive={true}
          features={props.features}
          style={rentChangeLayerStyle}
        />
      </BaseLayer>
      <BaseLayer checked={props.baseLayer === BASE_LAYER_BOUNDARY_WHITE_POPULATION} name="% White 2010">
        <GeoJsonBoundaryGroup
          onClick={onClick}
          onLoad={props.layerLoaded}
          interactive={true}
          features={props.features}
          style={racePercentWhite2010}
        />
      </BaseLayer>
      <BaseLayer checked={props.baseLayer === BASE_LAYER_BOUNDARY_OPEN_311} name="Percent Service Calls Open 1 Month">
        <GeoJsonBoundaryGroup
          onClick={onClick}
          onLoad={props.layerLoaded}
          interactive={true}
          features={props.features}
          style={serviceCallsPercentOpenOneMonth}
        />
      </BaseLayer>
      <BaseLayer
        checked={props.baseLayer === BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311}
        name="Percent Service Calls Open 1 Month"
      >
        <GeoJsonBoundaryGroup
          onClick={onClick}
          onLoad={props.layerLoaded}
          interactive={true}
          features={props.features}
          style={averageDaysToResolveServiceCalls}
        />
      </BaseLayer>
    </LayersControl>
  )
}

ScopedMenu.propTypes = {
  baseLayer: PropTypes.string,
  baseLayerScope: PropTypes.string,
  buildingBaseLayer: PropTypes.string,
  features: PropTypes.array,
  landscapeOrientation: PropTypes.bool,
  position: PropTypes.string,
  setViewCoordinates: PropTypes.func,
  getSelectedObjectId: PropTypes.func,
  tileLayerLoadComplete: PropTypes.func,
  layerControlRef: PropTypes.object,
  layerLoaded: PropTypes.func
}

export default ScopedMenu
