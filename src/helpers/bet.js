import b5 from '../assets/chips/b5.png'
import b10 from '../assets/chips/b10.png'
import b20 from '../assets/chips/b20.png'
import b50 from '../assets/chips/b50.png'
import b100 from '../assets/chips/b100.png'
import b500 from '../assets/chips/b500.png'
import b1000 from '../assets/chips/b1000.png'
import c5 from '../assets/chips/c5.png'
import c10 from '../assets/chips/c10.png'
import c20 from '../assets/chips/c20.png'
import c50 from '../assets/chips/c50.png'
import c100 from '../assets/chips/c100.png'
import c500 from '../assets/chips/c500.png'
import c1000 from '../assets/chips/c1000.png'

export const chipImages = {
  b5, b10, b20, b50, b100, b500, b1000,
  c5, c10, c20, c50, c100, c500, c1000
}

export const getBetChips = (total, chipTypes = [5, 10, 20, 50, 100, 500, 1000]) => {
  if (!chipTypes.length) return []
  const chip = chipTypes.pop()
  const amount = parseInt(total / chip)
  let currentChips = []
  if (amount >= 1) currentChips = (new Array(amount)).fill(chip)
  const nextChips = getBetChips(total % chip, chipTypes.slice())
  return currentChips.concat(nextChips)
}

export const getBetChipImgAndPos = chips => {
  return chips.map((chip, index) => ({
    id: 'c' + chip + index,
    img: chipImages['c' + chip],
    pos: { top: (index / -5) + 'vw', left: 0 }
  }))
}

export const getTotalChipImgAndPos = chips => {
  return chips.map((chip, index) => ({
    id: 'b' + chip + index,
    img: chipImages['b' + chip],
    pos: {
      top: (Math.random() * 3).toFixed(2) + 'vw',
      left: (Math.random() * 3).toFixed(2) + 'vw'
    }
  }))
}