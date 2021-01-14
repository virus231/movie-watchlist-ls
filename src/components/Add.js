import React, {useState} from 'react'
import {ResultCard} from "./ResultCard";

export const Add = () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])


    function onChange(e) {
        e.preventDefault()
        setQuery(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=364825fdc2d693d2615e949500be6a6b&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then(data => !data.errors ? setResults(data.results) : setResults([]))

    }

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Search Movie"
                            value={query}
                            onChange={onChange}
                        />
                    </div>

                    {
                        results.length > 0 && (
                            <ul className="results">
                                {results.map((movie, index) => (
                                    <li key={index}>
                                        <ResultCard movie={movie}/>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
