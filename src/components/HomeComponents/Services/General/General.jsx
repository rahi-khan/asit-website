import genServiceData from "./genServiceData";
import Service from "../Service.jsx";

const General = () => (
    <div className="mb-5">
        <h2 className="service-header mb-4 font-weight-bold">General</h2>

        <div className="gen-services">
            {genServiceData.map(data => (
                <Service data={data} key={data.id} />
            ))}
        </div>
    </div>
);

export default General;
