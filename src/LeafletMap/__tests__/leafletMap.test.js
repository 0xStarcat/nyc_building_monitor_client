import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import LeafletMap from '../index.js'

configure({ adapter: new Adapter() })

describe('LeafletMap', () => {
  const store = {
    appState: {
      allLayersLoaded: false
    },
    censusTracts: {
      inititalFetchCompleted: false
    },
    buildings: {
      features: []
    }
  }

  it('should render my component', () => {
    const wrapper = shallow(<LeafletMap store={store} />)
    expect(wrapper.find('#leaflet-map').exists()).toBe(true)
  })

  describe('#setViewCoordinates', () => {
    describe('with landscape orientation', () => {
      const wrapper = shallow(
        <LeafletMap store={{ ...store, appState: { ...store.appState, landscapeOrientation: true } }} />
      )
      it('sets the lat, lon, and zoom state with left offset', () => {
        wrapper.instance().setViewCoordinates({ coordinates: [0, 0] })
        expect(wrapper.instance().state.lat).toEqual(0)
        expect(wrapper.instance().state.lon).toEqual(-0.01)
        expect(wrapper.instance().state.zoom).toEqual(15)
      })
    })

    describe('with portrait orientation', () => {
      const wrapper = shallow(
        <LeafletMap store={{ ...store, appState: { ...store.appState, landscapeOrientation: false } }} />
      )
      it('sets the lat, lon, and zoom state with top offset', () => {
        wrapper.instance().setViewCoordinates({ coordinates: [0, 0] })
        expect(wrapper.instance().state.lat).toEqual(-0.0075)
        expect(wrapper.instance().state.lon).toEqual(0)
        expect(wrapper.instance().state.zoom).toEqual(15)
      })
    })
  })
})
