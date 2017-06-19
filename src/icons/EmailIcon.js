import React from 'react'

import { Icon } from '../components/Icon'

const EmailIcon = props =>
  <Icon {...props}>
    <g transform="translate(2, 7)">
      <rect x="0" y="0" width="27" height="17" rx="1" />
      <path d="M0.9 1.3L12.6 8.3C13.1 8.6 13.9 8.6 14.3 8.3L26.3 1.3" />
    </g>
  </Icon>

export default EmailIcon
