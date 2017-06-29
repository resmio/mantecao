import globalStyles from './styles.global'

const normalizeStyles = () => {
  process.env.NODE_ENV === 'development' ? globalStyles() : () => {}
}

export default normalizeStyles
