import erpServiceData from "./erpServiceData.js";
import Service from "../Service.jsx";
import { Row, Col } from "react-bootstrap";

const ERP = () => (
    <div className="mb-3">
        <h2 className="subtitle service-header mb-4 font-weight-bold">ERP</h2>

        <div className="gen-services">
            <Row>
                {erpServiceData.map(data => (
                    <Col md={4}>
                        <Service data={data} key={data.id} />
                    </Col>
                ))}
            </Row>
        </div>
    </div>
);

export default ERP;
