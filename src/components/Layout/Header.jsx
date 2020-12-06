import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/ASIT_Logo.png";

const Header = () => (
    <Container>
        <div className="header d-flex justify-content-between align-items-center">
            {/*//! Logo */}
            <div class="logo-container">
                <div class="logo-container__circle">
                    <img
                        src={logo}
                        alt="Advanced Software And IT Services Ltd. Logo"
                        class="img-fluid"
                    />
                </div>
            </div>

            {/*//! Heading */}
            <div className="heading text-center">
                <h3 className="mb-0 mt-2">Advanced Software And IT Services Ltd</h3>
                <span class="text-muted">Your Professional IT Partner</span>
            </div>

            {/*//! Links */}
            <div className="nav-links d-flex justify-content-between align-items-center">
                <Link to="/">Home</Link>
                <Link to="/leadteam">Lead Team</Link>
                <Link to="/story">Story</Link>
            </div>
        </div>
    </Container>
);

export default Header;
