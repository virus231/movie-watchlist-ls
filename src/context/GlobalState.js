import React, { useEffect, useReducer, createContext } from 'react'
import AppReducer from './AppReducer'


// initial State

const initialState = {
    watchlist: [],
    watched: []
}


// createContext
export const GlobalContext = createContext(initialState)

// provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // actions
    const addMovieToWatchList = movie => {
        dispatch({type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie})
    }



    return (
        <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched, addMovieToWatchList}}>
            {props.children}
        </GlobalContext.Provider>
    )

}
