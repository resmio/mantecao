import React from 'react'
import test from 'tape'
import { spy } from 'sinon'
import { shallow, mount } from 'enzyme'
import { setupDOM } from '../../utils/testUtils'
setupDOM()

import LoadMore from './LoadMore'

const testFetch = spy()

test('LoadMore renders a div', function (t) {
  const component = shallow(<LoadMore fetch={ testFetch } />)
  t.equal(component.find('div').length, 1)
  t.end()
})

test('LoadMore allows props to be set', function (t) {
  const component = mount(
    <LoadMore
      loading={ true }
      fetch={ testFetch }
    />
  )
  t.deepEqual(component.props().loading, true)
  t.end()
})

test('LoadMore renders a link when unloaded count is greater than 0', function (t) {
  const component = mount(
    <LoadMore
      unloadedCount={ 1 }
      fetch={ testFetch }
    />
  )
  t.equal(component.find('a').length, 1)
  t.end()
})

test('LoadMore does not render a link when unloaded count is 0', function (t) {
  const onClose = spy()
  const component = mount(
    <LoadMore
      unloadedCount={ 0 }
      fetch={ testFetch }
    />
  )
  t.equal(component.find('a').length, 0)
  t.end()
})

test('LoadMore calls fetch onClick', function (t) {
  const component = mount(
    <LoadMore
      unloadedCount={ 1 }
      fetch={ testFetch }
    />
  )
  component.find('a').simulate('click')
  // this function was used in all of the previous calls
  t.equal(testFetch.calledOnce, true)
  t.end()
})

test('LoadMore renders "loading" when loading', function (t) {
  const onClose = spy()
  const component = mount(
    <LoadMore
      loading={ false }
      fetch={ testFetch }
    />
  )
  t.equal(component.find('span').length, 0)
  const componentLoading = mount(
    <LoadMore
      loading={ true }
      fetch={ testFetch }
    />
  )
  t.equal(componentLoading.find('span').length, 1)
  t.end()
})
