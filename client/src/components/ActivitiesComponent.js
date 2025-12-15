import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/PageStart.css";
import "../styles/Activities.css";

import { Wikis, Calendar } from '@carbon/icons-react';

import ContentCard from "./ContentCard";

import { webinars, meetings } from "../data/activities";
import { Button } from "reactstrap";

function formatDate(dateISO) {
    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).format(new Date(dateISO));
}

function isExpired(dateISO) {
    const endOfDay = new Date(dateISO + "T23:59:59");
    return new Date() > endOfDay.getTime();
}

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
            <div className="webinars-section" >
                <ContentCard title="Webinars" icon={Wikis}>
                    <div className="webinars-list">
                        {webinars.map((webinar, index) => (
                            <div key={index} className="webinar-item">
                                <Button className="register-button" style={{
                                    "--btn-bg-color": webinar.color,
                                    "--btn-disabled-bg-color": webinar.disabledColor
                                }}
                                disabled={isExpired(webinar.date)}
                                >
                                    Register
                                </Button>
                                <div className="webinar-details">
                                    <p>{formatDate(webinar.date)} - {webinar.title} - held by {webinar.heldBy}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </ContentCard>
            </div>

            <div className="meetings-section">
                <ContentCard title="Meetings" icon={Calendar}>
                    <div className="meetings-list">
                        {meetings.map((meeting, index) => (
                            <div key={index} className="meeting-item">
                                <img 
                                    src={meeting.flagPicture}
                                    alt={`Flag of ${meeting.location.split(", ")[1]}`}
                                    className="meeting-flag"
                                />
                                <div className="meeting-details">
                                    <p>{formatDate(meeting.date)} - {meeting.location} - {meeting.description} held by {meeting.heldBy}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ContentCard>
            </div>
        </div>
    );
}
export default ActivitiesComponent;