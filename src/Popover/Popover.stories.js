import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Popover from './Popover'

let anchorDiv = null

const StoryDecorator = storyFn => {
  return (
    <div>
      <div style={{ padding: '10px' }}>other content on page</div>
      <div
        ref={div => {
          anchorDiv = div
        }}
        style={{ margin: '10px' }}
      >
        anchor
      </div>
      {storyFn()}
      <div style={{ padding: '10px' }}>other content on page</div>
    </div>
  )
}

storiesOf('Popover', module)
  .addDecorator(StoryDecorator)
  .add('default', () =>
    <Popover show showBackdrop onClose={action('onClose')}>
      <div style={{ background: '#FFF', padding: '1em' }}>
        default popover with backdrop
      </div>
    </Popover>
  )
  .add('anchored', () =>
    <Popover show onClose={action('onClose')} anchorEl={anchorDiv}>
      <div
        style={{ background: '#FFF', border: '1px solid #FAA', padding: '1em' }}
      >
        anchored popover (refresh to see properly - storybook is messing up the
        references to the anchor element)
      </div>
    </Popover>
  )
