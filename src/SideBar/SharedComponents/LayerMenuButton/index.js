import React from 'react'
import PropTypes from 'prop-types'

const LayerMenuButton = props => {
  const switchLayer = () => {
    props.action(props.layer)
  }
  return (
    <div className="button layer-menu-button" onClick={switchLayer}>
      {props.buttonText}
    </div>
  )
}

LayerMenuButton.propTypes = {
  action: PropTypes.func,
  buttonText: PropTypes.string,
  layer: PropTypes.string
}

export default LayerMenuButton
