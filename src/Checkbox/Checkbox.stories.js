import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Checkbox from './Checkbox'

storiesOf('Checkbox', module).add('Default', () =>
  <Checkbox
    label="hello checkbox"
    description="hello checkbox description"
    onChange={value => console.log(value)}
    checked={false}
    error
    hint="maybe there is an error"
  />
)
