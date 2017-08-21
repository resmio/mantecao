import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Popover from './Popover'

storiesOf('Popover', module).add('default', () =>
  <div>
    <Popover
      show
      showBackdrop
      onClose={action('onClose')}
    >
      <span>whatup</span>
    </Popover>
  </div>
)
