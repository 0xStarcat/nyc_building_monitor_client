import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import LayerInformationBox from '../index.js'

import {
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS,
  SCOPE_VIOLATIONS,
  SCOPE_SERVICE_CALLS,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SIDEBAR_VIEW_SELECTED_OBJECT
} from '../../../Store/AppState/actions'

import BoundaryInformation from '../BoundaryInformation'
import BuildingInformation from '../BuildingInformation'
import ViolationsTable from '../ViolationsTable'
import ViolationInformation from '../ViolationInformation'
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

  it('should render the component', () => {
    const wrapper = shallow(<LayerInformationBox appState={appState} selectedObject={selectedObject} />)
    expect(wrapper.find('.layerInformationBox').exists()).toBe(true)
  })

  describe('SCOPE_CENSUS_TRACTS', () => {
    it('returns the matching information', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          appState={{ ...appState, sidebarScope: SCOPE_CENSUS_TRACTS }}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.instance().displayInformationBox()).toEqual(
        <BoundaryInformation selectedObject={selectedObject} />
      )
    })
  })

  describe('SCOPE_BUILDINGS', () => {
    it('returns the matching information', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          appState={{ ...appState, sidebarScope: SCOPE_BUILDINGS }}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.find(BuildingInformation).length).toEqual(1)
    })
  })

  describe('SCOPE_VIOLATIONS', () => {
    it('returns the matching information', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          features={features}
          appState={{ ...appState, sidebarView: SIDEBAR_VIEW_SCOPED_OBJECTS, sidebarScope: SCOPE_VIOLATIONS }}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.find(ViolationsTable).length).toEqual(1)
    })

    it('returns the matching information', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          features={features}
          appState={{ ...appState, sidebarView: SIDEBAR_VIEW_SELECTED_OBJECT, sidebarScope: SCOPE_VIOLATIONS }}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.find(ViolationInformation).length).toEqual(1)
    })
  })

  describe('SCOPE_SERVICE_CALLS', () => {
    it('returns the matching information', () => {
      const wrapper = shallow(
        <LayerInformationBox
          dispatch={dispatchFn}
          appState={{ ...appState, sidebarScope: SCOPE_SERVICE_CALLS }}
          selectedObject={selectedObject}
        />
      )
      expect(wrapper.instance().displayInformationBox()).toEqual(
        <ServiceCallInformation selectedObject={selectedObject} />
      )
    })
  })
})
