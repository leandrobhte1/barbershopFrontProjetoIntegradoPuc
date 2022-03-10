import React, { useReducer } from 'react'
import { initialState, rootReducer as reducer } from '../../store'
import CardHistorico from './CardHistorico'

const Historico = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div className="lineHistorico">
            <div className="left">
                <span className="hour lato">{props.hour}</span>
                <span className="date">{props.date}</span>
            </div>
            <div className="right">
                <CardHistorico service={props.service} barberShop={props.barberShop}  professional={props.professional} status={props.status} reason={props.reason} ></CardHistorico>
            </div>
        </div>
    )

}

export default Historico