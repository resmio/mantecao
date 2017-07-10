import React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from './Tag'

storiesOf('Tag', module)
  .add('with close', () =>
    <div>
      <Tag name="tag 1" onClickAction={() => console.log('tag clicked')} />
      <Tag name="donotremove" />
    </div>
  )
  .add('without close', () => <Tag name="donotremove" />)
