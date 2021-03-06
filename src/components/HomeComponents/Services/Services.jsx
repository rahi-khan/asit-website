import ERP from "./ERP";
import General from "./General";

const Services = () => (
    <div
        id="services"
        className="services text-center d-flex flex-column justify-content-center align-items-center"
    >
        <h1 className="title mb-5 font-weight-bold display-4">Services We Provide</h1>

        <General />

        <ERP />
    </div>
);

export default Services;
