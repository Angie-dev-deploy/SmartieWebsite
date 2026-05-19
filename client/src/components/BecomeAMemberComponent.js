import { Button } from "reactstrap";
import "../styles/BecomeAMember.css";

import pdfForm from "../resources/D.2.1.1. Application Form - hard copy.pdf";

const BecomeAMemberComponent = () => {
    return (
        <div id="join-smartie" className="become-a-member-container">
            <h2 className="become-a-member-container-title">Become a Member</h2>
            <p className="become-a-member-container-description">
                Join the SMARTIE Alliance and contribute to the advancement of AI in higher education. As a member, you will have access to exclusive resources, events, and opportunities to collaborate with leading institutions in the field.
            </p>
            <div className="become-a-member-button-container">
                <Button className="become-a-member-button" href={pdfForm} target="_blank" rel="noopener noreferrer">
                    Application Form PDF
                </Button>
                <Button className="become-a-member-button" href="https://docs.google.com/forms/d/e/1FAIpQLSfR9DcKGRAmDUsbt7lSf88smysJgjNU6mz-S6gIUm-RrePMFw/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                    Register Online Now
                </Button>
            </div>
            
        </div>
    );
}
export default BecomeAMemberComponent;