import erpServiceData from "./erpServiceData.js";
import Service from "../Service.jsx";

const ERP = () => (
    <div className="mb-5">
        <h2 className="service-header mb-4 font-weight-bold">ERP</h2>

        <div className="gen-services">
            {erpServiceData.map(data => (
                <Service data={data} key={data.id} />
            ))}
        </div>
    </div>
);

export default ERP;
