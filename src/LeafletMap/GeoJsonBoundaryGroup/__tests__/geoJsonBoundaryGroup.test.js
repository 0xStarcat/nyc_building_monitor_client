import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import { GeoJsonBoundaryGroup } from '../index.js'
import { GeoJSON, LayerGroup } from 'react-leaflet'

import { SCOPE_NEIGHBORHOODS, SCOPE_CENSUS_TRACTS } from '../../../Store/AppState/actions'
import { selectNewSelectedCTObject } from '../../../Store/CensusTracts/actions'
import { selectNewSelectedNeighborhoodObject } from '../../../Store/Neighborhoods/actions'

configure({ adapter: new Adapter() })

describe('GeoJsonBoundaryGroup', () => {
  const allLayersLoaded = false
  const features = []
  const dispatch = sinon.spy()
  const onLoad = sinon.spy()
  const setViewCoordinates = sinon.spy()
  const sidebarAction = sinon.spy()
  const scope = SCOPE_CENSUS_TRACTS
  const style = sinon.spy()
  const interactive = false

  const props = {
    allLayersLoaded,
    dispatch,
    features,
    interactive,
    onLoad,
    setViewCoordinates,
    scope,
    sidebarAction,
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

    it('calls dispatch 4 times, setViewcoordinates, and sidebarAction', () => {
      const event = { target: { feature: { properties: { representativePoint: [0, 0] } } } }
      wrapper.instance().onClick(event)

      expect(dispatch.callCount).toEqual(4)
      expect(setViewCoordinates.calledOnce).toEqual(true)
      expect(sidebarAction.calledOnce).toEqual(true)
    })
  })

  describe('getSelectedObjectFunction', () => {
    describe('when scope is SCOPE_NEIGHBORHOODS', () => {
      const newProps = { ...props, scope: SCOPE_NEIGHBORHOODS }

      const wrapper = shallow(<GeoJsonBoundaryGroup {...newProps} />)
      it('returns the neighborhood function', () => {
        const event = { target: { feature: { properties: { representativePoint: [0, 0] } } } }

        expect(wrapper.instance().getSelectedObjectFunction()).toEqual(selectNewSelectedNeighborhoodObject)
      })
    })

    describe('when scope is SCOPE_CENSUS_TRACTS', () => {
      const wrapper = shallow(<GeoJsonBoundaryGroup {...props} />)
      it('returns the census tract function', () => {
        const event = { target: { feature: { properties: { representativePoint: [0, 0] } } } }

        expect(wrapper.instance().getSelectedObjectFunction()).toEqual(selectNewSelectedCTObject)
      })
    })
  })
})
