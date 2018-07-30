import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import { GeoJsonBuildingLayer } from '../index.js'
import { GeoJSON, LayerGroup } from 'react-leaflet'

configure({ adapter: new Adapter() })

describe('GeoJsonBuildingLayer', () => {
  const allLayersLoaded = false
  const features = []
  const dispatch = sinon.spy()
  const onLoad = sinon.spy()
  const sidebarAction = sinon.spy()
  const setViewCoordinates = sinon.spy()
  const style = sinon.spy()
  const interactive = false

  const props = {
    allLayersLoaded,
    dispatch,
    features,
    interactive,
    onLoad,
    setViewCoordinates,
    sidebarAction,
    style
  }

  describe('component', () => {
    const wrapper = shallow(<GeoJsonBuildingLayer {...props} />)
    it('should render', () => {
      expect(wrapper.find(LayerGroup).exists()).toBe(true)
    })
  })

  describe('onClick', () => {
    const wrapper = shallow(<GeoJsonBuildingLayer {...props} />)

    it('calls dispatch 7 times', () => {
      const event = { target: { feature: { properties: { representativePoint: [0, 0] } } } }
      wrapper.instance().onClick(event)

      expect(dispatch.callCount).toEqual(7)
    })
  })
})
