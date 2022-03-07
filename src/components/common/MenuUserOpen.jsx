import React, { Component } from 'react'
import MenuItem from './MenuItem'
import AgendaIcon from './images/agenda.png'
import HistoricoIcon from './images/historico.png'
import AvaliacoesIcon from './images/avaliacoes.png'
import RelatoriosIcon from './images/relatorios.png'

export default class MenuUserOpen extends Component {

    constructor(props) {
        super(props)
        this.state = {idAdmin: true};
    }

    closeMenu(){
        // $('.main-sidebar').removeClass('d-flex');
        // $('.main-sidebar').addClass('d-none');
    }

    render(){

        const isAdmin = this.state.idAdmin;

        return (
            <div className="menuUserOpen">
                <ul className="userLogadoOpen">
                    <li>
                        <a onClick={this.closeMenu} href='#agenda'>
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

}
