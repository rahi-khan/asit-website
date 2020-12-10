
import { Container, Row, Col } from "react-bootstrap";
import Member from "../Member";
import managementsData from "./ManagementsData";

const Managements = () => (
    <div id="managements" className="managements text-center mt-5 mb-5">
        <h1 className="mb-4 font-weight-bold">Managements</h1>

        <Container className="cnt">
            <Row className="justify-content-md-center">
                {managementsData.map(data => (
                    <Col md={4}>
                        <Member data={data} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
);

export default Managements;
