import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ data: { imgSrc, type, title } }) => (
    <div className="service mb-4">
        <img className="mb-0" src={imgSrc} alt={type} />
        <h5 className="my-3">{title}</h5>
        <Button variant="outline-light">
            <Link to="/servicesviewmore"> View More</Link>
        </Button>
    </div>
);

export default Service;
