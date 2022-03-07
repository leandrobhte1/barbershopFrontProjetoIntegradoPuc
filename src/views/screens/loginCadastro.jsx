import React, { useReducer } from 'react'
import { initialState, reducer } from '../../store'
import { login } from '../../store/actions/user'
import Input from '../../components/common/Input';

const LoginCadastro = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    let user = { name: 'Leandro', role: 'Admin', logado: true};

    return (
        <div className="loginCadastro">
            <div className="login">
                <form role="form" className='formCadastroRegistro'>
                    <h1 className="poppins">Login</h1>
                    <div className="username">
                        <Input placeholder="Digite aqui o seu usuário"></Input>
                    </div>
                    <div className="password">
                        <Input placeholder="Digite aqui a sua senha"></Input>
                    </div>
                    <div className="btLogin">
                        <button type='submit' className='poppins' onClick={ () => login(dispatch, user)}>LOGIN</button>
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
                    <div className="username">
                        <Input placeholder="Digite aqui o seu e-mail"></Input>
                    </div>
                    <div className="password">
                        <Input placeholder="Digite aqui a sua senha"></Input>
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
                        <button type='submit' className='poppins' onClick={ () => login(dispatch, user)} >REGISTRAR</button>
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

export default LoginCadastro;