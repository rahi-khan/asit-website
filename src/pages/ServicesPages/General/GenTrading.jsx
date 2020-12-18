import { Container, Row, Col, Card } from "react-bootstrap";
import Pricings from "../../../components/HomeComponents/Services/Pricings";
import Footer from "../../../components/Layout/Footer";
import trading from "../../../images/Services_section/general/trading.svg";

const GenTrading = () => (
    <div style={{ background: `#141414` }}>
        <Container>
            <div className="services-view-more">
                <h1 className="title text-center mb-5 font-weight-bold">Easy Trading</h1>

                {/*//!  Module Desc */}
                <Row className="align-items-center">
                    <Col className="d-flex justify-content-center">
                        <Card style={{ width: "20rem" }}>
                            <Card.Img src={trading} />
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
