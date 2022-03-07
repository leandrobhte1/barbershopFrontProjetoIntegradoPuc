import React, { useReducer } from 'react'
import { initialState, rootReducer as reducer } from '../../store'

import Input from '../../components/common/Input'
import Vantagens from '../../components/common/vantagens/vantagens'
// import BestBarberShops from '../../components/common/bestBarberShops/bestBarberShops'
import HomeAgenda from '../../components/common/homeAgenda/homeAgenda'
import Galeria from '../../components/common/galeria/galeria'
import Avaliacoes from '../../components/common/avaliacoes/avaliacoes'
import LogoHome from '../../components/common/images/logo.png'
import SearchIcon from '../../components/common/images/lupa.png'
import banner from '../../components/common/images/banner.png'


function handleSearch() {
    console.log("handleSearch");
}

const Home = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (

        <div className='home'>
            <img className="logoBarberShopHome" src={LogoHome} alt="Logo"></img>
            <img className='bannerImage img-fluid' src={banner} alt="Banner" />
            <h1 className='titleBanner poppins'>Encontre A Barbearia</h1> <h1 className='titleBanner2 poppins'>perto de você</h1>
            <h3 className='subtitleBanner poppins'>A comôdidade do seu lado!</h3>
            <h5 className='searchBanner poppins'>Pesquise pelo nome da barbearia ou serviço:</h5>
            <div className="searchBannerInput">
                <Input placeholder="Digite aqui a sua busca"></Input>
                <a href="#search">
                    <img className='searchIcon' src={SearchIcon} alt="Pesquisar" />
                </a>
            </div>
            <Vantagens></Vantagens>
            {/* <BestBarberShops></BestBarberShops> */}
            <HomeAgenda></HomeAgenda>
            <Galeria></Galeria>
            <Avaliacoes></Avaliacoes>
            {/* <UsuarioInfo state={state } />
            <button className="btn" onClick={ () => login(dispatch, user)}>logar</button>
            <button className="btn" onClick={ () => login(dispatch, initialState.user)}>deslogar</button> */}
        </div>
    )
    
}

export default Home