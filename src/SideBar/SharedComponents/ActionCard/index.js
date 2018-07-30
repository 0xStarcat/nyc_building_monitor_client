import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { RightArrow } from '../../../SharedStyles/icons'

import './style.scss'

const ActionCard = props => {
  return (
    <div className={classNames('card', 'action-card', props.className)}>
      <div className="action-card-children">{props.children}</div>
      <i>
        <RightArrow />
      </i>
    </div>
  )
}

ActionCard.propTypes = {
  className: PropTypes.string
}

export default ActionCard
