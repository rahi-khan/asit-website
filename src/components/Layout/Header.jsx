import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Header = () => (
    <Navbar collapseOnSelect variant="dark" expand="lg" fixed="top">
        <Container>
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

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-center">
                    <Nav.Link as={Link} to="/" href="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/leadteam" href="/leadteam">
                        Lead Team
                    </Nav.Link>
                    <Nav.Link as={Link} to="/story" href="/story" classname="mb-0">
                        Story
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;
