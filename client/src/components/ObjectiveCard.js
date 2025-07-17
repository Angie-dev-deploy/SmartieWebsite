import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

import "../styles/ObjectiveCard.css";

const ObjectiveCard = ({circleColor, objectiveNumber, description}) => {
    return (
        <div className="objective-card">
            <div className="circle-image-wrapper">
                <div className="circle-image-container" style={{ backgroundColor: circleColor }}>
                    <p className="objective-number">{objectiveNumber}</p>
                </div>
            </div>
            <Card className="objective-card-body">
                <CardBody>
                    <CardText className="objective-text">{description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
export default ObjectiveCard;