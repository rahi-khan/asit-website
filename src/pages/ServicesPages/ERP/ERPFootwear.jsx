import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../../../components/Layout/Footer";
import Pricings from "../../../components/HomeComponents/Services/Pricings";
import footwear from "../../../images/Services_section/erp/garments.svg";

const GenSchool = () => (
    <div style={{ background: `#141414` }}>
        <Container>
            <div className="services-view-more">
                <h1 className="title text-center mb-5 font-weight-bold">Footwear & Garments</h1>

                {/*//!  Module Desc */}
                <Row className="align-items-center">
                    <Col md={5}>
                        <Card>
                            <Card.Img src={footwear} />
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
                                            <p className="text-dark">Business Planning Plan</p>
                                            <p className="text-dark">Merchandising</p>
                                            <p className="text-dark">Cost & Budget</p>
                                            <p className="text-dark">Planning</p>
                                            <p className="text-dark">Import</p>
                                            <p className="text-dark">Commercial</p>
                                            <p className="text-dark">Procurement</p>
                                        </Card.Text>
                                    </Col>

                                    <Col className="d-flex justify-content-center">
                                        <Card.Text>
                                            <p className="text-dark">Materials Inventory </p>
                                            <p className="text-dark">Production </p>
                                            <p className="text-dark">Goods Inventory</p>
                                            <p className="text-dark">Export </p>
                                            <p className="text-dark">Accounts & Finance </p>
                                            <p className="text-dark">MIS </p>
                                            <p className="text-dark">HRM </p>
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

export default GenSchool;
