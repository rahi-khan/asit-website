import { Container, Row } from "react-bootstrap";
import Pricings from "../components/HomeComponents/Services/Pricings";
import Footer from "../components/Layout/Footer";

const ServicesViewMore = () => (
    <div style={{ background: `#141414` }}>
        <Container>
            <div className="services-view-more">
                {/*//! Module Desc */}
                <Row></Row>

                {/*//! Pricings */}
                <Pricings />
            </div>
        </Container>

        <Footer />
    </div>
);

export default ServicesViewMore;
