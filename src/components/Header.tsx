import styled from "styled-components";

const StyledHeader = styled.div`
    text-align: left;
    padding: 1vw;
    color: white;
    background-color: #425B9A;
`;

const StyledH1 = styled.h1`
    text-align: left;
    line-height: calc(2px + 2vw);
    padding: 0%;
`;

export default function Header(){
    return(
        <StyledHeader>
            <StyledH1>Hang Nguyen</StyledH1>
            <p>My Online Resume</p>
        </StyledHeader>
    )
}