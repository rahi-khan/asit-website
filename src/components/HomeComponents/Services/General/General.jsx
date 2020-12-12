import genServiceData from "./genServiceData";
import Service from "../Service.jsx";
import { Row, Col } from "react-bootstrap";

const General = () => (
    <div className="mb-3">
        <h2 className="service-header mb-4 font-weight-bold">General</h2>

        <div className="gen-services">
            <Row>
                {genServiceData.map(data => (
                    <Col md={4}>
                        <Service data={data} key={data.id} />
                    </Col>
                ))}
            </Row>
        </div>
    </div>
);

export default General;
