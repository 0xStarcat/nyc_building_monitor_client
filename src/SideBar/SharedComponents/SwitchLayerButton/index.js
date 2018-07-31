import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const SwitchLayerButton = props => {
  const switchLayer = () => {
    props.action(props.layer)
  }
  return (
    <div
      className={classNames('button', 'layer-menu-button', { 'active-button': props.active }, props.className)}
      onClick={switchLayer}
    >
      {React.Children.map(props.children, child => {
        if (typeof child === 'object')
          return React.cloneElement(child, { active: props.active, disabled: props.disabled })
        else return child
      })}
    </div>
  )
}

SwitchLayerButton.propTypes = {
  action: PropTypes.func,
  active: PropTypes.bool,
  buttonText: PropTypes.string,
  layer: PropTypes.string
}

export default SwitchLayerButton
