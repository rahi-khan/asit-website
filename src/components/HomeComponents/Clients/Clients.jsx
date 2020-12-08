import Client from "./Client";
import clientsData from "./clientsData";

const Clients = () => (
    <div
        id="clients"
        className="clients text-center d-flex flex-column justify-content-center align-items-center"
    >
        <h1 className="mb-5 font-weight-bold display-4">Our Clients</h1>

        <div className="clients-list">
            {clientsData.map(data => (
                <Client data={data} key={data.id} />
            ))}
        </div>
    </div>
);
export default Clients;
