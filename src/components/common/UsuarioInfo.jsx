import React from 'react'
import If, { Else } from './If'

export default (props) => {

    const state = props.state || {};

    return (
        <div>
            <If test={state && state.user.name}>
                Seja bem-vindo <strong>{state.user.name}</strong>!
                <span className="role">{state.user.role}</span>
                <Else>
                    Seja bem-vindo!
                </Else>
            </If>
        </div>
    )

}