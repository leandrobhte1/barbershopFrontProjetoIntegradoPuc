import React, { useReducer } from 'react'
import { initialState, rootReducer as reducer } from '../../store'

const Search = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div className="Search">
            <h1>Component Search</h1>
        </div>
    )

}

export default Search