import './style.css'
import { getCard } from '../../../helpers/deck'
import { getPosition } from '../../../helpers/seats'
import React from 'react'

function PokerCard(props) {
  const card = getCard(props.suit, props.number)
  const position = getPosition(props.id)
  return (
    <div id={props.id} className="poker-card" style={position}>
      <img src={card} alt="card" />
    </div>
  )
}

export default PokerCard