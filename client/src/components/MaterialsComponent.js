import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/PageStart.css";
import "../styles/Materials.css";

const MaterialsComponent = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="materials-page">
            <div className="page-description materials-bg-image" data-aos="fade-in">
                <div className="page-content" style={{display: "flex", flexDirection: "column"}}>
                    <div className="page-text-div">
                        <h1 className="page-title">Materials</h1>
                        <p className="page-p">
                        Browse the collection of materials developed within the SMARTIE project. 
                        Here you’ll find images, documents, and resources that showcase our work, support learning, and illustrate the project’s progress. 
                        Whether you're looking for visual highlights, educational content, or project documentation, this page gathers everything in one place for easy access and exploration.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default MaterialsComponent;