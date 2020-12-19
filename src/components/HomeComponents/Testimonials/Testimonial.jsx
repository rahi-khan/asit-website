import { Card } from "react-bootstrap";

const Testimonial = ({ data: { name, job, imgSrc, desc } }) => (
    <Card className="text-center d-flex justify-content-center">
        <div className="d-flex justify-content-center">
            <Card.Img
                variant="top"
                src={imgSrc}
                style={{
                    width: "10rem",
                    height: "10rem",
                    borderRadius: "50%",
                }}
            />
        </div>

        <Card.Header as="h3" className="font-weight-bold" style={{ color: "#2fa4f1" }}>
            {name}
        </Card.Header>

        <Card.Body>
            <Card.Title className="font-weight-bold text-muted">{job}</Card.Title>

            <Card.Text>
                <blockquote className="text-dark">{desc}</blockquote>
            </Card.Text>
        </Card.Body>
    </Card>
);

export default Testimonial;
