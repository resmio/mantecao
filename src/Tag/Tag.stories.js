import React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from './Tag'

storiesOf('Tag', module)
  .add('with close', () =>
    <Tag name="tag 1" onClickAction={() => console.log('tag clicked')} />
  )
  .add('without close', () => <Tag name="donotremove" />)
