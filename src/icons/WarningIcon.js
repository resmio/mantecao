import React from 'react'

import { Icon } from '../components/Icon'

const WarningIcon = (props) => (
  <Icon { ...props }>
    <g>
      <path fill="currentColor" strokeWidth="0" d="M15.37 19.95L16.67 19.95 16.67 11.07 15.37 11.07 15.37 19.95ZM16.01 24.11C16.7 24.11 17.26 23.55 17.26 22.86 17.26 22.17 16.7 21.61 16.01 21.61 15.32 21.61 14.76 22.17 14.76 22.86 14.76 23.55 15.32 24.11 16.01 24.11Z" />
      <path strokeWidth="1.3" d="M15.54 2.87C15.8 2.39 16.24 2.39 16.5 2.87L30.55 28.13C30.82 28.61 30.59 29 30.04 29L2 29C1.45 29 1.22 28.61 1.48 28.13L15.54 2.87Z" />
    </g>
  </Icon>
)

export default WarningIcon
