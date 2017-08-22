import { css } from 'glamor'
import { colors, breakpoints } from '@resmio/mantecao/variables'

export const styles = {
  displayIf: isOpen =>
    css({
      display: isOpen ? 'block' : 'none'
    }),
  wrapper: (width = 80) =>
    css({
      position: 'fixed',
      top: '0',
      right: '0',
      left: '0',
      overflowY: 'auto',
      backgroundColor: colors.white,
      margin: '3rem',
      zIndex: '100001', // <-- haha, well we should do this right probably :)
      opacity: '1',
      [`@media(min-width: ${breakpoints.mediumDesktop})`]: {
        maxWidth: `${width}rem`,
        margin: '3rem auto'
      }
    }),
  overlay: css({
    position: 'fixed',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    zIndex: '100000', // <-- haha, well we should do this right probably :)
    backgroundColor: colors.black,
    opacity: '0.7'
  })
}
