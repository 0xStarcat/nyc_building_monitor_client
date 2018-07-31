import React from 'react'
import PropTypes from 'prop-types'
import SwitchLayerButton from '../SharedComponents/SwitchLayerButton'
import ButtonRow from '../../SharedComponents/ButtonRow'
import IconProfile from '../SharedComponents/IconProfile'

import {
  changeBaseLayerScope,
  switchScopeWithFetch,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS
} from '../../Store/AppState/actions'

import { NeighborhoodIcon, CensusTractIcon } from '../../SharedStyles/icons'

export default class BoundaryScopeButtons extends React.Component {
  constructor(props) {
    super(props)

    this.switchScopeWithFetch = this.switchScopeWithFetch.bind(this)
  }

  switchScopeWithFetch(scope) {
    this.props.dispatch(changeBaseLayerScope(scope))
    this.props.dispatch(switchScopeWithFetch(scope))
  }

  render() {
    return (
      <div className="boundary-scope-buttons">
        <ButtonRow>
          <SwitchLayerButton
            action={this.switchScopeWithFetch}
            active={this.props.sidebarScope === SCOPE_NEIGHBORHOODS}
            dispatch={this.props.dispatch}
            layer={SCOPE_NEIGHBORHOODS}
          >
            <IconProfile className="button-row-child" icon={NeighborhoodIcon} label="Neighborhoods" />
          </SwitchLayerButton>
          <SwitchLayerButton
            action={this.switchScopeWithFetch}
            active={this.props.sidebarScope === SCOPE_CENSUS_TRACTS}
            dispatch={this.props.dispatch}
            layer={SCOPE_CENSUS_TRACTS}
          >
            <IconProfile className="button-row-child" icon={CensusTractIcon} label="Census Tracts" />
          </SwitchLayerButton>
        </ButtonRow>
      </div>
    )
  }
}

BoundaryScopeButtons.propTypes = {
  dispatch: PropTypes.func,
  sidebarScope: PropTypes.string
}
