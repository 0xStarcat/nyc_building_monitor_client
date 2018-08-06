import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { readLastUpdate } from '../../Store/Updates/actions'
import { convertTimestampToData } from '../../SharedUtilities/informationUtils.js'

import './style.scss'

import { SpacerSvg1, SpacerSvg2, SpacerSvg3, SpacerSvg4, HomeIcon } from '../../SharedStyles/icons'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)

    this.displayUpdateTable = this.displayUpdateTable.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(readLastUpdate())
  }

  displayUpdateTable() {
    if (this.props.updates.rows.length) {
      const lastUpdate = this.props.updates.rows[0]
      if (this.props.landScapeOrientation) {
        return (
          <div className="landing-update-table" id="update">
            <div className="landing-table-row">
              <div className="landing-table-header">Last Update</div>
              <div className="landing-table-header">New Violations</div>
              <div className="landing-table-header">New 311-calls</div>
              <div className="landing-table-header">Resolved Violations</div>
              <div className="landing-table-header">Resolved 311-calls</div>
            </div>
            <div className="landing-table-row">
              <div className="landing-table-cell">{convertTimestampToData(lastUpdate.date)}</div>
              <div className="landing-table-cell">{lastUpdate.newViolations}</div>
              <div className="landing-table-cell">{lastUpdate.newServiceCalls}</div>
              <div className="landing-table-cell">{lastUpdate.resolvedViolations}</div>
              <div className="landing-table-cell">{lastUpdate.resolvedServiceCalls}</div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="landing-update-table" id="update">
            <div className="landing-table-row">
              <div className="landing-table-header">Last Update</div>
              <div className="landing-table-cell">{convertTimestampToData(lastUpdate.date)}</div>
            </div>
            <div className="landing-table-row">
              <div className="landing-table-header">New Violations</div>
              <div className="landing-table-cell">{lastUpdate.newViolations}</div>
            </div>
            <div className="landing-table-row">
              <div className="landing-table-header">New 311-calls</div>
              <div className="landing-table-cell">{lastUpdate.newServiceCalls}</div>
            </div>
            <div className="landing-table-row">
              <div className="landing-table-header">Resolved Violations</div>
              <div className="landing-table-cell">{lastUpdate.resolvedViolations}</div>
            </div>
            <div className="landing-table-row">
              <div className="landing-table-header">Resolved 311-calls</div>
              <div className="landing-table-cell">{lastUpdate.resolvedServiceCalls}</div>
            </div>
          </div>
        )
      }
    } else if (this.props.updates.awaitingResponse) {
      return <div className="landing-update-table">Loading...</div>
    } else {
      return <div className="landing-update-table">No update date available</div>
    }
  }

  render() {
    return (
      <div className="landing-page">
        <div className="landing-header-bar">
          <div className="landing-header-bar-wrapper">
            <div className="landing-header-link-menu">
              <Link to="/">Map</Link>
              <Link to="/story">Story</Link>
              <Link to="/support">Support</Link>
              <HashLink to="/about#update">Last Update</HashLink>
              <HashLink to="/about#description">About</HashLink>
              <HashLink to="/about#goals">Future goals</HashLink>
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
        {this.displayUpdateTable()}
        <div className="landing-spacer">
          <SpacerSvg3 />
        </div>
        <div className="text-content">
          <div className="content-title" id="description">
            <h5>About</h5>
          </div>
          <div className="content-body">
            <p>
              The NYC Building Monitor is an ongoing project created to serve the needs of NYC tenants. If you are a NYC
              tenant or housing advocate and would like to discuss your ideas on how to steer this site, please contact
              me at <span className="text-hightlight">hello@buildingmonitor.nyc</span>.
            </p>
            <p>
              This site is a daily updated resource of public city data on building violations, building-related 311
              calls, and other neighborhood information such as median rent, income, and demographics. A map is provided
              to make searching for these records more manageable and friendly than the public data portals.
            </p>
            <p>
              Work is ongoing to process this data to provide useful insights into the trends and behaviors of NYC
              landlords and city departments as well as to educate tenants about their housing rights and city-wide
              housing patterns.
            </p>
          </div>
        </div>
        <div className="landing-spacer">
          <SpacerSvg1 />
        </div>
        <div className="text-content">
          <div className="content-title" id="goals">
            <h5>Future goals</h5>
            <ul className="content-body">
              <li>
                Write general information guides about city departments, the 311 service, and building violation codes.
              </li>
              <li>Translation all text into Spanish.</li>
              <li>Include more options to choose from for the racial demographic map detail layer.</li>
              <li>Improve map search functionality for buildings and neighborhoods.</li>
              <li>Make specific information linkable and shareable.</li>
              <li>
                Acquire landlord data about each building and create map details about violations on properties owned by
                each landlord (inspiration:{' '}
                <a
                  href="https://advocate.nyc.gov/landlord-watchlist/worst-landlords"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 Worst Landlords in New York City
                </a>)
              </li>
              <li>Create map detail layers about bed bugs, hazardous violations, and other noteworthy data.</li>
              <li>Create a map detail showing possible rent stabilized housing.</li>
              <li>Include data and map details about building sales and new permits.</li>
              <li>
                Send emails to visitors who sign up about new violations, service calls, and status updates on their
                building.
              </li>
              <li>
                Perform statistical analysis of the data sets to investigate building and neighborhood trends over time.
              </li>
            </ul>
            <div>
              If you would like to contribute or suggest a feature, please contact{' '}
              <span className="text-hightlight">hello@buildingmonitor.nyc</span> or open a{' '}
              <a
                href="https://github.com/0xStarcat/nyc_building_monitor_client"
                target="_blank"
                rel="noopener noreferrer"
              >
                pull request in the code repository.
              </a>
            </div>
          </div>
        </div>
        <div className="landing-spacer">
          <HomeIcon className="svg-icon-tertiary-color" />
        </div>
        <div className="landing-footer" />
      </div>
    )
  }
}

LandingPage.propTypes = {
  landScapeOrientation: PropTypes.bool,
  routing: PropTypes.object
}

const mapStateToProps = state => {
  return {
    updates: state.updates
  }
}

export default connect(mapStateToProps)(LandingPage)
