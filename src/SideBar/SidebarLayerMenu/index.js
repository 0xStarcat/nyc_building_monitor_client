import React from 'react'
import PropTypes from 'prop-types'
import LayerMenuButton from './LayerMenuButton'

export default class SidebarLayerMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="sidebar-layer-menu">
        <LayerMenuButton buttonText="Hello" />
      </div>
    )
  }
}

SidebarLayerMenu.propTypes = {}
