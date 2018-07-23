import React from 'react'
import PropTypes from 'prop-types'
import { deactivateSidebar, activateSidebar } from '../../../Store/AppState/actions'

import './style.scss'

export default class ControlToggleButton extends React.Component {
  constructor(props) {
    super(props)

    this.collapseSidebar = this.collapseSidebar.bind(this)
    this.activateSidebar = this.activateSidebar.bind(this)
    this.buttonText = this.buttonText.bind(this)
  }

  activateSidebar() {
    this.props.dispatch(activateSidebar())
  }

  collapseSidebar() {
    this.props.dispatch(deactivateSidebar())
  }

  buttonText() {
    return this.props.sidebarActive ? 'X Hide' : 'Open Controls'
  }

  render() {
    return (
      <div>
        {this.props.sidebarActive ? (
          <button className="hide-button sidebar-button" onClick={this.collapseSidebar}>
            {this.buttonText()}
          </button>
        ) : (
          <button className="show-button sidebar-button" onClick={this.activateSidebar}>
            {this.buttonText()}
          </button>
        )}
      </div>
    )
  }
}

ControlToggleButton.propTypes = {
  sidebarActive: PropTypes.boolean
}
