import './style.css'
import React from 'react'
import { shuffle } from 'lodash'
import { getBetPosition } from '../../../helpers/seats'
import { getBetChips, getTotalChipImgAndPos } from '../../../helpers/bet'

function TotalBet(props) {
  const position = getBetPosition('Total')
  const chips = shuffle(getBetChips(props.amount))
  const chipsWithPos = getTotalChipImgAndPos(chips)
  return (
    <div className="bet" style={position}>
      {
        chipsWithPos.map(
          chip => <img key={chip.id} src={chip.img} style={chip.pos} alt="chip" />
        )
      }
    </div>
  )
}

export default TotalBet