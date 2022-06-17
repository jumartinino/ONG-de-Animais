import React from 'react';
import { Link } from "react-router-dom"

import { DivNav,DivTextBtnNav,DivTextNav, StyledLink, TextBtnNav, TextNav, TextNós } from './style';

export default function NavBar() {
    return(
                <DivNav>
                    <DivTextNav>
                        <StyledLink to='/Sobre' > <TextNós>Sobre nós</TextNós> </StyledLink>
                    </DivTextNav>

                    <DivTextNav> 
                        <StyledLink to='/Adote'> <TextNav>Adote</TextNav> </StyledLink>
                    </DivTextNav>

                    <DivTextNav>
                    <StyledLink to='/Denuncie' > <TextNav>Denuncie</TextNav> </StyledLink>
                    </DivTextNav>

                    <DivTextNav>
                    <StyledLink to='/Ajudar' > <TextNav>Como Ajudar</TextNav> </StyledLink>
                    </DivTextNav>

                    <DivTextBtnNav>
                        <StyledLink to='/Contato' > <TextBtnNav>Contato</TextBtnNav> </StyledLink> 
                    </DivTextBtnNav>
                </DivNav>
    )
}

