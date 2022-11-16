import "./TopNav.css";
import TopNavLink from "./TopNavLink";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useResizeDetector } from 'react-resize-detector';
// import NavDropdown from "react-bootstrap/NavDropdown";

const TopNav = () => {
    const { height, ref } = useResizeDetector();

    useEffect(() => {
        document.querySelector(':root').style.setProperty('--nav-height', `calc(${height}px + var(--nav-padding) * 2)`);
    }, [height]);

    return (
        <Navbar
            ref={ref}
            // bg="light"
            expand="lg"
            className="top-nav">
            <Container>
                <NavLink to="/"
                 className="navbar-brand"
                 >
                    {/* <span className="text-muted color-white"> */}
                        Book App
                        {/* </span> */}
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-ham" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <TopNavLink to="/" label="Home" />
                        <TopNavLink to="/books" label="Books" />
                        <TopNavLink to="/favorites" label="Favorites" />
                        <TopNavLink to="/about" label="About" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;