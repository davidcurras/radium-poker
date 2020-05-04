export const getPlayerPosition = playerId => {
  switch (playerId) {
    case 'P1':
      return { top: '17vw', left: '5vw' }
    case 'P2':
      return { top: '11vw', left: '-3vw' }
    case 'P3':
      return { top: '3vw', left: '-3vw' }
    case 'P4':
      return { top: '-3vw', left: '5vw' }
    case 'P5':
      return { top: '-3vw', left: '15vw' }
    case 'P6':
      return { top: '-3vw', left: '26vw' }
    case 'P7':
      return { top: '3vw', left: '34vw' }
    case 'P8':
      return { top: '11vw', left: '34vw' }
    case 'P9':
      return { top: '17vw', left: '26vw' }
    case 'Dealer':
      return { top: '16vw', left: '15vw' }
    default:
      return {}
  }
}

export const getCardPosition = playerId => {
  switch (playerId) {
    case 'P1C1':
      return { top: '15vw', left: '5vw' }
    case 'P1C2':
      return { top: '15vw', left: '7vw' }
    case 'P2C1':
      return { top: '11vw', left: '0vw' }
    case 'P2C2':
      return { top: '11vw', left: '2vw' }
    case 'P3C1':
      return { top: '4vw', left: '0vw' }
    case 'P3C2':
      return { top: '4vw', left: '2vw' }
    case 'P4C1':
      return { top: '0vw', left: '5vw' }
    case 'P4C2':
      return { top: '0vw', left: '7vw' }
    case 'P5C1':
      return { top: '0vw', left: '15vw' }
    case 'P5C2':
      return { top: '0vw', left: '17vw' }
    case 'P6C1':
      return { top: '0vw', left: '26vw' }
    case 'P6C2':
      return { top: '0vw', left: '28vw' }
    case 'P7C1':
      return { top: '4vw', left: '31vw' }
    case 'P7C2':
      return { top: '4vw', left: '33vw' }
    case 'P8C1':
      return { top: '11vw', left: '31vw' }
    case 'P8C2':
      return { top: '11vw', left: '33vw' }
    case 'P9C1':
      return { top: '15vw', left: '26vw' }
    case 'P9C2':
      return { top: '15vw', left: '28vw' }
    case 'F1':
      return { top: '7vw', left: '10vw' }
    case 'F2':
      return { top: '7vw', left: '12.5vw' }
    case 'F3':
      return { top: '7vw', left: '15vw' }
    case 'T':
      return { top: '7vw', left: '19vw' }
    case 'R':
      return { top: '7vw', left: '23vw' }
    default:
      return {}
  }
}

export const getBetPosition = playerId => {
  switch (playerId) {
    case 'BP1':
      return { top: '16.6vw', left: '9.5vw' }
    case 'BP2':
      return { top: '13vw', left: '4.5vw' }
    case 'BP3':
      return { top: '6vw', left: '4.5vw' }
    case 'BP4':
      return { top: '2vw', left: '9.5vw' }
    case 'BP5':
      return { top: '2vw', left: '19.5vw' }
    case 'BP6':
      return { top: '2vw', left: '23.5vw' }
    case 'BP7':
      return { top: '6vw', left: '28.5vw' }
    case 'BP8':
      return { top: '13vw', left: '28.5vw' }
    case 'BP9':
      return { top: '16.6vw', left: '23.5vw' }
    case 'Total':
      return { top: '11vw', left: '15vw' }
    default:
      return {}
  }
}