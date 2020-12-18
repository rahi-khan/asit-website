import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../../../components/Layout/Footer";
import Pricings from "../../../components/HomeComponents/Services/Pricings";
import healthcare from "../../../images/Services_section/erp/healthcare.svg";

const GenHealthCare = () => (
    <div style={{ background: `#141414` }}>
        <Container>
            <div className="services-view-more">
                <h1 className="title text-center mb-5 font-weight-bold">Healthcare & Diagnostic</h1>

                {/*//!  Module Desc */}
                <Row className="align-items-center">
                    <Col md={5}>
                        <Card>
                            <Card.Img src={healthcare} />
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
                                            <p className="text-dark">
                                                Front Desk Commercial Operation
                                            </p>
                                            <p className="text-dark">
                                                In-Patient, Cabin, Bed, OT Mgt.
                                            </p>
                                            <p className="text-dark">Out-Patient Management</p>
                                            <p className="text-dark">
                                                Physical Test and Laboratory Test Reporting
                                            </p>
                                        </Card.Text>
                                    </Col>

                                    <Col className="d-flex justify-content-center">
                                        <Card.Text>
                                            <p className="text-dark">
                                                HR, Payroll & KPI Management
                                            </p>
                                            <p className="text-dark">Marketing Management </p>
                                            <p className="text-dark">Accounting System</p>
                                            <p className="text-dark">
                                                Membership and Referrals Databank Mgt.
                                            </p>
                                            <p className="text-dark">MIS </p>
                                            <p className="text-dark">Control Panel </p>
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

export default GenHealthCare;
