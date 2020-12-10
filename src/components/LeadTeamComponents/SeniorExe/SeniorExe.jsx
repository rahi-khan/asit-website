import { Container, Row, Col } from "react-bootstrap";
import Member from "../Member";
import seniorExeData from "./SeniorExeData";

const SeniorExe = () => (
    <div id="seniorExe" className="seniorExe text-center mt-5 mb-5">
        <h1 className="mb-4 font-weight-bold">Senior Executives</h1>

        <Container className="cnt">
            <Row className="justify-content-md-center">
                {seniorExeData.map(data => (
                    <Col md="auto">
                        <Member data={data} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
);

export default SeniorExe;
