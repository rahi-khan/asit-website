import { Button, Form } from "react-bootstrap";

const ContactForm = () => {
    const handleSubmit = e => e.preventDefault();

    return (
        <Form onSubmit={handleSubmit}>
            {/*//! Name */}
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter Name" />
            </Form.Group>

            {/*//! Email */}
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            {/*//! Phone */}
            <Form.Group controlId="formBasicName">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Enter Phone" />
            </Form.Group>

            {/*//! Message */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your Message" />
            </Form.Group>

            {/*//! Submit */}
            <Button variant="outline-light" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ContactForm;
