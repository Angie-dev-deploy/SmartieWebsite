import React from "react";

import { Phone, Email, Wikis, LogoInstagram, LogoFacebook, LogoLinkedin, LogoX, LogoYoutube } from '@carbon/icons-react';

import "../styles/ContactUs.css";

const ContactUsComponent = () => {
    return (
        <div className="contactus-page">
            <div className="contactus-page-description">
                <div className="contactus-content" style={{display: "flex", flexDirection: "column"}}>
                    <div className="text-div">
                        <h1 className="contactus-title">Contact Us!</h1>
                        <p className="contactus-p">
                        Get in touch with our team - we’re here to help with any questions, 
                        feedback, or information you may need. Whether you're curious about 
                        the project or need assistance, don’t hesitate to reach out. We’ll 
                        get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </div>

            <div className="contactus-link-container">
                <div className="link-row-1">
                    <div className="phone-link-container">
                        <div className="link-title-container">
                            <div className="link-icon">
                                <Phone className="link-icon-icon" />
                            </div>
                            <div className="link-title">
                                <p>Reach out by phone</p>
                            </div>
                        </div>
                        <div className="link-content">
                            <a href="tel:+40777777777" className="phone-link">
                                +40 777 777 777
                            </a>
                        </div>
                    </div>
                    <div className="email-link-container">
                        <div className="link-title-container">
                            <div className="link-icon">
                                <Email className="link-icon-icon" />
                            </div>
                            <div className="link-title">
                                <p>Send us an e-mail</p>
                            </div>
                        </div>
                        <div className="link-content">
                            <a href="mailto:nicusor.bancu@ucv.ro" className="email-link">
                                nicusor.bancu@ucv.ro
                            </a>
                        </div>
                    </div>
                </div>
                <div className="link-row-2">
                    <div className="social-link-container">
                        <div className="link-title-container">
                            <div className="link-icon">
                                <Wikis className="link-icon-icon" />
                            </div>
                            <div className="link-title">
                                <p>Check out our Social Media Accounts</p>
                            </div>
                        </div>
                        <div className="link-content">
                            <div className="social-links-wrapper">
                                <div className="social-row">
                                    <a href="https://www.instagram.com/smartie.project/" target="_blank" rel="noopener noreferrer">
                                    <LogoInstagram className="contactus-social-icon" />
                                    <p className="social-text">Instagram</p>
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=61575182236472" target="_blank" rel="noopener noreferrer">
                                    <LogoFacebook className="contactus-social-icon" />
                                    <p className="social-text">Facebook</p>
                                    </a>
                                </div>
                                <div className="social-row">
                                    <a href="https://www.linkedin.com/in/smartie-project-6a8183362/" target="_blank" rel="noopener noreferrer">
                                    <LogoLinkedin className="contactus-social-icon" />
                                    <p className="social-text">LinkedIn</p>
                                    </a>
                                    <a href="https://x.com/SMARTIE_Project" target="_blank" rel="noopener noreferrer">
                                    <LogoX className="contactus-social-icon" />
                                    <p className="social-text">X</p>
                                    </a>
                                </div>
                                <div className="social-row">
                                    <a href="https://www.youtube.com/@smartieproject" target="_blank" rel="noopener noreferrer">
                                    <LogoYoutube className="contactus-social-icon" />
                                    <p className="social-text">YouTube</p>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      
    );
}
export default ContactUsComponent;