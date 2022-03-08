import React from 'react'
import If, { Else } from './If'

export default (props) => {

    const state = props.state || {};

    return (
        <div>
            <If test={state && state.user.name}>
                <span>Seja bem-vindo <strong>{state.user.name}</strong>!</span>    
                <span className="role">{state.user.role}</span>
                {/* <Else>
                    <span>Seja bem-vindo amigão!</span>    
                </Else> */}
            </If>
        </div>
    )

}