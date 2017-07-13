import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

storiesOf('Button', module)
  .add('default', () => <Button>yo</Button>)
  .add('with color', () => <Button color="red">yo color</Button>)
  .add('diabled', () => <Button disabled>yo</Button>)
  .add('hollow', () => <Button hollow>yo</Button>)
  .add('hollow with color', () => <Button hollow color="red">yo color</Button>)
  .add('hollow diabled', () => <Button hollow disabled>yo</Button>)
