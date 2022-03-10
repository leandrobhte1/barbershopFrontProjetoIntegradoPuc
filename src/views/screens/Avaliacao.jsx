import React, { useReducer } from 'react'
import { initialState, rootReducer as reducer } from '../../store'
import Input from '../../components/common/form/input'
import TextArea from '../../components/common/form/textarea'
import BarbeariaRibeiro from '../../components/common/images/barbeariaRibeiro.png'
import StarRatingComponent from 'react-star-rating-component';

import { toastr } from 'react-redux-toastr'

const Avaliacao = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    let rating = 1;

    // function onStarClick(nextValue, prevValue, name) {
    //     this.setState({rating: nextValue});
    // }

    function handleSubmit(){
        console.log("chegou no handle submit");
        toastr.success('Sucesso','Avaliação inserida com sucesso!')
    }

    return(
        <div className="avaliacao">
            <h1 className="tittleSection poppins">Avaliação de serviço:</h1>
            <form role="form" onSubmit={handleSubmit}>
                <div className="infoBarberShop">
                    <span className="nameBarberShop poppins">Barbearia Ribeiro</span>
                    <img className='logoBarberShop' src={BarbeariaRibeiro} alt="Logo BarberShop" />
                </div>
                <div className="question">
                    <span className="tittleQuestion poppins">Dê uma nota de 1 a 5 estrelas:</span>
                    <div className="stars">
                        <StarRatingComponent 
                            name="avaliacaoServico" 
                            starCount={5}
                            value={rating}
                            // onStarClick={this.onStarClick.bind(this)}
                        />
                    </div>
                </div>
                <div className="question">
                    <span className="tittleAvaliacao poppins">Dê um título para sua avaliação</span>
                    <Input placeholder="Dê um título para sua avaliação"></Input>
                </div>
                <div className="question">
                    <span className="tittleAvaliacao poppins">Dê uma descrição para sua avaliação</span>
                    <span className="opcional">* Opcional</span>
                    <TextArea placeholder="Dê uma descrição para sua avaliação"></TextArea>
                </div>
                <div className="avaliarServico">
                    <button type='submit' className='avaliarServicoBT lato'>AVALIAR SERVIÇO</button>
                </div>
            </form>
        </div>
    )

}

export default Avaliacao