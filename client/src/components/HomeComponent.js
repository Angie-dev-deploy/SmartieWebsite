import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ErasmusBadge from "./ErasmusBadge";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/Home.css";

const HomeComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 500, once: true });
    }, []);

    return (
        <div className="home-page-content" data-aos="fade-in">
            <div className="blobs-container" aria-hidden="true">
                <div className="blob blob-lightblue" />
                <div className="blob blob-purple" />
                <div className="blob blob-mint" />
            </div>

            <div className="home-text-div">
                <span className="home-tag">Erasmus+ Co-Funded Project</span>
                <h1 className="home-title">SMARTIE</h1>
                <h4 className="home-subtitle">Synergistic Management and Advancement of Artificial Intelligence in European Higher Education</h4>
                <p className="home-p">
                    SMARTIE is a collaborative initiative designed to enhance the integration, development,
                    and responsible use of Artificial Intelligence (AI) within European higher education institutions.
                    By fostering innovation and strategic AI deployment, SMARTIE aims to equip universities, educators,
                    and students with the tools, knowledge, and infrastructure necessary to thrive in an increasingly AI-driven world.
                </p>
                <div className="home-cta-row">
                    <button className="home-cta-primary" onClick={() => navigate("/objectives")}>
                        Explore the Project
                        <span className="home-cta-arrow">→</span>
                    </button>
                    <button className="home-cta-secondary" onClick={() => navigate("/partners")}>
                        Meet our Partners
                    </button>
                </div>
            </div>
            <div className="erasmus-div">
                <ErasmusBadge />
            </div>
        </div>
    );
};

export default HomeComponent;