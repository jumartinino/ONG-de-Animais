import React from 'react';
import { Link } from "react-router-dom"

import { BtnNav, StyledLink, TextNav, TextNós } from './style';

export default function NavBar() {
    return(
            
            <header>
                <StyledLink to='/Sobre' > <TextNós>Sobre nós</TextNós> </StyledLink>
                <StyledLink to='/Adote'> <TextNav>Adote</TextNav> </StyledLink>
                <TextNav>Denuncie</TextNav>
                <TextNav>Como Ajudar</TextNav>
                <BtnNav>
                    <TextNav>CONTATO</TextNav>
                </BtnNav>

            </header>        
        
    )
}

