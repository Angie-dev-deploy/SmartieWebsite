import { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/PageStart.css";
import "../styles/Materials.css";

import { Folder } from "@carbon/icons-react";

import ContentCard from "./ContentCard";

import { downloadFiles } from "../data/activities";
import { Button } from "reactstrap";

const MaterialsComponent = () => {
    const [downloadCounts, setDownloadCounts] = useState({});

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        const allFiles = downloadFiles
            .flatMap(group => group.files)
            .filter(file => file.counterKey && file.counterKey.trim() !== "");

        Promise.all(
            allFiles.map(file =>
                axios
                    .get(`https://api.counterapi.dev/v2/smartie/${file.counterKey}`, {
                        params: { t: Date.now() }
                    })
                    .then(response => [
                        file.counterKey,
                        response.data?.data?.up_count ?? 0
                    ])
                    .catch(() => [file.counterKey, 0])
            )
        ).then(results => {
            setDownloadCounts(Object.fromEntries(results));
        });
    }, []);

    const handleDownload = async (file) => {
        if (!file.link) return;

        if (file.counterKey && file.counterKey.trim() !== "") {
            try {
                const response = await axios.get(
                    `https://api.counterapi.dev/v2/smartie/${file.counterKey}/up`,
                    {
                        params: { t: Date.now() }
                    }
                );

                const updatedCount = response.data?.data?.up_count;

                setDownloadCounts(prev => ({
                    ...prev,
                    [file.counterKey]:
                        updatedCount ?? ((prev[file.counterKey] || 0) + 1)
                }));
            } catch (error) {
                console.error(
                    `Error incrementing download count for ${file.counterKey}:`,
                    error
                );
            }
        }

        window.open(file.link, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="materials-page">
            <div className="page-description materials-bg-image" data-aos="fade-in">
                <div className="page-content" style={{ display: "flex", flexDirection: "column" }}>
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
                                                            <Button
                                                                className="download-button"
                                                                onClick={() => handleDownload(file)}
                                                            >
                                                                Download
                                                            </Button>
                                                        ) : (
                                                            <Button className="download-button" disabled>
                                                                Download
                                                            </Button>
                                                        )}

                                                        <div className="download-file-details">
                                                            <p>{file.title}</p>

                                                            {file.counterKey && file.counterKey.trim() !== "" && (
                                                                <span className="download-count">
                                                                    {downloadCounts[file.counterKey] ?? 0} downloads
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="download-file-single">
                                            {fileGroup.files[0]?.link ? (
                                                <Button
                                                    className="download-button"
                                                    onClick={() => handleDownload(fileGroup.files[0])}
                                                >
                                                    Download
                                                </Button>
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

                                                {fileGroup.files[0]?.counterKey &&
                                                    fileGroup.files[0].counterKey.trim() !== "" && (
                                                        <span className="download-count">
                                                            {downloadCounts[fileGroup.files[0].counterKey] ?? 0} downloads
                                                        </span>
                                                    )}
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
};

export default MaterialsComponent;