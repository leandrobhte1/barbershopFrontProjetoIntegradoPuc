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
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeSearch } from '../../store/actions/searchHomeActions'

import { useNavigate } from "react-router-dom";

const Home = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const navigate = useNavigate();

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            navigate("/search");
        }
    }

    const goToSearchPage = () => {
        navigate("/search");
    }

    return (

        <div className='home'>
            <img className="logoBarberShopHome" src={LogoHome} alt="Logo"></img>
            <img className='bannerImage img-fluid' src={banner} alt="Banner" />
            <h1 className='titleBanner poppins'>Encontre A Barbearia</h1> <h1 className='titleBanner2 poppins'>perto de você</h1>
            <h3 className='subtitleBanner poppins'>A comôdidade do seu lado!</h3>
            <h5 className='searchBanner poppins'>Pesquise pelo nome da barbearia ou serviço:</h5>
            <div className="searchBannerInput">
                <input id="searchHome" className='form-control' type="text" placeholder="Digite aqui a sua busca" onChange={props.changeSearch} value={props.search} onKeyUp={keyHandler} />
                <a href="#" onClick={goToSearchPage}>
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

const mapStateToProps = state => ({search: state.search})
const mapDispatchToProps = dispatch => bindActionCreators({ changeSearch }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)