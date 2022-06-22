import React, {useState} from 'react';
import { Link } from "react-router-dom"

import { DivNav,DivNavExtended,DivNavInner,DivTextBtnNav, LeftContainer, LinkContainer, Logo, OpenLinksButton, RightContainer, StyledLink, StyledLinkExtended, TextBtnNav, TextNós } from './style';


export default function NavBar() {
    //bool p mudar o estado e substituir o hamburguer
    const [extendNav, setExtendNav] = useState(false);  

    return(
            <DivNav>

                <DivNavInner>
                    <LeftContainer>
                        <text>LOGO VAI AQUI</text>
                    </LeftContainer>

                    <RightContainer>
                        <LinkContainer>
                            <StyledLink to='/Sobre' > <TextNós>Sobre nós</TextNós> </StyledLink>

                            <StyledLink to='/Adote'> Adote </StyledLink>

                            <StyledLink to='/Denuncie' > Denuncie </StyledLink>

                            <StyledLink to='/Ajudar' > Como Ajudar </StyledLink>

                            <StyledLink to='/Contato' > Contato </StyledLink>

                            <OpenLinksButton onClick={() => { setExtendNav((curr) => !curr);
                            }}>
                               {extendNav ? <>&#10005;</> : <> &#8801;</> } 
                            </OpenLinksButton>

                        </LinkContainer>
                    </RightContainer>

                </DivNavInner>

                {extendNav && (
                <DivNavExtended>
                   
                    <StyledLinkExtended to='/Sobre' > <TextNós>Sobre nós</TextNós> </StyledLinkExtended>

                    <StyledLinkExtended to='/Adote'> Adote </StyledLinkExtended>

                    <StyledLinkExtended to='/Denuncie' > Denuncie </StyledLinkExtended>

                    <StyledLinkExtended to='/Ajudar' > Como Ajudar </StyledLinkExtended>

                    <StyledLinkExtended to='/Contato' > Contato </StyledLinkExtended>
                </DivNavExtended>
                )}
            </DivNav>
    )
}

