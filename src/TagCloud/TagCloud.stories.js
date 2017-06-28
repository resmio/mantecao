import React from 'react'
import { storiesOf } from '@storybook/react'
import TagCloud from './TagCloud'

storiesOf('TagCloud', module)
  .add('with close', () =>
    <TagCloud
      names={['tag 1', 'tag next', 'tag end']}
      onClickAction={tag => {
        console.log('tag clicked:')
        console.log(tag)
      }}
    />
  )
  .add('without close', () => <TagCloud names={['do', 'not', 'touch']} />)
