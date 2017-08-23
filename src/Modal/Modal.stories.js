import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Modal from './Modal'

storiesOf('Modal', module).add('default', () =>
  <Modal show onClose={action('onClose')}>
    <div style={{ background: '#FFF', padding: '1em' }}>
      default modal
    </div>
  </Modal>
)
