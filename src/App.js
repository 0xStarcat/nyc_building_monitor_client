import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideBar from './SideBar'
import MapPage from './Pages/MapPage'
import AboutPage from './Pages/AboutPage'
import Loading from './SharedComponents/Loading'
import { readCensusTracts } from './Store/CensusTracts/actions'
import { readNeighborhoods } from './Store/Neighborhoods/actions'
import { checkOrientation } from './Store/AppState/actions'

import { history } from './Store/store'
import { Router, Switch, Route } from 'react-router'

import './App.scss'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(readCensusTracts())

    this.checkOrientation = this.checkOrientation.bind(this)
  }

  checkOrientation() {
    this.props.dispatch(checkOrientation())
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkOrientation)
  }

  componentDidUnmount() {
    window.removeEventListener('resize', this.checkOrientation)
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" render={routeProps => <MapPage />} />
            <Route exact path="/about" render={routeProps => <AboutPage />} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default connect()(App)
