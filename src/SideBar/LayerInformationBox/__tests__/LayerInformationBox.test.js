import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import LayerInformationBox from '../index.js'

import {
  SIDEBAR_CENSUS_TRACT_INFO,
  SIDEBAR_BUILDING_INFO,
  SIDEBAR_VIOLATION_INFO,
  SIDEBAR_SERVICE_CALL_INFO,
  SIDEBAR_SALE_INFO
} from '../../../Store/AppState/actions'

import BoundaryInformation from '../BoundaryInformation'
import BuildingInformation from '../BuildingInformation'
import ViolationInformation from '../ViolationInformation'
import ServiceCallInformation from '../ServiceCallInformation'
import SaleInformation from '../SaleInformation'

configure({ adapter: new Adapter() })

describe('LayerInformationBox', () => {
  const dispatchFn = sinon.spy()
  const selectedObject = {
    id: 1
  }
  const sidebarMode = {}

  it('should render my component', () => {
    const wrapper = shallow(<LayerInformationBox selectedObject={selectedObject} />)
    expect(wrapper.find('.layerInformationBox').exists()).toBe(true)
  })

  describe('#onExploreClick', () => {
    const wrapper = shallow(<LayerInformationBox dispatch={dispatchFn} selectedObject={selectedObject} />)

    it('calls the dispatch method', () => {
      wrapper.instance().onExploreClick()
      expect(dispatchFn.calledOnce).toEqual(true)
    })
  })

  describe('#displayInformationBox', () => {
    it('returns the matching information box depending on the sidebarMode', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          sidebarMode={SIDEBAR_CENSUS_TRACT_INFO}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.instance().displayInformationBox()).toEqual(
        <BoundaryInformation selectedObject={selectedObject} />
      )
    })

    it('returns the matching information box depending on the sidebarMode', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          sidebarMode={SIDEBAR_BUILDING_INFO}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.instance().displayInformationBox()).toEqual(
        <BuildingInformation selectedObject={selectedObject} />
      )
    })

    it('returns the matching information box depending on the sidebarMode', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          sidebarMode={SIDEBAR_VIOLATION_INFO}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.instance().displayInformationBox()).toEqual(
        <ViolationInformation selectedObject={selectedObject} />
      )
    })

    it('returns the matching information box depending on the sidebarMode', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          sidebarMode={SIDEBAR_SERVICE_CALL_INFO}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.instance().displayInformationBox()).toEqual(
        <ServiceCallInformation selectedObject={selectedObject} />
      )
    })

    it('returns the matching information box depending on the sidebarMode', () => {
      const wrapper = shallow(
        <LayerInformationBox dispatch={dispatchFn} sidebarMode={SIDEBAR_SALE_INFO} selectedObject={selectedObject} />
      )
      expect(wrapper.instance().displayInformationBox()).toEqual(<SaleInformation selectedObject={selectedObject} />)
    })
  })
})
