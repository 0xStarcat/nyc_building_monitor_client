import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import ExploreButton from '../index.js'
import {
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_CENSUS_TRACTS
} from '../../../../Store/AppState/actions'

configure({ adapter: new Adapter() })

describe('ExploreButton', () => {
  const dispatch = sinon.spy()
  const appState = {
    sidebarView: SIDEBAR_VIEW_SCOPED_OBJECTS,
    sidebarScope: SCOPE_CENSUS_TRACTS
  }

  const selectedObject = { id: 1 }

  describe('with sidebarView = SIDEBAR_VIEW_SCOPED_OBJECTS', () => {
    const wrapper = shallow(<ExploreButton appState={appState} dispatch={dispatch} selectedObject={selectedObject} />)

    it('renders the component', () => {
      expect(wrapper.find('.explore-button').length).toEqual(1)
    })
  })

  describe('with sidebarView = SIDEBAR_VIEW_BOUNDARY_LAYER_MENU', () => {
    const wrapper = shallow(
      <ExploreButton
        appState={{ ...appState, sidebarView: SIDEBAR_VIEW_BOUNDARY_LAYER_MENU }}
        dispatch={dispatch}
        selectedObject={selectedObject}
      />
    )

    it('does not render the component', () => {
      expect(wrapper.find('.explore-button').length).toEqual(0)
    })
  })
})
