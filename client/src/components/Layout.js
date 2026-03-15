import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import ScrollDownArrow from "./ScrollDownArrow";
import { Container } from "reactstrap";
import "../styles/Layout.css";
import SnackbarWIP from "./SnackbarWIP";
import SnackbarVisits from "./SnackbarVisits";

const Layout = (props) => {

    return (
        <div>
            <NavbarComponent expand="md" fixed="top"/>
            <Container className="main-content" tag="menu">
                {props.children}
            </Container>
            <ScrollDownArrow />
            <SnackbarWIP open={false} />
            <SnackbarVisits open={true} visits={props.visits} />
            <FooterComponent/>
        </div>
    );
}

export default Layout;