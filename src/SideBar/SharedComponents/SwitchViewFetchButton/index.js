import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeSidebarScope, changeSidebarView } from '../../../Store/AppState/actions'

import './style.scss'

export class SwitchViewFetchButton extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.dispatch(this.props.action())
    this.props.dispatch(changeSidebarScope(this.props.scopeSwitch))
    this.props.dispatch(changeSidebarView(this.props.viewSwitch))
  }

  render() {
    return (
      <div className={classNames('button', 'switch-view-fetch-button', this.props.className)} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
}

SwitchViewFetchButton.propTypes = {
  action: PropTypes.func,
  scopeSwitch: PropTypes.string,
  viewSwitch: PropTypes.string
}

export default connect()(SwitchViewFetchButton)
