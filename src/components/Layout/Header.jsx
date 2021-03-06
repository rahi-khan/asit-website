import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Header = () => {
    const [show, setShow] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
        setScrollPos(document.body.getBoundingClientRect().top);
        setShow(document.body.getBoundingClientRect().top > scrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return (
        <Navbar
            collapseOnSelect
            variant="dark"
            expand="lg"
            fixed="top"
            className={show ? "active" : "hidden"}
        >
            <Container>
                <Nav.Link as={Link} to="/" href="/">
                    <Navbar.Brand className="d-flex align-items-center">
                        <img
                            src={logo}
                            alt="Advanced Software And IT Services Ltd. Logo"
                            className="img-fluid mr-3"
                        />

                        <div className="heading">
                            <h3 className="mb-0 mt-2">Advanced Software and IT Services LTD</h3>
                            <span className="text-muted">Your Professional IT Partner</span>
                        </div>
                    </Navbar.Brand>
                </Nav.Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-center">
                        <Nav.Link as={Link} to="/" href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/leadteam" href="/leadteam">
                            Lead Team
                        </Nav.Link>
                        <Nav.Link as={Link} to="/story" href="/story" classname="mb-0 last-link">
                            Story
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
