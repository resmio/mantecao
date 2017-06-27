import React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from './Alert'

storiesOf('Alert', module)
  .add('type error', () =>
    <Alert isOpen type="error" heading="Error" message="Shit happens" />
  )
  .add('type info', () =>
    <Alert isOpen type="info" heading="Info" message="Please take a shower" />
  )
  .add('type alert', () =>
    <Alert isOpen type="alert" heading="Alert" message="You are gonna die" />
  )
  .add('type success', () =>
    <Alert isOpen type="success" heading="Success" message="Show me the 💰" />
  )
