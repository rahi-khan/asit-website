import { Container } from "react-bootstrap";
import CustomScroller from "react-custom-scroller";
import Footer from "../components/Layout/Wrapper/Footer";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ElementsData from "../components/StoryComponents/ElementsData";
import Element from "../components/StoryComponents/Element";

const Story = () => (
    <CustomScroller>
        <div className="story">
            <Container>
                <h1 className="story-title my-5 font-weight-bold text-center display-4">Our Journey So Far</h1>

                <VerticalTimeline>
                    {/*//! Elements  */}
                    {ElementsData.map((data, idx) => (
                        <Element data={data} key={idx} />
                    ))}

                    {/*//? Final Element */}
                    <VerticalTimelineElement
                        iconStyle={{ background: "rgb(255, 0, 0)", color: "#fff" }}
                    />
                </VerticalTimeline>
            </Container>

            <Footer />
        </div>
    </CustomScroller>
);

export default Story;
