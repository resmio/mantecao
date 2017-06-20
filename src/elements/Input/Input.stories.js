import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from './Input'

storiesOf('Input', module)
  .add('default', () => <Input placeholder="email@email.com" />)
  .add('disabled', () => <Input disabled />)
  .add('with extra styling', () =>
    <Input style={{ backgroundColor: 'fuchsia' }} />
  )
  .add('type="password"', () => <Input type="password" />)
  .add('type="checkbox"', () => <Input type="checkbox" />)
  .add('type="radio"', () => <Input type="radio" />)
  .add('type="file"', () => <Input type="file" />)
