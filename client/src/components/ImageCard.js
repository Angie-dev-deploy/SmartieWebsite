import { Card } from "reactstrap"
import "../styles/ImageCard.css";

const ImageCard = ({ image }) => {
    return (
        <Card className="image-card">
                
            <img
                className='image-card-image'
                alt="Image"
                src={image}
            />
                
        </Card>
    );
}
export default ImageCard;