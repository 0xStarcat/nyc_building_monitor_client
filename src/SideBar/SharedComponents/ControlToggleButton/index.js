import React from 'react'
import PropTypes from 'prop-types'
import DispatchActionButton from '../../SharedComponents/DispatchActionButton'
import IconProfile from '../../SharedComponents/IconProfile'
import { OpenIcon, CloseIcon } from '../../../SharedStyles/icons'

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
      value += this.props.appState.sidebarState === SIDEBAR_STATE_ACTIVE ? '' : 'hidden'
    }
    return value
  }

  buttonAction() {
    return this.props.appState.sidebarState === SIDEBAR_STATE_ACTIVE ? deactivateSidebar : activateSidebar
  }

  buttonText() {
    return this.props.appState.sidebarState === SIDEBAR_STATE_ACTIVE ? '' : 'Open'
  }

  render() {
    return (
      <DispatchActionButton
        action={this.buttonAction()}
        className={`toggle-button-container toggle-button ${this.buttonClassName()}`}
      >
        <IconProfile icon={this.props.appState.sidebarState === SIDEBAR_STATE_ACTIVE ? CloseIcon : OpenIcon}>
          {this.buttonText()}
        </IconProfile>
      </DispatchActionButton>
    )
  }
}

ControlToggleButton.propTypes = {
  appState: PropTypes.object
}
