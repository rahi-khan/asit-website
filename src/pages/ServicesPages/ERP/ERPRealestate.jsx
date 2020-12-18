import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../../../components/Layout/Footer";
import Pricings from "../../../components/HomeComponents/Services/Pricings";
import realestate from "../../../images/Services_section/erp/realestate.svg";

const GenAccounting = () => (
    <div style={{ background: `#141414` }}>
        <Container>
            <div className="services-view-more">
                <h1 className="title text-center mb-5 font-weight-bold">
                    Real Estate & Land Management
                </h1>

                {/*//!  Module Desc */}
                <Row className="align-items-center">
                    <Col md={5}>
                        <Card>
                            <Card.Img src={realestate} />
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
                                            <p className="text-dark">Annual Business Plan</p>
                                            <p className="text-dark">Land Feasibility</p>
                                            <p className="text-dark">Budgetary Control</p>
                                            <p className="text-dark">Project Planning</p>
                                            <p className="text-dark">Project Implementation</p>
                                            <p className="text-dark">Central Warehouse</p>
                                            <p className="text-dark">Inventory Control</p>
                                            <p className="text-dark">Procurement</p>
                                        </Card.Text>
                                    </Col>

                                    <Col className="d-flex justify-content-center">
                                        <Card.Text>
                                            <p className="text-dark">CRM </p>
                                            <p className="text-dark">Sales </p>
                                            <p className="text-dark">
                                                Creditr Realization / Recovery
                                            </p>
                                            <p className="text-dark">Customer Care </p>
                                            <p className="text-dark">Fixed Assets Management </p>
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

export default GenAccounting;
