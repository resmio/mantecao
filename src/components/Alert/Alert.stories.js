import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Alert from './Alert'

storiesOf('Alert', module)
  .add('type="error"', () => (
    <Alert type='error'>Error ☠️</Alert>
  ))
  .add('type="alert"', () => (
    <Alert type='alert'>Alert </Alert>
  ))
  .add('type="info"', () => (
    <Alert type='info'>Info</Alert>
  ))
  .add('type="success"', () => (
    <Alert type='success'>Success</Alert>
  ))
  .add('with Heading', () => (
    <Alert type='success' heading='Custom heading'>Success</Alert>
  ))
