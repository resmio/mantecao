import React from 'react'
import { storiesOf } from '@storybook/react'
import DateSelector from './DateSelector'

storiesOf('DateSelector', module)
  .add('allow reset', () =>
    <DateSelector date="2017-07-31" allowReset onChange={() => {}} />
  )
  .add('month before day', () =>
    <DateSelector monthBeforeDay date="2017-07-31" onChange={() => {}} />
  )
  .add('no date prop', () => <DateSelector onChange={() => {}} />)
  .add('custom month names', () =>
    <DateSelector
      onChange={() => {}}
      monthNames={[
        'Gener',
        'Febrer',
        'Març',
        'Abril',
        'Maig',
        'Juny',
        'Juliol',
        'Agost',
        'Setembre',
        'Octubre',
        'Novembre',
        'Desembre'
      ]}
    />
  )
