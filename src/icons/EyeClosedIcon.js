import React from 'react'

import { Icon } from '../components/Icon'

const EyeClosedIcon = (props) => (
  <Icon { ...props }>
    <g transform="translate(1 8)">
      <path stroke="currentColor"  stroke-width="1.3" d="M14.806 16.59c8.686 0 14.133-6.603 14.133-6.603.37-.403.375-1.06-.014-1.467 0 0-5.434-6.54-14.12-6.54C6.12 1.98.674 8.532.674 8.532c-.372.4-.376 1.06 0 1.454 0 0 5.447 6.602 14.132 6.602zm.194-.026c4.01 0 7.258-3.272 7.258-7.308S19.008 1.95 15 1.95c-4.01 0-7.258 3.27-7.258 7.306s3.25 7.308 7.258 7.308zm-9.92 2.192L24.92.244" />
      <ellipse fill="currentColor" cx="14.758" cy="9.5" rx="3.629" ry="3.654"/>
    </g>
  </Icon>
)

export default EyeClosedIcon
