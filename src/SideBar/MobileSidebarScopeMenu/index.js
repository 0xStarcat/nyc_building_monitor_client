import React from 'react'
import PropTypes from 'prop-types'
import LayerMenuButton from '../SharedComponents/LayerMenuButton'

import {
  changeBaseLayerScope,
  switchScopeWithFetch,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS
} from '../../Store/AppState/actions'

export default class MobileSidebarScopeMenu extends React.Component {
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
      <div className="mobile-sidebar-scope-menu">
        <LayerMenuButton
          action={this.switchScopeWithFetch}
          buttonText="Neighborhoods"
          dispatch={this.props.dispatch}
          layer={SCOPE_NEIGHBORHOODS}
        />
        <LayerMenuButton
          action={this.switchScopeWithFetch}
          buttonText="Census Tracts"
          dispatch={this.props.dispatch}
          layer={SCOPE_CENSUS_TRACTS}
        />
      </div>
    )
  }
}

MobileSidebarScopeMenu.propTypes = {
  dispatch: PropTypes.func
}
