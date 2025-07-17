import React from "react";

import ObjectiveCard from "./ObjectiveCard";

import "../styles/Objectives.css";
import SpecificObjectiveCard from "./SpecificObjectiveCard";

const ObjectivesComponent = () => {
    return (
        <div className="objectives-page">
            <div className="objectives-page-description">
                <div className="description-content" style={{display: "flex", flexDirection: "column"}}>
                    <div className="text-div">
                        <h1 className="objectives-title">Objectives</h1>
                        <p className="objectives-p">
                        SMARTIE aims to empower higher education institutions across Europe to responsibly 
                        integrate artificial intelligence into teaching, learning, and governance. 
                        Our objectives focus on developing practical frameworks, enhancing digital and AI literacy, 
                        promoting ethical AI use, and supporting institutional transformation. 
                        By aligning innovation with inclusion and sustainability, 
                        we strive to ensure that AI serves as a tool for positive change in education.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="objectives-cards-container">
                <div className="objective-cards-grid-title">
                    <h1 className="objective-cards-grid-title-text">Main Objectives</h1>
                </div>
                <div className="objective-cards-grid">
                    <ObjectiveCard 
                        circleColor="#FC0"
                        objectiveNumber="01"
                        description="Harmonized approach of AI by European Universities"
                    />

                    <ObjectiveCard 
                        circleColor="#FF0004"
                        objectiveNumber="02"
                        description="Increase awareness among teachers and students regarding use of AI"
                    />

                    <ObjectiveCard 
                        circleColor="#00AC00"
                        objectiveNumber="03"
                        description="Support for all European Directives related to AI and education"
                    />

                    <ObjectiveCard 
                        circleColor="#3629C5"
                        objectiveNumber="04"
                        description="Support for inclusive approaches, ethics and integrity in HE in line with EU-SDG4 targets"
                    />
                
                </div>

            </div>

            <div className="specifics-cards-container">
                <div className="specifics-cards-grid-title">
                    <h1 className="specifics-cards-grid-title-text">Specific Objectives</h1>
                </div>
                <div className="specifics-cards-grid">
                    <SpecificObjectiveCard
                        objectiveNumber="01"
                        description="Building a critical mass of tertiary education entities in order to create irreversible 
                        path for future actions and developments in adoption of AI in education."
                    />

                    <SpecificObjectiveCard
                        objectiveNumber="02"
                        description="Elaboration of baseline for starting point of integration of AI in higher education process."
                    />

                    <SpecificObjectiveCard
                        objectiveNumber="03"
                        description="Support for modern, digital and inclusive higher education by using artificial intelligence as copilot for new curricula,
                         courses and teaching, learning, assessment methodologies."
                    />

                    <SpecificObjectiveCard
                        objectiveNumber="04"
                        description="Increasing awareness of teachers, students but also general public regarding deep fakes, 
                        plagiarism and any other digital threats."
                    />

                    <SpecificObjectiveCard
                        objectiveNumber="05"
                        description="Dissemination and communication of project results and European initiatives."
                    />

                    <SpecificObjectiveCard
                        objectiveNumber="06"
                        description="Boosting tech-transfer of results through pilot LTT activities during workshops."
                    />

                    <SpecificObjectiveCard
                        objectiveNumber="07"
                        description="Evaluation the impact created by project activities and results."
                    />

                    <SpecificObjectiveCard
                        objectiveNumber="08"
                        description="Evaluation to what extent follow up activities will increase the impact of AI on HE."
                    />

                    <SpecificObjectiveCard
                        objectiveNumber="09"
                        description="Elaborate a roadmap for extension of SMARTIE beyond project lifetime."
                    />
                
                </div>

            </div>

        </div>
      
    );
}
export default ObjectivesComponent;