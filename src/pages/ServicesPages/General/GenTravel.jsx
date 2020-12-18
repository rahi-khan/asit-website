import { Container, Row, Col, Card } from "react-bootstrap";
import Pricings from "../../../components/HomeComponents/Services/Pricings";
import Footer from "../../../components/Layout/Footer";
import travel from "../../../images/Services_section/general/travel.svg";

const GenTravel = () => (
    <div style={{ background: `#141414` }}>
        <Container>
            <div className="services-view-more">
                <h1 className="title text-center mb-5 font-weight-bold">Travel Agency</h1>

                {/*//!  Module Desc */}
                <Row className="align-items-center">
                    <Col className="d-flex justify-content-center">
                        <Card style={{ width: "20rem" }}>
                            <Card.Img src={travel} />
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
