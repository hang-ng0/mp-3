import '../../App.css';
import digital from '../../photos/digital_marketing_certification.png';
import email from '../../photos/email_certification.png'
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 60%;
    margin-bottom: 2%;
`;

export default function Certifications() {
    return(
        <main className="main">
            <h1>Marketing Certifications</h1>
            <h2>HubSpot Digital Marketing Certification</h2>
            <p>HubSpot Academy</p>
            <p>Issued Aug 2026 and Expires Sep 2028</p>
            <StyledImg src={digital} alt={"Hang's HubSpot Digital Marketing Certification"} />
            <br/>
            <h2>HubSpot Email Marketing Certification</h2>
            <p>HubSpot Academy</p>
            <p>Issued Aug 2026 and Expires Sep 2028</p>
            <StyledImg src={email} alt={"Hang's HubSpot Email Marketing Certification"} />
        </main>
    )
}