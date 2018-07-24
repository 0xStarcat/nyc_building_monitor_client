import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import { GeoJsonBoundaryGroup } from '../index.js'
import { GeoJSON, LayerGroup } from 'react-leaflet'

configure({ adapter: new Adapter() })

describe('GeoJsonBoundaryGroup', () => {
  const allLayersLoaded = false
  const features = []
  const dispatch = sinon.spy()
  const onLoad = sinon.spy()
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
    style
  }

  describe('component', () => {
    const wrapper = shallow(<GeoJsonBoundaryGroup {...props} />)
    it('should render', () => {
      expect(wrapper.find(LayerGroup).exists()).toBe(true)
    })
  })

  describe('onClick', () => {
    const wrapper = shallow(<GeoJsonBoundaryGroup {...props} />)

    it('calls dispatch 4 times and setViewcoordinates', () => {
      const event = { target: { feature: { properties: { representativePoint: [0, 0] } } } }
      wrapper.instance().onClick(event)

      expect(dispatch.callCount).toEqual(4)
      expect(setViewCoordinates.calledOnce).toEqual(true)
    })
  })
})
