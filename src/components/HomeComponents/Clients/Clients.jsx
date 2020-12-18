import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Client from "./Client";
import clientsData from "./clientsData";

const Clients = () => (
    <div
        id="clients"
        className="clients text-center d-flex flex-column justify-content-center align-items-center"
    >
        <h1 className="title mb-5 font-weight-bold display-4">Our Clients</h1>

        <div className="clients-list mb-4">
            <div className="row justify-content-center">
                {clientsData.map(data => (
                    <div className="col-md-3 mb-4">
                        <Client data={data} key={data.id} />
                    </div>
                ))}
            </div>
        </div>

        <Link to="/moreclients">
            <Button variant="outline-light">View More </Button>
        </Link>
    </div>
)
export default Clients;
