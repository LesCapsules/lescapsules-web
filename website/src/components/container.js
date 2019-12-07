import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, style, className = 'container' }) => (
  <div className={className} style={style}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Container
