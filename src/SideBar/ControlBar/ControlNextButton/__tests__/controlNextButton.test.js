import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import ControlNextButton from '../index.js'

import {
  SIDEBAR_VIEW_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../../../Store/AppState/actions'

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

describe('ControlNextButton', () => {
  describe('when rendering the next button', () => {
    describe('when view = SIDEBAR_VIEW_MENU and there is no selected census tract object', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_MENU,
        sidebarScope: SCOPE_CENSUS_TRACTS
      }

      const wrapper = shallow(<ControlNextButton appState={appState} selectedObjects={selectedObjects} />)

      it('disables the next button', () => {
        const nextButtonProps = wrapper.props()
        expect(nextButtonProps.disabled).toEqual(true)
      })
    })

    describe('when view = SIDEBAR_VIEW_MENU and there is a selected census tract object', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_MENU,
        sidebarScope: SCOPE_CENSUS_TRACTS,
        baseLayerScope: SCOPE_CENSUS_TRACTS
      }

      const selectedObjects = {
        censusTracts: {
          object: { id: 1 }
        }
      }

      const wrapper = shallow(<ControlNextButton appState={appState} selectedObjects={selectedObjects} />)

      it('enables the next button', () => {
        const nextButtonProps = wrapper.props()
        expect(nextButtonProps.disabled).toEqual(false)
      })

      it('renders the next button with scope = SCOPE_CENSUS_TRACTS and view = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
        const nextButtonProps = wrapper.props()
        expect(nextButtonProps.scopeSwitch).toEqual(SCOPE_CENSUS_TRACTS)
        expect(nextButtonProps.viewSwitch).toEqual(SIDEBAR_VIEW_SCOPED_OBJECTS)
      })
    })

    describe('when scope = SCOPE_CENSUS_TRACTS and there is a selected building object', () => {
      const appState = {
        sidebarView: SIDEBAR_VIEW_SCOPED_OBJECTS,
        sidebarScope: SCOPE_CENSUS_TRACTS,
        baseLayerScope: SCOPE_CENSUS_TRACTS
      }

      const selectedObjects = {
        buildings: {
          object: { id: 1 }
        }
      }

      const wrapper = shallow(<ControlNextButton appState={appState} selectedObjects={selectedObjects} />)

      it('enables the next button', () => {
        const nextButtonProps = wrapper.props()
        expect(nextButtonProps.disabled).toEqual(false)
      })

      it('renders the next button with scope = SCOPE_CENSUS_TRACTS and view = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
        const nextButtonProps = wrapper.props()
        expect(nextButtonProps.scopeSwitch).toEqual(SCOPE_BUILDINGS)
        expect(nextButtonProps.viewSwitch).toEqual(SIDEBAR_VIEW_SCOPED_OBJECTS)
      })
    })
  })
})
