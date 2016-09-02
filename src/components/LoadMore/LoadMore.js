import React, { PropTypes } from 'react'

const defaultContainerStyle = {
  textAlign: 'center'
}
const defaultLinkStyle = {
  cursor: 'pointer'
}

/**
 * takes a fetch and amount unloaded and renders button if more are needed
 */
const LoadMore = (props) => {
  const loadMoreLink = props.unloadedCount > 0
    ? <a style={ defaultLinkStyle } onClick={ props.fetch }>load more</a> : null
  return (
    <div style={ defaultContainerStyle }>
      { props.loading ? <span>loading.....</span> : loadMoreLink }
    </div>
  )
}

LoadMore.propTypes = {
  unloadedCount: PropTypes.number,
  loading: PropTypes.bool,
  fetch: PropTypes.func.isRequired
}

export default LoadMore
