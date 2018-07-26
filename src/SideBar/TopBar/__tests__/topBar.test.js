import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import TopBar from '../index.js'
import ControlBackButton from '../../SharedComponents/ControlBackButton'
import ControlNextButton from '../../SharedComponents/ControlNextButton'
import ControlToggleButton from '../../SharedComponents/ControlToggleButton'
import ControlHideButton from '../../SharedComponents/ControlHideButton'
import ControlExpandButton from '../../SharedComponents/ControlExpandButton'
import ControlPreviewButton from '../../SharedComponents/ControlPreviewButton'

import {
  SIDEBAR_STATE_INACTIVE,
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_STATE_ACTIVE,
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
    expect(wrapper.find('.top-bar').length).toEqual(1)
  })

  describe('in landscape', () => {
    const wrapper = shallow(<TopBar appState={appState} selectedObjects={selectedObjects} />)
    it('renders the back button', () => {
      expect(wrapper.children().find(ControlBackButton).length).toEqual(1)
    })

    it('renders the next button', () => {
      expect(wrapper.children().find(ControlNextButton).length).toEqual(1)
    })
  })

  describe('when in portrait mode', () => {
    const appState = {
      sidebarState: SIDEBAR_STATE_INACTIVE,
      landscapeOrientation: false
    }

    describe('when SIDEBAR_STATE_PREVIEW', () => {
      const wrapper = shallow(<TopBar appState={{ ...appState, sidebarState: SIDEBAR_STATE_PREVIEW }} />)
      it('renders ControlHideButton and ControlExpandButton', () => {
        expect(wrapper.children().find(ControlHideButton).length).toEqual(1)
        expect(wrapper.children().find(ControlExpandButton).length).toEqual(1)
      })
    })

    describe('when SIDEBAR_STATE_ACTIVE', () => {
      const wrapper = shallow(<TopBar appState={{ ...appState, sidebarState: SIDEBAR_STATE_ACTIVE }} />)

      it('renders ControlPreviewButton and expand button', () => {
        expect(wrapper.children().find(ControlPreviewButton).length).toEqual(1)
        expect(wrapper.children().find(ControlExpandButton).length).toEqual(1)
      })
    })
  })
})
