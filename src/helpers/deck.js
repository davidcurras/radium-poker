import c1n1 from '../assets/cards/1-1.png'
import c1n2 from '../assets/cards/1-2.png'
import c1n3 from '../assets/cards/1-3.png'
import c1n4 from '../assets/cards/1-4.png'
import c1n5 from '../assets/cards/1-5.png'
import c1n6 from '../assets/cards/1-6.png'
import c1n7 from '../assets/cards/1-7.png'
import c1n8 from '../assets/cards/1-8.png'
import c1n9 from '../assets/cards/1-9.png'
import c1n10 from '../assets/cards/1-10.png'
import c1n11 from '../assets/cards/1-11.png'
import c1n12 from '../assets/cards/1-12.png'
import c1n13 from '../assets/cards/1-13.png'
import c2n1 from '../assets/cards/2-1.png'
import c2n2 from '../assets/cards/2-2.png'
import c2n3 from '../assets/cards/2-3.png'
import c2n4 from '../assets/cards/2-4.png'
import c2n5 from '../assets/cards/2-5.png'
import c2n6 from '../assets/cards/2-6.png'
import c2n7 from '../assets/cards/2-7.png'
import c2n8 from '../assets/cards/2-8.png'
import c2n9 from '../assets/cards/2-9.png'
import c2n10 from '../assets/cards/2-10.png'
import c2n11 from '../assets/cards/2-11.png'
import c2n12 from '../assets/cards/2-12.png'
import c2n13 from '../assets/cards/2-13.png'
import c3n1 from '../assets/cards/3-1.png'
import c3n2 from '../assets/cards/3-2.png'
import c3n3 from '../assets/cards/3-3.png'
import c3n4 from '../assets/cards/3-4.png'
import c3n5 from '../assets/cards/3-5.png'
import c3n6 from '../assets/cards/3-6.png'
import c3n7 from '../assets/cards/3-7.png'
import c3n8 from '../assets/cards/3-8.png'
import c3n9 from '../assets/cards/3-9.png'
import c3n10 from '../assets/cards/3-10.png'
import c3n11 from '../assets/cards/3-11.png'
import c3n12 from '../assets/cards/3-12.png'
import c3n13 from '../assets/cards/3-13.png'
import c4n1 from '../assets/cards/4-1.png'
import c4n2 from '../assets/cards/4-2.png'
import c4n3 from '../assets/cards/4-3.png'
import c4n4 from '../assets/cards/4-4.png'
import c4n5 from '../assets/cards/4-5.png'
import c4n6 from '../assets/cards/4-6.png'
import c4n7 from '../assets/cards/4-7.png'
import c4n8 from '../assets/cards/4-8.png'
import c4n9 from '../assets/cards/4-9.png'
import c4n10 from '../assets/cards/4-10.png'
import c4n11 from '../assets/cards/4-11.png'
import c4n12 from '../assets/cards/4-12.png'
import c4n13 from '../assets/cards/4-13.png'
import cbackn from '../assets/cards/back.png'

const deck = {
  c1n1, c1n2, c1n3, c1n4, c1n5, c1n6, c1n7, c1n8, c1n9, c1n10, c1n11, c1n12, c1n13,
  c2n1, c2n2, c2n3, c2n4, c2n5, c2n6, c2n7, c2n8, c2n9, c2n10, c2n11, c2n12, c2n13,
  c3n1, c3n2, c3n3, c3n4, c3n5, c3n6, c3n7, c3n8, c3n9, c3n10, c3n11, c3n12, c3n13,
  c4n1, c4n2, c4n3, c4n4, c4n5, c4n6, c4n7, c4n8, c4n9, c4n10, c4n11, c4n12, c4n13,
  cbackn
}

export const getCard = (suit, number = '') => {
  let suitNumber
  if (suit === 'h' || suit === 1) suitNumber = 1 //hearts
  else if (suit === 'd' || suit === 2) suitNumber = 2 //diamonds
  else if (suit === 'c' || suit === 3) suitNumber = 3 //clubs
  else if (suit === 's' || suit === 4) suitNumber = 4 //spades
  else suitNumber = 'back'
  return deck[`c${suitNumber}n${number}`]
}
