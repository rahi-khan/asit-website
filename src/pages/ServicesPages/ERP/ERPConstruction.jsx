import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../../../components/Layout/Footer";
import Pricings from "../../../components/HomeComponents/Services/Pricings";
import construction from "../../../images/Services_section/erp/construction.svg";

const GenShop = () => (
    <div style={{ background: `#141414` }}>
        <Container>
            <div className="services-view-more">
                <h1 className="title text-center mb-5 font-weight-bold">
                    Construction & Project Management
                </h1>

                {/*//!  Module Desc */}
                <Row className="align-items-center">
                    <Col md={5}>
                        <Card>
                            <Card.Img src={construction} />
                        </Card>
                    </Col>

                    <Col md={7}>
                        <Card>
                            <Card.Header as="h3" className="text-dark text-center font-weight-bold">
                                Modules
                            </Card.Header>

                            <Card.Body>
                                <Row>
                                    <Col className="d-flex justify-content-center">
                                        <Card.Text>
                                            <p className="text-dark">Tender Process Plan</p>
                                            <p className="text-dark">Budgetary Control</p>
                                            <p className="text-dark">Project Planning</p>
                                            <p className="text-dark">Project Implementation</p>
                                            <p className="text-dark">Inventory Control</p>
                                        </Card.Text>
                                    </Col>

                                    <Col className="d-flex justify-content-center">
                                        <Card.Text>
                                            <p className="text-dark">Procurement </p>
                                            <p className="text-dark">Bill </p>
                                            <p className="text-dark">Control Panel</p>
                                            <p className="text-dark">Accounts And FInance </p>
                                            <p className="text-dark">MIS </p>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/*//! Pricings */}
                <Pricings />
            </div>
        </Container>

        <Footer />
    </div>
);

export default GenShop;
