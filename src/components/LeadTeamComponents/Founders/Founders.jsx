import { Container, Row, Col } from "react-bootstrap";
import Member from "../Member";
import foundersData from "./FoundersData";

const Founders = () => (
    <div id="founders" className="founders text-center mt-5 mb-5">
        <h1 className="mb-4 font-weight-bold">Founders</h1>

        <Container className="cnt">
            <Row>
                {foundersData.map(data => (
                    <Col md={6}>
                        <Member data={data} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
);

export default Founders;
