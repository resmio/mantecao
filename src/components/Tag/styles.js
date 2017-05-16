import { css } from 'glamor'
import {colors} from '@resmio/rollico/dist/'

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
    ':hover': {
      color: 'rgba(188, 33, 63, 1)',
      cursor: 'pointer'
    }
  }),

  hover: css({
    background: 'rgba(188, 33, 63, 0.2)',
    color: colors.emperor,
    border: '1px solid rgba(188, 33, 63, 0.3)',
    borderLeft: '4px solid rgba(188, 33, 63, 1)'
  })
}
