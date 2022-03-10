import React from 'react'
import MenuItem from './MenuItem'

export default props => (
    <ul className="top-menu col-md-4">
        <MenuItem path='#' label='Barbearias'></MenuItem>
        <MenuItem path='#' label='Sobre nós'></MenuItem>
        <MenuItem path='#' label='Contato'></MenuItem>
    </ul>
)