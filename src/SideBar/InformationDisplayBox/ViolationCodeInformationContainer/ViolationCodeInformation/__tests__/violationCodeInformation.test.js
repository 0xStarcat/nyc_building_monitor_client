import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import ViolationCodeInformation from '../index.js'

configure({ adapter: new Adapter() })

describe('ViolationCodeInformation', () => {
  const content = 'Hello'
  const source = 'Bob'
  const wrapper = shallow(<ViolationCodeInformation content={content} source={source} />)

  it('renders the component', () => {
    expect(wrapper.find('.violation-code-information').length).toEqual(1)
  })
})
