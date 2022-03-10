import React from 'react'

export default props => (
    <textarea {...props.input} 
        className='form-control textarea' 
        placeholder={props.placeholder}
        type={props.type} />
)