import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import ViolationCodeInformationContainer from '../index.js'

configure({ adapter: new Adapter() })

describe('ViolationCodeInformationContainer', () => {
  const code = 'A'
  const wrapper = shallow(<ViolationCodeInformationContainer code={code} />)

  it('renders the component', () => {
    expect(wrapper.find('.violation-code-information-container').length).toEqual(1)
  })
})
