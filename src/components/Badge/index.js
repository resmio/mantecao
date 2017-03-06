import React, { PropTypes } from 'react'
import styled from 'styled-components';

import {colors} from '../../variables'

const types = {
  warning: colors.metallicGold
}

const Badge = styled.span`
  display: inline-block;
  min-width: 10px;
  padding: 1px 7px;
  font-size: 12px;
  font-weight: 700;
  color: ${colors.white};
  vertical-align: bottom;
  white-space: nowrap;
  text-align: center;
  background-color: ${ props => types[props.type] || colors.dustyGray };
  border-radius: 10px;
`

export default Badge
