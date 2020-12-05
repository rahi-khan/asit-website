import Home from "../Home/Home";
import { Container } from "react-bootstrap";

const About = () => (
    <Container>
        <div className="about d-flex justify-content-between align-items-center">
            <Home />

            <div className="integrations d-flex flex-column">
                <h2 className="integrations-header font-weight-bold mb-4 text-white">
                    A React App Template using:
                </h2>
                <ul className="integrations-list d-flex flex-column text-left text-white">
                    <li>Bootstrap</li>
                    <li>React Bootstrap</li>
                    <li>React Router</li>
                    <li>React Icons</li>
                    <li>Axios</li>
                    <li>SASS</li>
                    <li>Nano-ID</li>
                </ul>
            </div>
        </div>
    </Container>
);

export default About;
