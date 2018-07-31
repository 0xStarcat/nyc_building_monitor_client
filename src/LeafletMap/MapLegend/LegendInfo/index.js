import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const LegendInfo = props => {
  const getText = () => {
    if (props.landscapeOrientation) {
      return props.legendScopeBoundaries
        ? 'Load region details from the sidebar menu.'
        : 'Tap on a region to load its buildings.'
    } else {
      return props.legendScopeBoundaries
        ? "Tap 'Map Details' and choose a region detail"
        : 'Tap on a region to load its buildings.'
    }
  }
  return (
    <div className="legend-group">
      <div className="legend-info">{getText()}</div>
    </div>
  )
}

LegendInfo.propTypes = {
  dispatch: PropTypes.func,
  landscapeOrientation: PropTypes.bool,
  legendScopeBoundaries: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    landscapeOrientation: state.appState.landscapeOrientation,
    legendScopeBoundaries: state.appState.legendScopeBoundaries
  }
}

export default connect(mapStateToProps)(LegendInfo)
