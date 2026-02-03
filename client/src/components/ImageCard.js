import { Card } from "reactstrap"
import "../styles/ImageCard.css";

const ImageCard = ({ image }) => {

    const isVideo = /\.(mp4|webm|ogg)$/i.test(image);

    return (
        <Card className="image-card border-0 bg-transparent">
                
            {
                isVideo ? (
                    <video
                        className="image-card-image"
                        src={image}
                        muted
                        loop
                        autoPlay
                        playsInline
                    />
                ) : (
                    <img
                        className="image-card-image"
                        alt="Media"
                        src={image}
                    />
                )
            }
                
        </Card>
    );
}
export default ImageCard;