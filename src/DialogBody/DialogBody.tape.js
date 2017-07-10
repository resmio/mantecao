import React from 'react'
import test from 'tape'
import { spy } from 'sinon'
import { shallow, mount } from 'enzyme'
import { setupDOM } from '../utils/testUtils'
setupDOM()

import { hexToRgb } from '../utils/colorUtils'

import DialogBody from './DialogBody'

const testProps = {
  bgColor: '#111'
}

const testChildren = <h1 className="unique">I am a child</h1>

test('DialogBody contains 2 nested <div>s', function(t) {
  const component = shallow(<DialogBody />)
  t.equal(component.find('div').length, 2)
  t.end()
})

test('DialogBody renders children', function(t) {
  const component = shallow(<DialogBody>{testChildren}</DialogBody>)
  t.equal(component.contains(testChildren), true)
  t.end()
})

test('DialogBody changes backgroundColor with prop', function(t) {
  const component = mount(<DialogBody bgColor={testProps.bgColor} />)

  t.deepEqual(component.props().bgColor, testProps.bgColor)

  let div = component.find('div').get(0)
  t.equal(div.style.backgroundColor, hexToRgb(testProps.bgColor))
  t.end()
})

test('DialogBody aligns right with prop', function(t) {
  const component = shallow(<DialogBody right>{testChildren}</DialogBody>)
  let div = component.find('div').get(1)
  t.equal(div.props.style.textAlign, 'right')
  t.end()
})
