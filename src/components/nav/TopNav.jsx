import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import TopNavLink from "./TopNavLink";
import "./TopNav.css";
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
    return (
        <Navbar bg="light" expand="lg" className="top-nav">
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