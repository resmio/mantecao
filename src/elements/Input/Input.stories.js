import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './Input'

storiesOf('Input', module)
  .add('default', () => (
    <Input placeholder='email@email.com'/>
  ))
<<<<<<< HEAD
  .add('disabled', () => (
    <Input disabled/>
  ))
  .add('with extra styling', () => (
    <Input style={{backgroundColor:'fuchsia'}}/>
  ))
=======
>>>>>>> Make the Input work for different types
  .add('type="password"', () => (
    <Input type='password'/>
  ))
  .add('type="checkbox"', () => (
    <Input type='checkbox'/>
<<<<<<< HEAD
  ))
  .add('type="radio"', () => (
    <Input type='radio'/>
  ))
  .add('type="file"', () => (
    <Input type='file'/>
=======
>>>>>>> Make the Input work for different types
  ))
