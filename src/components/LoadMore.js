import React, { PropTypes } from 'react'

const defaultContainerStyle = {
  textAlign: 'center'
}
const defaultLinkStyle = {
  cursor: 'pointer'
}

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
