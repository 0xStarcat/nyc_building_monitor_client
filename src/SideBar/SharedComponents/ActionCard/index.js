import React from 'react'
import PropTypes from 'prop-types'

import { RightArrow } from '../../../SharedStyles/icons'

import './style.scss'

const ActionCard = props => {
  return (
    <div className={`card action-card ${props.className ? props.className : ''}`}>
      <div className="action-card-children">{props.children}</div>
      <i>
        <RightArrow />
      </i>
    </div>
  )
}

ActionCard.propTypes = {}

export default ActionCard
