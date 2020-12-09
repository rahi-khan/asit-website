import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => (
    <div className="notFound d-flex flex-column justify-content-center align-items-center">
        <div className="errorHeading">404 ERROR</div>
        <div className="oops">OOPS!</div>
        <Link to="/">
            <Button variant="outline-primary" className="backToHomeBtn">
                Go Back Home
            </Button>
        </Link>
        
    </div>
);


export default NotFound;
