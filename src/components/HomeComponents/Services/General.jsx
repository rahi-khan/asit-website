import accounting from "../../../images/Services_section/general/accounting.svg";
import trading from "../../../images/Services_section/general/trading.svg";
import healthcare from "../../../images/Services_section/general/healthcare.svg";
import travel from "../../../images/Services_section/general/travel.svg";
import shop from "../../../images/Services_section/general/shop.svg";
import school from "../../../images/Services_section/general/school.svg";
import { Button } from "react-bootstrap";

const General = () => (
    <div className="mb-5">
        <h2 className="service-header mb-4 font-weight-bold">General</h2>

        <div className="gen-services">
            <div className="service">
                <img className="mb-0" src={accounting} alt="accounting" />
                <h5 className="my-3">Easy Accounting</h5>
                <Button variant="outline-light">View More</Button>
            </div>
            <div className="service">
                <img className="mb-0" src={trading} alt="trading" />
                <h5 className="my-3">Easy Trading</h5>
                <Button variant="outline-light">View More</Button>
            </div>
            <div className="service">
                <img className="mb-0" src={healthcare} alt="healthcare" />
                <h5 className="my-3">Easy Healthcare</h5>
                <Button variant="outline-light">View More</Button>
            </div>
            <div className="service">
                <img className="mb-0" src={travel} alt="travel" />
                <h5 className="my-3">Travel Agency</h5>
                <Button variant="outline-light">View More</Button>
            </div>
            <div className="service">
                <img className="mb-0" src={shop} alt="shop" />
                <h5 className="my-3">Easy Shop & POS</h5>
                <Button variant="outline-light">View More</Button>
            </div>
            <div className="service">
                <img className="mb-0" src={school} alt="school" />
                <h5 className="my-3">Easy Schooling</h5>
                <Button variant="outline-light">View More</Button>
            </div>
        </div>
    </div>
);

export default General;
