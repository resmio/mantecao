import React from 'react'
import test from 'tape'
import { spy } from 'sinon'
import { shallow, mount } from 'enzyme'
import { setupDOM } from '../utils/testUtils'
setupDOM()

import { hexToRgb } from '../utils/colorUtils'

import Button from './Button'

const testProps = {
  textColor: '#ABCDEF',
  hoverTextColor: '#FEDCBA',
  bgColor: '#123456',
  hoverBgColor: '#654321',
  borderColor: '#000000',
  hoverBorderColor: '#FFFFFF'
}

const testChildren = <h1 className="unique">I am a child</h1>

test('Button contains a <button>', function(t) {
  const component = shallow(<Button>{testChildren}</Button>)
  t.equal(component.find('button').length, 1)
  t.end()
})

test('Button renders children', function(t) {
  const component = shallow(<Button>{testChildren}</Button>)
  t.equal(component.contains(testChildren), true)
  t.end()
})

test('Button fires onClick events', function(t) {
  const onClick = spy()
  const component = mount(<Button onClick={onClick}>{testChildren}</Button>)
  component.find('button').simulate('click')
  t.equal(onClick.calledOnce, true)
  t.end()
})

test('Button allows props to be set', function(t) {
  const component = mount(
    <Button style={testProps.style}>
      {testChildren}
    </Button>
  )
  t.deepEqual(component.props().style, testProps.style)
  t.end()
})

test('Button changes style on hover with assigned props', function(t) {
  const onMouseEnter = spy()
  const onMouseLeave = spy()
  const component = mount(
    <Button bgColor={testProps.bgColor} hoverBgColor={testProps.hoverBgColor}>
      {testChildren}
    </Button>
  )
  const htmlStyle = 'background-color: ' + hexToRgb(testProps.bgColor) + ';'
  const htmlHoverStyle =
    'background-color: ' + hexToRgb(testProps.hoverBgColor) + ';'
  t.notEqual(component.find('button').html().indexOf(htmlStyle), -1)
  component.find('button').simulate('mouseEnter')
  t.notEqual(component.find('button').html().indexOf(htmlHoverStyle), -1)
  component.find('button').simulate('mouseLeave')
  t.notEqual(component.find('button').html().indexOf(htmlStyle), -1)

  t.end()
})

test('Button has default styles', function(t) {
  const component = mount(<Button>{testChildren}</Button>)
  const htmlStyle = 'background-color: ' + hexToRgb('#DDDDDD') + ';'
  t.notEqual(component.find('button').html().indexOf(htmlStyle), -1)
  t.end()
})

test('Button allows style changes via "style" prop', function(t) {
  const component = mount(
    <Button style={{ borderRadius: '80px' }}>
      {testChildren}
    </Button>
  )
  const htmlStyle = 'border-radius: 80px;'
  t.notEqual(component.find('button').html().indexOf(htmlStyle), -1)
  t.end()
})

test('Button allows style changes via special props', function(t) {
  const component = mount(
    <Button
      textColor={testProps.textColor}
      bgColor={testProps.bgColor}
      borderColor={testProps.borderColor}
    >
      {testChildren}
    </Button>
  )
  const textColor = 'color: ' + hexToRgb(testProps.textColor) + ';'
  t.notEqual(component.find('button').html(), -1)

  const bgColor = 'background-color: ' + hexToRgb(testProps.bgColor) + ';'
  t.notEqual(component.find('button').html(), -1)

  const borderColor =
    'border: 1px solid ' + hexToRgb(testProps.borderColor) + ';'
  t.notEqual(component.find('button').html(), -1)
  t.end()
})
