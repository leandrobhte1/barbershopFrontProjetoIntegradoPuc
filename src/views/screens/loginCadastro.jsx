import React, { Component } from 'react'
import { login } from '../../store/actions/user'
import Input from '../../components/common/Input';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr'

import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api/v1'

class LoginCadastro extends Component{

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        if(e.key === 'Enter'){
            console.log("logar usuario")
        }
    }

    handleRegisterUser(e){
        console.log("chegou no handle register");
        
        let user = { firstName: 'Leandro', lastName: 'Pereira', email: 'leandro.pereira@capco.com', role: 'User'};
        axios.post(`${BASE_URL}/registration`, user)
        .then(resp => {
            console.log("resp.: ", resp);
            this.setState(resp.data)
            toastr.success('Sucesso','Operação realizada com sucesso!')
        })
        .catch(e=> {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }

    render() {

        return(
            <div className="loginCadastro">
                <div className="login">
                    <form role="form" className='formCadastroRegistro'>
                        <h1 className="poppins">Login</h1>
                        <div className="username">
                            <Input placeholder="Digite aqui o seu usuário"></Input>
                        </div>
                        <div className="password">
                            <Input type="password" placeholder="Digite aqui a sua senha"></Input>
                        </div>
                        <div className="btLogin">
                            <button type='submit' className='poppins'>LOGIN</button>
                        </div>
                        <div className="orLogin">
                            <div className="line"></div>
                            <span className='poppins orText'>or</span>
                            <div className="line"></div>
                        </div>
                        <div className="redesSociais">
                            <div className="facebook">
                                <button className="facebookBt poppins">Facebook</button>
                            </div>
                            <div className="google">
                                <button className="googleBt poppins">Google</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="lineBetween"></div>
                <div className="cadastro">
                    <form role="form" className='formCadastroRegistro'>
                        <h1 className="poppins">Registre-se</h1>
                        <div className="username firstName">
                            <Input placeholder="Digite aqui o seu primeiro nome"></Input>
                        </div>
                        <div className="username lastName">
                            <Input placeholder="Digite aqui o seu último nome"></Input>
                        </div>
                        <div className="username">
                            <Input placeholder="Digite aqui o seu e-mail"></Input>
                        </div>
                        <div className="password">
                            <Input type="password" placeholder="Digite aqui a sua senha"></Input>
                        </div>
                        <div className="perfil">
                            <span className="perfilText poppins">Perfil:</span>
                            <div className="optionsPefil">
                                <div className="option1">
                                    <input type="radio" id="cliente" name="perfil" value="Cliente"></input>
                                    <label htmlFor="cliente">Cliente</label>
                                </div>
                                <div className="option2">
                                    <input type="radio" id="administrador" name="perfil" value="Administrador"></input>
                                    <label htmlFor="cliente">Administrador</label>
                                </div>
                            </div>
                        </div>
                        <div className="btRegistrar">
                            <button type='submit' className='poppins' onClick={() => this.handleRegisterUser()}>REGISTRAR</button>
                        </div>
                        <div className="orLogin">
                            <div className="line"></div>
                            <span className='poppins orText'>or</span>
                            <div className="line"></div>
                        </div>
                        <div className="redesSociais">
                            <div className="facebook">
                                <button className="facebookBt poppins">Facebook</button>
                            </div>
                            <div className="google">
                                <button className="googleBt poppins">Google</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )

    }

}

const mapStateToProps = state => ({user: state.user.user})
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginCadastro)