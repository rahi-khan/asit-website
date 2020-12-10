import { Container } from "react-bootstrap";
import CustomScroller from "react-custom-scroller";
import Footer from "../components/Layout/Wrapper/Footer";

const Story = () => {
    return (
        <CustomScroller>
            <div className="story">
                <Container>Story </Container>

                <Footer />
            </div>
        </CustomScroller>
    );
};

export default Story;
