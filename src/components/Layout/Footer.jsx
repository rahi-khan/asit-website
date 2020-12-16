import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
    <div className="footer w-100 d-flex align-content-center">
        <Container>
            <Row className="h-100">
                <Col md={10}>
                    <div className="copyright text-white d-flex flex-column justify-content-center align-items-start h-100">
                        <h5 className="mb-0">ASIT</h5>

                        <span className="text-muted">
                            Copyright &copy;
                            {new Date().getFullYear()} All rights reserved
                        </span>
                    </div>
                </Col>

                <Col md={2}>
                    <Row className="text-center h-100 d-flex justify-content-center align-items-center">
                        <Col>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </Col>

                        <Col>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Footer;
