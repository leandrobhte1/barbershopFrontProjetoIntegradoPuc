import React, { useReducer } from 'react'
import { initialState, rootReducer as reducer } from '../../store'

import ProfessionalIMG from './images/user.png'

const CardHistorico = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div className="cardHistorico">
            <div className={"leftBar " + (props.status === 'NOK' && 'red')}></div>
            <div className="optionsCard">
                <a href="#">
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                </a>
            </div>
            <div className="info">
                <span className="service lato">{props.service}</span>
                <span className="barbershop lato">{props.barberShop}</span>
                <div className="lineBottom">
                    <div className="professional">
                        <img src={ProfessionalIMG} alt="Professional" />
                        <span className="nameProfessional">{props.professional}</span>
                    </div>
                    {props.status == 'NOK' &&
                        <span className="reason poppins">{props.reason}</span>
                    }
                    {props.status == 'OK' &&
                        <a href="avaliacao"><button className="avaliarServicoBT lato">Avaliar serviço</button></a>
                    }
                </div>
            </div>
        </div>
    )

}

export default CardHistorico