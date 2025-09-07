import {useEffect} from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/PartnerCard.css";

const PartnerCard = ({image, title, description}) => {

    useEffect(() => {
            Aos.init({ duration: 500, once: true });
    }, []);

    return (
        <div className="partner-card">
            <div className="circle-image-wrapper">
                <div className="circle-image-container">
                    <img src={image} alt={title} className="circle-image" data-aos="fade-in"/>
                </div>
            </div>
            <Card className="partner-card-body">
                <CardBody>
                    <CardTitle tag="h5" className="partner-title">{title}</CardTitle>
                    <CardText className="partner-text">{description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
export default PartnerCard;