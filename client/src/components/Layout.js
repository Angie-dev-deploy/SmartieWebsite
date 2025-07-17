import React from "react";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import { Container } from "reactstrap";
import "../styles/Layout.css";
import SnackbarWIP from "./SnackbarWIP";

const Layout = (props) => {
    return (
        <div>
            <NavbarComponent expand="sm" fixed="top"/>
            <Container className="main-content" tag="menu">
                {props.children}
            </Container>
            <SnackbarWIP open={true} />
            <FooterComponent/>
        </div>
    );
}

export default Layout;