import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Stepper from './Stepper'
import { CalendarIcon } from '../icons'

storiesOf('Stepper', module)
  .add('enabled', () =>
    <Stepper
      onClick={action('main clicked')}
      onIncreaseClick={action('increase clicked')}
      onDecreaseClick={action('decrease clicked')}
    >
      Button
    </Stepper>
  )
  .add('disabled', () =>
    <Stepper
      onClick={action('main clicked')}
      onIncreaseClick={action('increase clicked')}
      onDecreaseClick={action('decrease clicked')}
      disabled
    >
      Button
    </Stepper>
  )
  .add('custom expander icon', () =>
    <Stepper
      onClick={action('main clicked')}
      onIncreaseClick={action('increase clicked')}
      onDecreaseClick={action('decrease clicked')}
      icon={<CalendarIcon xsmall />}
    >
      Button
    </Stepper>
  )
  .add('crazy', () =>
    <Stepper
      onClick={action('main clicked')}
      onIncreaseClick={action('increase clicked')}
      onDecreaseClick={action('decrease clicked')}
      icon={<CalendarIcon xsmall />}
    >
      <div style={{ whiteSpace: 'pre' }}>
        {`
          ╔════════════╗
          ║╔═╦═╦═╦══╦╦╗║
          ║║╠╣╠╬╝╠╝╔╣║║║
          ║╚═╩╝╚═╩══╬╗║║
          ╚═════════╩═╩╝
        `}
      </div>
    </Stepper>
  )
