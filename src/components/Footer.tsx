import styled from "styled-components";

const StyledFooter = styled.footer`
    text-align: center;
    font-size: calc(2px + 1vw);
    background-color: #425B9A;
    color: white;
    padding: 0.8%;
`;

const FooterLink = styled.a`
    color: #76C0EC;
    font-size: calc(2px + 1vw);
`;

export default function Footer(){
    return(
        <StyledFooter>
            <>All Rights Reserved by Hang Nguyen <FooterLink href="">Credits</FooterLink> &copy;</>
        </StyledFooter>
    )
}