import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { setLegendScopeBoundaries, setLegendScopeBuildings } from '../../../Store/AppState/actions'

const LegendScopeToggle = props => {
  const openRegionLegend = () => {
    props.dispatch(setLegendScopeBoundaries())
  }

  const openBuildingLegend = () => {
    props.dispatch(setLegendScopeBuildings())
  }
  return (
    <div className="legend-scope-toggle">
      <div
        onClick={openRegionLegend}
        className={classNames('legend-button', { disabled: !props.legendScopeBoundaries })}
      >
        Regions
      </div>
      <div
        onClick={openBuildingLegend}
        className={classNames('legend-button', { disabled: props.legendScopeBoundaries })}
      >
        Buildings
      </div>
    </div>
  )
}

LegendScopeToggle.propTypes = {
  dispatch: PropTypes.func,
  legendScopeBoundaries: PropTypes.bool
}

export default LegendScopeToggle
