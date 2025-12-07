
import "../styles/ContentCard.css";

const ContentCard = ({ title, icon: Icon, children }) => {
    return (
        <div className="content-card-container">
            <div className="content-card-title-container">
                <div className="content-card-icon">
                    <Icon className="content-card-icon-icon" />
                </div>
                <div className="content-card-title">
                    <p>{title}</p>
                </div>
            </div>
            <div className="content-card-content">
                {children}
            </div>
        </div>
    )
}

export default ContentCard;