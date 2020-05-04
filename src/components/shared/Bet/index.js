import './style.css'
import React from 'react'
import { getBetPosition } from '../../../helpers/seats'
import { getBetChips, getBetChipImgAndPos } from '../../../helpers/bet'

function Bet(props) {
  const { id, amount } = props
  const position = getBetPosition(id)
  const chips = getBetChips(amount)
  const chipsWithPos = getBetChipImgAndPos(chips)
  return (
    <div className="bet" style={position}>
      {
        chipsWithPos.map(
          chip => <img key={chip.id} src={chip.img} style={chip.pos} alt="chip" className="light-shadow" />
        )
      }
    </div>
  )
}

export default Bet