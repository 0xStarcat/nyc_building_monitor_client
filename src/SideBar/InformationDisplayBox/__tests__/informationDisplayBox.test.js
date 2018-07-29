import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import InformationDisplayBox from '../index.js'

configure({ adapter: new Adapter() })

describe('InformationDisplayBox', () => {
  const informationContentCode = 'A'
  const wrapper = shallow(<InformationDisplayBox informationContentCode={informationContentCode} />)

  it('renders the component', () => {
    expect(wrapper.find('.information-display-box').length).toEqual(1)
  })
})
