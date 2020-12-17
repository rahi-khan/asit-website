import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pricings = () => (
    <div className="pricings">
        <Row className="mb-4">
            {/*//! Starter */}
            <Col md={6}>
                <Card className="mb-3">
                    <Card.Header as="h3" className="text-dark font-weight-bold">
                        Starter
                    </Card.Header>

                    <Card.Body>
                        <Card.Text className="text-dark">
                            This version designed for all levels of customer who want to use ERP but
                            have a constraint of budget but are willing to get that boost in their
                            business. It is a toned down version of the Enterprise Version with
                            lesser interfaces and steps. It will help in performing all the generic
                            functions of your business.
                        </Card.Text>

                        <Row style={{ borderTop: "1px solid #C4C4C4", paddingTop: "1rem" }}>
                            <Col md={8}>
                                <Card.Title className="text-dark font-weight-bold">
                                    Starting from{" "}
                                    <span style={{ color: "#2FA4F1", fontSize: "2rem" }}>50k </span>
                                    BDT
                                </Card.Title>
                            </Col>

                            <Col
                                md={4}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <Button variant="outline-light">
                                    <Link to="#">Contact Now</Link>
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>

            {/*//! Standard */}
            <Col md={6}>
                <Card className="mb-3">
                    <Card.Header as="h3" className="text-dark font-weight-bold">
                        Standard
                    </Card.Header>

                    <Card.Body>
                        <Card.Text className="text-dark">
                            This version designed for all levels of customer who want to use ERP but
                            have a constraint of budget but are willing to get that boost in their
                            business. It is a toned down version of the Enterprise Version with
                            lesser interfaces and steps. It will help in performing all the generic
                            functions of your business.
                        </Card.Text>
                        <Row style={{ borderTop: "1px solid #C4C4C4", paddingTop: "1rem" }}>
                            <Col md={8}>
                                <Card.Title className="text-dark font-weight-bold">
                                    Starting from{" "}
                                    <span style={{ color: "#2FA4F1", fontSize: "2rem" }}>
                                        5 Lacs{" "}
                                    </span>
                                    BDT
                                </Card.Title>
                            </Col>

                            <Col
                                md={4}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <Button variant="outline-light">
                                    <Link to="#">Contact Now</Link>
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row>
            {/*//! Enterprise */}
            <Col md={6}>
                <Card className="mb-3">
                    <Card.Header as="h3" className="text-dark font-weight-bold">
                        Enterprise
                    </Card.Header>

                    <Card.Body>
                        <Card.Text className="text-dark">
                            A complete integrated ERP which connects all your business components
                            from end to end uniformly. Enterprise version is applicable for the
                            businesses who are currently operating at a large scale or are willing
                            to operate at a large scale. It contains everything your business needs
                            and some more!
                        </Card.Text>

                        <Row style={{ borderTop: "1px solid #C4C4C4", paddingTop: "1rem" }}>
                            <Col md={8}>
                                <Card.Title className="text-dark font-weight-bold">
                                    Starting from{" "}
                                    <span style={{ color: "#2FA4F1", fontSize: "2rem" }}>
                                        15 Lacs{" "}
                                    </span>
                                    BDT
                                </Card.Title>
                            </Col>

                            <Col
                                md={4}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <Button variant="outline-light">
                                    <Link to="#">Contact Now</Link>
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>

            {/*//! Premium */}
            <Col md={6}>
                <Card className="mb-3">
                    <Card.Header as="h3" className="text-dark font-weight-bold">
                        Premium
                    </Card.Header>

                    <Card.Body>
                        <Card.Text className="text-dark">
                            Contains all the modules and interfaces of Enterprise Version. We give
                            options to change and mould the software as per the requirement of the
                            business. Redesigned dashboards and interface in your very familiar
                            formats.
                        </Card.Text>

                        <Row style={{ borderTop: "1px solid #C4C4C4", paddingTop: "1rem" }}>
                            <Col md={8}>
                                <Card.Title className="text-dark font-weight-bold">
                                    Starting from{" "}
                                    <span style={{ color: "#2FA4F1", fontSize: "2rem" }}>
                                        30 Lacs
                                    </span>
                                    BDT
                                </Card.Title>
                            </Col>

                            <Col
                                md={4}
                                className="d-flex justify-content-center align-items-center"
                            >
                                <Button variant="outline-light">
                                    <Link to="#">Contact Now</Link>
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
);

export default Pricings;
