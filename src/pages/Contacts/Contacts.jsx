import { Container } from "react-bootstrap";
import Home from "../Home/Home";

const Contacts = () => (
    <Container>
        <div className="contacts d-flex justify-content-between align-items-center">
            <Home />
            <h1 className="contact-header text-white">Contact Page</h1>
        </div>
    </Container>
);

export default Contacts;
