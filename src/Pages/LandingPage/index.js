import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

import { SpacerSvg1, SpacerSvg2, SpacerSvg3, SpacerSvg4 } from '../../SharedStyles/icons'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-header-bar">
        <div className="landing-header-bar-wrapper">
          <div className="landing-header-link-menu">
            <Link to="/">Map</Link>
            <Link to="/story">Story</Link>
            <Link to="/support">Support</Link>
            <Link to="#update">Last Update</Link>
            <Link to="#about">About</Link>
            <Link to="#goals">Goals</Link>
          </div>
          <div className="landing-header-title-wrapper">
            <h1 className="landing-header-title">NYC Building Monitor</h1>
          </div>
        </div>
      </div>
      <div className="landing-spacer">
        <SpacerSvg2 />
      </div>
      <div className="landing-main-picture-wrapper">
        <img src="./images/bedstuy-buildings.png" />
      </div>
      <div className="landing-spacer">
        <SpacerSvg4 />
      </div>
      <div className="text-content">
        <div className="content-title">
          <h5>About</h5>
        </div>
        <div className="content-body">This is a paragraph</div>
      </div>
      <div className="landing-spacer">
        <SpacerSvg3 />
      </div>
      <div className="text-content">
        <div className="content-title">
          <h5>Goals</h5>
        </div>
        <div className="content-body">This is a paragraph</div>
      </div>
      <div className="landing-spacer">
        <SpacerSvg1 />
      </div>
    </div>
  )
}

export default LandingPage
