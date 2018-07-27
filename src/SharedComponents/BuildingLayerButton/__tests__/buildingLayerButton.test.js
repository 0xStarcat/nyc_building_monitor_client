import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import BuildingLayerButton from '../index.js'

configure({ adapter: new Adapter() })

const appState = {}

describe('BuildingLayerButton', () => {
  const wrapper = shallow(<BuildingLayerButton appState={appState} buildingsPresent={false} />)

  it('renders the component', () => {
    expect(wrapper.find('.building-layer-button').length).toEqual(1)
  })
})
