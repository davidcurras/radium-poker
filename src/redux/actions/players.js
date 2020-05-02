export const LOAD_PLAYERS = 'mcga/LOAD_PLAYERS'
export const SET_PLAYER_ERROR = 'mcga/SET_PLAYER_ERROR'
export const SET_PLAYER_LOADING = 'mcga/SET_PLAYER_LOADING'
export const ADD_PLAYER = 'mcga/ADD_PLAYER'

export const loadPlayers = players => {
    return {
        type: LOAD_PLAYERS,
        payload: players
    }
}

export const setPlayerError = err => {
    return {
        type: SET_PLAYER_ERROR,
        payload: err
    }
}

export const setPlayerLoading = () => {
    return {
        type: SET_PLAYER_LOADING
    }
}

export const addPlayer = () => {
    return {
        type: ADD_PLAYER,
        payload: {
            id: Date.now(),
            price: Math.random() * 100,
            name: 'caramelos'
        }
    }
}