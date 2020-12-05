import { Container, Navbar, Nav } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navvy = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand className="d-flex justify-content-between align-items-center">
                <FaReact className="icon font-weight-bold" />
                <span className="brand-name font-weight-bold ml-2">
                    React Template Pro
                </span>
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Link to="/" className="mr-3 ml-4 text-decoration-none">
                    Home
                </Link>
                <Link to="/about" className="mr-3 text-decoration-none">
                    About
                </Link>
                <Link to="/contacts" className="mr-3 text-decoration-none">
                    Contacts
                </Link>
            </Nav>
        </Container>
    </Navbar>
);

export default Navvy;
