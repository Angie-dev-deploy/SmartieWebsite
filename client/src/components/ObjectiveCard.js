import React from "react";
import "../styles/ObjectiveCard.css";

const ObjectiveCard = ({ circleColor, objectiveNumber, description }) => {
    return (
        <div className="objective-card">
            <div className="objective-card-body">
                <div className="objective-card-accent" style={{ backgroundColor: circleColor }} />
                <div className="objective-card-content">
                    <p className="objective-number">{objectiveNumber}</p>
                    <p className="objective-text">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ObjectiveCard;
