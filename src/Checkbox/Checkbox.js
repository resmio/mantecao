import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../variables'
import { CheckIcon, BlankIcon } from '../icons'

const Container = styled.div`display: flex;`
const CheckboxDiv = styled.div`
  flex: 0 1 auto;
  margin-right: 1em;
`
const LabelDiv = styled.div`flex: 1 1 auto;`
const ChildrenDiv = styled.div`padding-top: 0.3em;`
const LabelText = styled.span`
  display: flex;
  cursor: ${props => (props.clickable ? 'pointer' : 'inherit')};
`
const CheckboxButton = styled.div`
  background: ${props => (props.checked ? props.color : colors.white)};
  border: 1px solid ${props => (props.checked ? props.color : 'currentColor')};
  border-radius: 2px;
  color: ${props => (props.checked ? colors.white : 'currentColor')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  padding: 0.1em;
`

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: props.checked
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== undefined) {
      this.setState({ checked: nextProps.checked })
    }
  }
  render() {
    const {
      checked,
      disabled,
      label,
      color,
      children,
      allowLabelClick
    } = this.props
    return (
      <Container>
        <CheckboxDiv>
          <CheckboxButton
            color={color}
            disabled={disabled}
            checked={this.state.checked}
            onClick={this._toggleCheckbox}
          >
            {this.state.checked === true
              ? <CheckIcon
                  style={{
                    width: '1.2em',
                    height: '1.2em',
                    strokeWidth: '2.5px'
                  }}
                />
              : <BlankIcon style={{ width: '1.2em', height: '1.2em' }} />}
          </CheckboxButton>
        </CheckboxDiv>
        <LabelDiv>
          {label &&
            <LabelText
              clickable={allowLabelClick && !disabled}
              onClick={disabled ? () => false : this._toggleCheckbox}
            >
              {label}
            </LabelText>}
          {children && <ChildrenDiv>{children}</ChildrenDiv>}
        </LabelDiv>
      </Container>
    )
  }
  _toggleCheckbox = () => {
    const { onChange } = this.props
    if (!this.props.disabled) {
      this.setState({ checked: !this.state.checked }, () => {
        onChange(this.state.checked)
      })
    }
  }
}

Checkbox.defaultProps = {
  color: colors.blueBayoux
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  allowLabelClick: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired
}

export default Checkbox
