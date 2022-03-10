import React, { useReducer } from 'react'
import { initialState, rootReducer as reducer } from '../../store'

import LineHistorico from '../../components/common/LineHistorico'

import { toastr } from 'react-redux-toastr'

const Historico = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    
    let fakeHistory = [{id: 1, client: 'Leandro Oliveira', service: 'Corte de cabelo', date: "22/01/2022", hour: "12:15", barberShop: "Barbearia Almeida", professional: 'Wesley Almeida', status: 'OK', reason:''},
                       {id: 2, client: 'Leandro Oliveira', service: 'Corte de cabelo', date: "22/01/2022", hour: "11:45", barberShop: "Barbearia Almeida", professional: 'Wesley Almeida', status: 'OK', reason:''},
                       {id: 3, client: 'Matheus Pereira', service: 'Corte de cabelo', date: "18/01/2022", hour: "16:30", barberShop: "Barbearia Almeida", professional: 'Isaque Almeida', status: 'OK', reason:''},
                       {id: 4, client: 'Claudia Ramos', service: 'Pintura de unha', date: "07/01/2022", hour: "10:00", barberShop: "Barbearia Almeida", professional: 'Isabelle Oliveira', status: 'OK', reason:''},
                       {id: 5, client: 'Claudia Ramos', service: 'Pintura de unha', date: "27/12/2021", hour: "18:45", barberShop: "Barbearia Almeida", professional: 'Isabelle Oliveira', status: 'NOK', reason:'Não compareceu'},
                       {id: 6, client: 'Leandro Oliveira', service: 'Corte de cabelo', date: "18/12/2021", hour: "11:30", barberShop: "Barbearia Almeida", professional: 'Wesley Almeida', status: 'OK', reason:''},
                       {id: 7, client: 'Leandro Oliveira', service: 'Corte de cabelo', date: "13/12/2021", hour: "08:00", barberShop: "Barbearia Almeida", professional: 'Wesley Almeida', status: 'NOK', reason:'Desmarcado'},
                       {id: 8, client: 'Joao Gomes', service: 'Corte de cabelo', date: "01/12/2021", hour: "09:45", barberShop: "Barbearia Almeida", professional: 'Rodrigo Oliveira', status: 'OK', reason:''},
                       {id: 9, client: 'Vitor Gonçalves', service: 'Corte de cabelo', date: "23/11/2021", hour: "12:30", barberShop: "Barbearia Almeida", professional: 'Rogerio Silva', status: 'OK', reason:''},
                       {id: 10, client: 'Guilherme Costa', service: 'Corte de cabelo', date: "14/11/2021", hour: "07:30", barberShop: "Barbearia Almeida", professional: 'Ricardo Camillo', status: 'NOK', reason:'Desmarcado'}
    ]

    return(
        <div className="historico">
                <h1 className="tittleHistorico poppins">Histórico de atendimentos:</h1>
                <div className="titleSectionHistorico">
                    <h3 className="subtittle dateHour">Data e Hora</h3>
                    <div className="lineBetween"></div>
                    <h3 className="subtittle">Serviço</h3>
                </div>
                <div className="infoHistorico">
                    {fakeHistory.map( (history) => 
                        <div key={history.id}>
                            <LineHistorico service={history.service} date={history.date} hour={history.hour} barberShop={history.barberShop}  professional={history.professional} status={history.status} reason={history.reason} ></LineHistorico>
                        </div>)
                    }
                </div>
            </div>
    )

}

export default Historico