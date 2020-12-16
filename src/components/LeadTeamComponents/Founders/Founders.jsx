import { Container, Row, Col } from "react-bootstrap";
import Member from "../Member";
import foundersData from "./FoundersData";

const Founders = () => (
    <div id="founders" className="founders text-center mb-5" style={{ marginTop: "8rem" }}>
        <h1 className="mb-4 font-weight-bold">Founders</h1>

        <Container className="cnt">
            <Row className="justify-content-center">
                {foundersData.map(data => (
                    <Col md={5}>
                        <Member data={data} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
);

export default Founders;
