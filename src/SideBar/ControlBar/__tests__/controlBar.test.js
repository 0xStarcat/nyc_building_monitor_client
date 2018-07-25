import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import ControlBar from '../index.js'
import ControlBackButton from '../ControlBackButton'
import ControlNextButton from '../ControlNextButton'
import ControlToggleButton from '../ControlToggleButton'

import {
  SIDEBAR_VIEW_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../../Store/AppState/actions'

configure({ adapter: new Adapter() })

const appState = {
  baseLayerScope: SCOPE_CENSUS_TRACTS,
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

describe('ControlBar', () => {
  const wrapper = shallow(<ControlBar appState={appState} selectedObjects={selectedObjects} />)

  it('renders the component', () => {
    expect(wrapper.find('.control-bar').length).toEqual(1)
    expect(wrapper.children().find(ControlBackButton).length).toEqual(1)
    expect(wrapper.children().find(ControlToggleButton).length).toEqual(1)
    expect(wrapper.children().find(ControlNextButton).length).toEqual(1)
  })
})
