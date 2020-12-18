import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import realestate from "../../../images/Services_section/erp/realestate.svg";
import construction from "../../../images/Services_section/erp/construction.svg";
import garments from "../../../images/Services_section/erp/garments.svg";
import healthcare from "../../../images/Services_section/erp/healthcare.svg";
import manufacture from "../../../images/Services_section/erp/manufacture.svg";
import trademanagement from "../../../images/Services_section/erp/trademanagement.svg";

const ERP = () => (
    <div className="mb-3">
        <h2 className="subtitle service-header mb-4 font-weight-bold">ERP</h2>

        <div className="erp-services">
            <Row>
                {/*//!  */}
                <Col md={4}>
                    <div className="service mb-4">
                        <img className="mb-0" src={realestate} alt="realestate" />
                        <h5 className="my-3">Real Estate & Land Management</h5>

                        <Link to="/services/erp/realestate" target="_blank">
                            <Button variant="outline-light"> View More </Button>
                        </Link>
                    </div>
                </Col>

                {/*//!  */}
                <Col md={4}>
                    <div className="service mb-4">
                        <img className="mb-0" src={construction} alt="construction" />
                        <h5 className="my-3">Construction & Project Management</h5>

                        <Link to="/services/erp/construction" target="_blank">
                            <Button variant="outline-light"> View More </Button>
                        </Link>
                    </div>
                </Col>

                {/*//!  */}
                <Col md={4}>
                    <div className="service mb-4">
                        <img className="mb-0" src={garments} alt="garments" />
                        <h5 className="my-3">Footwear & Garments</h5>

                        <Link to="/services/erp/footwear" target="_blank">
                            <Button variant="outline-light"> View More </Button>
                        </Link>
                    </div>
                </Col>

                {/*//!  */}
                <Col md={4}>
                    <div className="service mb-4">
                        <img className="mb-0" src={healthcare} alt="healthcare" />
                        <h5 className="my-3">Healthcare & Diagnostic</h5>

                        <Link to="/services/erp/healthcare" target="_blank">
                            <Button variant="outline-light"> View More </Button>
                        </Link>
                    </div>
                </Col>

                {/*//!  */}
                <Col md={4}>
                    <div className="service mb-4">
                        <img className="mb-0" src={manufacture} alt="manufacture" />
                        <h5 className="my-3">Manufacturing(Pharmacy & Othes)</h5>

                        <Link to="/services/erp/manufacturing" target="_blank">
                            <Button variant="outline-light"> View More </Button>
                        </Link>
                    </div>
                </Col>

                {/*//!  */}
                <Col md={4}>
                    <div className="service mb-4">
                        <img className="mb-0" src={trademanagement} alt="trademanagement" />
                        <h5 className="my-3">Trading Management</h5>

                        <Link to="/services/erp/trading" target="_blank">
                            <Button variant="outline-light"> View More </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
);

export default ERP;
