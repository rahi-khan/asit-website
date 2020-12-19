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

        <Card.Header as="h2" className="text-dark">
            {name}
        </Card.Header>

        <Card.Body>
            <Card.Title className="font-weight-bold text-dark">{job}</Card.Title>

            <Card.Text className="text-dark">{desc}</Card.Text>
        </Card.Body>
    </Card>
);

export default Testimonial;
