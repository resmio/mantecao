import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Modal from './Modal'

describe('Modal Component', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<Modal onClose={() => false}><div>child</div></Modal>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
