import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from './Label'

storiesOf('Label', module).add('default', () =>
  <span>
    <Label type="info">
      info
    </Label>
    <Label type="error">
      error
    </Label>
  </span>
)
