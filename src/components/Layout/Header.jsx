import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Header = () => (
    <>
        <Navbar collapseOnSelect variant="dark" expand="lg">
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
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/leadteam">Lead Team</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/story">Story</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* <div className="header d-flex justify-content-between align-items-center text-white">
            
                <div className="logo-container">
                    <img
                        src={logo}
                        alt="Advanced Software And IT Services Ltd. Logo"
                        className="img-fluid"
                        width="35%"
                    />
                </div>

                
                <div className="heading text-center">
                    <h3 className="mb-0 mt-2">Advanced Software And IT Services Ltd</h3>
                    <span className="text-muted">Your Professional IT Partner</span>
                </div>

                <div className="nav-links d-flex justify-content-between align-items-center">
                    <Link to="/">Home</Link>
                    <Link to="/leadteam">Lead Team</Link>
                    <Link to="/story">Story</Link>
                </div>
            </div> */}
    </>
);

export default Header;
