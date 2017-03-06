import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Badge from '../components/Badge';
import Button from '../components/Button';

storiesOf('Button', module)
  .add('no props', () => (
    <Button>Hola from Button</Button>
  ))
  .add('with background color', () => (
    <Button background='#B4D455'>Hola from Button</Button>
  ))
  .add('disabled', () => (
    <Button onClick={function(){console.log('click')}} disabled>Hola from Button</Button>
  ))
  .add('with a border', () => (
    <Button onClick={function(){console.log('click')}} border='#FF0000'>Hola from Button</Button>
  ))
  .add('with background and text color', () => (
    <Button onClick={function(){console.log('click')}} background='#B4D455' color='#B000B5'>Hola from Button</Button>
  ));


storiesOf('Badge', module)
  .add('with some text', () => (
    <Badge>Hola</Badge>
  ))
  .add('a warning', () => (
    <Badge type='warning'>Hola</Badge>
  ));
