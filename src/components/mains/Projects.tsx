import '../../App.css';
import styled from 'styled-components';
import {useState} from "react";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 90%;
    background-color: #425B9A;
    padding: 2%;
    margin: 2% auto;
`;

const StyledButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledButton = styled.button`
    width: 15%;
    margin: 1%;
    padding: 1%;
`;

const StyledInput = styled.input`
    width: 100%;
    text-align: center;
    padding: 1%;
    margin: 1%;
    border: 1px solid white;
`;

const StyledLabel = styled.label`
    color: white;
`;

const StyledH2 = styled.h2<{neg: boolean}>`
    color: ${(props) => (props.neg ? 'red' : 'white')};
    font-size: calc(4px + 2vw);
    margin: 2%;
    font-family: "Oxanium", "san-serif";
    text-align: center;
`;

export default function Projects() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [answer, setAnswer] = useState("");
    const [isNeg, setIsNeg] = useState(false);

    let ans = 1;

    const add = () => {
        ans = (Number(first) + Number(second));
        if (Number(ans) < 0) {
            setIsNeg(true);
        } else {
            setIsNeg(false);
        }
        setAnswer(String(ans))
    }

    const sub = () => {
        ans = (Number(first)-Number(second));
        if (Number(ans) < 0) {
            setIsNeg(true);
        } else {
            setIsNeg(false);
        }
        setAnswer(String(ans))
    }

    const div = () => {
        ans = (Number(first)/Number(second));
        if (Number(ans) < 0) {
            setIsNeg(true);
        } else {
            setIsNeg(false);
        }
        setAnswer(String(ans))
    }

    const pow = () => {
        ans = 1;
        for (let i = 0; i < Number(second); i++){
            ans *= Number(first);
        }
        if (Number(ans) < 0) {
            setIsNeg(true);
        } else {
            setIsNeg(false);
        }
        setAnswer(String(ans))
    }

    const mul = () => {
        ans = (Number(first)*Number(second));
        if (Number(ans) < 0) {
            setIsNeg(true);
        } else {
            setIsNeg(false);
        }
        setAnswer(String(ans))
    }

    const clear = () => {
        setFirst("");
        setSecond("");
        setAnswer("");
    }

    return(
        <main className="main">
            <h1>Projects</h1>
            <StyledDiv>
                <StyledH2>Calculator</StyledH2>
                <StyledLabel htmlFor={"first-number"}>Enter your first number: </StyledLabel>
                <StyledInput type={"text"} id={"first-number"} value={first} onChange={(e) => setFirst(e.target.value)} />
                <StyledLabel htmlFor={"second-number"}>Enter your second number:</StyledLabel>
                <StyledInput type={"text"} id={"second-number"} value={second} onChange={(e)=>setSecond(e.target.value)}/>
                <StyledButtonDiv>
                    <StyledButton onClick={add} >+</StyledButton>
                    <StyledButton onClick={sub}>-</StyledButton>
                    <StyledButton onClick={div}>/</StyledButton>
                    <StyledButton onClick={mul}>*</StyledButton>
                    <StyledButton onClick={pow}>**</StyledButton>
                    <StyledButton onClick={clear}>Clear</StyledButton>
                </StyledButtonDiv>
                <StyledH2 id={"result"} neg={isNeg}>{answer}</StyledH2>
            </StyledDiv>
        </main>
    )
}