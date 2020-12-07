import { Container } from "react-bootstrap";

const Footer = () => (
    <Container>
        <div className="footer d-flex justify-content-between align-items-center">
            <div className="copyright text-white">
                Copyright &copy;
                {new Date().getFullYear()} ASIT UI/UX Team Development
            </div>

            <div className="social-icons d-flex justify-content-between">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="mr-2">
                    <i class="fab fa-facebook-square"></i>
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="mr-2">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    </Container>
);

export default Footer;