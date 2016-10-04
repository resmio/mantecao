import React from 'react'

import { Icon } from '../components/Icon'

const AddIcon = (props) => (
  <Icon { ...props }>
    <path d='M8.4 7.4L24.6 23.6M24.2 7.8L8 24' transform='translate(16, 16) rotate(-315) translate(-16, -16)' />
  </Icon>
)

export default AddIcon
