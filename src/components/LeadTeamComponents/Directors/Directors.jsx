import { Container, Row, Col } from "react-bootstrap";
import Member from "../Member";
import DirectorsData from "./DirectorsData";

const Directors = () => (
    <div id="directors" className="directors text-center mt-5 mb-5">
        <h1 className="mb-4 font-weight-bold">Directors</h1>

        <Container className="cnt">
            <Row>
                {DirectorsData.map(data => (
                    <Col md={6}>
                        <Member data={data} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
);

export default Directors;
