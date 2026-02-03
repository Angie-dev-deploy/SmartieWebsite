import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/PageStart.css";
import "../styles/Materials.css";

import { Folder, Image } from '@carbon/icons-react';

import ContentCard from "./ContentCard";
import ImageCardGrid from "./ImageCardGrid";
import ImagesScrollModal from "./ImagesScrollModal";

import { downloadFiles, images } from "../data/activities";
import { Button } from "reactstrap";

const MaterialsComponent = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth < 768
    );

    useEffect(() => {
        const onResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const visibleImages = images
        .slice(0, isSmallScreen ? 3 : 9)
        .map(image => image.path);

    const [ modalOpen, setModalOpen ] = useState(false);
    const toggleModal = () => {
        console.log("Toggling modal");
        setModalOpen(!modalOpen);
    }

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

            <div className="images-section">
                <ContentCard className="images-card-grid" title="Images and Videos" icon={Image} onClick={toggleModal}>
                    <ImageCardGrid images={visibleImages}/>
                    <ImagesScrollModal
                        className="images-scroll-modal"
                        isOpen={modalOpen}
                        toggle={toggleModal}
                        images={images.map(image => image.path)}
                
                    />
                </ContentCard>

            </div>

            <div className="download-files-section" >
                <ContentCard title="Download Files" icon={Folder}>
                    <div className="download-files-list">
                        {downloadFiles.map((file, index) => (
                            <div key={index} className="download-file-item">
                                <a 
                                    //href={file.link}
                                    //target="_blank"
                                    //rel="noopener noreferrer"
                                >
                                    <Button className="download-button" disabled={!file.link}>
                                        Download
                                    </Button>
                                </a>
                                <div className="download-file-details">
                                    <p>{file.type ? `${file.type} - ` : ""}{file.name}</p>
                                </div>
                                
                            </div>
                        ))}
                        
                    </div>
                    
                </ContentCard>
            </div>
            
        </div>
    );
}
export default MaterialsComponent;