import { Container } from "react-bootstrap";
import Client from "../components/HomeComponents/Clients/Client";
import moreClientsData from "../components/HomeComponents/Clients/moreClientsData";
import Footer from "../components/Layout/Footer";

const MoreClients = () => (
    <div style={{ background: `#141414` }}>
        <Container>
            <div
                id="more-clients"
                className="more-clients text-center d-flex flex-column justify-content-center align-items-center"
            >
                <h1 className="title mb-5 font-weight-bold display-4">More of Our Clients</h1>

                <div className="clients-list mb-4">
                    <div className="row justify-content-center">
                        {moreClientsData.map((data, idx) => (
                            <div className="col-md-3 mb-4">
                                <Client data={data} key={idx} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>

        <Footer />
    </div>
);

export default MoreClients;
