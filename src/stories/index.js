import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
// import Alert from '../components/Alert';
import Badge from '../components/Badge';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Badge', module)
  .add('with some text', () => (
    <Badge>Hola</Badge>
  ));

// storiesOf('Alert', module)
//   .add('error', () => (
//     <Alert isOpen type="error" heading="example alert" message="some error" />
//   ))
//   .add('warning', () => (
//     <Alert isOpen type="warning" heading="example alert" message="something important" />
//   ))
//   .add('with onRemove', () => (
//     <Alert isOpen type="error" heading="example alert" message="something important" onRemove={action('removed')} />
//   ));
