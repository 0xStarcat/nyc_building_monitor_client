import React from 'react'
import PropTypes from 'prop-types'
import { SIDEBAR_STATE_ACTIVE, deactivateSidebar, activateSidebar } from '../../../Store/AppState/actions'

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

    if (this.props.appState.landscapeOrientation) {
      value += this.props.appState.sidebarState === SIDEBAR_STATE_ACTIVE ? 'hide-button' : 'show-button'
    } else {
      value += this.props.appState.sidebarState === SIDEBAR_STATE_ACTIVE ? ' control-button' : 'hidden'
    }

    return value
  }

  buttonAction() {
    return this.props.appState.sidebarState === SIDEBAR_STATE_ACTIVE ? this.collapseSidebar : this.activateSidebar
  }

  buttonText() {
    return this.props.appState.sidebarState === SIDEBAR_STATE_ACTIVE ? 'X Hide' : 'Open Controls'
  }

  render() {
    return (
      <div
        className={`button toggle-button-container toggle-button ${this.buttonClassName()}`}
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
