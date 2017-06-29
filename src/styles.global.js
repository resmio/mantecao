import { injectGlobal } from 'styled-components'
import { theme } from './variables'

const globalStyles = () => {
  injectGlobal`
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
