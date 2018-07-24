import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeSidebarScope } from '../../../Store/AppState/actions'

export class SwitchViewButton extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick(event) {
    this.props.dispatch(changeSidebarScope(this.props.viewSwitch))
  }

  render() {
    return (
      <div className={`switch-view-button hover-shadow ${this.props.className}`} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
}

SwitchViewButton.propTypes = {
  viewSwitch: PropTypes.string
}

export default connect()(SwitchViewButton)
