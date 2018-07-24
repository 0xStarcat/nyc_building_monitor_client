import React from 'react'
import PropTypes from 'prop-types'
import { deactivateSidebar, activateSidebar } from '../../../Store/AppState/actions'

import './style.scss'

export default class ControlToggleButton extends React.Component {
  constructor(props) {
    super(props)

    this.collapseSidebar = this.collapseSidebar.bind(this)
    this.activateSidebar = this.activateSidebar.bind(this)
    this.buttonClassName = this.buttonClassName.bind(this)
    this.buttonAction = this.buttonAction.bind(this)
    this.buttonText = this.buttonText.bind(this)
  }

  activateSidebar() {
    this.props.dispatch(activateSidebar())
  }

  collapseSidebar() {
    this.props.dispatch(deactivateSidebar())
  }

  buttonClassName() {
    let value = ''

    value += this.props.appState.sidebarActive ? 'hide-button' : 'show-button'
    value += this.props.appState.sidebarActive && !this.props.appState.landscapeOrientation ? ' control-button' : ''

    return value
  }

  buttonAction() {
    return this.props.appState.sidebarActive ? this.collapseSidebar : this.activateSidebar
  }

  buttonText() {
    return this.props.appState.sidebarActive ? 'X Hide' : 'Open Controls'
  }

  render() {
    return (
      <div
        className={`toggle-button-container toggle-button sidebar-button ${this.buttonClassName()}`}
        onClick={this.buttonAction()}
      >
        {this.buttonText()}
      </div>
    )
  }
}

ControlToggleButton.propTypes = {
  appState: PropTypes.object
}
