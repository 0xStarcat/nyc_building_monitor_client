import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeSidebarMode } from '../../../../Store/AppState/actions'

export class SwitchViewButton extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick(event) {
    this.props.dispatch(changeSidebarMode(this.props.viewSwitch))
  }

  render() {
    return (
      <div className="switch-view-button hover-shadow" onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
}

SwitchViewButton.propTypes = {
  viewSwitch: PropTypes.string
}

export default connect()(SwitchViewButton)