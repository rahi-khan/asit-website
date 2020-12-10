import { Container } from "react-bootstrap";
import CustomScroller from "react-custom-scroller";
import Footer from "../components/Layout/Wrapper/Footer";
import Directors from "../components/LeadTeamComponents/Directors/Directors";
import Founders from "../components/LeadTeamComponents/Founders/Founders";
import Managements from "../components/LeadTeamComponents/Managements/Managements";
import SeniorExe from "../components/LeadTeamComponents/SeniorExe/SeniorExe";

const LeadTeam = () => (
    <CustomScroller>
        <div className="leadteam">
            <Container>
                <Founders />
                <Directors />
                <Managements />
                <SeniorExe />
            </Container>

            <Footer />
        </div>
    </CustomScroller>
);

export default LeadTeam;
