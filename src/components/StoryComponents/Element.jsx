import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Element = ({ data: { date, title, subtitle, img } }) => (
    <VerticalTimelineElement
        className="element"
        date={date}
        dateClassName="stupid-date"
        contentStyle={{ background: "rgb(233, 237, 244)" }}
        iconStyle={{ background: "rgb(47, 164, 241)", color: "#fff" }}
    >
        <div className="content text-center">
            {img ? <img src={img} alt={title} className="stupid-img mb-4" /> : <></>}

            <div className="text-center">
                <h4 className="vertical-timeline-element-title">{title}</h4>
                <h5 className="text-muted mb-0">{subtitle}</h5>
            </div>
        </div>
    </VerticalTimelineElement>
);

export default Element;
