import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import { setupDOM } from '../../utils/testUtils'
setupDOM()

import Dropdown from './Dropdown'

const testTrigger = (
  <button className="unique">I am the dropdown trigger</button>
)

test('Dropdown contains a triggerNode', function(t) {
  const component = shallow(<Dropdown triggerNode={testTrigger} />)
  t.equal(component.find('button').length, 1)
  t.end()
})
