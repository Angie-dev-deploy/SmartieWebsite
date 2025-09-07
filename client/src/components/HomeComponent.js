import { useEffect } from "react";

import erasmus from "../resources/Erasmus.png";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/Home.css";

const HomeComponent = () => {

    useEffect(() => {
        Aos.init({ duration: 500, once: true });
    }, []);

    return (
        <div className="home-page-content" data-aos="fade-in">
            
                <div className="home-text-div">
                    <h1 className="home-title">SMARTIE</h1>
                    <h4 className="home-subtitle">Synergistic Management and Advancement of Artificial Intelligence in European Higher Education</h4>
                    <p className="home-p">
                        SMARTIE is a collaborative initiative designed to enhance the integration, development, 
                        and responsible use of Artificial Intelligence (AI) within European higher education institutions. 
                        By fostering innovation and strategic AI deployment, SMARTIE aims to equip universities, educators, 
                        and students with the tools, knowledge, and infrastructure necessary to thrive in an increasingly AI-driven world.
                    </p>
                </div>
                <div className="erasmus-div">
                    <img 
                        className="erasmus-img"
                        src={erasmus} 
                        alt="erasmus" 
                    />
                </div>
            
        </div>
    );
};

export default HomeComponent;