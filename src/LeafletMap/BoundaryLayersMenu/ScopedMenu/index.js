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
  BASE_LAYER_BOUNDARY_BLANK,
  BASE_LAYER_BOUNDARY_MEDIAN_INCOME,
  BASE_LAYER_BOUNDARY_MEDIAN_RENT,
  BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE,
  BASE_LAYER_BOUNDARY_WHITE_POPULATION,
  BASE_LAYER_BOUNDARY_OPEN_311,
  BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311,
  SCOPE_NEIGHBORHOODS,
  onRegionClick
} from '../../../Store/AppState/actions'

const { BaseLayer, Overlay } = LayersControl

const ScopedMenu = props => {
  const onClick = event => {
    props.setViewCoordinates(
      event.target.feature.properties.representativePoint,
      props.baseLayerScope === SCOPE_NEIGHBORHOODS ? 14 : 15
    )
    props.dispatch(onRegionClick(event))
  }

  const getLayer = () => {
    switch (props.baseLayer) {
      case BASE_LAYER_BOUNDARY_BLANK:
        return (
          <BaseLayer checked name="Blank">
            <GeoJsonBoundaryGroup
              checked
              onClick={onClick}
              onLoad={props.layerLoaded}
              interactive={true}
              features={props.features}
              style={boundaryStyle}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BOUNDARY_MEDIAN_INCOME:
        return (
          <BaseLayer checked name="Median Income, 2017">
            <GeoJsonBoundaryGroup
              onClick={onClick}
              onLoad={props.layerLoaded}
              interactive={true}
              features={props.features}
              style={incomeMedianLayerStyle}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BOUNDARY_MEDIAN_RENT:
        return (
          <BaseLayer checked name="Median Rent, 2017">
            <GeoJsonBoundaryGroup
              onClick={onClick}
              onLoad={props.layerLoaded}
              interactive={true}
              features={props.features}
              style={rentMedianLayerStyle}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE:
        return (
          <BaseLayer checked name="Rent Change, 2011 - 2017">
            <GeoJsonBoundaryGroup
              onClick={onClick}
              onLoad={props.layerLoaded}
              interactive={true}
              features={props.features}
              style={rentChangeLayerStyle}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BOUNDARY_WHITE_POPULATION:
        return (
          <BaseLayer checked name="% White 2010">
            <GeoJsonBoundaryGroup
              onClick={onClick}
              onLoad={props.layerLoaded}
              interactive={true}
              features={props.features}
              style={racePercentWhite2010}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BOUNDARY_OPEN_311:
        return (
          <BaseLayer checked name="Percent Service Calls Open 1 Month">
            <GeoJsonBoundaryGroup
              onClick={onClick}
              onLoad={props.layerLoaded}
              interactive={true}
              features={props.features}
              style={serviceCallsPercentOpenOneMonth}
            />
          </BaseLayer>
        )
      case BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311:
        return (
          <BaseLayer checked name="Percent Service Calls Open 1 Month">
            <GeoJsonBoundaryGroup
              onClick={onClick}
              onLoad={props.layerLoaded}
              interactive={true}
              features={props.features}
              style={averageDaysToResolveServiceCalls}
            />
          </BaseLayer>
        )
      default:
        return null
    }
  }
  return (
    <LayersControl collapsed={true} ref={props.layerControlRef} position="topright">
      <Overlay checked name="Street and Landmark Labels">
        <Pane style={{ zIndex: 430 }}>
          <TileLayer
            onLoad={props.tileLayerLoadComplete}
            url="https://api.mapbox.com/styles/v1/starcat/cjkan2o8a5k1m2ro6esamupjc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3RhcmNhdCIsImEiOiJjamlpYmlsc28wbjlmM3FwbXdwaXozcWEzIn0.kLmWiUbmdqNLA1atmnTXXA"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
        </Pane>
      </Overlay>
      {getLayer()}
    </LayersControl>
  )
}

ScopedMenu.propTypes = {
  baseLayer: PropTypes.string,
  baseLayerScope: PropTypes.string,
  dispatch: PropTypes.func,
  features: PropTypes.array,
  setViewCoordinates: PropTypes.func,
  tileLayerLoadComplete: PropTypes.func,
  layerControlRef: PropTypes.object,
  layerLoaded: PropTypes.func
}

export default ScopedMenu
