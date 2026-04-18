import erasmusLogo from "../resources/ErasmusLogo.webp";
import "../styles/ErasmusBadge.css";

const PROJECT_CODE = "2024-1-RO01-KA220-HED-000244949";

const ErasmusBadge = ({ logoRight = false }) => {
    const logoSection = (
        <div className="erasmus-badge-logo-section">
            <img src={erasmusLogo} alt="Erasmus+" className="erasmus-badge-logo-img" />
        </div>
    );

    const codeSection = (
        <div className="erasmus-badge-code-section">
            <span className="erasmus-badge-code">{PROJECT_CODE}</span>
        </div>
    );

    return (
        <div className={`erasmus-badge ${logoRight ? "logo-right" : ""}`}>
            {logoRight ? codeSection : logoSection}
            {logoRight ? logoSection : codeSection}
        </div>
    );
};

export default ErasmusBadge;
