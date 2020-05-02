import { combineReducers } from 'redux'
import players from './players'
import profile from './profile'
import room from './room'

export default combineReducers({
    players,
    profile,
    room
})
