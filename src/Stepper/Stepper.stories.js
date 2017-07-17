import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Stepper from './Stepper'

storiesOf('Stepper', module)
  .add('enabled', () =>
    <Stepper
      onClickAction={action('main clicked')}
      onIncreaseClick={action('increase clicked')}
      onDecreaseClick={action('decrease clicked')}
    >
      Button
    </Stepper>
  )
  .add('disabled', () =>
    <Stepper
      onClickAction={action('main clicked')}
      onIncreaseClick={action('increase clicked')}
      onDecreaseClick={action('decrease clicked')}
      disabled
    >
      Button
    </Stepper>
  )
