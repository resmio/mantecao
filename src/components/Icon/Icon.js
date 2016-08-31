import React, { PropTypes } from 'react'

const defaultStyle = {
  display: 'inline-block',
  strokeWidth: 1.5,
  fill: 'none',
  stroke: 'currentColor',
  height: '2.75rem',
  width: '2.75rem',
  verticalAlign: 'middle'
}

const small = {
  height: '2.1rem',
  width: '2.1rem'
}

const large = {
  height: '3.5rem',
  width: '3.5rem'
}

/**
 * Renders SVGs and applies some transforms (mirrorX/Y) - Small and large
 */
const Icon = (props) => {
  let componentStyle = Object.assign({}, defaultStyle)
  // assign new values from any styles passed as props
  Object.assign(componentStyle, props.style)
  // handle sizes
  if (props.small) {
    Object.assign(componentStyle, small)
  } else if (props.large) {
    Object.assign(componentStyle, large)
  }
  // handle mirroring
  let transform = ''
  if (props.mirrorX) {
    transform = 'translate(0, 32) scale(1, -1)'
  } else if (props.mirrorY) {
    transform = 'translate(32) scale(-1, 1)'
  }

  return (
    <svg viewBox='0 0 32 32' style={ componentStyle }>
      <g transform={ transform }>
        { props.children }
      </g>
    </svg>
  )
}

Icon.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  mirrorX: PropTypes.bool
}

export default Icon
