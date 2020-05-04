import './style.css'
import React from 'react'
import { getCard } from '../../../helpers/deck'
import { getCardPosition } from '../../../helpers/seats'

function PokerCard(props) {
  const card = getCard(props.suit, props.number)
  const position = getCardPosition(props.id)
  return (
    <div id={props.id} className="poker-card shadow" style={position}>
      <img src={card} alt="card" />
    </div>
  )
}

export default PokerCard