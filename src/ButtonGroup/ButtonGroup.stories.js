import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ButtonGroup from './ButtonGroup'

storiesOf('ButtonGroup', module).add('default', () =>
  <div>
    <ButtonGroup
      options={[1, 2, 3, 4, 5]}
      optionValues={['a', 'b', 'c', 'd', 'e']}
      selected={[1, 4, 5]}
      onChange={action('onChange')}
    />
  </div>
)
