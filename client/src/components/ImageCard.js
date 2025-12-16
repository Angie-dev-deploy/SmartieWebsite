import { Card } from "reactstrap"
import "../styles/ImageCard.css";

const ImageCard = ({ image }) => {
    return (
        <Card className="image-card border-0 bg-transparent">
                
            <img
                className='image-card-image'
                alt="Dummy"
                src={image}
            />
                
        </Card>
    );
}
export default ImageCard;