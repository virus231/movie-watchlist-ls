import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {MovieCard} from "./MovieCard";

export const WatchList = () => {
    const {watchlist}  = useContext(GlobalContext)



    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My Watch List</h1>

                    <span className="count-pill">{watchlist.length} {watchlist.length === 1 ? 'movie' : 'movies'}</span>
                </div>

                {
                    watchlist.length > 0 ? (
                        <div className="movie-grid">
                            {
                                watchlist.map(movie => (
                                    <MovieCard movie={movie} type="watchlist"/>
                                ))
                            }
                        </div>
                    ) : (
                        <p className="no-movies">Nothing</p>
                    )
                }
            </div>
        </div>
    )
}
