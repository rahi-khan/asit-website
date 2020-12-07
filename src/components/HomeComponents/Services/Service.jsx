import { Button } from "react-bootstrap";

const Service = ({ data: { imgSrc, type, title } }) => (
    <div className="service">
        <img className="mb-0" src={imgSrc} alt={type} />
        <h5 className="my-3">{title}</h5>
        <Button variant="outline-light">View More</Button>
    </div>
);

export default Service;
