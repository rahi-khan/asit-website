import { Container } from "react-bootstrap";

const Footer = () => (
    <div className="footer w-100 d-flex align-content-center">
        <Container className="d-flex justify-content-between align-items-center">
            <div className="copyright text-white">
                <h5 className="mb-0">ASIT</h5>
                
                <span className="text-muted">
                    Copyright &copy;
                    {new Date().getFullYear()} All rights reserved
                </span>
            </div>

            <div className="social-icons d-flex justify-content-between">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="mr-2">
                    <i className="fab fa-facebook-square"></i>
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="mr-2">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </Container>
    </div>
);

export default Footer;
