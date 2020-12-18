import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../../../components/Layout/Footer";
import Pricings from "../../../components/HomeComponents/Services/Pricings";
import trademanagement from "../../../images/Services_section/erp/trademanagement.svg";

const GenTrading = () => (
    <div style={{ background: `#141414` }}>
        <Container>
            <div className="services-view-more">
                <h1 className="title text-center mb-5 font-weight-bold">Trading Management</h1>

                {/*//!  Module Desc */}
                <Row className="align-items-center">
                    <Col md={5}>
                        <Card>
                            <Card.Img src={trademanagement} />
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
                                            <p className="text-dark">Business Planning </p>
                                            <p className="text-dark">Foreign Procurment</p>
                                            <p className="text-dark">Local Procurements</p>
                                            <p className="text-dark">General Accounts</p>
                                            <p className="text-dark">Finished Goods Inventory</p>
                                        </Card.Text>
                                    </Col>

                                    <Col className="d-flex justify-content-center">
                                        <Card.Text>
                                            <p className="text-dark">Service Management </p>
                                            <p className="text-dark">Sales Module </p>
                                            <p className="text-dark">Fixed Assets</p>
                                            <p className="text-dark">MIS </p>
                                            <p className="text-dark">HRM </p>
                                            <p className="text-dark">KPI </p>
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

export default GenTrading;
