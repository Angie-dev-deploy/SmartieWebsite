import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/PageStart.css";
import "../styles/Activities.css";

const ActivitiesComponent = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="activities-page">
            <div className="page-description activities-bg-image" data-aos="fade-in">
                <div className="page-content" style={{display: "flex", flexDirection: "column"}}>
                    <div className="page-text-div">
                        <h1 className="page-title">Activities</h1>
                        <p className="page-p">
                        Explore the activities of the SMARTIE project and discover how we turn innovation into impact. 
                        Here you’ll find an overview of our workshops, research initiatives, student engagements, and collaborative events. 
                        Stay connected and follow our progress as we continue to create meaningful educational and technological experiences.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default ActivitiesComponent;