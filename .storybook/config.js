import { configure } from '@storybook/react';

// use this if we want to include rollico:
import '@resmio/rollico/dist/rollico.css'

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  // move icons to top
  const storiesFiles = req.keys()
  const index = storiesFiles.findIndex((file) => file.indexOf('icons') > -1)
  const iconStores = storiesFiles.splice(index, 1)[0]
  storiesFiles.unshift(iconStores)

  storiesFiles.forEach((filename) => req(filename))
}

configure(loadStories, module);
