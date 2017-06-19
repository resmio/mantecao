import React from 'react'
import test from 'tape'
import { spy } from 'sinon'
import { shallow, mount } from 'enzyme'
import { setupDOM } from '../../utils/testUtils'
setupDOM()

import BorderButton from './BorderButton'

const testProps = {
  color: '#111111'
}

const testChildren = <h1 className="unique">I am a child</h1>

test('BorderButton contains a <Button>', function(t) {
  const component = shallow(<BorderButton>{testChildren}</BorderButton>)
  t.equal(component.find('Button').length, 1)
  t.end()
})

test('BorderButton renders children', function(t) {
  const component = shallow(<BorderButton>{testChildren}</BorderButton>)
  t.equal(component.contains(testChildren), true)
  t.end()
})

test('BorderButton allows props to be set', function(t) {
  const component = mount(
    <BorderButton color={testProps.color}>
      {testChildren}
    </BorderButton>
  )
  t.deepEqual(component.props().color, testProps.color)
  t.end()
})

test('BorderButton fires onClick events', function(t) {
  const onClick = spy()
  const component = mount(
    <BorderButton onClick={onClick}>{testChildren}</BorderButton>
  )
  component.find('Button').simulate('click')
  t.equal(onClick.calledOnce, true)
  t.end()
})
