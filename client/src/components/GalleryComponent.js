import { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/PageStart.css";
import "../styles/Gallery.css";

import ImagesScrollModal from "./ImagesScrollModal";

import { images } from "../data/activities";

const isVideoPath = (path) => /\.(mp4|webm|ogg)$/i.test(path);

const GalleryComponent = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const videoRef = useRef(null);

    const photos = images.filter(item => !isVideoPath(item.path));
    const video = images.find(item => isVideoPath(item.path));

    // Autoplay video when scrolled into view
    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.play().catch(() => {});
                } else {
                    el.pause();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [video]);

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="gallery-page">

            {/* Hero */}
            <div className="page-description gallery-bg-image" data-aos="fade-in">
                <div className="page-content" style={{ display: "flex", flexDirection: "column" }}>
                    <div className="page-text-div">
                        <span className="page-tag">Erasmus+ Co-Funded Project</span>
                        <h1 className="page-title">Gallery</h1>
                        <p className="page-p">
                            Explore the visual story of the SMARTIE project through photos and videos
                            from our meetings, workshops, and events across Europe.
                        </p>
                    </div>
                </div>
            </div>

            {/* Video */}
            {video && (
                <section className="gallery-videos-section">
                    <h2 className="gallery-section-title">Videos</h2>
                    <div className="gallery-video-wrapper">
                        <video
                            ref={videoRef}
                            className="gallery-video"
                            src={video.path}
                            muted
                            loop
                            playsInline
                            controls
                        />
                    </div>
                </section>
            )}

            {/* Photos */}
            {photos.length > 0 && (
                <section className="gallery-photos-section">
                    <h2 className="gallery-section-title">Photos</h2>
                    <div className="gallery-photo-grid">
                        {photos.map((item, index) => (
                            <div
                                key={index}
                                className="gallery-photo-item"
                                onClick={() => setModalOpen(true)}
                                data-aos="fade-up"
                            >
                                <img src={item.path} alt={`Gallery ${index + 1}`} className="gallery-photo-img" />
                                <div className="gallery-photo-overlay">
                                    <span className="gallery-photo-zoom">⤢</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <ImagesScrollModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(false)}
                images={photos.map(item => item.path)}
            />
        </div>
    );
};

export default GalleryComponent;
