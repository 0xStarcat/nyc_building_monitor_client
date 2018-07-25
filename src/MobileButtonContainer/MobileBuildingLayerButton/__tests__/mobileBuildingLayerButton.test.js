import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import MobileBuildingLayerButton from '../index.js'

import ExploreButton from '../../../SideBar/SharedComponents/ExploreButton'
import BuildingLayersButton from '../../../SideBar/SharedComponents/BuildingLayersButton'

configure({ adapter: new Adapter() })

const appState = {}

describe('MobileBuildingLayerButton', () => {
  const wrapper = shallow(<MobileBuildingLayerButton appState={appState} buildingsPresent={false} />)

  it('renders the component', () => {
    expect(wrapper.find('.mobile-building-layer-button').length).toEqual(1)
  })

  describe('when prop buildingsPresent = true', () => {
    it('renders ExploreButton', () => {
      expect(wrapper.children().find(ExploreButton).length).toEqual(1)
    })
  })

  describe('when prop buildingsPresent = true', () => {
    const wrapper = shallow(<MobileBuildingLayerButton appState={appState} buildingsPresent={true} />)

    it('renders ExploreButton', () => {
      expect(wrapper.children().find(BuildingLayersButton).length).toEqual(1)
    })
  })
})
