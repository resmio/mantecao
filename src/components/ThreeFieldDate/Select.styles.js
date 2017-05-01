import { css } from 'glamor'
import { colors } from '@resmio/rollico/dist'

const styles = {
  field: hasError => css({
    background: colors.white,
    fontSize: '1em',
    height: '2.4em',
    color: colors.dustyGray,
    borderColor: hasError ? colors.amaranth : colors.dustyGray,
    ':focus': {
      outline: 'none'
    }
  })
}

export default styles
