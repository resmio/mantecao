import { configure } from '@storybook/react';

// use this if we want to include rollico:
// import '@resmio/rollico/dist/rollico.css'

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
