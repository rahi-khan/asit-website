import { Card } from "react-bootstrap";

const Member = ({ data: { name, imgSrc, jobTitle, dpt } }) => (
    <Card
        bg="dark"
        text="white"
        className="card-container d-flex flex-column justify-content-center align-items-center mb-5"
    >
        <Card.Img variant="top" src={imgSrc} className="pt-4"/>

        <Card.Body className="text-center">
            <Card.Header as="h4" className="font-weight-bold">
                {name}
            </Card.Header>

            <br />

            <Card.Text>
                <span className="jobTitle">{jobTitle}</span>
            </Card.Text>
            <Card.Text>
                <span className="dpt font-weight-bold">{dpt}</span>
            </Card.Text>

            <Card.Link href="#">
                <i class="fab fa-facebook-square"></i>
            </Card.Link>
            <Card.Link href="#">
                <i class="fab fa-linkedin"></i>
            </Card.Link>
        </Card.Body>
    </Card>
);

export default Member;
