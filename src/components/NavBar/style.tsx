import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
export const TextNós =  styled.text`
color:#084A0E;
font-weight: bold;
font-size: 12px;
text-decoration:none;
`
export const TextNav = styled.text`
font-size: 12px;

`
export const BtnNav = styled.div`
background-color:#084A0E;
width:5%;
font-size: 12px;

`

