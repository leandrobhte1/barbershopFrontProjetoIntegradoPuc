import React, { useReducer } from 'react'
import { initialState, rootReducer as reducer } from '../../store'

import { toastr } from 'react-redux-toastr'

const Reports = props => {

    const [state, dispatch] = useReducer(reducer, initialState)

    function handleSubmit(){
        console.log("chegou no handle submit");
        toastr.success('Sucesso','Relatório baixado com sucesso!')
    }

    return(
        <div className="relatorios">
            <div className="relatorios">
                <h1 className="tittleRelatorios poppins">Relatórios</h1>
                <form role="form" onSubmit={handleSubmit}>
                    <div className="unidadeSection">
                        <h3 className="itemTittle poppins">Unidade</h3>
                        <select className='selectUnidade poppins' name="selectUnidade">
                            <option className='poppins' value="valor1" defaultValue>Escolha uma unidade</option>
                            <option className='poppins' value="valor1">Valor 1</option>
                            <option className='poppins' value="valor2">Valor 2</option>
                            <option className='poppins' value="valor3">Valor 3</option>
                        </select>
                    </div>
                    <div className="tipoRelatorioSection">
                        <h3 className="itemTittle poppins">Tipo de relatório</h3>
                        <select className='selectTipoRelatorio poppins' name="selectTipoRelatorio">
                            <option className='poppins' value="valor1" defaultValue>Escolha um tipo de relatório</option>
                            <option className='poppins' value="valor1">Valor 1</option>
                            <option className='poppins' value="valor2">Valor 2</option>
                            <option className='poppins' value="valor3">Valor 3</option>
                        </select>
                    </div>
                    <div className="formatoDownloadSection">
                        <h3 className="itemTittle poppins">Tipo de relatório</h3>
                        <div className="optionsFormatoDowload">
                            <div className="option option1">
                                <input type="radio" id="pdf" name="pdf" value="PDF"></input>
                                <label htmlFor="pdf">PDF</label>
                            </div>
                            <div className="option option2">
                                <input type="radio" id="excel" name="excel" value="Excel"></input>
                                <label htmlFor="excel">Excel</label>
                            </div>
                            <div className="option option3">
                                <input type="radio" id="word" name="word" value="Word"></input>
                                <label htmlFor="word">Word</label>
                            </div>
                        </div>
                    </div>
                    <div className="filtroTempoSection">
                        <h3 className="itemTittle poppins">Filtro de tempo</h3>
                        <div className="optionsFiltroTempo">
                            <div className="option option1">
                                <input type="radio" id="seteDias" name="seteDias" value="Últimos 7 Dias"></input>
                                <label htmlFor="seteDias">Últimos 7 Dias</label>
                            </div>
                            <div className="option option2">
                                <input type="radio" id="lastMonth" name="lastMonth" value="Último mês"></input>
                                <label htmlFor="lastMonth">Último mês</label>
                            </div>
                            <div className="option option3">
                                <input type="radio" id="last3Months" name="last3Months" value="Últimos 3 meses"></input>
                                <label htmlFor="last3Months">Últimos 3 meses</label>
                            </div>
                            <div className="option option3">
                                <input type="radio" id="anual" name="anual" value="Anual"></input>
                                <label htmlFor="anual">Anual</label>
                            </div>
                        </div>
                    </div>
                    <div className="baixarRelatorioBT">
                        <button type='submit' className='poppins'>BAIXAR RELATÓRIO</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Reports