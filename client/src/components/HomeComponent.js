import React from "react";

import erasmus from "../resources/Erasmus.png";

import "../styles/Home.css";

const HomeComponent = () => {
    return (
        <div className="home-page-content">
            <div style={{display: "flex", flexDirection: "column"}}>
                <div className="text-div">
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
        </div>
    );
};

export default HomeComponent;