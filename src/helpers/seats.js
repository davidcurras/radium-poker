export const getPosition = playerId => {
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
      return { top: '10vw', left: '10vw' }
    case 'F2':
      return { top: '10vw', left: '12.5vw' }
    case 'F3':
      return { top: '10vw', left: '15vw' }
    case 'T':
      return { top: '10vw', left: '19vw' }
    case 'R':
      return { top: '10vw', left: '23vw' }
    default:
      return {}
  }
}