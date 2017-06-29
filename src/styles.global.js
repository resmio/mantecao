import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

import { theme } from './variables'

const globalStyles = () => {
  injectGlobal`
    ${normalize({ excludeOpinionated: true })};

    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    html,
    body {
      height: 100%;
    }

    body {
      background-color: ${theme.backgroundColor};
      color: ${theme.fontColor};
      font-family: ${theme.fontFamily};
      font-size: ${theme.fontSize};
      line-height: ${theme.lineHeight};
    }
  `
}

export default globalStyles

// Run normalizr from storybook preview head
// In the app, run it from the section base, that way we don't include the normalizr on every component
