import { Row, Col } from "reactstrap";
import ImageCard from "./ImageCard";

import "../styles/ImageCardGrid.css";

const ImageCardGrid = ({ images }) => {
    return (
        <div className="image-card-grid-container">
            <Row className="image-card-grid-row">
                {images.map((image, index) => (
                    <Col key={index} xs="12" md="4" className="image-card-grid-col">
                        <ImageCard image={image} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export default ImageCardGrid;