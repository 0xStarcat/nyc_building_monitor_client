import React from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'react-leaflet'

const CensusTractPopup = props => {
  return (
    <Popup>
      <div>
        Census Tract: {props.feature.properties.name}
        <br />
        Neighborhood: {props.feature.properties.neighborhood}
        <br />
        Median Income 2017: {props.feature.properties.incomeMedian2017}
        <br />
        Median Rent 2017: {props.feature.properties.rentMedian2017}
        <br />
        Median Rent Change 2011 - 2017: {props.feature.properties.rentChange20112017}
        <br />
        % White 2010: {props.feature.properties.racePercentWhite2010}
        <br />
        Total Buildings: {props.feature.properties.buildingsTotal}
        <br />
        Violation Per Bldg: {props.feature.properties.violationsPerBuilding}
        <br />
        Total Sales: {props.feature.properties.salesTotal}
        <br />
        Total Permits: {props.feature.properties.permitsTotal}
        <br />
        Service Calls Open after 1 month: {props.feature.properties.serviceCallsPercentOpenOneMonth}
      </div>
    </Popup>
  )
}

CensusTractPopup.propTypes = {
  feature: PropTypes.object
}

export default CensusTractPopup
