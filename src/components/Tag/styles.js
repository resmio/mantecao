import { css } from 'glamor'
import { colors } from '../../variables'

export const styles = {
  tag: css({
    backgroundColor: 'rgba(248,193,80,.2)',
    border: '1px solid rgba(248,193,80,.3)',
    borderLeft: `4px solid ${colors.goldenTainoi}`,
    borderRadius: '2px',
    color: colors.dustyGray,
    display: 'inline-block',
    fontSize: '12px',
    padding: '.5rem .8rem'
  }),

  close: css({
    cursor: 'pointer',
    display: 'inline-block',
    marginLeft: '0.75rem',
    ':hover': {
      color: 'rgba(188, 33, 63, 1)'
    }
  }),

  hover: css({
    background: 'rgba(188, 33, 63, 0.2)',
    color: colors.emperor,
    border: '1px solid rgba(188, 33, 63, 0.3)',
    borderLeft: '4px solid rgba(188, 33, 63, 1)'
  })
}
