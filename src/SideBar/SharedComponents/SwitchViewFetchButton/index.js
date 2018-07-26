import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeSidebarScope } from '../../../Store/AppState/actions'

import './style.scss'

export class SwitchViewFetchButton extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick(event) {
    this.props.dispatch(this.props.action())
    this.props.dispatch(changeSidebarScope(this.props.viewSwitch))
  }

  render() {
    return (
      <div className="switch-view-fetch-button button hover-shadow" onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
}

SwitchViewFetchButton.propTypes = {
  action: PropTypes.func,
  viewSwitch: PropTypes.string
}

export default connect()(SwitchViewFetchButton)
