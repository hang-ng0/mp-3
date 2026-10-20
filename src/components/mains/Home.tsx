import headshot from '../../photos/resume_headshot.jpeg';
import styled from "styled-components";
import '../../App.css';

const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3%;
    align-items: center;
`;

const StyledImg = styled.img`
    width: 30%;
    height: auto;
    margin: 0;
`;

const Intro = styled.p`
    width: 70%;
    margin: 0;
    //font-size: calc(2px + 1.2vw);
`;

export default function Home() {
    return(
        <main className="main">
            <h1>Home</h1>
            <AboutMeContainer>
                <StyledImg src={headshot} alt={"Hang Nguyen's Headshot against a Plain Pale Backdrop"}/>
                <Intro>My name is Hang Nguyen, a junior at BU majoring in Business Administration (concentrating in Marketing)
                    and minoring in Computer Science.
                    I am interested in understanding the connection between business and tech. Specifically, I want to
                    explore more product management roles. However,
                    I mainly want to utilize my technical skills (such as coding) to complement my business marketing
                    work.</Intro>
            </AboutMeContainer>
            <br/>
            <p>I have experience programming in Python, Java, C, Assembly, HTML, and CSS. Alongside my programming
                skill, I am proficient in design. I've
                worked with many different design softwares: Adobe, Canva, and Figma. In addition, through my
                internship, I have developed proficinet in using Mailchimp
                and WordPress. In general, my skills include customer service, video editing, programming, designing,
                and marketing.</p>
        </main>
    )
}