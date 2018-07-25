import React from 'react'
import PropTypes from 'prop-types'
import SwitchSidebarStateButton from '../../SharedComponents/SwitchSidebarStateButton'

import { SIDEBAR_STATE_ACTIVE, deactivateSidebar, activateSidebar } from '../../../Store/AppState/actions'

import './style.scss'

export default class ControlToggleButton extends React.Component {
  constructor(props) {
    super(props)

    this.buttonClassName = this.buttonClassName.bind(this)
    this.buttonAction = this.buttonAction.bind(this)
    this.buttonText = this.buttonText.bind(this)
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
    return this.props.appState.sidebarState === SIDEBAR_STATE_ACTIVE ? deactivateSidebar : activateSidebar
  }

  buttonText() {
    return this.props.appState.sidebarState === SIDEBAR_STATE_ACTIVE ? 'X Hide' : 'Open Controls'
  }

  render() {
    return (
      <SwitchSidebarStateButton
        action={this.buttonAction()}
        className={`toggle-button-container toggle-button ${this.buttonClassName()}`}
      >
        {this.buttonText()}
      </SwitchSidebarStateButton>
    )
  }
}

ControlToggleButton.propTypes = {
  appState: PropTypes.object
}
