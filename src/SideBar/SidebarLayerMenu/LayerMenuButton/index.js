import React from 'react'
import PropTypes from 'prop-types'

export default class LayerMenuButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="layer-menu-button">{this.props.buttonText}</div>
  }
}

LayerMenuButton.propTypes = {
  buttonText: PropTypes.string
}
