import realestate from "../../../images/Services_section/erp/realestate.svg";
import construction from "../../../images/Services_section/erp/construction.svg";
import garments from "../../../images/Services_section/erp/garments.svg";
import healthcare from "../../../images/Services_section/erp/healthcare.svg";
import manufacture from "../../../images/Services_section/erp/manufacture.svg";
import trademanagement from "../../../images/Services_section/erp/trademanagement.svg";
import { Button } from "react-bootstrap";

const ERP = () => (
    <div className="mb-5">
        <h1 className="service-header mb-3 font-weight-bold">ERP</h1>

        <div className="gen-services">
            <div className="service">
                <img className="mb-0" src={realestate} alt="realestate" />
                <h5 className="my-3">Real Estate & Land Management</h5>
                <Button variant="outline-light">View More</Button>
            </div>
            <div className="service">
                <img className="mb-0" src={construction} alt="construction" />
                <h5 className="my-3">Footwear & Garments</h5>
                <Button variant="outline-light">View More</Button>
            </div>
            <div className="service">
                <img className="mb-0" src={garments} alt="garments" />
                <h5 className="my-3">Construction & Project Management</h5>
                <Button variant="outline-light">View More</Button>
            </div>
            <div className="service">
                <img className="mb-0" src={healthcare} alt="healthcare" />
                <h5 className="my-3">Healthcare & Diagnostic</h5>
                <Button variant="outline-light">View More</Button>
            </div>
            <div className="service">
                <img className="mb-0" src={manufacture} alt="manufacture" />
                <h5 className="my-3">Manufacturing(Pharmacy & Othes)</h5>
                <Button variant="outline-light">View More</Button>
            </div>
            <div className="service">
                <img className="mb-0" src={trademanagement} alt="trademanagement" />
                <h5 className="my-3">Trading Management</h5>
                <Button variant="outline-light">View More</Button>
            </div>
        </div>
    </div>
);

export default ERP;
