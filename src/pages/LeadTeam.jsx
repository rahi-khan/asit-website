import { Container } from "react-bootstrap";
import Footer from "../components/Layout/Footer";
import Directors from "../components/LeadTeamComponents/Directors/Directors";
import Founders from "../components/LeadTeamComponents/Founders/Founders";
import Managements from "../components/LeadTeamComponents/Managements/Managements";
import SeniorExe from "../components/LeadTeamComponents/SeniorExe/SeniorExe";

const LeadTeam = () => (
    <div className="leadteam" style={{ background: `#141414` }}>
        <Container>
            <Founders />
            <Directors />
            <Managements />
            <SeniorExe />
        </Container>

        <Footer />
    </div>
);

export default LeadTeam;
