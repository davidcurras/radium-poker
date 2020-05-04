import './style.css'
import React from 'react'
import { getPlayerPosition } from '../../../helpers/seats'

function Player(props) {
  const position = getPlayerPosition(props.id)
  return (
    <div id={props.id} className="player shadow" style={position}>
      {/* <img src={avatar} alt="avatar" /> */}
    </div>
  )
}

export default Player