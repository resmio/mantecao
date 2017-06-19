import { css } from 'glamor'
import { colors } from '@resmio/rollico/dist/'

export const styles = {
  option: {
    wrapper: css({
      padding: '0.5rem 1rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      ':hover': {
        cursor: 'pointer',
        backgroundColor: colors.alto
      }
    }),
    checkIcon: {
      // <-- inline styles, not glamor
      strokeWidth: '3px',
      color: colors.pacificBlue
    },
    focused: css({
      backgroundColor: colors.alto
    }),
    text: css({
      paddingLeft: '0.75rem'
    })
  },
  options: {
    wrapper: css({
      maxHeight: '16rem',
      overflowX: 'hidden',
      overflowY: 'scroll'
    }),
    empty: css({
      padding: '0.5rem 1rem',
      fontStyle: 'italic',
      color: colors.silver
    })
  }
}
