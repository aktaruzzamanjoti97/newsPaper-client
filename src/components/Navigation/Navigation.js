import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
//import logo from "../../../images/palette.png";
//import { useContext } from "react";
//import { UserContext } from "../../../App";

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            {/* <img width="60" src={logo} alt="" /> */}
            <Navbar.Brand className="ml-3" href="#home">
                <span style={{ fontSize: "30px", fontWeight: "700" }}>Newspaper</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Link className="text-white ms-5" to="/admin">
                        Admin
                    </Link>
                    <Link className="text-white ms-5" to="/dashboard">
                        Dashboard
                    </Link>
                    <>
                        {/* <Nav.Link>{loggedInUser.email}</Nav.Link> */}
                        <Link className="text-white ms-5" to="/login">Logout</Link>
                    </>
                    <Link className="text-white ms-5" to="/login">
                        Login
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;