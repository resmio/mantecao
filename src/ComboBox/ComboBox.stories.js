import React from 'react'
import { storiesOf } from '@storybook/react'
import ComboBox from './ComboBox'

storiesOf('ComboBox', module).add('default', () =>
  <ComboBox
    placeHolder="example combobox"
    options={[
      'option 1',
      'option 2',
      'option 3',
      'option 4',
      'option 5',
      'option 6',
      'optioasdfasdfasdfasdfasdfadsfafnoptioasdfasdfasdfasdfasdfadsfafnoptioasdfasdfasdfasdfasdfadsfafnoptioasdfasdfasdfasdfasdfadsfafnoptioasdfasdfasdfasdfasdfadsfafnoptioasdfasdfasdfasdfasdfadsfafn'
    ]}
    selectedOptions={['option 1', 'option 3']}
    onSelect={name => console.log('toggling ' + name)}
  />
)
