import './style.css'
import chip from '../../../assets/chips/b50.png'
import React from 'react'

function Bet(props) {
  return (
    <div className="bet">
      <img src={chip} alt="chip" />
    </div>
  )
}

export default Bet