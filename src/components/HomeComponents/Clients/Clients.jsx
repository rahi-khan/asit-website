import Client from "./Client";
import clientsData1 from "./clientsData1";
import clientsData2 from "./clientsData2";
import clientsData3 from "./clientsData3";
import { Row, Col } from "react-bootstrap";

const Clients = () => (
    <div
        id="clients"
        className="clients text-center d-flex flex-column justify-content-center align-items-center"
    >
        <h1 className="mb-5 font-weight-bold display-4">Our Clients</h1>

        <div className="clients-list d-flex flex-column align-items-start">
            <Row
                style={{ border: "2px solid green", width: "100%" }}
                className="d-flex justify-content-between mb-4"
            >
                {clientsData1.map(data => (
                    <Col md={2}>
                        <Client data={data} key={data.id} />
                    </Col>
                ))}
            </Row>

            <Row
                style={{ border: "2px solid green", width: "100%" }}
                className="d-flex justify-content-between mb-4"
            >
                {clientsData2.map(data => (
                    <Col md={2}>
                        <Client data={data} key={data.id} />
                    </Col>
                ))}
            </Row>

            <Row
                style={{ border: "2px solid green", width: "100%" }}
                className="d-flex justify-content-between mb-4"
            >
                {clientsData3.map(data => (
                    <Col md={2}>
                        <Client data={data} key={data.id} />
                    </Col>
                ))}
            </Row>
        </div>
    </div>
);
export default Clients;
