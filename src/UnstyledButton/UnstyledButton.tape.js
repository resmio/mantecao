import React from 'react'
import test from 'tape'
import { spy } from 'sinon'
import { shallow, mount } from 'enzyme'
import { setupDOM } from '../utils/testUtils'
setupDOM()

import UnstyledButton from './UnstyledButton'

const testChildren = <h1 className="unique">I am a child</h1>

test('UnstyledButton contains a <div>', function(t) {
  const component = shallow(<UnstyledButton>{testChildren}</UnstyledButton>)
  t.equal(component.find('div').length, 1)
  t.end()
})

test('UnstyledButton renders children', function(t) {
  const component = shallow(<UnstyledButton>{testChildren}</UnstyledButton>)
  t.equal(component.contains(testChildren), true)
  t.end()
})

test('UnstyledButton fires onClick events', function(t) {
  const onClick = spy()
  const component = mount(
    <UnstyledButton onClick={onClick}>{testChildren}</UnstyledButton>
  )
  component.find('div').simulate('click')
  t.equal(onClick.calledOnce, true)
  t.end()
})
