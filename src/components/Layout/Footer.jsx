import { Container } from "react-bootstrap";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => (
    <Container>
        <div className="footer d-flex justify-content-between align-items-center">
            <div className="copyright">
                Copyright &copy;
                {new Date().getFullYear()} ASIT UI/UX Team Development
            </div>

            <div className="social-icons d-flex justify-content-between">
                <FaFacebookSquare size={30} className="mr-2" />
                <FaLinkedin size={30} />
            </div>
        </div>
    </Container>
);

export default Footer;
