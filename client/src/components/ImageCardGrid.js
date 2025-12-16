import { Row, Col } from "reactstrap";
import ImageCard from "./ImageCard";

import "../styles/ImageCardGrid.css";

const ImageCardGrid = ({ images }) => {
    return (
        <div className="image-card-grid-container">
            <Row className="image-card-grid-row gx-2 gy-1 justify-content-center">
                {images.map((image, index) => (
                    <Col key={index} xs="12" md="4" className="image-card-grid-col px-4 mb-3 d-flex justify-content-center">
                        <ImageCard image={image} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export default ImageCardGrid;