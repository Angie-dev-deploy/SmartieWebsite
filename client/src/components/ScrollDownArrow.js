import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ScrollDownArrow.css";

const ScrollDownArrow = () => {
    const [visible, setVisible] = useState(true);
    const location = useLocation();

    const isHomePage = location.pathname === "/" || location.pathname === "/home";

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY < 80);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (isHomePage) return null;

    return (
        <div className={`scroll-down-arrow ${visible ? "visible" : "hidden"}`}>
            <div className="scroll-arrow-bounce">
                <div className="scroll-arrow-chevron" />
            </div>
        </div>
    );
};

export default ScrollDownArrow;
