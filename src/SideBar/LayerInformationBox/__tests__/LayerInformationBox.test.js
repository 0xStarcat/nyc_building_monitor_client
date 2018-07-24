import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import LayerInformationBox from '../index.js'

import {
  SIDEBAR_SCOPE_CENSUS_TRACTS,
  SIDEBAR_SCOPE_BUILDINGS,
  SIDEBAR_SCOPE_VIOLATIONS,
  SIDEBAR_SCOPE_SERVICE_CALLS
} from '../../../Store/AppState/actions'

import BoundaryInformation from '../BoundaryInformation'
import BuildingInformation from '../BuildingInformation'
import ViolationsTable from '../ViolationsTable'
import ServiceCallInformation from '../ServiceCallInformation'

configure({ adapter: new Adapter() })

describe('LayerInformationBox', () => {
  const dispatchFn = sinon.spy()
  const selectedObject = {
    id: 1
  }
  const features = []
  const appState = {
    sidebarScope: ''
  }

  it('should render my component', () => {
    const wrapper = shallow(<LayerInformationBox appState={appState} selectedObject={selectedObject} />)
    expect(wrapper.find('.layerInformationBox').exists()).toBe(true)
  })

  describe('#displayInformationBox', () => {
    it('returns the matching information box depending on the sidebarScope', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          appState={{ ...appState, sidebarScope: SIDEBAR_SCOPE_CENSUS_TRACTS }}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.instance().displayInformationBox()).toEqual(
        <BoundaryInformation selectedObject={selectedObject} />
      )
    })

    it('returns the matching information box depending on the sidebarScope', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          appState={{ ...appState, sidebarScope: SIDEBAR_SCOPE_BUILDINGS }}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.instance().displayInformationBox()).toEqual(
        <BuildingInformation selectedObject={selectedObject} selectedObject={selectedObject} />
      )
    })

    it('returns the matching information box depending on the sidebarScope', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          features={features}
          appState={{ ...appState, sidebarScope: SIDEBAR_SCOPE_VIOLATIONS }}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.instance().displayInformationBox()).toEqual(<ViolationsTable features={[]} />)
    })

    it('returns the matching information box depending on the sidebarScope', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          appState={{ ...appState, sidebarScope: SIDEBAR_SCOPE_SERVICE_CALLS }}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.instance().displayInformationBox()).toEqual(
        <ServiceCallInformation selectedObject={selectedObject} />
      )
    })
  })
})
