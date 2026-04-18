import { useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/PageStart.css";
import "../styles/Materials.css";

import { Folder} from '@carbon/icons-react';

import ContentCard from "./ContentCard";

import { downloadFiles} from "../data/activities";
import { Button } from "reactstrap";

const MaterialsComponent = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="materials-page">
            <div className="page-description materials-bg-image" data-aos="fade-in">
                <div className="page-content" style={{display: "flex", flexDirection: "column"}}>
                    <div className="page-text-div">
                        <span className="page-tag">Erasmus+ Co-Funded Project</span>
                        <h1 className="page-title">Results</h1>
                        <p className="page-p">
                        Browse the collection of materials developed within the SMARTIE project. 
                        Here you'll find images, documents, and resources that showcase our work, support learning, and illustrate the project's progress. 
                        Whether you're looking for visual highlights, educational content, or project documentation, this page gathers everything in one place for easy access and exploration.
                        </p>
                    </div>
                </div>
            </div>

            <div className="download-files-section">
                <ContentCard title="Download Files" icon={Folder}>
                    <div className="download-files-list">
                        {downloadFiles.map((fileGroup, index) => {
                            const hasMultipleFiles = fileGroup.files.length > 1;

                            return (
                                <div key={index} className="download-file-item">
                                    {hasMultipleFiles ? (
                                        <div className="download-file-group">
                                            <div className="download-file-group-title">
                                                <p>
                                                    {fileGroup.type ? `${fileGroup.type} - ` : ""}
                                                    {fileGroup.name}
                                                </p>
                                            </div>

                                            <div className="download-file-sublist">
                                                {fileGroup.files.map((file, subIndex) => (
                                                    <div key={subIndex} className="download-file-subitem">
                                                        {file.link ? (
                                                            <a
                                                                href={file.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <Button className="download-button">
                                                                    Download
                                                                </Button>
                                                            </a>
                                                        ) : (
                                                            <Button className="download-button" disabled>
                                                                Download
                                                            </Button>
                                                        )}

                                                        <div className="download-file-details">
                                                            <p>{file.title}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="download-file-single">
                                            {fileGroup.files[0]?.link ? (
                                                <a
                                                    href={fileGroup.files[0].link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button className="download-button">
                                                        Download
                                                    </Button>
                                                </a>
                                            ) : (
                                                <Button className="download-button" disabled>
                                                    Download
                                                </Button>
                                            )}

                                            <div className="download-file-details">
                                                <p>
                                                    {fileGroup.type ? `${fileGroup.type} - ` : ""}
                                                    {fileGroup.name}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </ContentCard>
            </div>
            
        </div>
    );
}
export default MaterialsComponent;