import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Popover from './Popover'

storiesOf('Popover', module).add('default', () =>
  <div>
    <div style={{ padding: '100px 0' }}>some other stuff</div>
    <div id='popover-anchor' style={{ width: '100px' }}>anchor</div>
    <Popover show showBackdrop onClose={action('onClose')}>
      <div style={{ background: '#FFF', width: '200px'}}>
        whatup whatup whatup whatup whatup whatup whatup whatup whatup whatup
        whatup whatup whatup whatup whatup whatup whatup whatup whatup whatup
        whatup whatup whatup whatup whatup whatup whatup whatup whatup whatup
        whatup whatup whatup whatup whatup whatup whatup whatup whatup whatup
        whatup whatup whatup whatup whatup whatup whatup whatup whatup whatup
        whatup whatup whatup whatup whatup whatup whatup whatup whatup whatup
        whatup whatup whatup whatup whatup whatup whatup whatup whatup whatup
        whatup
      </div>
    </Popover>
    <div style={{ padding: '100px 0' }}>some other other stuff</div>
  </div>
)
