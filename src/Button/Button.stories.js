import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

storiesOf('Button', module)
  .add('default', () => <Button>yo</Button>)
  .add('with color', () => <Button color="red">yo color</Button>)
  .add('border only', () => <Button borderOnly>yo</Button>)
  .add('border only with color', () =>
    <Button borderOnly color="red">yo color</Button>
  )
  .add('diabled', () => <Button disabled>yo</Button>)
  .add('diabled border only', () => <Button borderOnly disabled>yo</Button>)
