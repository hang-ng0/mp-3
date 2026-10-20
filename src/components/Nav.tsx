import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: #76C0EC;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const StyledNavUl = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 900px) {
        flex-direction: row;
    }
`;

const StyledNavLi = styled.li`
    border: solid #FFF6DC 2px;
    background: aliceblue;
    text-align: center;
    margin: 5%;
    padding: 3%;
    font-size: calc(2px + 2vw);
    @media screen and (max-width: 900px) {
        padding: 1.5%;
        margin: 2% auto; 
    }
`;

const StyledLink = styled(Link)` //has to put it in () instead of . because Link is not a usual html tag, it was imported
    color: #4A4A4A;
    text-decoration: none;
`;

export default function Nav(){
    return(
        <StyledNav>
            <StyledNavUl>
                <StyledNavLi>
                    <StyledLink to = {'/'}>Home</StyledLink>
                </StyledNavLi>
                <StyledNavLi>
                    <StyledLink to={'/education'}>Education</StyledLink>
                </StyledNavLi>
                <StyledNavLi>
                    <StyledLink to={'/experience'}>Experience</StyledLink>
                </StyledNavLi>
                <StyledNavLi>
                    <StyledLink to={'/certifications'}>Certifications</StyledLink>
                </StyledNavLi>
                <StyledNavLi>
                    <StyledLink to={'/volunteer'}>Volunteer</StyledLink>
                </StyledNavLi>
                <StyledNavLi>
                    <StyledLink to={'/projects'}>Projects</StyledLink>
                </StyledNavLi>
            </StyledNavUl>
        </StyledNav>
    )
}