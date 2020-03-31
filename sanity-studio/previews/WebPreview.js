import React from 'react'

const WebPreview = ({ options }) => (
  <div>
    <iframe
      src={options.previewUrl}
      width="100%"
      style={{ position: 'absolute', height: '100%' }}
      frameBorder={0}
    />
  </div>
)

export default WebPreview
