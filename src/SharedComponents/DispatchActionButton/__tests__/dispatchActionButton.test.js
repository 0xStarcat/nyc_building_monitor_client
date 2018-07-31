import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import { DispatchActionButton } from '../index.js'

configure({ adapter: new Adapter() })

describe('DispatchActionButton', () => {
  const action = sinon.spy()
  const dispatch = sinon.spy()
  const wrapper = shallow(<DispatchActionButton action={action} disabled={false} dispatch={dispatch} />)

  it('renders the component', () => {
    expect(wrapper.find('.button').length).toEqual(1)
  })

  it('calls dispatch', () => {
    const action = sinon.spy()
    const dispatch = sinon.spy()

    const wrapper = shallow(<DispatchActionButton action={action} disabled={false} dispatch={dispatch} />)

    wrapper.simulate('click')
    expect(dispatch.calledOnce).toEqual(true)
  })

  it('calls the action a argument', () => {
    const action = sinon.spy()
    const dispatch = sinon.spy()

    const wrapper = shallow(
      <DispatchActionButton action={action} actionArguments="A" disabled={false} dispatch={dispatch} />
    )

    wrapper.simulate('click')
    expect(action.calledOnce).toEqual(true)
    expect(action.args[0][0]['0']).toEqual('A')
  })

  it('calls the multiple arguments', () => {
    const action = sinon.spy()
    const dispatch = sinon.spy()

    const wrapper = shallow(
      <DispatchActionButton action={action} actionArguments={['A', 'B']} disabled={false} dispatch={dispatch} />
    )

    wrapper.simulate('click')
    expect(action.calledOnce).toEqual(true)
    expect(action.args[0][0]['0']).toEqual('A')
    expect(action.args[0][0]['1']).toEqual('B')
  })
})
