import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Element = ({ data: { date, title, subtitle } }) => (
    <VerticalTimelineElement
        className="element"
        date={date}
        iconStyle={{ background: "rgb(47, 164, 241)", color: "#fff" }}
    >
        <div className="text-center">
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h5 className="text-muted">{subtitle}</h5>
        </div>
    </VerticalTimelineElement>
);

export default Element;
