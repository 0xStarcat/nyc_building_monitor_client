import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import ExploreButton from '../index.js'
import DispatchActionButton from '../../DispatchActionButton'

import {
  SIDEBAR_VIEW_MAP_DETAILS_MENU,
  SIDEBAR_VIEW_SELECTED_OBJECT,
  SCOPE_CENSUS_TRACTS
} from '../../../../Store/AppState/actions'

configure({ adapter: new Adapter() })

describe('ExploreButton', () => {
  const setViewCoordinates = sinon.spy()
  const appState = {
    sidebarView: SIDEBAR_VIEW_SELECTED_OBJECT,
    sidebarScope: SCOPE_CENSUS_TRACTS
  }

  const selectedObject = { id: 1 }

  describe('with sidebarView = SIDEBAR_VIEW_SELECTED_OBJECT', () => {
    const wrapper = shallow(<ExploreButton appState={appState} selectedObject={selectedObject} />)

    it('renders the component', () => {
      expect(wrapper.find('.explore-button').length).toEqual(1)
    })
  })

  describe('with sidebarView = SIDEBAR_VIEW_MAP_DETAILS_MENU', () => {
    const wrapper = shallow(
      <ExploreButton
        appState={{ ...appState, sidebarView: SIDEBAR_VIEW_MAP_DETAILS_MENU }}
        selectedObject={selectedObject}
      />
    )

    it('does not render the component', () => {
      expect(wrapper.find('.explore-button').length).toEqual(0)
    })
  })
})
