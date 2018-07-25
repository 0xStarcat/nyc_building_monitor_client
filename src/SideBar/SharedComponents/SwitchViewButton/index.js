import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeSidebarScope, changeSidebarView } from '../../../Store/AppState/actions'

export class SwitchViewButton extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick(event) {
    if (this.props.disabled) return null
    if (this.props.scopeSwitch) this.props.dispatch(changeSidebarScope(this.props.scopeSwitch))
    if (this.props.viewSwitch) this.props.dispatch(changeSidebarView(this.props.viewSwitch))
  }

  render() {
    return (
      <div className={`button switch-view-button hover-shadow ${this.props.className}`} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
}

SwitchViewButton.propTypes = {
  disabled: PropTypes.bool,
  scopeSwitch: PropTypes.string,
  viewSwitch: PropTypes.string
}

export default connect()(SwitchViewButton)
