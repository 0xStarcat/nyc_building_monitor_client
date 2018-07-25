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
  neighborhoodBoundaryStyle
} from '../../GeoJsonStyles'

import {
  allLayersLoaded,
  activateSidebar,
  previewSidebar,
  BASE_LAYER_MEDIAN_INCOME,
  BASE_LAYER_MEDIAN_RENT,
  BASE_LAYER_MEDIAN_RENT_CHANGE,
  BASE_LAYER_WHITE_POPULATION,
  BASE_LAYER_OPEN_311
} from '../../../Store/AppState/actions'

const { BaseLayer, Overlay } = LayersControl

const ScropedMenu = props => {
  return (
    <LayersControl collapsed={true} ref={props.layerControlRef} position={props.position}>
      {/*<Overlay ref={props.neighborhoodOverlayRef} checked name="Neighborhood Boundaries">
          <Pane style={{ zIndex: 400 }}>
            <GeoJsonBoundaryGroup

              onLoad={props.layerLoaded}
              features={props.store.neighborhoods.features}
              interactive={false}
              scope={props.appState.baseLayerScope}
              style={neighborhoodBoundaryStyle}
            />
          </Pane>
        </Overlay>*/}
      <Overlay checked name="Street and Landmark Labels">
        <Pane style={{ zIndex: 410 }}>
          <TileLayer
            onLoad={props.tileLayerLoadComplete}
            url="https://api.mapbox.com/styles/v1/starcat/cjjm9p2z85m3j2rme8ectwukv/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3RhcmNhdCIsImEiOiJjamlpYmlsc28wbjlmM3FwbXdwaXozcWEzIn0.kLmWiUbmdqNLA1atmnTXXA"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
        </Pane>
      </Overlay>
      <BaseLayer checked={props.appState.baseLayer === BASE_LAYER_MEDIAN_INCOME} name="Median Income, 2017">
        <GeoJsonBoundaryGroup
          sidebarAction={props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
          setViewCoordinates={props.setViewCoordinates}
          onLoad={props.layerLoaded}
          interactive={true}
          scope={props.appState.baseLayerScope}
          features={props.features}
          style={incomeMedianLayerStyle}
        />
      </BaseLayer>
      <BaseLayer checked={props.appState.baseLayer === BASE_LAYER_MEDIAN_RENT} name="Median Rent, 2017">
        <GeoJsonBoundaryGroup
          sidebarAction={props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
          setViewCoordinates={props.setViewCoordinates}
          onLoad={props.layerLoaded}
          interactive={true}
          scope={props.appState.baseLayerScope}
          features={props.features}
          style={rentMedianLayerStyle}
        />
      </BaseLayer>
      <BaseLayer checked={props.appState.baseLayer === BASE_LAYER_MEDIAN_RENT_CHANGE} name="Rent Change, 2011 - 2017">
        <GeoJsonBoundaryGroup
          sidebarAction={props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
          setViewCoordinates={props.setViewCoordinates}
          onLoad={props.layerLoaded}
          interactive={true}
          scope={props.appState.baseLayerScope}
          features={props.features}
          style={rentChangeLayerStyle}
        />
      </BaseLayer>
      <BaseLayer checked={props.appState.baseLayer === BASE_LAYER_WHITE_POPULATION} name="% White 2010">
        <GeoJsonBoundaryGroup
          sidebarAction={props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
          setViewCoordinates={props.setViewCoordinates}
          onLoad={props.layerLoaded}
          interactive={true}
          scope={props.appState.baseLayerScope}
          features={props.features}
          style={racePercentWhite2010}
        />
      </BaseLayer>
      <BaseLayer checked={props.appState.baseLayer === BASE_LAYER_OPEN_311} name="Percent Service Calls Open 1 Month">
        <GeoJsonBoundaryGroup
          sidebarAction={props.appState.landscapeOrientation ? activateSidebar : previewSidebar}
          setViewCoordinates={props.setViewCoordinates}
          onLoad={props.layerLoaded}
          interactive={true}
          scope={props.appState.baseLayerScope}
          features={props.features}
          style={serviceCallsPercentOpenOneMonth}
        />
      </BaseLayer>
    </LayersControl>
  )
}

ScropedMenu.propTypes = {
  appState: PropTypes.object,
  features: PropTypes.array,
  position: PropTypes.string,
  setViewCoordinates: PropTypes.func,
  tileLayerLoadComplete: PropTypes.func,
  layerControlRef: PropTypes.object,
  layerLoaded: PropTypes.func
}

export default ScropedMenu
