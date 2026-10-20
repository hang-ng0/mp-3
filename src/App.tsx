import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./components/Root.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import styled from "styled-components";
import './App.css';

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row; 
    min-height: 100vh; 
    background-color: #f0f8ff;
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

const StyledPageWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;

function App() {
    const router = createBrowserRouter([{path: '*', Component: Root}]);
    return (
        <>
            <StyledPageWrapper>
                <Header/>
                <StyledContainer>
                    <RouterProvider router={router}/>
                </StyledContainer>
                <Footer/>
            </StyledPageWrapper>
        </>
    )
}

export default App
