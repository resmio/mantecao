import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Popover from './Popover'

const StoryWrapper = ({ children }) => (
  <div>
    <div style={{ padding: '10px' }}>other content on page</div>
    <div id="popover-anchor" style={{ margin: '10px' }}>anchor</div>
    { children }
    <div style={{ padding: '10px' }}>other content on page</div>
  </div>
)

storiesOf('Popover', module)
  .add('default', () =>
    <StoryWrapper>
      <Popover show showBackdrop onClose={action('onClose')}>
        <div style={{ background: '#FFF', padding: '1em' }}>
          default popover with backdrop
        </div>
      </Popover>
    </StoryWrapper>
  )
  .add('anchored', () =>
    <StoryWrapper>
      <Popover
        show
        onClose={action('onClose')}
        anchorEl={document.getElementById('popover-anchor')}
      >
        <div style={{ background: '#FFF', border: '1px solid #FAA', padding: '1em' }}>
          anchored popover
        </div>
      </Popover>
    </StoryWrapper>
  )
