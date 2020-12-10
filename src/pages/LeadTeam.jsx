import { Container } from "react-bootstrap";
import CustomScroller from "react-custom-scroller";
import Footer from "../components/Layout/Wrapper/Footer";

const LeadTeam = () => (
    <CustomScroller>
        <div className="leadteam">
            <Container>LeadTeam </Container>
            
            <Footer />
        </div>
    </CustomScroller>
);

export default LeadTeam;
