import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import LayerInformationBox from '../index.js'

import { SIDEBAR_BOUNDARY_INFO, SIDEBAR_BUILDING_INFO } from '../../../Store/AppState/actions'

import BoundaryInformation from '../../BoundaryInformation'
import BuildingInformation from '../../BuildingInformation'

configure({ adapter: new Adapter() })

describe('LayerInformationBox', () => {
  const dispatchFn = sinon.spy()
  const selectedLayer = {
    id: 1
  }
  const sidebarMode = {}

  it('should render my component', () => {
    const wrapper = shallow(<LayerInformationBox selectedLayer={selectedLayer} />)
    expect(wrapper.find('.layerInformationBox').exists()).toBe(true)
  })

  describe('#onExploreClick', () => {
    const wrapper = shallow(<LayerInformationBox dispatch={dispatchFn} selectedLayer={selectedLayer} />)

    it('calls the dispatch method', () => {
      wrapper.instance().onExploreClick()
      expect(dispatchFn.calledOnce).toEqual(true)
    })
  })

  describe('#displayInformationBox', () => {
    describe('when sidebarMode is SIDEBAR_BOUNDARY_INFO', () => {
      const wrapper = shallow(
        <LayerInformationBox dispatch={dispatchFn} sidebarMode={SIDEBAR_BOUNDARY_INFO} selectedLayer={selectedLayer} />
      )

      it('returns the matching information box', () => {
        expect(wrapper.instance().displayInformationBox()).toEqual(
          <BoundaryInformation selectedLayer={selectedLayer} />
        )
      })
    })

    describe('when sidebarMode is SIDEBAR_BUILDING_INFO', () => {
      const wrapper = shallow(
        <LayerInformationBox dispatch={dispatchFn} sidebarMode={SIDEBAR_BUILDING_INFO} selectedLayer={selectedLayer} />
      )

      it('returns the matching information box', () => {
        expect(wrapper.instance().displayInformationBox()).toEqual(
          <BuildingInformation selectedLayer={selectedLayer} />
        )
      })
    })
  })
})
