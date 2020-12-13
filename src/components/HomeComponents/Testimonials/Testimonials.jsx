import { Row, Col } from "react-bootstrap";
import Testimonial from "./Testimonial";
import testimonialData from "./testimonialData";

const Testimonials = () => (
    <div
        id="testimonials"
        className="testimonials text-center d-flex flex-column justify-content-center align-items-center"
    >
        <h1 className="mb-5 font-weight-bold display-4">Reviews</h1>

        <div className="testimonials-list mt-5">
            <Row>
                {testimonialData.map(data => (
                    <Col md={4} className="mb-5">
                        <Testimonial data={data} />
                    </Col>
                ))}
            </Row>
        </div>
    </div>
);

export default Testimonials;
