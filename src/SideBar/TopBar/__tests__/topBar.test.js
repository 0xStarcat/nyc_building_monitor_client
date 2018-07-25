import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import TopBar from '../index.js'
import LandscapeTopButtons from '../LandscapeTopButtons'
import MobileTopButtons from '../MobileTopButtons'

import {
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../../Store/AppState/actions'

configure({ adapter: new Adapter() })

const appState = {
  baseLayerScope: SCOPE_CENSUS_TRACTS,
  landscapeOrientation: true,
  sidebarView: SIDEBAR_VIEW_SCOPED_OBJECTS,
  sidebarScope: SCOPE_CENSUS_TRACTS
}

const selectedObjects = {
  neighborhoods: {
    object: null
  },
  censusTracts: {
    object: null
  },
  buildings: {
    object: null
  }
}

describe('TopBar', () => {
  const wrapper = shallow(<TopBar appState={appState} selectedObjects={selectedObjects} />)

  it('renders the component', () => {
    expect(wrapper.find('.control-bar').length).toEqual(1)
  })

  describe('in landscape', () => {
    const wrapper = shallow(<TopBar appState={appState} selectedObjects={selectedObjects} />)
    it('renders LandscapeTopButtons', () => {
      expect(wrapper.children().find(LandscapeTopButtons).length).toEqual(1)
    })
  })

  describe('in portrait', () => {
    const wrapper = shallow(
      <TopBar appState={{ ...appState, landscapeOrientation: false }} selectedObjects={selectedObjects} />
    )
    it('renders LandscapeTopButtons', () => {
      expect(wrapper.children().find(MobileTopButtons).length).toEqual(1)
    })
  })
})
