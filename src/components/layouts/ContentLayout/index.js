import './style.css'
import React from 'react'

function ContentLayout(props) {
  return (
    <div id="ContentLayout">

      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default ContentLayout