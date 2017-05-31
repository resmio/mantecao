import { css } from 'glamor'
import { colors } from '@resmio/rollico/dist'

const styles = {
  field: hasError => css({
    background: colors.white,
    flex: '1 1 30%',
    fontSize: '1em',
    height: '2.4em',
    color: colors.dustyGray,
    borderColor: hasError ? colors.amaranth : colors.silver,
    ':focus': {
      outlineColor: hasError && colors.amaranth
    }
  })
}

export default styles
