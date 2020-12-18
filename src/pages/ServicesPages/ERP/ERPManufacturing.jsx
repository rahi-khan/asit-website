import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../../../components/Layout/Footer";
import Pricings from "../../../components/HomeComponents/Services/Pricings";
import manufacture from "../../../images/Services_section/erp/manufacture.svg";

const GenTravel = () => (
    <div style={{ background: `#141414` }}>
        <Container>
            <div className="services-view-more">
                <h1 className="title text-center mb-5 font-weight-bold">
                    Manufacturing(Pharmacy & Othes)
                </h1>

                {/*//!  Module Desc */}
                <Row className="align-items-center">
                    <Col md={5}>
                        <Card>
                            <Card.Img src={manufacture} />
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
                                            <p className="text-dark">Annual Business Plan Plan</p>
                                            <p className="text-dark">Costing</p>
                                            <p className="text-dark">Materials Inventory</p>
                                            <p className="text-dark">Import</p>
                                            <p className="text-dark">Procurement</p>
                                            <p className="text-dark">Production</p>
                                            <p className="text-dark">HRM</p>
                                        </Card.Text>
                                    </Col>

                                    <Col className="d-flex justify-content-center">
                                        <Card.Text>
                                            <p className="text-dark">Goods Inventory </p>
                                            <p className="text-dark">Distribution & Sales </p>
                                            <p className="text-dark">Fixed Assets Management</p>
                                            <p className="text-dark">Accounts And FInance </p>
                                            <p className="text-dark">Management Module </p>
                                            <p className="text-dark">Management Interface </p>
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

export default GenTravel;
