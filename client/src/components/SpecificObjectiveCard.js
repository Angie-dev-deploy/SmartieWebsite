import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

import "../styles/SpecificObjectiveCard.css";

const SpecificObjectiveCard = ({objectiveNumber, description}) => {
    return (
        <div className="specific-card">
            <div className="specific-circle-image-wrapper">
                <div className="specific-circle-image-container">
                    <p className="specific-number">{objectiveNumber}</p>
                </div>
            </div>
            <Card className="specific-card-body">
                <CardBody>
                    <CardText className="specific-text">{description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
export default SpecificObjectiveCard;