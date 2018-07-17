import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import LayerInformationBox from '../index.js'

configure({ adapter: new Adapter() })

describe('LayerInformationBox', () => {
  const dispatchFn = sinon.spy()
  const selectedLayer = {
    id: 1
  }

  it('should render my component', () => {
    const wrapper = shallow(<LayerInformationBox selectedLayer={selectedLayer} />)
    expect(wrapper.find('.layerInformationBox').exists()).toBe(true)
  })

  describe('#onExploreClick', () => {
    const wrapper = shallow(<LayerInformationBox dispatch={dispatchFn} selectedLayer={selectedLayer} />)

    it('calls the dispatch method', () => {
      wrapper.instance().onExploreClick()
      expect(dispatchFn.calledOnce).toEqual(true)
    })
  })
})
