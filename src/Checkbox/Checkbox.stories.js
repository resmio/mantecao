import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Checkbox from './Checkbox'
import InlineAlert from '../InlineAlert'

storiesOf('Checkbox', module)
  .add('default', () =>
    <Checkbox
      label="hello checkbox"
      onChange={action('checkbox clicked')}
      checked={true}
    />
  )
  .add('with children', () =>
    <Checkbox
      label="hello checkbox"
      onChange={action('checkbox clicked')}
      checked={true}
    >
      <InlineAlert type="error">You can send errors in as children</InlineAlert>
    </Checkbox>
  )
  .add('disabled', () =>
    <Checkbox
      label="hello checkbox"
      disabled
      onChange={action('checkbox clicked')}
      checked={true}
    />
  )
  .add('with label clickable', () =>
    <Checkbox
      label="hello checkbox"
      allowLabelClick
      onChange={action('checkbox clicked')}
      checked={true}
    />
  )
