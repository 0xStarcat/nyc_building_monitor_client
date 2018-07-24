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

  describe('when rendering the back button', () => {
    describe('when view = SIDEBAR_VIEW_MENU', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_MENU,
        sidebarScope: SCOPE_CENSUS_TRACTS
      }
      const wrapper = shallow(<ControlBar appState={appState} selectedObjects={selectedObjects} />)

      it('disables the back button', () => {
        const backButtonProps = wrapper
          .children()
          .find(ControlBackButton)
          .props()
        expect(backButtonProps.disabled).toEqual(true)
      })
    })

    describe('when scope = SCOPE_CENSUS_TRACTS and view = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_SCOPED_OBJECTS,
        sidebarScope: SCOPE_CENSUS_TRACTS
      }
      const wrapper = shallow(<ControlBar appState={appState} selectedObjects={selectedObjects} />)

      it('renders the back button with scope = SCOPE_CENSUS_TRACTS and view = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
        const backButtonProps = wrapper
          .children()
          .find(ControlBackButton)
          .props()
        expect(backButtonProps.scopeSwitch).toEqual(SCOPE_CENSUS_TRACTS)
        expect(backButtonProps.viewSwitch).toEqual(SIDEBAR_VIEW_MENU)
      })
    })

    describe('when scope = SCOPE_BUILDINGS and view = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_SCOPED_OBJECTS,
        sidebarScope: SCOPE_BUILDINGS
      }
      const wrapper = shallow(<ControlBar appState={appState} selectedObjects={selectedObjects} />)

      it('renders the back button with scope = SCOPE_CENSUS_TRACTS and view = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
        const backButtonProps = wrapper
          .children()
          .find(ControlBackButton)
          .props()
        expect(backButtonProps.scopeSwitch).toEqual(SCOPE_CENSUS_TRACTS)
        expect(backButtonProps.viewSwitch).toEqual(SIDEBAR_VIEW_SCOPED_OBJECTS)
      })
    })
  })

  describe('when rendering the next button', () => {
    describe('when view = SIDEBAR_VIEW_MENU and there is no selected census tract object', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_MENU,
        sidebarScope: SCOPE_CENSUS_TRACTS
      }

      const wrapper = shallow(<ControlBar appState={appState} selectedObjects={selectedObjects} />)

      it('disables the next button', () => {
        const nextButtonProps = wrapper
          .children()
          .find(ControlNextButton)
          .props()
        expect(nextButtonProps.disabled).toEqual(true)
      })
    })

    describe('when view = SIDEBAR_VIEW_MENU and there is a selected census tract object', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_MENU,
        sidebarScope: null
      }

      const selectedObjects = {
        censusTracts: {
          object: { id: 1 }
        }
      }

      const wrapper = shallow(<ControlBar appState={appState} selectedObjects={selectedObjects} />)

      it('enables the next button', () => {
        const nextButtonProps = wrapper
          .children()
          .find(ControlNextButton)
          .props()
        expect(nextButtonProps.disabled).toEqual(false)
      })
    })

    describe('when scope = SCOPE_CENSUS_TRACTS and there is a selected building object', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_SCOPED_OBJECTS,
        sidebarScope: SCOPE_CENSUS_TRACTS
      }

      const selectedObjects = {
        buildings: {
          object: { id: 1 }
        }
      }

      const wrapper = shallow(<ControlBar appState={appState} selectedObjects={selectedObjects} />)

      it('enables the next button', () => {
        const nextButtonProps = wrapper
          .children()
          .find(ControlNextButton)
          .props()
        expect(nextButtonProps.disabled).toEqual(false)
      })
    })
  })
})
