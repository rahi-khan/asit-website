import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => (
    <div className="spinner d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
);

export default LoadingSpinner;
