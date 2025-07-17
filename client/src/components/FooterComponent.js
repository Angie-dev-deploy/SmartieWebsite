import React from "react";

import { LogoInstagram, LogoFacebook, LogoLinkedin, LogoX, LogoYoutube } from '@carbon/icons-react';

import lighthorizontalLogo from "../resources/LightHorizontal.png";
import erasmusrightLogo from "../resources/Erasmus_right.png";

import "../styles/Footer.css";

const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="link-container">
                <div className="contact-links">
                    <a href="mailto:smartie.mail@email.com" className="email-link">
                        Email: smartie.mail@email.com
                    </a>
                    <a href="tel:+40555555555" className="phone-link">
                        Phone: +40555555555
                    </a>
                </div>
                <div className="social-links">
                    <a href="https://www.instagram.com/smartie.project/" target="_blank" rel="noopener noreferrer">
                        <LogoInstagram className="social-icon" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61575182236472" target="_blank" rel="noopener noreferrer">
                        <LogoFacebook className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/smartie-project-6a8183362/" target="_blank" rel="noopener noreferrer">
                        <LogoLinkedin className="social-icon" />
                    </a>
                    <a href="https://x.com/SMARTIE_Project" target="_blank" rel="noopener noreferrer">
                        <LogoX className="social-icon" />
                    </a>
                    <a href="https://www.youtube.com/@smartieproject" target="_blank" rel="noopener noreferrer">
                        <LogoYoutube className="social-icon" />
                    </a>
                </div>
                <div className="erasmus-container">
                    <img
                        src={erasmusrightLogo}
                        width="243"
                        height="72"
                        alt="Erasmus+"
                        className="erasmus-logo"
                    />
                </div>
            </div>
            <div className="logo-container">
                <p className="logo-text">
                    © 2025 All rights reserved.
                </p>
                <img
                    src={lighthorizontalLogo}
                    width="243"
                    height="72"
                    alt="Smartie"
                    className="footer-logo"
                />
            </div>
            <div className="footer-text-container">
                <p className="footer-text">Funded by the European Union. The views and opinions expressed, however, 
                    belong solely to the author(s) and do not necessarily reflect the views and opinions of the European Union 
                    or the National Agency for Community Programs in the Field of Education and Vocational Training (ANPCDEFP). 
                    Neither the European Union nor ANPCDEFP can be held responsible for them.
                </p>
            </div>
        </div>
    );
}
export default FooterComponent;