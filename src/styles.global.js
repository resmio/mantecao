import { injectGlobal } from 'styled-components'
import { theme } from './variables'

// Those are base styles that we want to include on every component
const globalStyles = () => {
  injectGlobal`
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
