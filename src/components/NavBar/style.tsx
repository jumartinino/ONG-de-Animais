import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../theme/media/media";
import media from "styled-media-query";

export const DivNav = styled.nav`
width: 100%;
height: 80px;
display:flex;
flex-direction: column;
color:#084A0E;

@media (min-width:700px){
    height: 80px;
}
`

export const LeftContainer = styled.div`
flex:30%;
display:flex;
align-items:center;
padding-left:5%;
`

export const RightContainer = styled.div`
flex:70%;
display:flex;
justify-content:flex-end;
padding-right:50px;
`

export const DivNavInner = styled.div`
width:100%;
height:80px;
display:flex
`

export const LinkContainer = styled.div`
display:flex;
`

export const Logo = styled.img`
margin:10px;
max-width:180px;
height:auto
`

export const StyledLink = styled(Link)`
text-decoration: none;
&:focus, &:hover, &:visited, &:link, &:active {text-decoration: none;}
font-size: 16px;
color:#333333;
margin:10px;

@media (max-width:700px){
    display: none;
}
`

export const TextNós =  styled.text`
color:#084A0E;
font-weight: bold;
font-size: 16px;
text-decoration:none;
`

export const DivTextBtnNav = styled.button`
padding: 10px 1.6%;
border-radius: 0.2rem;
background-color: #084A0E;
border: none;
`
export const TextBtnNav = styled.text`
font-size: 14px;
color:white;
text-transform:uppercase;
`

export const OpenLinksButton = styled.button`
width: 70px;
height: 50px;
background: none;
border: none;
color: #084A0E;
font-size: 45px;
cursor: pointer;

@media (min-width:700px){
    display: none;
}
`
export const DivNavExtended = styled.div`
display:flex;
flex-direction:column;
align-items:center;

@media (min-width:700px) {
    display:none;
}
`
export const StyledLinkExtended = styled(Link)`
text-decoration: none;
&:focus, &:hover, &:visited, &:link, &:active {text-decoration: none;}
font-size: 16px;
color:#084A0E;
margin:10px;

}
`