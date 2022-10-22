import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import TopNavLink from "./TopNavLink";
import "./TopNav.css";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useResizeDetector } from 'react-resize-detector';
import { useCallback } from "react";
// import NavDropdown from "react-bootstrap/NavDropdown";

// const TopNav = () => {
//     const pages = ["books", "favorites", "about"];

//     return (
//         <header>
//             <nav>
//                 <ul>
//                     {pages.map((p) => (
//                         <li key={p}>
//                             <NavLink to={`/${p}`}>{p}</NavLink>
//                         </li>))}
//                 </ul>
//             </nav>
//         </header>
//     )
// }

const TopNav = () => {
    // const onResize = useCallback(() => {
    //     console.log(height)
    //     document.querySelector(':root').style.setProperty('--nav-height', `${height}px`);
    // }, []);

    const { height, ref } = useResizeDetector();
    useEffect(() => {
        console.log(height);
        document.querySelector(':root').style.setProperty('--nav-height', `calc(${height}px + var(--nav-padding) * 2)`);
    }, [height]);
    // const ref = useRef(null);
    // const [height, setHeight] = useState(0);
    // const [isExpanded, setIsExpanded] = useState(false);

    // document.querySelector(':root').style.setProperty('--nav-height', `${height}px`);

    // useEffect(() => {
    //     let h = ref.current.clientHeight;
    //     document.querySelector(':root').style.setProperty('--nav-height', `${h}px`);
    //     // letsDoThis();
    //     console.log('rendered')
    //     console.log(h)
    // });

    // useEffect(() => {
    //     // setHeight((_) => ref.current.clientHeight);
    //     console.log(ref.current.clientHeight)
    // });

    const letsDoThis = () => {
        // const h = ref.current.clientHeight;
        // console.log(h);
        // console.log(height);
        // setHeight(Math.random());
        // console.log(height);
        // let h = ref.current.clientHeight;
        // document.querySelector(':root').style.setProperty('--nav-height', `${height}px`);

        // console.log(h);
    };
    // window.addEventListener('resize', letsDoThis);

    // const height = document.getElementById("basic-navbar-nav").offsetHeight;
    return (
        <Navbar ref={ref} bg="light" expand="lg" className="top-nav">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    <span className="text-muted">Book App</span>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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

export default TopNav