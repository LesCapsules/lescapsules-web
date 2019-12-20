import React from 'react'
import PropTypes from 'prop-types'

const Container = ({
  children,
  style,
  className = 'container',
  yPadding = false,
}) => {
  const cssClasses = `${className} ${yPadding ? 'py-5' : ''}`
  return (
    <div className={cssClasses} style={style}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Container
