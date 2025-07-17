import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

import "../styles/NewPartnerCard.css";
import PartnerModal from "./PartnerModal";

const NewPartnerCard = ({partnerImage, partnerName, countryName, partnerFlag, coordinator, email, phone, contactPerson, description}) => {
    
    const [ modalOpen, setModalOpen ] = React.useState(false);
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }
    
    return (
        <div className="new-partner-card">
            <div className="new-partner-circle-image-wrapper">
                <div className="new-partner-circle-image-container">
                    <img src={partnerImage} alt={partnerName} className="new-partner-circle-image" />
                </div>
            </div>
            <Card className="new-partner-card-body">
                <CardBody>
                    <div  className={`new-partner-name-and-flag-container ${!coordinator ? "coordinator-placeholder" : ""}`}>
                        <CardText className="new-partner-name">{partnerName}</CardText>
                        <img src={partnerFlag} alt="Country Flag" className="new-partner-flag" />
                    </div>
                    <div className="new-partner-coordinator-container">
                        {coordinator && <CardText className="new-partner-coordinator">Coordinator</CardText>}
                    </div>
                    <div className="new-partner-contact-grid">
                        <div className="contact-label">Phone:</div>
                        <div className="contact-value">{phone}</div>
                        <div className="contact-label">Email:</div>
                        <div className="contact-value-email">
                            {email}
                            
                        </div>
                        <div className="learn-more-button-wrapper">
                            <a className="learn-more-button" onClick={toggleModal}>
                                Learn More &gt;&gt;
                            </a>
                            <PartnerModal 
                                isOpen={modalOpen}
                                toggle={toggleModal}
                                partnerName={partnerName}
                                partnerFlag={partnerFlag}
                                partnerCountry={countryName} // Placeholder, replace with actual country name
                                contactPerson={contactPerson}
                                phone={phone}
                                email={email}
                                partnerDescription={description}
                            
                            />
                        </div>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
}
export default NewPartnerCard;