import React from 'react'
import { connect } from 'react-redux'
import LeafletMap from '../../LeafletMap'
import SideBar from '../../SideBar'
import Layout from '../Layout'

const MapPage = props => {
  return (
    <Layout>
      <LeafletMap store={props.store} position={{ lat: 40.6881, lng: -73.9671 }} zoom={13} />
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    store: {
      neighborhoods: state.neighborhoods,
      censusTracts: state.censusTracts,
      allLayersLoaded: state.appState.allLayersLoaded
    }
  }
}

export default connect(mapStateToProps)(MapPage)
