import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import accounting from "../../../images/Services_section/general/accounting.svg";
import trading from "../../../images/Services_section/general/trading.svg";
import healthcare from "../../../images/Services_section/general/healthcare.svg";
import travel from "../../../images/Services_section/general/travel.svg";
import shop from "../../../images/Services_section/general/shop.svg";
import school from "../../../images/Services_section/general/school.svg";

const General = () => (
    <div className="mb-3">
        <h2 className="subtitle service-header mb-4 font-weight-bold">General</h2>

        <div className="gen-services">
            <Row>
                {/*//! */}
                <Col md={4}>
                    <div className="service mb-4">
                        <img className="mb-0" src={accounting} alt="accounting" />
                        <h5 className="my-3">Easy Accounting</h5>

                        <Link to="/services/general/accounting" target="_blank">
                            <Button variant="outline-light"> View More </Button>
                        </Link>
                    </div>
                </Col>

                {/*//! */}
                <Col md={4}>
                    <div className="service mb-4">
                        <img className="mb-0" src={trading} alt="trading" />
                        <h5 className="my-3">Easy Trading</h5>

                        <Link to="/services/general/trading" target="_blank">
                            <Button variant="outline-light"> View More </Button>
                        </Link>
                    </div>
                </Col>

                {/*//! */}
                <Col md={4}>
                    <div className="service mb-4">
                        <img className="mb-0" src={healthcare} alt="healthcare" />
                        <h5 className="my-3">Easy Healthcare</h5>

                        <Link to="/services/general/healthcare" target="_blank">
                            <Button variant="outline-light"> View More </Button>
                        </Link>
                    </div>
                </Col>

                {/*//! */}
                <Col md={4}>
                    <div className="service mb-4">
                        <img className="mb-0" src={travel} alt="travel" />
                        <h5 className="my-3">Travel Agency</h5>

                        <Link to="/services/general/travel" target="_blank">
                            <Button variant="outline-light">View More </Button>
                        </Link>
                    </div>
                </Col>

                {/*//! */}
                <Col md={4}>
                    <div className="service mb-4">
                        <img className="mb-0" src={shop} alt="shop" />
                        <h5 className="my-3">Easy Shop & POS</h5>

                        <Link to="/services/general/shop" target="_blank">
                            <Button variant="outline-light"> View More </Button>
                        </Link>
                    </div>
                </Col>

                {/*//! */}
                <Col md={4}>
                    <div className="service mb-4">
                        <img className="mb-0" src={school} alt="school" />
                        <h5 className="my-3">Easy Schooling</h5>

                        <Link to="/services/general/school" target="_blank">
                            <Button variant="outline-light">View More </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
);

export default General;
