import React, { PropTypes } from 'react'

import { iconSizes } from '../variables'

const defaultStyle = {
  display: 'inline-block',
  strokeWidth: 1.5,
  fill: 'none',
  stroke: 'currentColor',
  pointerEvents: 'none',
  height: iconSizes.medium,
  width: iconSizes.medium,
  verticalAlign: 'middle'
}

const xsmall = {
  height: iconSizes.xsmall,
  width: iconSizes.xsmall
}

const small = {
  height: iconSizes.small,
  width: iconSizes.small
}

const large = {
  height: iconSizes.large,
  width: iconSizes.large
}

/**
 * Renders SVGs and applies some transforms (mirrorX/Y) - Small and large
 */
const Icon = props => {
  let componentStyle = Object.assign({}, defaultStyle)
  // assign new values from any styles passed as props
  Object.assign(componentStyle, props.style)
  // handle width
  if (props.xsmall) {
    Object.assign(componentStyle, xsmall)
  } else if (props.small) {
    Object.assign(componentStyle, small)
  } else if (props.large) {
    Object.assign(componentStyle, large)
  }

  // handle explicit width/height
  if (props.width) {
    Object.assign(componentStyle, { width: props.width })
  }
  if (props.height) {
    Object.assign(componentStyle, { height: props.height })
  }

  // handle mirroring (done at path group level)
  let transform = ''
  if (props.mirrorX) {
    transform = 'translate(0, 32) scale(1, -1)'
  } else if (props.mirrorY) {
    transform = 'translate(32) scale(-1, 1)'
  }

  // handle rotation (done at svg level)
  if (props.rotate) {
    Object.assign(componentStyle, {
      transform: 'rotate(' + props.rotate + 'deg)'
    })
  }

  return (
    <svg viewBox="0 0 32 32" style={componentStyle} className={props.className}>
      <g transform={transform || props.transform}>
        {props.children}
      </g>
    </svg>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  large: PropTypes.bool,
  mirrorX: PropTypes.bool,
  small: PropTypes.bool,
  style: PropTypes.object,
  xsmall: PropTypes.bool
}

export default Icon
