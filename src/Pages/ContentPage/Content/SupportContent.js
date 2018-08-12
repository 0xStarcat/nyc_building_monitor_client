import React from 'react'

import './style.scss'

const SupportContent = () => {
  return (
    <div className="text-content">
      <p>Support this page. (coming soon!)</p>
      <p>
        <a href="https://goo.gl/forms/oajXFoqCKPXGy0Sn1" target="_blank" rel="noopener noreferrer">
          Please take a short user experience survey
        </a>{' '}
        to help improve the site!
      </p>

      <p>
        The entire project is built using my free labor and time. If you are in a position to do so, please consider
        <a href="https://ko-fi.com/P5P6H7P5" target="_blank" rel="noopener noreferrer">
          donating a few dollars
        </a>{' '}
        to support this work and the server costs for maintaining this project.
      </p>
    </div>
  )
}

export default SupportContent
