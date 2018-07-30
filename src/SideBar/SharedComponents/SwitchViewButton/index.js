import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeSidebarScope, changeSidebarView, changeSidebarState } from '../../../Store/AppState/actions'

export class SwitchViewButton extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    if (this.props.disabled) return null
    if (this.props.action) this.props.action()
    if (this.props.scopeSwitch) this.props.dispatch(changeSidebarScope(this.props.scopeSwitch))
    if (this.props.viewSwitch) this.props.dispatch(changeSidebarView(this.props.viewSwitch))
    if (this.props.stateSwitch) this.props.dispatch(changeSidebarState(this.props.stateSwitch))
  }

  render() {
    return (
      <div className={classNames('button', 'switch-view-button', this.props.className)} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
}

SwitchViewButton.propTypes = {
  disabled: PropTypes.bool,
  action: PropTypes.func,
  scopeSwitch: PropTypes.string,
  stateSwitch: PropTypes.string,
  viewSwitch: PropTypes.string
}

export default connect()(SwitchViewButton)
