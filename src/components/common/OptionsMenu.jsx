import React, { useReducer, useEffect } from 'react'
import { initialState, rootReducer as reducer } from '../../store'
import AgendaIcon from './images/agenda.png'
import HistoricoIcon from './images/historico.png'
import AvaliacoesIcon from './images/avaliacoes.png'
import RelatoriosIcon from './images/relatorios.png'

import { login } from '../../store/actions/user'

const OptionsMenu = props => {

    const [state, dispatch] = useReducer(reducer, initialState)


    // useEffect(() => {
    //     let user = { name: 'Leandro', role: 'Admin', logado: true};
    //     login(dispatch, user)
    // }, []);

    let isAdmin = false;
    if(state.user.user.role == 'Admin'){
        isAdmin = true;
    }

    return(
        <div className="menuUserOpen">
            <ul className="userLogadoOpen">
                <li>
                    <a href='#agenda'>
                        <span>Agenda</span>
                        <img className="iconMenuUserOpen agendaIcon" src={AgendaIcon} alt="Agenda" />
                    </a>
                </li>
                <li>
                    <a href='#historico'>
                        <span>Histórico</span>
                        <img className="iconMenuUserOpen historicoIcon" src={HistoricoIcon} alt="Histórico" />
                    </a>
                </li>
                <li>
                    <a href='#avaliacao'>
                        <span>Avaliações</span>
                        <img className="iconMenuUserOpen avaliacoesIcon" src={AvaliacoesIcon} alt="Avaliações" />
                    </a>
                </li>
                {isAdmin == true &&
                    <li>
                        <a href='#relatorios'>
                            <span>Relatórios</span>
                            <img className="iconMenuUserOpen relatoriosIcon" src={RelatoriosIcon} alt="Relatórios" />
                        </a>
                    </li>
                }
            </ul>
        </div>
    )

}


export default OptionsMenu