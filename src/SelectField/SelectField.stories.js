import React from 'react'
import { storiesOf } from '@storybook/react'
import SelectField from './SelectField'

storiesOf('SelectField', module).add('default', () =>
  <SelectField
    className="testClass"
    hint="this is a hint"
    id="testId"
    label="this is a label"
    options={['option 1', 'option 2']}
    optionValues={['option 1', 'option 2']}
    onChange={e => alert('"' + e.target.value + '"' + ' was selected')}
  />
)
