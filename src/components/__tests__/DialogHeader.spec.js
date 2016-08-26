import React from 'react'
import test from 'tape'
import { spy } from 'sinon'
import { shallow, mount } from 'enzyme'
import { setupDOM } from '../../utils/testUtils'
setupDOM()

import { hexToRgb } from '../../utils/colorUtils'

import DialogHeader from '../DialogHeader'

const testChildren = <h1 className='unique'>I am a child</h1>

test('DialogHeader renders children', function (t) {
  const component = shallow(<DialogHeader>{testChildren}</DialogHeader>)
  t.equal(component.contains(testChildren), true)
  t.end()
})

test('DialogHeader renders an UnstyledButton when passed a close function', function (t) {
  const onClose = spy()
  const component = mount(<DialogHeader close={ onClose } />)
  t.equal(component.find('UnstyledButton').length, 1)
  t.end()
})

test('DialogHeader does not render an UnstyledButton without props', function (t) {
  const component = mount(<DialogHeader />)
  t.equal(component.find('UnstyledButton').length, 0)
  t.end()
})
